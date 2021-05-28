import { fromObject, Utils } from "@nativescript/core"
import { SelectedPageService } from "../shared/selected-page-service"

export function FeaturedViewModel() {
	SelectedPageService.getInstance().updateSelectedPage("Featured")

	const viewModel = fromObject({
		title: "null title",
		content: "null content",
		image: "null image",
		url: "null url",
		onTap: function(args) {
			Utils.openUrl(this.url)
		},
		onPageLoaded: function(args) {
			const page = args.object
			if (global.isBigFont) {
				page.getViewById("title").fontSize = 24
				page.getViewById("content").fontSize = 24
			} else {
				page.getViewById("title").fontSize = 18
				page.getViewById("content").fontSize = 18
			}
		},
	})

	return viewModel
}
