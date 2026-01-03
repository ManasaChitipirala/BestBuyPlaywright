export class GiftCardPage {
    constructor(page) {
        this.page = page;

        // Header and navigation
        this.state = this.page.getByRole('link', { name: 'United States United States' });
        this.more = this.page.getByRole('button', { name: 'More', exact: true });
        this.giftCardsLink = this.page.getByLabel('utility').getByRole('link', { name: 'Gift Cards' });
        this.bdyCardLink = this.page.getByText("Birthday Gift Cards");
        this.giftTitle = this.page.locator('h1').nth(0);

    }

    async selectState(testInfo) {
        await this.state.click();

        //Capturing the screenshot and attaching it to the reports
        const Statescreenshot = await this.page.screenshot();
        await testInfo.attach('State link Screenshot', {
            body: Statescreenshot,
            contentType: 'image/png',
        })
    }

    async clickMore(testInfo) {
        await this.more.click();

        //Capturing the screenshot and attaching it to the reports
        const Morescreenshot = await this.page.screenshot();
        await testInfo.attach('More link Screenshot', {
            body: Morescreenshot,
            contentType: 'image/png',
        })
    }

    async clickGiftCardsLink(testInfo) {
        await this.giftCardsLink.click();

        //Capturing the screenshot and attaching it to the reports
        const Giftcardslinkscreenshot = await this.page.screenshot();
        await testInfo.attach('Gift cards link Screenshot', {
            body: Giftcardslinkscreenshot,
            contentType: 'image/png',
        })
    }

    async goToBirthdayGiftCards(testInfo) {
        await this.bdyCardLink.click();

        //Capturing the screenshot and attaching it to the reports
        const screenshot = await this.page.screenshot();
        await testInfo.attach('Birthday gift card Screenshot', {
            body: screenshot,
            contentType: 'image/png',
        })
    }
}