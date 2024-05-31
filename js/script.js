const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoibnVyYWRuYW5jaG93ZGh1ciIsImEiOiJja3lzbGdjczUxNG45MnVwNm9tcjY5Mzd6In0.GJpxyvUovK222dIuv5JJqw";

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
});

function setupMap(centerPosition) {
  const map = new mapboxgl.Map({
    accessToken: MAPBOX_ACCESS_TOKEN,
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: centerPosition,
    zoom: 15,
  });

  map.addControl(new mapboxgl.NavigationControl());
  map.addControl(
    new MapboxDirections({ accessToken: MAPBOX_ACCESS_TOKEN }),
    "top-left"
  );
}

function successLocation({ coords }) {
  setupMap([coords.longitude, coords.latitude]);
}

function errorLocation() {
  setupMap([-2.24, 53.48]); // Default location: Manchester, UK
}
