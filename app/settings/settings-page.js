import { Application } from '@nativescript/core'

import { SettingsViewModel } from './settings-view-model'

export function onNavigatingTo(args) {
  const page = args.object
  page.bindingContext = new SettingsViewModel()

  page.getViewById("dateFrom").date = page.bindingContext.minDate;
    page.getViewById("dateTo").date = page.bindingContext.date;

    page.getViewById("country").on("selectedIndexChange", function(args) {
        page.bindingContext.onCountrySelected(args);
    });
    page.getViewById("category").on("selectedIndexChange", function(args) {
        page.bindingContext.onCategorySelected(args);
    });
    page.getViewById("dateTo").on("dateChange", function(args) {
        page.bindingContext.getDateTo(args);
    });
    page.getViewById("dateFrom").on("dateChange", function(args) {
        page.bindingContext.getDateFrom(args);
    });
}

export function onDrawerButtonTap(args) {
  const sideDrawer = Application.getRootView()
  sideDrawer.showDrawer()
}
