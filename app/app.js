const application = require("tns-core-modules/application");
global.isBigFont = false;
global.isDarkTheme = false;
global.category = "General";
global.country = "us";
global.isFilterDate = false;
global.dateFrom = "2020-01-06";
global.dateTo = "9999-12-31";

application.run({
    moduleName: "app-root/app-root"
});

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
