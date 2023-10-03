import { urlMapper } from '@/app/api/utils';

const CountryPopulation = async () => {
    const res = await fetch(urlMapper.livePopulation + '?country=india', {
        next: { revalidate: 60 },
    });

    if (res.ok) {
        const { data } = await res.json();

        return (
            <div className="w-full lg:w-[40%] h-[120px] p-2 flex flex-col items-center space-y-2">
                <h4 className="text-3xl font-light text-slate-200">
                    India Population
                </h4>
                <p className="text-4xl font-extrabold tracking-widest text-slate-400">
                    {data}
                </p>
            </div>
        );
    } else {
        return (
            <div className="w-full h-[120px] p-2 flex flex-col items-center space-y-2 border-b">
                <h4 className="text-3xl font-light text-slate-200">
                    Error fetching data :(
                </h4>
            </div>
        );
    }
};

export default CountryPopulation;
