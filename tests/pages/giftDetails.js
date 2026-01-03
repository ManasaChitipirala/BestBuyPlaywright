import { expect } from '@playwright/test';
import { GiftCardPage } from './giftCard';

export class GiftDetails extends GiftCardPage {
    constructor(page) {
        super(page);
        this.page = page;
        //Gift card view details
        this.firstBirthdayCard = this.page.locator('.product-image > div > a').first();
        this.features = this.page.locator("h3:has-text('Features')");
        this.specifications = this.page.getByRole('button', { name: 'Specifications' });
        this.questionsAndAnswers = this.page.getByRole('button', { name: /Questions & Answers/i });
        this.closeButton = this.page.getByTestId('brix-sheet-closeButton');
        this.sheetHeader = this.page.getByTestId('brix-sheet-header');
        this.details = this.page.getByTestId('brix-sheet-backdrop');
    }
    async selectFirstBirthdayCard(testInfo) {
        await this.firstBirthdayCard.click();

        //Capturing the screenshot and attaching it to the reports
        const FirstBdyscreenshot = await this.page.screenshot();
        await testInfo.attach('First Birthday gift card Screenshot', {
            body: FirstBdyscreenshot,
            contentType: 'image/png',
        })
    }

    async viewFeatures(testInfo) {
        await this.features.click();
        await this.page.waitForTimeout(3000);

        //Capturing the screenshot and attaching it to the reports
        const Featurescreenshot = await this.page.screenshot();
        await testInfo.attach('selected features Screenshot', {
            body: Featurescreenshot,
            contentType: 'image/png',
        })
        await this.closeButton.click();
    }

    async viewSpecifications(testInfo) {
        await this.specifications.click();

        //Capturing the screenshot and attaching it to the reports
        const Specificationscreenshot = await this.page.screenshot();
        await testInfo.attach('selected specifications Screenshot', {
            body: Specificationscreenshot,
            contentType: 'image/png',
        })
        await this.details.screenshot({ path: 'test-results/GiftDetails.png' });
        await expect(this.sheetHeader).toBeVisible();
        await this.sheetHeader.click();
        await this.closeButton.click();
    }

    async viewQuestionAndAnswers(testInfo) {
        await this.questionsAndAnswers.click();

        //Capturing the screenshot and attaching it to the reports
        const QandAscreenshot = await this.page.screenshot();
        await testInfo.attach('selected first gift card Screenshot', {
            body: QandAscreenshot,
            contentType: 'image/png',
        })
        await expect(this.closeButton).toBeVisible();
        await this.closeButton.click();
    }
}
