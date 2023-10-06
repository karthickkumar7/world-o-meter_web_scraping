'use client';
import React from 'react';
import {
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';

type HistoricChartProps = {
    data: {
        year: string;
        variable: string;
    }[];
    title: string;
};

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="p-6 rounded-lg bg-slate-800 text-slate-200">
                <p className="label">{`${label} : ${payload[0].value}`}</p>
            </div>
        );
    }

    return null;
};

const HistoricChart = ({ data, title }: HistoricChartProps) => {
    return (
        <div>
            <h4 className="my-8 text-lg lg:text-2xl font-semibold text-center capitalize text-slate-200">
                {title}
            </h4>
            <div>
                <ResponsiveContainer width="95%" height={250}>
                    <LineChart
                        width={1030}
                        height={250}
                        data={data
                            .map((dt) => ({
                                ...dt,
                                variable: Number(
                                    dt.variable.replaceAll(',', '')
                                ),
                            }))
                            .reverse()}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        className="lg:px-8 mx-auto"
                    >
                        <XAxis dataKey="year" tick={{ fill: '#fff' }} />
                        <YAxis tick={{ fill: '#fff', fontSize: 10 }} />
                        <Tooltip content={CustomTooltip} />

                        <Line
                            type="monotone"
                            dataKey="variable"
                            stroke="#82ca9d"
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default HistoricChart;
