const observableModule = require("tns-core-modules/data/observable");
const SelectedPageService = require("../shared/selected-page-service");
const fetch = require("tns-core-modules/fetch/fetch").fetch;
const Frame = require("tns-core-modules/ui/frame").Frame;

const key = "1e2b157f87234242ba6cb82711957e5b";
const defaultUrl = "https://newsapi.org/v2/top-headlines?country=us";
const url = "https://newsapi.org/v2/top-headlines?";
const headers = {
    Authorization: "Bearer " + key
};

function HomeViewModel() {
    SelectedPageService.getInstance().updateSelectedPage("Home");

    const viewModel = observableModule.fromObject({
        filtered: "",
        items: [],
        onItemTapped: function (args) {
            var nav = {
                moduleName: "featured/featured-page",
                context: {
                    article: this.items[args.index]
                }
            };
            Frame.topmost().navigate(nav);
        },
        onItemLoading: function (args) {
            if(global.isBigFont) {
                args.view.getViewById("title").fontSize = 14;
                args.view.getViewById("author").fontSize = 14;
            } else {
                args.view.getViewById("title").fontSize = 12;
                args.view.getViewById("author").fontSize = 12;
            }
        },
        onLoaded: function(args) {
            const country = "country="+global.country;
            const category = "&category="+global.category.toLowerCase();
            fetch(url+country+category, {
                headers: headers
            })
            .then(response => response.json())
            .then(r => {
                this.items = r.articles;
            });
        },
        getFiltered: function(args) {
            if(global.country === "us" && global.category === "General") this.filtered = "Top-Stories";
            else this.filtered = "Showing Filtered Results";
        }
    });

    return viewModel;
}

module.exports = HomeViewModel;
