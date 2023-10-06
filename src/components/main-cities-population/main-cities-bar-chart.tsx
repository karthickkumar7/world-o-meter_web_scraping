'use client';

import { MainCityPopulation } from '@/types';
import { useEffect, useState } from 'react';
import {
    BarChart,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Bar,
    ResponsiveContainer,
} from 'recharts';

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

const MainCitiesBarChart = ({ data }: { data: MainCityPopulation[] }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth < 500);
    }, []);
    return (
        <div className="pl-8 mt-2">
            <ResponsiveContainer width="95%" height={580}>
                <BarChart
                    width={730}
                    height={580}
                    data={data.map((city) => ({
                        ...city,
                        population: Number(city.population.replaceAll(',', '')),
                    }))}
                    layout="vertical"
                    barCategoryGap={4}
                >
                    <XAxis
                        type="number"
                        tick={{ fill: '#fff', fontSize: isMobile ? 12 : 18 }}
                    />
                    <YAxis
                        type="category"
                        dataKey="cityName"
                        tick={{
                            fill: '#fff',
                            fontSizeAdjust: 20,
                            fontSize: 12,
                        }}
                    />
                    <Tooltip
                        cursor={{ fillOpacity: 0.2 }}
                        content={<CustomTooltip />}
                    />
                    <Legend />
                    <Bar dataKey="population" fill="#9794ff" barSize={30} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default MainCitiesBarChart;
