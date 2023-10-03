import { urlMapper } from '@/app/api/utils';
import DemographicComponent from './demographic-component';
import { DemographicType } from '@/types';

const Demographics = async () => {
    const res = await fetch(urlMapper.demographics + '?country=india', {
        next: { revalidate: 3000 },
    });

    if (res.ok) {
        const {
            lifeExpectancy,
            infantMortality,
            deathsUnderAgeFive,
        }: DemographicType = await res.json();

        return (
            <div className="w-full lg:w-[60%] grid grid-cols-1 lg:grid-cols-3 text-sm space-y-4 lg:space-x-2 lg:space-y-0">
                <DemographicComponent
                    data={lifeExpectancy}
                    title="LIFE EXPECTANCY"
                    sub="(life expectancy at birth, both genders)"
                />
                <DemographicComponent
                    data={infantMortality}
                    title="INFANT MORTALITY"
                    sub="(infant deaths per 1,000 live births)"
                />
                <DemographicComponent
                    data={deathsUnderAgeFive}
                    title="DEATHS UNDER AGE 5"
                    sub="(per 1,000 live births)"
                />
            </div>
        );
    } else {
        return <p>Error fetching the data :(</p>;
    }
};

export default Demographics;
