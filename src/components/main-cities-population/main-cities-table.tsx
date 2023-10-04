'use client';
import dynamic from 'next/dynamic';
import { MainCityPopulation } from '@/types';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { ReactNode } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';

type MainCitiesProps = {
    mainCityPopulation: MainCityPopulation[];
    children: ReactNode;
};

const MainCitiesPopulation = ({
    mainCityPopulation,
    children,
}: MainCitiesProps) => {
    const MainCitiesBarChart = dynamic(
        () => import('./main-cities-bar-chart'),
        {
            ssr: false,
        }
    );

    return (
        <div className="w-full flex flex-col lg:flex-row">
            <ScrollArea className="w-full lg:w-[40%] h-[900px] p-2">
                <Table className="rounded-lg bg-slate-800 text-white">
                    <TableHeader>
                        <TableRow className="text-lg font-bold">
                            <TableHead className="text-white">ID</TableHead>
                            <TableHead className="text-white">
                                CITY NAME
                            </TableHead>
                            <TableHead className="text-white">
                                POPULATION
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {mainCityPopulation.map((city) => (
                            <TableRow
                                key={city.id}
                                className="cursor-default hover:bg-slate-600"
                            >
                                <TableCell className="font-medium border border-slate-600">
                                    {city.id}
                                </TableCell>
                                <TableCell className="border border-slate-600">
                                    {city.cityName}
                                </TableCell>
                                <TableCell className="font-bold border border-slate-600">
                                    {city.population}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </ScrollArea>
            <section className="w-full lg:w-[60%] p-4 space-y-6">
                {children}

                <div className="lg:mt-[50px]">
                    <h1 className="text-2xl font-bold text-slate-200">
                        Top 10 cities by population
                    </h1>
                    <MainCitiesBarChart
                        data={mainCityPopulation.slice(0, 10)}
                    />
                </div>
            </section>
        </div>
    );
};

export default MainCitiesPopulation;
