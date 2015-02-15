using extremeTour.Utils;
using System.Web;
using System.Web.Optimization;

namespace extremeTour
{
	public class BundleConfig
	{

		public static void RegisterBundles(BundleCollection bundles)
		{
			BundleTable.EnableOptimizations = false;

			bundles.Add(new JsBundle("~/bundles/jquery").Include(
						"~/Scripts/jquery-{version}.js"));

			bundles.Add(new JsBundle("~/bundles/bootstrap").Include(
						"~/Scripts/bootstrap.js"));

			bundles.Add(new JsBundle("~/bundles/thirdPartyLibraries").Include(
						"~/Scripts/thirdPartyLibs/smoothscroll.js",
						"~/Scripts/jquery.parallax.js",
						"~/Scripts/jquery.scrollTo.js",
						"~/Scripts/jquery.nav.js"
						));

			bundles.Add(new JsBundle("~/bundles/backboneWithDependencies").Include(
				"~/Scripts/lodash.underscore.js",
				"~/Scripts/backbone.js"
				));

			bundles.Add(new JsBundle("~/bundles/app").Include(
						"~/Scripts/app/models/applicationModel.js",

						"~/Scripts/app/models/imageModel.js",
						"~/Scripts/app/collections/previewImagesCollection.js",

						"~/Scripts/app/views/headerView.js",
						"~/Scripts/app/views/startView.js",
						"~/Scripts/app/views/responsesView.js",
						"~/Scripts/app/views/contactsView.js",
						"~/Scripts/app/views/galleryView.js",

						"~/Scripts/app/router/router.js",
						"~/Scripts/app/app.js"));

			bundles.Add(new LessBundle("~/Content/less").Include(
						"~/Content/less/site.less"
				));


			bundles.Add(new StyleBundle("~/Content/css").Include(
						"~/Content/css/bootstrap/bootstrap.css",
						"~/Content/css/font-awesome.css",
						"~/Content/css/animate.css"
				));

		}
	}
}