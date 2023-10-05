type Props = {
    livePopulation: string;
    countryName: string;
};

const CountryPopulation = ({ livePopulation, countryName }: Props) => {
    return (
        <div className="w-full lg:w-[40%] h-[120px] p-2 flex flex-col items-center space-y-2">
            <h4 className="text-3xl font-light capitalize text-slate-200">
                {countryName ? countryName : 'india'} Population
            </h4>
            <p className="text-4xl font-extrabold tracking-widest text-slate-400">
                {livePopulation}
            </p>
        </div>
    );
};

export default CountryPopulation;
