const app = require("tns-core-modules/application");

const FeaturedViewModel = require("./featured-view-model");

function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new FeaturedViewModel();

    let data = page.navigationContext;
    page.bindingContext.set("title", data.article.title);
    page.bindingContext.set("content", data.article.content);
    page.bindingContext.set("image", data.article.urlToImage);
    page.bindingContext.set("url", data.article.url);
}

function onDrawerButtonTap(args) {
    const sideDrawer = app.getRootView();
    sideDrawer.showDrawer();
}

exports.onNavigatingTo = onNavigatingTo;
exports.onDrawerButtonTap = onDrawerButtonTap;
