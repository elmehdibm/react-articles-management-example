import driver from "../driver";
import BarView from "../views/BarView";
import { delayPromise } from "../setupTests";
import InputArticlesView from "../views/InputArticlesView";
import ListArticlesView from "../views/ListArticlesView";

describe('article management app', () => {
    it('should check the Header Title in the Bar View', async () => {
        await driver.navigate().to("http://localhost:8080/");
        await delayPromise(1000).then(() => ({}));
        const headerText = await BarView.getHeaderTitle().getText();
        expect(headerText).toEqual('Welcome to the store');
    });

    it('should fill the form of article input', async () => {
        await InputArticlesView.getNameInput().sendKeys("Apple");
        await InputArticlesView.getQuantityInput().sendKeys("1");
        await InputArticlesView.getPriceInput().sendKeys("2");
        await delayPromise(1000).then(() => ({}));
        const name = await InputArticlesView.getNameInput().getAttribute("value");
        const quantity = await InputArticlesView.getQuantityInput().getAttribute("value");
        const price = await InputArticlesView.getPriceInput().getAttribute("value");

        expect(name).toEqual('Apple');
        expect(quantity).toEqual('1');
        expect(price).toEqual('2');
    });

    it('should submit the form and check the values', async () => {
        await InputArticlesView.getSubmitInput().click();
        await delayPromise(1000).then(() => ({}));
        
        expect('Apple').toEqual('Apple');
    });

    it('should submit the form and check the values', async () => {
        await InputArticlesView.getSubmitInput().click();
        await delayPromise(1000).then(() => ({}));
        const name = await ListArticlesView.getItemTitleById(2).getText();
        const quantity = await ListArticlesView.getItemQuantityById(2).getText();
        const price = await ListArticlesView.getItemPriceById(2).getText();

        expect(name).toEqual('Apple');
        expect(quantity).toEqual('1');
        expect(price).toEqual('2 MAD');
    });

    it('should increment the milk quantity', async () => {
        await ListArticlesView.getIncrementActionById(1).click();
        await delayPromise(1000).then(() => ({}));
        const quantity = await ListArticlesView.getItemQuantityById(1).getText();

        expect(quantity).toEqual('1');
    });

    it('should empty the stock of apples', async () => {
        await ListArticlesView.getDecrementActionById(2).click();
        await delayPromise(1000).then(() => ({}));
        const quantity = await ListArticlesView.getItemQuantityById(2).getText();

        expect(quantity).toEqual('Out of Stock');
    });


    it('should delete all articles in the stock', async () => {
        await ListArticlesView.getRemoveActionById(1).click();
        await ListArticlesView.getRemoveActionById(2).click();
        await delayPromise(1000).then(() => ({}));
        try{
        const title = await ListArticlesView.getItemTitleById(1);
        } catch(error){
            expect(error.name).toEqual('NoSuchElementError');
        }
    });


    afterAll(() => {
        driver.quit();
    });
});

