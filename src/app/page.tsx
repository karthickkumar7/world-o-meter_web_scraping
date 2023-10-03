import CountriesPopulation from '@/components/country-population/countries-population';
import Header from '@/components/header';
import MainCities from '@/components/main-cities-population/main-cities';

const Home = async () => {
    return (
        <main className="w-full h-screen overflow-y-auto bg-gradient-to-b from-blue-600 to-purple-600">
            <Header />
            {/* <MainCities /> */}
            <CountriesPopulation />
        </main>
    );
};

export default Home;
