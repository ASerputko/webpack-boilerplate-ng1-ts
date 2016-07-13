var chai = require('chai');
var expect = chai.expect;

describe('Home', () => {

    before(() => {
        browser.get('/#/home');
    });

    afterEach(() => {
        browser.driver.sleep(750);
    });

    it('should get home', () => {
        browser.getCurrentUrl().then((url) => {
            expect(url).to.match(/\/#\/home/);
        });
    });

    it('should have title', () => {
        browser.getTitle().then((title) => {
            expect(title).to.equal('Home | JavaScript Tutorial Sample App');
        });
    });


    it('should be default page', () => {
        browser.get('');

        browser.getCurrentUrl().then((url) => {
            expect(url).to.match(/\/#\/home/);
        });

        browser.getTitle().then((title) => {
            expect(title).to.equal('Home | JavaScript Tutorial Sample App');
        });
    });

});
