type DemographicProps = {
    title: string;
    data: string;
    sub: string;
};

const DemographicComponent = ({ title, data, sub }: DemographicProps) => {
    return (
        <article className="grid-cols-1 p-2 rounded-lg shadow-lg bg-gradient-to-r from-transparent cursor-pointer hover:shadow-xl hover:opacity-90 space-y-2 to-blue-600 text-white">
            <div className="text-center">
                <span className="font-bold text-base text-slate-300">
                    {title}
                </span>
            </div>
            <h4 className="text-center font-extrabold tracking-widest">
                {data} <span>years</span>
            </h4>

            <p className="text-center font-light text-[12px]">{sub}</p>
        </article>
    );
};

export default DemographicComponent;
