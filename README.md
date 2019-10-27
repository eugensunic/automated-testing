# Functions used for quicker website testing

Repository contains various functions used for fetching DOM statistics along with ailments found inside of it.

After completing a big frontend project. I stumbled on various problems where I was constantly
re-implementing solutions since previous haven't been saved, hence I decided to create a repository
to store all these functions and extend with others related to testing.

## Target to reach

- [ ] check if undefined/null/NaN is displayed in the browser
- [ ] check if certain script has loaded and time needed to load
- [ ] check styles tag in HTML DOM, get amount of styles props being used
- [ ] check deprecated html tags, deprecated html tag attributes
- [ ] check number of deprecated html tags, number of deprecated html attributes
- [ ] find duplicated ID's inside the DOM, get all ID's and display them
- [ ] find duplicated attributes for every HTML element separately inside the DOM
- [ ] display all .js frameworks being used on a website (JQuery, Angular, Angular.js, React.JS, Vue.js Backbone, Meteor etc.)
- [ ] get number of images on web page, check if they contain alt attribute if their src attribute path is valid, check external and internal src values (absolute, relative paths)
- [ ] check if html link tags are valid/exist/are dead (`<a href></a>`), check non-existing href properties, check if target property exists (checking for `target="_blank"`). check wether href property value is an absolute or relative path
- [ ] check deprecated js functions/syntax
- [ ] check multiple eventListeners being attached on an element (e.g. click event attached twice on an element should be avoided)
- [ ] check for CSS !important keyword and find amount of being used in DOM and within classes
- [ ] check naming convention used for CSS classes and id's, investigate the convention
- [ ] get meta data, create a statistic for `<head> </head>` contained tags/data
- [ ] check size of html file (index.html)
- [ ] check if horizontal scrolling is possible (should never be enabled)
- [ ] check if lazy loading for images is available on web page.
- [ ] check if lazy loading for scripts (new routes) is available on web page
- [ ] check for memory leaks (undisposed objects, un-removed eventListeners)
- [ ] check number of allowed inputs in input fields and type of inputs, implement
input fields exhaustion
