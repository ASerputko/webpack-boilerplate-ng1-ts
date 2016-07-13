var chai = require('chai');
var expect = chai.expect;

describe('Help', () => {

    before(() => {
        browser.get('/#/help');
    });

    afterEach(() => {
        browser.driver.sleep(750);
    });

    it('should get help', () => {
        browser.getCurrentUrl().then((url) => {
            expect(url).to.match(/\/#\/help/);
        });
    });

    it('should have title', () => {
        browser.getTitle().then((title) => {
            expect(title).to.equal('Help | JavaScript Tutorial Sample App');
        });
    });

});
