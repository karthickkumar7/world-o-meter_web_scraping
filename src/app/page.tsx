import Header from '@/components/header';
import RenderPageTabs from '@/components/render-page-tabs';

type Props = {
    searchParams: {
        country: string;
    };
};

const Home = async ({ searchParams }: Props) => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/world-countries?country=${
            Object.keys(searchParams).length ? searchParams.country : 'india'
        }`
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

        if (!dataPoints.length) return <ErrorFetchingdata />;

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
                    countryName={searchParams.country}
                />
            </main>
        );
    } else {
        return <ErrorFetchingdata />;
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
