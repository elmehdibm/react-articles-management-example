import driver from "../driver";
import {By, until} from "selenium-webdriver";

class InputArticlesView {

    static getNameInput () {
        return driver.findElement(By.css("input[name=name]"));
    }

    static getQuantityInput () {
        return driver.findElement(By.css("input[name=quantity]"));
    }

    static getPriceInput () {
        return driver.findElement(By.css("input[name=price]"));
    }

    static getSubmitInput () {
        return driver.findElement(By.css("input[type=submit]"));
    }
};

export default InputArticlesView;
