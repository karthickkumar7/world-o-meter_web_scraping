import Header from '@/components/header';
import RenderPageTabs from '@/components/render-page-tabs';
import puppeteer from 'puppeteer';
import { getWorldPopulationData } from './api/utils';
import { MainCityPopulation, PopulationFull } from '@/types';

type Props = {
    searchParams: {
        country: string;
    };
};

const getData = async (query: string) => {
    try {
        const URL = `https://www.worldometers.info/world-population/${query}-population/`;
        const browser = await puppeteer.launch({ headless: 'new' });
        const page = await browser.newPage();
        await page.goto(URL);
        const data = await getWorldPopulationData(page);
        await browser.close();
        return { data, error: null };
    } catch (err) {
        return { data: null, error: true };
    }
};

const Home = async ({ searchParams }: Props) => {
    const { data, error } = await getData(
        Object.keys(searchParams).length ? searchParams.country : 'india'
    );

    if (error) return <ErrorFetchingdata />;

    if (data) {
        const {
            dataPoints,
            demographics,
            forecastpopulation,
            historicalpopulation,
            livePopulation,
            mainCitiesPopulation,
        } = data;

        if (!dataPoints.length) return <ErrorFetchingdata />;

        return (
            <main className="w-full h-screen overflow-y-auto bg-gradient-to-b from-blue-600 to-purple-600">
                <Header
                    livePopulation={livePopulation as string}
                    demographics={demographics}
                    countryName={searchParams.country}
                />
                <RenderPageTabs
                    historicalpopulation={
                        historicalpopulation as PopulationFull[]
                    }
                    forecastpopulation={forecastpopulation as PopulationFull[]}
                    mainCitiesPopulation={
                        mainCitiesPopulation as MainCityPopulation[]
                    }
                    datapoints={dataPoints}
                    countryName={searchParams.country}
                />
            </main>
        );
    } else {
        return null;
    }
};

function ErrorFetchingdata() {
    return (
        <div className="w-screen h-screen bg-gradient-to-b from-blue-600 to-purple-600 flex items-center justify-center">
            <p className="text-2xl lg:text-4xl text-white">
                error fetching data :(
            </p>
        </div>
    );
}

export default Home;
