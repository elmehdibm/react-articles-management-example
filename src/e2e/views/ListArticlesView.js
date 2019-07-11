import driver from "../driver";
import {By, until} from "selenium-webdriver";

class ListArticlesView {

    static getItemTitleById (id) {
        return driver.findElement(By.id("title-"+id));
    }

    static getItemQuantityById (id) {
        return driver.findElement(By.id("quantity-"+id));
    }

    static getItemPriceById (id) {
        return driver.findElement(By.id("price-"+id));
    }

    static getIncrementActionById (id) {
        return driver.findElement(By.id("increment-"+id));
    }

    static getDecrementActionById (id) {
        return driver.findElement(By.id("decrement-"+id));
    }

    static getRemoveActionById (id) {
        return driver.findElement(By.id("remove-"+id));
    }
};

export default ListArticlesView;

