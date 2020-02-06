/* eslint-disable arrow-parens */
/* eslint-disable prefer-template */
const app = require("tns-core-modules/application");
const HomeViewModel = require("./home-view-model");
const listViewModule = require("tns-core-modules/ui/list-view");

function onNavigatingTo(args) {
    const page = args.object;
    let homeview = new HomeViewModel();

    page.bindingContext = homeview;
}

function onDrawerButtonTap(args) {
    const sideDrawer = app.getRootView();
    sideDrawer.showDrawer();
}

exports.onNavigatingTo = onNavigatingTo;
exports.onDrawerButtonTap = onDrawerButtonTap;
