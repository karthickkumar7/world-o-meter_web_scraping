type Props = {
    datapoints: string[];
};

const DatapointsComponent = ({ datapoints }: Props) => {
    return (
        <div className="pl-8 mb-8">
            <ul className="space-y-4">
                {datapoints.map((pt) => (
                    <li key={pt} className="list-disc text-slate-200">
                        {pt}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DatapointsComponent;
