'use strict';

const { Given, When, Then } = require('cucumber');
const assert = require('assert')

//const webdriver = require('selenium-webdriver');
var seleniumWebdriver = require('selenium-webdriver');

module.exports = function () {

Given(/^I have visited the Selenium official web page on "([^"]*)"$/, function (url, next) {
    this.driver.get('https://www.selenium.dev').then(next);
});


When(/^There is a title on the page as "SeleniumHQ Browser Automation" "([^"]*)"$/, function (titleMatch, next) {
    this.driver.getTitle()
        .then(function (title) {
            assert.equal(title, titleMatch, next, 'Expected title to be ' + titleMatch);
        })
});
Then(/^I should be able to click Search in the sidebar $/, function (text, next) {
    this.driver.findElement({ id: 'searchText' }).click();
    this.driver.findElement({ id: 'searchText' }).sendKeys(text).then(next);
});

};