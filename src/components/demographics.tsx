import DemographicComponent from './demographic-component';
import { DemographicType } from '@/types';

type Props = {
    demographics: DemographicType[];
};

const Demographics = ({ demographics }: Props) => {
    return (
        <div className="w-full lg:w-[60%] grid grid-cols-1 lg:grid-cols-3 text-sm space-y-4 lg:space-x-2 lg:space-y-0">
            {demographics.map((demo) => (
                <DemographicComponent
                    key={demo.title}
                    title={demo.title}
                    body={demo.body}
                    sub="(life expectancy at birth, both genders)"
                />
            ))}
        </div>
    );
};

export default Demographics;
