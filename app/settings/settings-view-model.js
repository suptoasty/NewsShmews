import { DatePicker, fromObject, Observable } from '@nativescript/core'
import Theme from '@nativescript/theme'

import { SelectedPageService } from '../shared/selected-page-service'

export function SettingsViewModel() {
	SelectedPageService.getInstance().updateSelectedPage('Settings')

	const viewModel = fromObject({
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
            if (global.isDarkTheme) Theme.setMode(Theme.Dark);
            else Theme.setMode(Theme.Light);
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
	})

	return viewModel
}
