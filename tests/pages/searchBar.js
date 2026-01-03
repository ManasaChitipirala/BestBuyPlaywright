import { expect } from '@playwright/test';
import { GiftCardPage } from './giftCard';
import { ValidReader, InvalidReader } from '../Data/assertionData.json';

export class SearchFunctionality extends GiftCardPage {
    constructor(page) {
        super(page);
        this.page = page;
        //search bar
        this.search = this.page.getByTestId('SearchBarExtendable-TestID');
        this.SearchIcon = this.page.getByTestId('SearchButton-TestID');
        this.messageLocator = this.page.locator('h3').nth(0);
        this.resultLocator = this.page.locator("div[id='promo-title']");

    }

    async searchBarInvalid(invalidText) {
        await this.search.fill(invalidText);
        await this.page.waitForTimeout(5000);
        await this.SearchIcon.click();
        const rawPattern = String(InvalidReader.regexInvalid);
        const patternBody = rawPattern.replace(/^\/|\/$/g, "");
        const escapedText = invalidText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const finalPattern = patternBody.replace(".*", escapedText);
        const validRegex = new RegExp(finalPattern);
        const receivedText = await this.messageLocator.textContent();
        expect(receivedText).toMatch(validRegex);
    }

    async searchBarValid(validText) {
        await this.search.fill(validText);
        await this.page.waitForTimeout(4000);
        await this.SearchIcon.click();
        await this.page.waitForTimeout(4000);
        const validTextResult = await this.resultLocator.textContent();
        const validRegex = ValidReader.validSearchResultPattern.replace("%s", validText);
        const pattern = new RegExp(validRegex);
        expect(validTextResult).toMatch(pattern);
    }
}
