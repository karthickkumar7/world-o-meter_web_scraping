import { urlMapper } from '@/app/api/utils';
import MainCitiesPopulation from '@/components/main-cities-population/main-cities-table';
import Datapoints from '@/components/datapoints-component';

const MainCities = async () => {
    const res = await fetch(urlMapper.mainCitiespopulation + '?country=india', {
        next: { revalidate: 60 },
    });
    if (res.ok) {
        const { data } = await res.json();
        return (
            <div className="max-w-[1200px] mx-auto p-2 lg:p-0 mt-8">
                <MainCitiesPopulation data={data}>
                    <Datapoints />
                </MainCitiesPopulation>
            </div>
        );
    } else {
        return <h1>Error has occured</h1>;
    }
};

export default MainCities;
