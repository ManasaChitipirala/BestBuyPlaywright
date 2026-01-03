import { GiftCardPage } from "./GiftCard";

export class Faqs extends GiftCardPage {
    constructor(page) {
        super(page);
        this.page = page;
        this.termsConditions = this.page.getByTestId("terms-conditions");
        this.giftTerms = this.page.getByText("Gift Cards Terms and Conditions");
        this.giftFaqs = this.page.getByText("See Best Buy Gift Card frequently asked questions");
    }

    async getFaqs(testInfo) {
        await this.termsConditions.click();
        await this.giftTerms.click();
        await this.page.waitForTimeout(3000);
        await this.giftFaqs.click();
        //Capturing the screenshot and attaching it to the reports
        const Faqscreenshot = await this.page.screenshot();
        await testInfo.attach('FAQs Screenshot', {
            body: Faqscreenshot,
            contentType: 'image/png',
        })
    }
}
