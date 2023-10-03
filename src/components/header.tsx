import { Caveat } from 'next/font/google';
import CountryPopulation from './country-population';
import Demographics from './demographics';
import { Suspense } from 'react';

const caveat = Caveat({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
    adjustFontFallback: true,
});

const Header = () => {
    return (
        <header className="w-full">
            <section className="max-w-[1200px] mx-auto px-2 py-4 flex items-center justify-between text-white">
                <h1
                    className={`text-xl lg:text-4xl tracking-wide font-bold ${caveat.className}`}
                >
                    World Countries
                </h1>
                <input
                    className="rounded-lg px-4 py-3 bg-slate-800 border-none outline-none focus:outline-slate-500 focus:shadow-lg lg:focus:w-[400px] duration-300"
                    placeholder="Search countries..."
                />
            </section>

            <section className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center mt-8">
                <Suspense fallback={<p>fetchiing population...</p>}>
                    <CountryPopulation />
                </Suspense>
                <Suspense fallback={<p>fetching demographics...</p>}>
                    <Demographics />
                </Suspense>
            </section>
        </header>
    );
};

export default Header;
