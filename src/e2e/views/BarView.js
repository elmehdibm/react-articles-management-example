import driver from "../driver";
import {By, until} from "selenium-webdriver";

class barView {

    static getHeaderTitle () {
        return driver.findElement(By.id("header-title"));
    }

};

export default barView;
