const observableModule = require("tns-core-modules/data/observable");
const SelectedPageService = require("../shared/selected-page-service");
const theme = require("@nativescript/theme");
const DatePicker = require("tns-core-modules/ui/date-picker").DatePicker;

function SettingsViewModel() {
    SelectedPageService.getInstance().updateSelectedPage("Settings");

    const viewModel = observableModule.fromObject({
        /* Add your view model properties here */
        categories: ["General", "Business", "Health", "Science", "Sports", "Technology"],
        countries: ["United States", "United Kingdom", "Mexico", "Canada", "Germany", "France"],
        minDate: new Date(2020, 0, 6),
        maxDate: new Date(),
        date: new Date(),
        onCategorySelected: function(args) {
            global.category = args.object.items[args.object.selectedIndex];
        },
        onCountrySelected: function(args) {
            switch(args.object.items[args.object.selectedIndex]) {
                case "United States":
                    global.country = "us";
                    break;
                case "United Kingdom":
                    global.country = "gb";
                    break;
                case "Mexico":
                    global.country = "mx";
                    break;
                case "Canada":
                    global.country = "ca";
                    break;
                case "Germany":
                    global.country = "de";
                    break;
                case "France":
                    global.country = "fr";
                    break;
                default:
                    global.country = "us";
                    break;
            }
        },
        isBigFont: global.isBigFont,
        onTextSizeChanged: function(args) {
            global.isBigFont = !global.isBigFont;
        },
        isDarkTheme: global.isDarkTheme,
        onThemeChanged: function(args) {
            global.isDarkTheme = !global.isDarkTheme;
            if (global.isDarkTheme) theme.default.setMode(theme.default.Dark);
            else theme.default.setMode(theme.default.Light);
        },
        isFilterDate: global.isFilterDate,
        onFilterDate: function(args) {
            global.isFilterDate = !global.isFilterDate;
        },
        getDateTo: function(args) {
            const date = args.object;
            const d = date.year+"-"+date.month+"-"+date.day;
            global.dateFrom = d;
        }, 
        getDateFrom: function(args) {
            const date = args.object;
            const d = date.year+"-"+date.month+"-"+date.day;
            global.dateFrom = d;
        }
    });

    return viewModel;
}

module.exports = SettingsViewModel;
