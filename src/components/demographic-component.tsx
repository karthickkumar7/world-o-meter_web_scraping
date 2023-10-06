type DemographicProps = {
    title: string;
    body: string;
    sub: string;
};

const DemographicComponent = ({ title, body, sub }: DemographicProps) => {
    return (
        <article className="grid-cols-1 p-2 rounded-lg shadow-lg bg-gradient-to-r from-transparent cursor-pointer hover:shadow-xl hover:opacity-90 space-y-2 to-blue-600 text-white">
            <div className="text-center">
                <span className="font-bold text-base uppercase text-slate-300">
                    {title}
                </span>
            </div>
            <h4 className="text-center font-extrabold tracking-widest">
                {body} <span>years</span>
            </h4>

            <p className="text-center font-light text-[12px]">{sub}</p>
        </article>
    );
};

export default DemographicComponent;
