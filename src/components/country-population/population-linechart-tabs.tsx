'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PopulationFull } from '@/types';
import dynamic from 'next/dynamic';

type Props = {
    data1: PopulationFull[];
};

const PopulationLinechartTabs = ({ data1 }: Props) => {
    const LineChart = dynamic(
        () => import('@/components/country-population/line-chart')
    );
    return (
        <Tabs defaultValue="hist" className="w-full">
            <TabsList className="bg-slate-800">
                <TabsTrigger value="hist">Historic Population</TabsTrigger>
                <TabsTrigger value="urb">Urban Population</TabsTrigger>
                <TabsTrigger value="ycp">
                    Yearly Change of Population
                </TabsTrigger>
                <TabsTrigger value="fert">Fertility Rate</TabsTrigger>
                <TabsTrigger value="med">Median Age</TabsTrigger>
            </TabsList>

            <TabsContent value="hist">
                <LineChart
                    data={data1.map((dt) => ({
                        year: dt.year,
                        variable: dt.population,
                    }))}
                    title="India Population (1955-2023)"
                />
            </TabsContent>
            <TabsContent value="urb">
                <LineChart
                    data={data1.map((dt) => ({
                        year: dt.year,
                        variable: dt.urbanPopulation,
                    }))}
                    title="Urban Population"
                />
            </TabsContent>
            <TabsContent value="ycp">
                <LineChart
                    data={data1.map((dt) => ({
                        year: dt.year,
                        variable: dt.yearlyChange,
                    }))}
                    title="Yearly Change Of Population"
                />
            </TabsContent>
            <TabsContent value="fert">
                <LineChart
                    data={data1.map((dt) => ({
                        year: dt.year,
                        variable: dt.fertilityRate,
                    }))}
                    title="India Fertility Rate"
                />
            </TabsContent>
            <TabsContent value="med">
                <LineChart
                    data={data1.map((dt) => ({
                        year: dt.year,
                        variable: dt.medianAge,
                    }))}
                    title="Median Age"
                />
            </TabsContent>
        </Tabs>
    );
};

export default PopulationLinechartTabs;
