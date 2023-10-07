import { DemographicType } from '@/types';
import * as cheerio from 'cheerio';

const getPopulation = async (country: string) => {
    const res = await fetch(
        `https://www.worldometers.info/world-population/${country}-population/`,
        { next: { revalidate: 2592000 } }
    );
    const html = await res.text();
    const $ = cheerio.load(html);
    const dataPoints = $(
        'body > div.container > div:nth-child(3) > div > div > div:nth-child(7) > table > tbody > tr:nth-child(1) > td:nth-child(2) > strong'
    );

    const population = dataPoints.text().trim();
    return population;
};

const getMainCities = async (country: string) => {
    const res = await fetch(
        `https://www.worldometers.info/world-population/${country}-population/`,
        { next: { revalidate: 86400 } }
    );
    const html = await res.text();

    const $ = cheerio.load(html);

    const tbody = $(
        'body > div.container > div:nth-child(3) > div > div > div:nth-child(26) > table > tbody > tr'
    );
    const data: string[][] = [];
    tbody.each((i, el) => {
        const html = $(el).html();
        const td = $(html as string);
        const temp: string[] = [];
        td.each((i, el) => {
            const dt = $(el).text().trim();
            if (dt) temp.push(dt);
        });

        data.push(temp);
    });

    const finalData = [];
    const keys = ['id', 'cityName', 'population'];

    for (let i = 0; i < data.length; i++) {
        const temp = {
            id: '',
            cityName: '',
            population: '',
        };

        for (let j = 0; j < data[i].length; j++) {
            // @ts-ignore
            temp[keys[j]] = data[i][j];
        }

        finalData.push(temp);
    }

    return finalData;
};

const getPopulationFull = async (
    selec: 'historical' | 'forecast',
    country: string
) => {
    const HISTORICAL =
        'body > div.container > div:nth-child(3) > div > div > div:nth-child(7) > table > tbody > tr';
    const FORECAST =
        'body > div.container > div:nth-child(3) > div > div > div:nth-child(16) > table > tbody > tr';

    const res = await fetch(
        `https://www.worldometers.info/world-population/${country}-population/`,
        { next: { revalidate: 86400 } }
    );
    const html = await res.text();
    const $ = cheerio.load(html);

    const tbody = $(selec === 'historical' ? HISTORICAL : FORECAST);

    const data: string[][] = [];

    tbody.each((i, el) => {
        const tds = $(el).html();
        const td = $(tds as string);

        const temp: string[] = [];
        td.each((i, el) => {
            const dt = $(el).text().trim();
            if (dt) temp.push(dt);
        });
        data.push(temp);
    });

    const keys = [
        'year',
        'population',
        'yearlyPerChange',
        'yearlyChange',
        'migrantsNet',
        'medianAge',
        'fertilityRate',
        'density',
        'urbanPopulationPer',
        'urbanPopulation',
        'shareOfWorldPopolation',
        'worldPopulation',
        'globalRank',
    ];
    const finalData = [];

    for (let i = 0; i < data.length; i++) {
        const temp = {
            year: '',
            population: '',
            yearlyPerChange: '',
            yearlyChange: '',
            migrantsNet: '',
            medianAge: '',
            fertilityRate: '',
            density: '',
            urbanPopulationPer: '',
            urbanPopulation: '',
            shareOfWorldPopolation: '',
            worldPopulation: '',
            globalRank: '',
        };
        for (let j = 0; j < data[i].length; j++) {
            // @ts-ignore
            temp[keys[j]] = data[i][j];
        }
        finalData.push(temp);
    }

    return finalData;
};

const getDataPoints = async (country: string) => {
    const res = await fetch(
        `https://www.worldometers.info/world-population/${country}-population/`,
        { next: { revalidate: 86400 } }
    );
    const html = await res.text();
    const $ = cheerio.load(html);
    const dataPoints = $(
        'body > div.container > div:nth-child(3) > div > div > div.col-md-8.country-pop-description > ul'
    );
    const data: string[] = [];
    dataPoints.each((i, el) => {
        const lis = $(el).html();
        const li = $(lis as string);

        li.each((i, el) => {
            const dataPoint = $(el).text().trim();
            if (dataPoint) data.push(dataPoint);
        });
    });

    return data;
};

const getDemographics = async (country: string) => {
    const res = await fetch(
        `https://www.worldometers.info/world-population/${country}-population/`,
        { next: { revalidate: 86400 } }
    );
    const html = await res.text();
    const $ = cheerio.load(html);
    const demographics = $(
        'body > div.container > div:nth-child(3) > div > div > div.row'
    );

    const data: DemographicType[] = [];
    $(demographics.html() as string).each((i, el) => {
        const title = $(el).find('div:nth-child(1) > span').text().trim();

        const body = $(el).find('div.panel-body > span').text().trim();
        const sub = $(el).find('div:nth-child(2) > div').text().trim();

        // @ts-ignore
        data.push({ title, body, sub });
    });

    return data;
};

export const getWorldPopulationData = async (country: string) => {
    const res1 = getPopulation(country);
    const res2 = getMainCities(country);
    const res3 = getPopulationFull('historical', country);
    const res4 = getPopulationFull('forecast', country);
    const res5 = getDataPoints(country);
    const res6 = getDemographics(country);

    const res = await Promise.all([res1, res2, res3, res4, res5, res6]);

    return {
        livePopulation: res[0],
        mainCitiesPopulation: res[1],
        historicalpopulation: res[2],
        forecastpopulation: res[3],
        dataPoints: res[4],
        demographics: res[5],
    };
};
