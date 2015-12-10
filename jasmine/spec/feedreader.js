/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function () {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        it('have defined non-empty urls', function () {
            for (var i = 0; i < allFeeds.length; i++) {
                var feed = allFeeds[i];
                expect(feed.url).toBeDefined();
                expect(feed.url.trim().length).not.toBe(0);
            }
        });

        it('have defined non-empty names', function () {
            for (var i = 0; i < allFeeds.length; i++) {
                var feed = allFeeds[i];
                expect(feed.name).toBeDefined();
                expect(feed.name.trim().length).not.toBe(0);
            }
        });

    });


    describe('The menu', function () {
        it('is hidden by default', function () {
            var body = $('body');
            expect(body.attr('class')).toBe("menu-hidden");
        });

        it('changes visibility when the menu button is clicked', function () {
            var menuButton = $(".menu-icon-link");
            var body = $('body');
            menuButton.click();
            expect(body.attr('class')).not.toBe("menu-hidden");
            menuButton.click();
            expect(body.attr('class')).toBe("menu-hidden");
        });
    });

    describe('Initial Entries', function () {

        beforeEach(function (done) {
            loadFeed(0, done);
        });

        it('have at least one .entry element within .feed container', function (done) {
            var feedContainer = $('.feed')[0];
            expect(feedContainer.children[0].children[0].getAttribute("class")).toBe("entry");
            done();
        });

    });

    describe('New Feed Selection', function () {
        beforeEach(function (done) {
            loadFeed(0, done);
        });

        it('changes entries when a new feed is loaded', function (done) {
            var feedContainer = $('.feed')[0];
            var firstContent = feedContainer.children[0].children[0].textContent;
            var checkChange = function () {
                var feedContainer = $('.feed')[0];
                var changedContent = feedContainer.children[0].children[0].textContent;
                expect(firstContent.trim()).not.toBe(changedContent.trim());
                done();
            };
            loadFeed(1, checkChange);
        });

    });
}());
