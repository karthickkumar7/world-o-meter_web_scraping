import MainCitiesPopulation from '@/components/main-cities-population/main-cities-table';
import Datapoints from '@/components/datapoints-component';
import { MainCityPopulation } from '@/types';

type Props = {
    mainCityPopulation: MainCityPopulation[];
    datapoints: string[];
};

const MainCities = ({ mainCityPopulation, datapoints }: Props) => {
    return (
        <div className="max-w-[1200px] mx-auto p-2 lg:p-0 mt-8">
            <MainCitiesPopulation mainCityPopulation={mainCityPopulation}>
                <Datapoints datapoints={datapoints} />
            </MainCitiesPopulation>
        </div>
    );
};

export default MainCities;
