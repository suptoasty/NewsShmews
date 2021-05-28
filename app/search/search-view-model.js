import { Frame, fromObject, Observable } from "@nativescript/core"

import { SelectedPageService } from "../shared/selected-page-service"

const key = "1e2b157f87234242ba6cb82711957e5b"
const url = "https://newsapi.org/v2/everything?q="

const headers = {
	Authorization: "Bearer " + key,
	"Content-Type": "application/json",
	Accept: "application/json",
}

export function SearchViewModel() {
	SelectedPageService.getInstance().updateSelectedPage("Search")

	const viewModel = fromObject({
		items: [],
		searchTerm: "Search",
		onItemTapped: function(args) {
			var nav = {
				moduleName: "featured/featured-page",
				context: {
					article: this.items[args.index],
				},
			}
			Frame.topmost().navigate(nav)
		},
		onItemLoading: function(args) {
			if (global.isBigFont) {
				args.view.getViewById("title").fontSize = 14
				args.view.getViewById("author").fontSize = 14
			} else {
				args.view.getViewById("title").fontSize = 12
				args.view.getViewById("author").fontSize = 12
			}
		},
		onSearchBarLoad: function(args) {
			let textChanged = this.onTextChanged
			let searchBar = args.object
			searchBar.on("textChange", (response) => this.onTextChanged(args))
		},
		onTextChanged: function(args) {
			let to = "&to=" + global.dateTo
			let from = "&from=" + global.dateFrom
			let keyword = args.object.text

			this.searchTerm = "Results For: " + keyword
			let search = url + keyword
			if (global.isFilterDate) search = url + args.object.text + from + to

			fetch(search, headers)
				.then((response) => response.json())
				.then((r) => {
					this.items = r.articles
				})
		},
		onCleared: function(args) {
			this.searchTerm = "Search"
			this.items = []
		},
	})

	return viewModel
}
