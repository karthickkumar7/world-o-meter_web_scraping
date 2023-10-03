import { urlMapper } from '@/app/api/utils';

const DatapointsComponent = async () => {
    const res = await fetch(urlMapper.dataPoints + '?country=india', {
        next: { revalidate: 10000 },
    });
    if (res.ok) {
        const data: string[] = await res.json();

        return (
            <div className="px-4 mb-8">
                <ul className="space-y-4">
                    {data.map((pt) => (
                        <li key={pt} className="list-disc text-slate-200">
                            {pt}
                        </li>
                    ))}
                </ul>
            </div>
        );
    } else {
        return <p>error fetch the data :(</p>;
    }
};

export default DatapointsComponent;
