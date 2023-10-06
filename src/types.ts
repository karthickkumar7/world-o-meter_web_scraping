export type MainCityPopulation = {
    id: string;
    cityName: string;
    population: string;
};

export type PopulationFull = {
    year: string;
    population: string;
    yearlyPerChange: string;
    yearlyChange: string;
    migrantsNet: string;
    medianAge: string;
    fertilityRate: string;
    density: string;
    urbanPopulationPer: string;
    urbanPopulation: string;
    shareOfWorldPopolation: string;
    worldPopulation: string;
    globalRank: string;
};

export type DemographicType = {
    title: string;
    body: string;
    sub: string;
};

export type CurrentTab = 'country' | 'cities';
export type UtilInitialState = {
    currentTab: CurrentTab;
    searchTerm: string;
};
