'use client';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

import MainCities from './main-cities-population/main-cities';
import CountryPopulation from '@/components/country-population/countries-population';
import { MainCityPopulation, PopulationFull } from '@/types';

type Props = {
    historicalpopulation: PopulationFull[];
    forecastpopulation: PopulationFull[];
    mainCitiesPopulation: MainCityPopulation[];
    datapoints: string[];
};

const RenderPageTabs = ({
    historicalpopulation,
    forecastpopulation,
    mainCitiesPopulation,
    datapoints,
}: Props) => {
    const { currentTab } = useSelector((s: RootState) => s.util);

    if (currentTab === 'country')
        return (
            <CountryPopulation
                historicalpopulation={historicalpopulation}
                forecastpopulation={forecastpopulation}
            />
        );
    if (currentTab === 'cities')
        return (
            <MainCities
                mainCityPopulation={mainCitiesPopulation}
                datapoints={datapoints}
            />
        );

    return null;
};

export default RenderPageTabs;
