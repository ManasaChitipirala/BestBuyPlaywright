import { test } from '@playwright/test';
import { GiftCardPage } from '../pages/giftCard.js';
import { SearchFunctionality } from '../pages/searchBar.js';
import { AddToCart } from '../pages/addToCart.js';
import { GiftDetails } from '../pages/giftDetails.js';
import { readData } from '../../utils/excelReader.js';
import { Faqs } from '../pages/FAQs.js';


//Test suite for Best buy Gift card functionality
test.describe('BestBuy Gift Card Tests', () => {
    let giftCard;
    //Setup before each test case
    test.beforeEach(async ({ page, baseURL }, testInfo) => {
        //creation of page object
        giftCard = new GiftCardPage(page);
        await page.goto(baseURL);
        await giftCard.selectState(testInfo);
        await giftCard.clickMore(testInfo);
        await giftCard.clickGiftCardsLink(testInfo);
    });

    /**
     * =========================================================================================================
     * Testcase: 1
     * Description -- Navigate to gift cards page and take a screenshot
     * Created By -- C Manasa
     * Reviewed By -- Gujjula Narasimha Reddy
     * Positive Test case : validate
     * =========================================================================================================
     * Steps:
     * - Open the website -- "https://www.bestbuy.com/"
     * - Select country -- United States
     * - Click More
     * - Click on Gift Cards link
     * =========================================================================================================
    **/
    test('Navigate to Gift Cards page and take screenshot', async ({ page, baseURL }, testInfo) => {
        await page.screenshot({ path: 'test-results/giftcardpage.png' });
    });


    /**
   * =========================================================================================================
   * Testcase: 2
   * Description -- Select a birthday giftcard and add to cart
   * Created By -- C Manasa
   * Reviewed By -- Gujjula Narasimha Reddy
   * Positive Test case : validate
   * =========================================================================================================
   * Steps:
   * - Open the website -- "https://www.bestbuy.com/"
   * - Select country -- United States
   * - Click More
   * - Click on Gift Cards link
   * - click on Birthday gift cards
   * - click on add to cart
   * =========================================================================================================
  **/
    test('Select Birthday Gift Card and add to cart', async ({ page }, testInfo) => {
        let cart = new AddToCart(page);
        await cart.goToBirthdayGiftCards(testInfo);
        await cart.selectFirstBirthdayCard(testInfo);
        await page.waitForTimeout(5000);
        await cart.addToCart(testInfo);
        await page.waitForTimeout(5000);
        await page.screenshot({ path: 'test-results/AddedtoCart.png' });
    });

    /**
   * =========================================================================================================
   * Testcase: 3
   * Description -- View the details of a birthday gift card
   * Created By -- C Manasa
   * Reviewed By -- Gujjula Narasimha Reddy
   * Positive Test case : validate
   * =========================================================================================================
   * Steps:
   * - Open the website -- "https://www.bestbuy.com/"
   * - Select country -- United States
   * - Click More
   * - Click on Gift Cards link
   * - click on Birthday gift cards
   * - click on features
   * - click on specifications
   * - click on questions and answers
   * =========================================================================================================
  **/
    test('Select Birthday Gift Card and view details', async ({ page }, testInfo) => {
        let detailsGift = new GiftDetails(page);
        await detailsGift.goToBirthdayGiftCards(testInfo);
        await detailsGift.selectFirstBirthdayCard(testInfo);
        await page.waitForTimeout(2000);
        await detailsGift.viewFeatures(testInfo);
        await detailsGift.viewSpecifications(testInfo);
        await page.waitForTimeout(2000);
        await detailsGift.viewQuestionAndAnswers(testInfo);
    });

    /**
   * =========================================================================================================
   * Testcase: 4
   * Description -- Enter a valid string in the search bar and look for results
   * Created By -- C Manasa
   * Reviewed By -- Gujjula Narasimha Reddy
   * Positive Test case : validate
   * =========================================================================================================
   * Steps:
   * - Open the website -- "https://www.bestbuy.com/"
   * - Select country -- United States
   * - Click More
   * - Click on Gift Cards link
   * - click on Birthday gift cards
   * - click on asearch bar
   * - Enter a valid string in the search bar
   * =========================================================================================================
  **/
    test('Valid string in search bar', async ({ page }) => {
        const Valid = readData();
        let search = new SearchFunctionality(page);
        // Enter valid characters into the search bar and perform the search
        await search.searchBarValid(Valid[0][0].ValidString);
        await page.screenshot({ path: 'test-results/searchBarValid.png' })
    });

    /**
   * =========================================================================================================
   * Testcase: 5
   * Description -- Enter an invalid string in the search bar and look for results(Negative test case)
   * Created By -- C Manasa
   * Reviewed By -- Gujjula Narasimha Reddy
   * Negative Test case : validate
   * =========================================================================================================
   * Steps:
   * - Open the website -- "https://www.bestbuy.com/"
   * - Select country -- United States
   * - Click More
   * - Click on Gift Cards link
   * - click on Birthday gift cards
   * - click on search bar
   * - Enter an invalid string in the search bar
   * =========================================================================================================
  **/
    test('Invalid string in search bar ', async ({ page }) => {
        const Invalid = readData();
        let search = new SearchFunctionality(page);
        // Enter invalid characters into the search bar and perform the search
        await search.searchBarInvalid(Invalid[1][0].InvalidString);
        await page.screenshot({ path: 'test-results/searchBar.png' })
    });

    /**
  * =========================================================================================================
  * Testcase: 6
  * Description -- Open the Gift card FAQs without sign-in
  * Created By -- C Manasa
  * Reviewed By -- Gujjula Narasimha Reddy
  * Positive Test case : validate
  * =========================================================================================================
  * Steps:
  * - Open the website -- "https://www.bestbuy.com/"
  * - Select country -- United States
  * - Click More
  * - Click on Gift Cards link
  * - click on Birthday gift cards
  * - click on Terms & Conditions
  * - Click on Gift card Terms and conditions
  * - click on See Best Buy Gift Card frequently asked questions
  * =========================================================================================================
 **/
    test('Get Gift card FAQs', async ({ page }, testInfo) => {
        let giftCardFaqs = new Faqs(page);
        await giftCardFaqs.getFaqs(testInfo);
        await page.screenshot({ path: 'test-results/GiftDetails.png' });
    })
});
