'use client';
import React from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

type HistoricChartProps = {
    data: {
        year: string;
        variable: string;
    }[];
    title: string;
};

const HistoricChart = ({ data, title }: HistoricChartProps) => {
    return (
        <div>
            <h4 className="my-8 text-2xl font-semibold text-center text-slate-200">
                {title}
            </h4>
            <div>
                <LineChart
                    width={1030}
                    height={250}
                    data={data
                        .map((dt) => ({
                            ...dt,
                            variable: Number(dt.variable.replaceAll(',', '')),
                        }))
                        .reverse()}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    className="px-8 mx-auto"
                >
                    <XAxis dataKey="year" tick={{ fill: '#fff' }} />
                    <YAxis tick={{ fill: '#fff', fontSize: 10 }} />
                    <Tooltip />

                    <Line type="monotone" dataKey="variable" stroke="#82ca9d" />
                </LineChart>
            </div>
        </div>
    );
};

export default HistoricChart;
