require([
      "esri/widgets/Sketch",
      "esri/Map",
      "esri/layers/GraphicsLayer",
      "esri/views/MapView",
   "esri/widgets/Home"
    ], (Sketch, Map, GraphicsLayer, MapView, Home) => {
      const graphicsLayer = new GraphicsLayer();

   // Create basemap
      const map = new Map({
        basemap: "topo-vector",
        layers: [graphicsLayer]
      });

   //Create MapView
      const view = new MapView({
        container: "viewDiv", // Div Element
        map: map,
        center: [90, 45], // Long, Lat
        zoom: 5, // Zoom Level
        
      });

   // Create Sketch Widget
      view.when(() => {
        const sketch = new Sketch({
          layer: graphicsLayer,
          view: view,
          // graphic will be selected as soon as it is created
          creationMode: "update"
        });

        //Placement of Sketch Widget
        view.ui.add(sketch, "top-right");
      });
   const homeBtn = new Home ({
     view: view
   });
   //Place Home widget at top left of map
   view.ui.add(homeBtn, "top-left");
    });