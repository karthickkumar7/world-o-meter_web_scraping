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

type MainCitiesProps = {
    data: MainCityPopulation[];
    children: ReactNode;
};

const MainCitiesPopulation = ({ data, children }: MainCitiesProps) => {
    const MainCitiesBarChart = dynamic(
        () => import('./main-cities-bar-chart'),
        {
            ssr: false,
        }
    );

    return (
        <div className="w-full flex flex-col lg:flex-row">
            <div className="w-full lg:w-[40%] p-2">
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
                        {data.map((city) => (
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
            </div>
            <section className="w-full lg:w-[60%] p-4 space-y-6">
                {children}

                <div className="lg:mt-[50px]">
                    <h1 className="text-4xl font-bold text-white">
                        Top 10 cities by population
                    </h1>
                    <MainCitiesBarChart data={data.slice(0, 10)} />
                </div>
            </section>
        </div>
    );
};

export default MainCitiesPopulation;
