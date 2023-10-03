'use client';

import { MainCityPopulation } from '@/types';
import { BarChart, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';

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
    return (
        <div className="p-1 mt-2">
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
                <XAxis type="number" tick={{ fill: '#fff', fontSize: 18 }} />
                <YAxis
                    type="category"
                    dataKey="cityName"
                    tick={{ fill: '#fff', fontSizeAdjust: 20, fontSize: 12 }}
                />
                <Tooltip
                    cursor={{ fillOpacity: 0.2 }}
                    content={<CustomTooltip />}
                />
                <Legend />
                <Bar dataKey="population" fill="#9794ff" barSize={30} />
            </BarChart>
        </div>
    );
};

export default MainCitiesBarChart;
