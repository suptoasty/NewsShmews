import { Application } from "@nativescript/core"

import { FeaturedViewModel } from "./featured-view-model"

export function onNavigatingTo(args) {
	const page = args.object
	page.bindingContext = new FeaturedViewModel()

	let data = page.navigationContext
	page.bindingContext.set("title", data.article.title)
	page.bindingContext.set("content", data.article.content)
	page.bindingContext.set("image", data.article.urlToImage)
	page.bindingContext.set("url", data.article.url)
}

export function onDrawerButtonTap(args) {
	const sideDrawer = Application.getRootView()
	sideDrawer.showDrawer()
}
