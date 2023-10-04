import { Caveat } from 'next/font/google';
import CountryLivePopulation from './country-live-population';
import Demographics from './demographics';
import HeaderTabs from './header-tabs';
import { DemographicType } from '@/types';
import SearchCountriesInput from './search-countries-input';

const caveat = Caveat({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
    adjustFontFallback: true,
});

type Props = {
    livePopulation: string;
    demographics: DemographicType;
};

const Header = ({ livePopulation, demographics }: Props) => {
    return (
        <header className="w-full">
            <section className="max-w-[1200px] mx-auto px-2 py-4 flex items-center justify-between text-white">
                <h1
                    className={`text-xl lg:text-4xl tracking-wide font-bold ${caveat.className}`}
                >
                    World Countries
                </h1>
                <HeaderTabs />
                <SearchCountriesInput />
            </section>

            <section className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center mt-8">
                <CountryLivePopulation livePopulation={livePopulation} />

                <Demographics demographics={demographics} />
            </section>
        </header>
    );
};

export default Header;
