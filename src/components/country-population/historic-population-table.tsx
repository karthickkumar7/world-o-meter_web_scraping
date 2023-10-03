'use client';

import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { PopulationFull } from '@/types';

type HistoricalPopProps = {
    data1: PopulationFull[];
};

const HistoricPopulationTable = ({ data1 }: HistoricalPopProps) => {
    return (
        <div className="w-full my-8">
            <h4 className="my-4 text-center text-2xl font-semibold text-slate-200">
                Historicalal Population
            </h4>
            <Table className="rounded-lg p-1 bg-slate-800">
                <TableHeader>
                    <TableRow className="hover:bg-slate-600">
                        <TableHead className="font-bold text-slate-400">
                            YEAR
                        </TableHead>
                        <TableHead className="font-bold text-slate-400">
                            POPULATION
                        </TableHead>
                        <TableHead className="font-bold text-slate-400">
                            YEARLY % CHANGE
                        </TableHead>
                        <TableHead className="font-bold text-slate-400">
                            YEARLY CHANGE
                        </TableHead>
                        <TableHead className="font-bold text-slate-400">
                            MIGRANTS (net)
                        </TableHead>
                        <TableHead className="font-bold text-slate-400">
                            MEDIAN AGE
                        </TableHead>
                        <TableHead className="font-bold text-slate-400">
                            FERTILITY RATE
                        </TableHead>
                        <TableHead className="font-bold text-slate-400">
                            DENSITY (P/Km²)
                        </TableHead>
                        <TableHead className="font-bold text-slate-400">
                            URBAN POP %
                        </TableHead>
                        <TableHead className="font-bold text-slate-400">
                            URBAN POPULATION
                        </TableHead>
                        <TableHead className="font-bold text-slate-400">
                            SHARE OF WORLD POPULATION
                        </TableHead>
                        <TableHead className="font-bold text-slate-400">
                            WORLD POPULATION
                        </TableHead>
                        <TableHead className="font-bold text-slate-400">
                            GLOBAL POP RANK
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className="text-slate-200">
                    {data1.map((dt) => (
                        <TableRow key={dt.year} className="hover:bg-slate-600">
                            <TableCell className="font-semibold border border-slate-500">
                                {dt.year}
                            </TableCell>
                            <TableCell className="font-semibold border border-slate-500">
                                {dt.population}
                            </TableCell>
                            <TableCell className="font-semibold border border-slate-500">
                                {dt.yearlyPerChange}
                            </TableCell>
                            <TableCell className="border border-slate-500">
                                {dt.yearlyChange}
                            </TableCell>
                            <TableCell className="border border-slate-500">
                                {dt.migrantsNet}
                            </TableCell>
                            <TableCell className="border border-slate-500">
                                {dt.medianAge}
                            </TableCell>
                            <TableCell className="font-semibold border border-slate-500">
                                {dt.fertilityRate}
                            </TableCell>
                            <TableCell className="border border-slate-500">
                                {dt.density}
                            </TableCell>
                            <TableCell className="border border-slate-500">
                                {dt.urbanPopulationPer}
                            </TableCell>
                            <TableCell className="border border-slate-500">
                                {dt.urbanPopulation}
                            </TableCell>
                            <TableCell className="font-semibold border border-slate-500">
                                {dt.shareOfWorldPopolation}
                            </TableCell>
                            <TableCell className="border border-slate-500">
                                {dt.worldPopulation}
                            </TableCell>
                            <TableCell className="border border-slate-500">
                                {dt.globalRank}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default HistoricPopulationTable;
