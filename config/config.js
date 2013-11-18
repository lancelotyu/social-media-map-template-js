define(["esri/layers/ArcGISDynamicMapServiceLayer"], function(ArcGISDynamicMapServiceLayer) {
    var config = {
        "appid": "",
        "webmap": "ea2bf030ae06449482d13e8008aa5dfe",
        "socialDisplay": "point",
        "showFlickr": true,
        "showFlickrConfig": true,
        "flickrChecked": true,
        "flickrSearch": "weather",
        "flickrRange": "this_month",
        "flickrKey": "404ebea7d5bc27aa5251d1207620e99b",
        "showYouTube": true,
        "showYouTubeConfig": true,
        "youtubeChecked": true,
        "youtubeSearch": "weather",
        "youtubeRange": "this_month",
        "youtubeKey": "AI39si5AmNrzX3VKNKo4Kcet9BVemrvyjl4B13ezBbNLsvKOlw9Vh3eL_57dZ2vC6M9PwV9i3bHm6emtZLr_BhQ8qtnTbvwzCw",
        "showTwitter": true,
        "showTwitterConfig": true,
        "twitterChecked": true,
        "twitterSearch": "weather",
        "twitterUrl": location.protocol + "//utility.arcgis.com/tproxy/proxy/1.1/search/tweets.json",
        "twitterSigninUrl": location.protocol + "//utility.arcgis.com/tproxy/signin",
        "showPanoramio": false,
        "panoramioChecked": false,
        "showUshahidi": false,
        "ushahidiChecked": false,
        "showUshahidiConfig": true,
        "ushahidiCategory": 0,
        "ushahidiUrl": "https://bnestorm.crowdmap.com/api",
        "useArcGISOnlineBasemaps": true,
        "basemapGroupTitle": "Community Basemaps",
        "basemapGroupOwner": "esri",
        "clusterImage": "images/map/cluster72x72.png",
        "clusterHoverImage": "images/map/clusterHover72x72.png",
        "pointGraphic": "images/map/bluepoint21x29.png",
        "proxyUrl": "",
        "sharingurl": "",
        "defaultMenu": "social",
        "showSearchBox": true,
        "showShareMenu": true,
        "showSocialMenu": true,
        "showBasemapMenu": true,
        "showLayersMenu": true,
        "showLegendMenu": true,
        "showDisplaySwitch": true,
	"showPlaces": false,
        "showGeolocation": true,
	"showAboutDialog": false,
	"showAboutDialogOnLoad": true,
	"updateSocialLayersOnPan": false,
	"showMapNote": true,
	"showMapnotePanel": true,
	"mapNotesTitle": [],
	"zoomLevel": 10,
/*
        "securedLayers": [
            {
                title: "Precipitation",
                index: 0,
                layerObject: ArcGISDynamicMapServiceLayer('http://tm2-elb-1378978824.us-east-1.elb.amazonaws.com/ArcGIS/rest/services/Secured/Precip/MapServer?token=Y8RuXnlQg1YQNlD2src5St2fvNAqAkdxdXD9bZ1ug_ZLo7V1aUJrTuGvT5FeWsVVrBFh59Jx1Nyp0-UlBRKDxQ..', {
                    id: "precip",
                    visible: true,
                    opacity: 0.4
                })
            }
        ],
        "twitterUrl": location.protocol + "//tmappsevents.esri.com/website/twitter-oauth-proxy-php/index.php",
        "twitterSigninUrl": location.protocol + "//tmappsevents.esri.com/website/twitter-oauth-proxy-php/sign_in.php",
        */
	"locateName": "",
	"locatePoint": "",
	"bannedUsersService": "http://services.arcgis.com/QJfoC7c7Z2icolha/ArcGIS/rest/services/fai/FeatureServer/2",
	"bannedWordsService": "http://tm2-elb-1378978824.us-east-1.elb.amazonaws.com/ArcGIS/rest/services/SharedTools/Filter/MapServer/1",
	"flagMailServer": "http://tmappsevents.esri.com/Website/pim_fai/fai.php",
	"sourceCountry": "USA",
	"TinyURLResponseAttribute": "data.url",
	"TinyURLServiceURL": "http://api.bit.ly/v3/shorten?login=esri&apiKey=R_65fd9891cd882e2a96b99d4bda1be00e&uri=${0}&format=json",
	"ExtentRange": 15,
        "defaultPercentageWidth": 95,
        "quickEmbedReadonly": true
    };
    return config;
});