import { NextRequest, NextResponse } from 'next/server';
import puppeteer from 'puppeteer';
import { getDataPoints } from '@/app/api/utils';

export async function GET(request: NextRequest) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const query = searchParams.get('country');

        const URL = `https://www.worldometers.info/world-population/${query}-population/`;
        const browser = await puppeteer.launch({ headless: 'new' });
        const page = await browser.newPage();
        await page.goto(URL);

        const data = await getDataPoints(page);
        await browser.close();
        return NextResponse.json(data);
    } catch (err) {
        return new NextResponse('error', { status: 400 });
    }
}
