import { PopulationFull } from '@/types';

import PopulationLinechartTabs from '@/components/country-population/population-linechart-tabs';
import HistoricPopulationTable from '@/components/country-population/historic-population-table';
import ForecastPopulationTable from '@/components/country-population/forcast-population-table';
import ForecastLinechartTabs from './forecast-linechart-tabs';

type Props = {
    historicalpopulation: PopulationFull[];
    forecastpopulation: PopulationFull[];
};

const countriesPopulation = ({
    historicalpopulation,
    forecastpopulation,
}: Props) => {
    return (
        <div className="max-w-[1200px] h-full mx-auto">
            <section className="mt-8 p-2 flex flex-col">
                <PopulationLinechartTabs data1={historicalpopulation} />
                <HistoricPopulationTable data1={historicalpopulation} />

                <ForecastLinechartTabs data2={forecastpopulation} />
                <ForecastPopulationTable data2={forecastpopulation} />
            </section>
        </div>
    );
};

export default countriesPopulation;
