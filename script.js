require([
      "esri/views/MapView",
      "esri/WebMap",
      "esri/widgets/Legend",
      "esri/widgets/Search",
      "esri/widgets/LayerList",
      "esri/widgets/Home",
      "dojo/domReady!"
    ], function(
      MapView, WebMap, Legend, Search, LayerList, Home
    ) {

      var webmap = new WebMap({
        portalItem: { // autocasts as new PortalItem()
          id: "481fa9e245da458eb2040309d21e6916"
        }
      });

  
      var view = new MapView({
        map: webmap,
        container: "viewDiv",
        center: [0,-1],
        zoom: 1
      });
      
      view.when(function() {
	
          // get the first layer in the collection of operational layers in the WebMap
          // when the resources in the MapView have loaded.
        var featureLayer = webmap.layers.getItemAt(0);

        var legend = new Legend({
          view: view,
          layerInfos: [{
            layer: featureLayer,
            title: "GDP Calculation Method Comparison- $ USD"
          }]
         }); 
       
view.ui.add(legend, "bottom-left");
         }); 

  
  
var searchWidget = new Search({
        view: view
      });
      
  
  
     var homeWidget = new Home({
       view: view
     }
     )
           view.ui.add(searchWidget, {
        position: "top-right"
      });
      
      view.ui.add(homeWidget, {
        position: "top-left"
      });
  
  var layerList = new LayerList({
  view: view
});
      view.ui.add(layerList, "bottom-right");
      
  
 });   
