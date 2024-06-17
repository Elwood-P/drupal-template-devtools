var _browser;
if (chrome) {
  _browser = chrome;
} else {
  _browser = browser;
}
_browser.devtools.panels.create(
  "My Panel", // title
  "icons/icon16.png", // icon
  "src/entries/devtools/index.html" // content
);
