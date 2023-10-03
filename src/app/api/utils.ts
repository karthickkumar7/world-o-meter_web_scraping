import { Page } from 'puppeteer';

const BASE_URL = 'http://localhost:3000/api';

export const urlMapper = {
    livePopulation: BASE_URL + '/live-population',
    historicalPopulation: BASE_URL + '/historical-population',
    foreCastPopulation: BASE_URL + '/forecast-population',
    mainCitiespopulation: BASE_URL + '/main-cities-population',
    dataPoints: BASE_URL + '/datapoints',
    demographics: BASE_URL + '/demographics',
};

export const getLivePopulation = async (page: Page) => {
    const population = await page.$('#maincounter-wrap > div > span');
    if (population) {
        const livePopulation = await population.evaluate(
            (el) => el.textContent
        );
        return livePopulation;
    }
};

export const getMainCitiesByPopulation = async (page: Page) => {
    const body = await page.$(
        'body > div.container > div:nth-child(3) > div > div > div:nth-child(26) > table > tbody'
    );

    if (body) {
        const data = await body.evaluate((bd) => {
            const res = [];
            const rows = bd.querySelectorAll('tr');

            for (let r = 0; r < rows.length; r++) {
                const cols = rows[r].querySelectorAll('td');

                const keys = ['id', 'cityName', 'population'];
                const data = { id: '', cityName: '', population: '' };
                for (let c = 0; c < cols.length; c++) {
                    // @ts-ignore
                    data[keys[c]] = cols[c].textContent.trim();
                }
                res.push(data);
            }

            return res;
        });

        return data;
    }
};

export const getHistoricalPopulation = async (page: Page) => {
    const body = await page.$(
        'body > div.container > div:nth-child(3) > div > div > div:nth-child(7) > table > tbody'
    );

    if (body) {
        const data = await body.evaluate((bd: any) => {
            const res = [];
            const rows = bd.querySelectorAll('tr');

            for (let r = 0; r < rows.length; r++) {
                const cols = rows[r].querySelectorAll('td');

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
                const data = {
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
                for (let c = 0; c < cols.length; c++) {
                    // @ts-ignore
                    data[keys[c]] = cols[c].textContent.trim();
                }
                res.push(data);
            }

            return res;
        });

        return data;
    }
};

export const getForecastPopulation = async (page: Page) => {
    const body = await page.$(
        'body > div.container > div:nth-child(3) > div > div > div:nth-child(16) > table > tbody'
    );

    if (body) {
        const data = await body.evaluate((bd) => {
            const res = [];
            const rows = bd.querySelectorAll('tr');

            for (let r = 0; r < rows.length; r++) {
                const cols = rows[r].querySelectorAll('td');

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
                const data = {
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
                for (let c = 0; c < cols.length; c++) {
                    // @ts-ignore
                    data[keys[c]] = cols[c].textContent.trim();
                }
                res.push(data);
            }

            return res;
        });

        return data;
    }
};

export const getDataPoints = async (page: Page) => {
    const data = await page.$$eval(
        'body > div.container > div:nth-child(3) > div > div > div.col-md-8.country-pop-description > ul > li',
        (el) => {
            const res: string[] = [];

            el.forEach((li) => {
                // @ts-ignore
                res.push(li.textContent?.trim());
            });
            return res;
        }
    );

    return data;
};

export const getDemographics = async (page: Page) => {
    const data = await page.$$eval(
        'body > div.container > div:nth-child(3) > div > div > div.row > div',
        (el) => {
            const texts = [
                'lifeExpectancy',
                'infantMortality',
                'deathsUnderAgeFive',
            ];
            const res = {
                lifeExpectancy: '',
                infantMortality: '',
                deathsUnderAgeFive: '',
            };
            el.forEach((d, i) => {
                // @ts-ignore
                const content = d
                    .querySelector('div > div.panel-body > span')
                    .textContent?.trim();

                // @ts-ignore
                res[texts[i]] = content;
            });
            return res;
        }
    );

    return data;
};
