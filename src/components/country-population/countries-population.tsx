import { PopulationFull } from '@/types';

import PopulationLinechartTabs from '@/components/country-population/population-linechart-tabs';
import HistoricPopulationTable from '@/components/country-population/historic-population-table';
import ForecastPopulationTable from '@/components/country-population/forcast-population-table';
import ForecastLinechartTabs from './forecast-linechart-tabs';

type Props = {
    historicalpopulation: PopulationFull[];
    forecastpopulation: PopulationFull[];
    countryName: string;
};

const countriesPopulation = ({
    historicalpopulation,
    forecastpopulation,
    countryName,
}: Props) => {
    return (
        <div className="max-w-[1200px] h-full m-0 lg:mx-auto">
            <section className="mt-8 p-1 lg:p-2 flex flex-col">
                <PopulationLinechartTabs
                    data1={historicalpopulation}
                    countryName={countryName}
                />
                <HistoricPopulationTable data1={historicalpopulation} />

                <ForecastLinechartTabs
                    data2={forecastpopulation}
                    countryName={countryName}
                />
                <ForecastPopulationTable data2={forecastpopulation} />
            </section>
        </div>
    );
};

export default countriesPopulation;
