import { urlMapper } from '@/app/api/utils';
import { PopulationFull } from '@/types';

import PopulationLinechartTabs from '@/components/country-population/population-linechart-tabs';
import HistoricPopulationTable from './historic-population-table';
import dynamic from 'next/dynamic';
import ForecastPopulationTable from '@/components/country-population/forcast-population-table';
import ForecastLinechartTabs from './forecast-linechart-tabs';

const countriesPopulation = async () => {
    const LineChart = dynamic(() => import('./line-chart'));
    const res1 = await fetch(
        urlMapper.historicalPopulation + '?country=india',
        {
            next: { revalidate: 31536000 },
        }
    );

    const res2 = await fetch(urlMapper.foreCastPopulation + '?country=india');

    try {
        const resolved = await Promise.all([res1, res2]);
        const { data: data1 }: { data: PopulationFull[] } =
            await resolved[0].json();
        const { data: data2 } = await resolved[1].json();

        return (
            <div className="max-w-[1200px] h-full mx-auto">
                <section className="mt-8 p-2 flex flex-col">
                    <PopulationLinechartTabs data1={data1} />
                    <HistoricPopulationTable data1={data1} />
                    <ForecastLinechartTabs data2={data2} />
                    <ForecastPopulationTable data2={data2} />
                </section>
            </div>
        );
    } catch (err) {
        return (
            <p className="text-4xl font-semibold text-center text-slate-200 p-2 my-4">
                error fetching data :(
            </p>
        );
    }
};

export default countriesPopulation;
