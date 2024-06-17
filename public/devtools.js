var _browser;
if (chrome) {
  _browser = chrome;
} else {
  _browser = browser;
}
_browser.devtools.panels.create(
  "Drupal",
  "icons/icon16.png",
  "src/entries/devtools/index.html"
);
