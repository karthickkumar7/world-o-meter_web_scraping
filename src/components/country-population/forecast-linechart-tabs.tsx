'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PopulationFull } from '@/types';
import dynamic from 'next/dynamic';

type Props = {
    data2: PopulationFull[];
};

const ForecastLinechartTabs = ({ data2 }: Props) => {
    const LineChart = dynamic(
        () => import('@/components/country-population/line-chart')
    );
    return (
        <Tabs defaultValue="fut" className="w-full my-8">
            <TabsList className="space-x-4 bg-slate-800 flex p-2">
                <TabsTrigger value="fut">Future Population</TabsTrigger>
                <TabsTrigger value="urb">Urban Population</TabsTrigger>
                <TabsTrigger value="ycp">
                    Yearly Change of Population
                </TabsTrigger>
                <TabsTrigger value="fert">Fertility Rate</TabsTrigger>
                <TabsTrigger value="med">Median Age</TabsTrigger>
            </TabsList>

            <TabsContent value="fut">
                <LineChart
                    data={data2
                        .map((dt) => ({
                            year: dt.year,
                            variable: dt.population,
                        }))
                        .reverse()}
                    title="India Population (1955-2023)"
                />
            </TabsContent>
            <TabsContent value="urb">
                <LineChart
                    data={data2
                        .map((dt) => ({
                            year: dt.year,
                            variable: dt.urbanPopulation,
                        }))
                        .reverse()}
                    title="Urban Population"
                />
            </TabsContent>
            <TabsContent value="ycp">
                <LineChart
                    data={data2
                        .map((dt) => ({
                            year: dt.year,
                            variable: dt.yearlyChange,
                        }))
                        .reverse()}
                    title="Yearly Change Of Population"
                />
            </TabsContent>
            <TabsContent value="fert">
                <LineChart
                    data={data2
                        .map((dt) => ({
                            year: dt.year,
                            variable: dt.fertilityRate,
                        }))
                        .reverse()}
                    title="India Fertility Rate"
                />
            </TabsContent>
            <TabsContent value="med">
                <LineChart
                    data={data2
                        .map((dt) => ({
                            year: dt.year,
                            variable: dt.medianAge,
                        }))
                        .reverse()}
                    title="Median Age"
                />
            </TabsContent>
        </Tabs>
    );
};

export default ForecastLinechartTabs;
