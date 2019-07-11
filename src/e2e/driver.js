import {Builder, Capabilities} from "selenium-webdriver";

const firefoxCapabilities = Capabilities.firefox();
firefoxCapabilities.set("firefoxOptions", {"args": ["--headless"]});

const createDriver = () => new Builder().
  forBrowser("firefox").
  withCapabilities(firefoxCapabilities).
  build();

export default createDriver();

export {createDriver};
