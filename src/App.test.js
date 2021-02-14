import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
// const faker = require('faker');
const puppeteer = require('puppeteer');


describe('Title Display Widget App', () => {
  test('Title loads correctly', async () => {
    let browser = await puppeteer.launch({
      headless: false
    });
    let page = await browser.newPage();

    page.emulate({
      viewport: {
        width: 500,
        height: 2400
      },
      userAgent: ''
    });

    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.app-title');

    const html = await page.$eval('.app-title', e => e.innerHTML);
    expect(html).toBe('Widget App');

    browser.close();
  }, 16000);
});

describe('Add Widget Click Works Fine', () => {
  test('Whether click on add widget navigates to add widget form', async () => {
    let browser = await puppeteer.launch({
      headless: false,
      devtools: true,
      slowMo: 250
    });
    let page = await browser.newPage();

    page.emulate({
      viewport: {
        width: 500,
        height: 900
      },
      userAgent: ''
    });

    await page.goto('http://localhost:3000/');

    await page.click('[data-testid="add-widget-btn"]')
    await page.waitForSelector('.language')
    const html = await page.$eval('.language', e => e.innerHTML);
    expect(html).toBe('Select Language:');
    browser.close();
  }, 9000000);
});

