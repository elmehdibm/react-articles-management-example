module.exports = {
    "testURL": "http://localhost/",
    "moduleNameMapper": {"\\.(scss|css|jpg|pdf|png|svg)$": "<rootDir>/src/tests/emptyModule.js"},
    "setupFilesAfterEnv": ["<rootDir>src/e2e/setupTests.js"],
    "testMatch": ["<rootDir>/src/e2e/tests/**"],
    "setupFiles": ["./test-setup.js"]
};
