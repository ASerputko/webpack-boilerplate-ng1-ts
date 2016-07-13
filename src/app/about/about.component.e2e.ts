var chai = require('chai');
var expect = chai.expect;

describe('About', () => {

    before(() => {
        browser.get('/#/about');
    });

    afterEach(() => {
        browser.driver.sleep(750);
    });

    it('should get about', () => {
        browser.getCurrentUrl().then((url) => {
            expect(url).to.match(/\/#\/about/);
        });
    });

    it('should have title', () => {
        browser.getTitle().then((title) => {
            expect(title).to.equal('About | JavaScript Tutorial Sample App');
        });
    });

});
