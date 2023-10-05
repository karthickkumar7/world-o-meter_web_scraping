import Header from '@/components/header';
import RenderPageTabs from '@/components/render-page-tabs';

const Home = async ({ searchParams }: { searchParams: any }) => {
    const res = await fetch(
        `/api/world-countries?country=${
            Object.keys(searchParams).length ? searchParams.country : 'india'
        }`,
        { next: { revalidate: 3600 } }
    );

    if (res.ok) {
        const {
            livePopulation,
            mainCitiesPopulation,
            historicalpopulation,
            forecastpopulation,
            dataPoints,
            demographics,
        } = await res.json();

        return (
            <main className="w-full h-screen overflow-y-auto bg-gradient-to-b from-blue-600 to-purple-600">
                <Header
                    livePopulation={livePopulation}
                    demographics={demographics}
                    countryName={searchParams.country}
                />
                <RenderPageTabs
                    historicalpopulation={historicalpopulation}
                    forecastpopulation={forecastpopulation}
                    mainCitiesPopulation={mainCitiesPopulation}
                    datapoints={dataPoints}
                />
            </main>
        );
    } else {
        return (
            <p className="text-4xl font-semibold text-center text-slate-200 p-2 my-4">
                error fetching data :(
            </p>
        );
    }
};

export default Home;
