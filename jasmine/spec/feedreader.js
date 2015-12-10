/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        it('have defined non-empty urls', function() {
                for(var i =0; i < allFeeds.length; i++){
                    var feed = allFeeds[i];
                    expect(feed.url).toBeDefined();
                    expect(feed.url.trim().length).not.toBe(0);
                }
        });

         it('have defined non-empty names', function() {
                for(var i =0; i < allFeeds.length; i++){
                    var feed = allFeeds[i];
                    expect(feed.name).toBeDefined();
                    expect(feed.name.trim().length).not.toBe(0);
                }
        });

    });


    describe('The menu', function() {
        it('is hidden by default', function() {
            var body = $('body');
            expect(body.attr('class')).toBe("menu-hidden");
        });

        it('changes visibility when the menu button is clicked', function() {
            var menuButton = $(".menu-icon-link");
            var body = $('body');
            menuButton.click();
            expect(body.attr('class')).not.toBe("menu-hidden");
            menuButton.click();
            expect(body.attr('class')).toBe("menu-hidden");
        });
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {

        beforeEach(function(done){
            loadFeed(0, done);
        });

        it('have at least one .entry element within .feed container', function(done) {
            var feedContainer = $('.feed')[0];
            expect(feedContainer.children[0].children[0].getAttribute("class")).toBe("entry");
            done();
        });

    });

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test wil require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    /* TODO: Write a new test suite named "New Feed Selection"
     */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
