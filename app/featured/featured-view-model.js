const observableModule = require("tns-core-modules/data/observable");
const SelectedPageService = require("../shared/selected-page-service");
const utilsModule = require("tns-core-modules/utils/utils");

function FeaturedViewModel() {
    SelectedPageService.getInstance().updateSelectedPage("Featured");

    const viewModel = observableModule.fromObject({
        /* Add your view model properties here */
        title: "null title",
        content: "null content",
        image: "null image",
        url: "null url",
        onTap: function(args) {
            utilsModule.openUrl(this.url);
        },
        onPageLoaded: function (args) {
            const page = args.object;
            if(global.isBigFont){
                page.getViewById("title").fontSize = 24;
                page.getViewById("content").fontSize = 24;
            } else {
                page.getViewById("title").fontSize = 18;
                page.getViewById("content").fontSize = 18;
            }
        }
    });

    return viewModel;
}

module.exports = FeaturedViewModel;
