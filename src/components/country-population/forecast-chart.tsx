'use client';
import { PopulationFull } from '@/types';
import React from 'react';
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

type HistoricChartProps = {
    data: PopulationFull[];
};

const ForecastChart = ({ data }: HistoricChartProps) => {
    console.log(data);
    return (
        <div>
            <h4 className="my-8 text-4xl font-semibold text-white">
                India Population Forecast
            </h4>
            <div>
                {/* <LineChart
                    width={1030}
                    height={250}
                    data={data
                        .map((dt) => ({
                            ...dt,
                            yearlyChange: Number(
                                dt.yearlyChange.replaceAll(',', '')
                            ),
                        }))
                        .reverse()}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    className="px-8 mx-auto"
                >
                    <XAxis dataKey="year" tick={{ fill: '#fff' }} />
                    <YAxis tick={{ fill: '#fff' }} />
                    <Tooltip />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="yearlyChange"
                        stroke="#82ca9d"
                    />
                </LineChart> */}
            </div>
        </div>
    );
};

export default ForecastChart;
