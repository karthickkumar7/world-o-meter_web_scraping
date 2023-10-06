'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PopulationFull } from '@/types';
import dynamic from 'next/dynamic';

type Props = {
    data1: PopulationFull[];
    countryName: string;
};

const PopulationLinechartTabs = ({ data1, countryName }: Props) => {
    const LineChart = dynamic(
        () => import('@/components/country-population/line-chart')
    );

    const tabContentMapper = [
        {
            value: 'hist',
            title: `${countryName} Population (1955-2023)`,
            data: 'population',
        },
        {
            value: 'urb',
            title: 'Urban Population',
            data: 'urbanPopulation',
        },
        {
            value: 'ycp',
            title: 'Yearly Change Of Population',
            data: 'yearlyChange',
        },
        {
            value: 'fert',
            title: `${countryName} Fertility Rate`,
            data: 'fertilityRate',
        },
        {
            value: 'med',
            title: 'Median Age',
            data: 'medianAge',
        },
    ];

    return (
        <Tabs defaultValue="hist" className="w-full my-8">
            <TabsList className="space-x-4 bg-slate-800 flex p-2">
                <TabsTrigger value="hist">Historic Population</TabsTrigger>
                <TabsTrigger value="urb">Urban Population</TabsTrigger>
                <TabsTrigger value="ycp">
                    Yearly Change of Population
                </TabsTrigger>
                <TabsTrigger value="fert">Fertility Rate</TabsTrigger>
                <TabsTrigger value="med">Median Age</TabsTrigger>
            </TabsList>
            {tabContentMapper.map((list) => (
                <TabsContent key={list.value} value={list.value}>
                    <LineChart
                        data={data1.map((dt) => ({
                            year: dt.year,
                            // @ts-ignore
                            variable: dt[list.data],
                        }))}
                        title={list.title}
                    />
                </TabsContent>
            ))}
        </Tabs>
    );
};

export default PopulationLinechartTabs;
