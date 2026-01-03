import { GiftCardPage } from './GiftCard';

export class AddToCart extends GiftCardPage {
    constructor(page) {
        super(page);
        this.page = page;
        // Gift card -- add to cart
        this.firstBirthdayCard = this.page.locator('.product-image > div > a').first();
        this.addToCartButton = this.page.locator('[data-test-id="add-to-cart"]').nth(0);
        this.bdyCardLink = this.page.getByText("Birthday Gift Cards");
    }

    async selectFirstBirthdayCard(testInfo) {
        await this.firstBirthdayCard.click();

        //Capturing the screenshot and attaching it to the reports
        const screenshot = await this.page.screenshot();
        await testInfo.attach('selected first gift card Screenshot', {
            body: screenshot,
            contentType: 'image/png',
        })
    }

    async goToBirthdayGiftCards(testInfo) {
        await this.bdyCardLink.click();

        //Capturing the screenshot and attaching it to the reports
        const screenshot_pic2 = await this.page.screenshot();
        await testInfo.attach('selected birthday gift card Screenshot', {
            body: screenshot_pic2,
            contentType: 'image/png',
        })
    }

    async addToCart(testInfo) {
        await this.addToCartButton.click();
        await this.page.waitForTimeout(4000);

        //Capturing the screenshot and attaching it to the reports
        const screenshot_pic1 = await this.page.screenshot();
        await testInfo.attach('Added to Cart Screenshot', {
            body: screenshot_pic1,
            contentType: 'image/png',
        })
    }
}