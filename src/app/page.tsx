import Header from '@/components/header';
import RenderPageTabs from '@/components/render-page-tabs';
import { store } from '@/redux/store';

const Home = async () => {
    const res = await fetch(
        `http://localhost:3000/api/world-countries?country=${
            store.getState().util.searchTerm
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
