import { urlMapper } from '@/app/api/utils';
import { PopulationFull } from '@/types';

import PopulationLinechartTabs from '@/components/country-population/population-linechart-tabs';

const countriesPopulation = async () => {
    const res1 = await fetch(
        urlMapper.historicalPopulation + '?country=india',
        {
            next: { revalidate: 31536000 },
        }
    );

    const res2 = await fetch(urlMapper.foreCasePopulation + '?country=india');

    try {
        const resolved = await Promise.all([res1, res2]);
        const { data: data1 }: { data: PopulationFull[] } =
            await resolved[0].json();
        // const { data: data2 } = await resolved[1].json();

        return (
            <div className="max-w-[1200px] mx-auto">
                <section className="mt-8 p-2 flex">
                    <PopulationLinechartTabs data1={data1} />
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
