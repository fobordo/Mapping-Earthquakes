# Mapping Earthquakes Analysis

## Overview

The purpose of the Mapping Earthquakes Analysis was to build insightful data visualizations with interactive features on earthquakes from around the world by using the latest earthquake GeoJSON data from the U.S. Geological Survey website.

The earthquake data was traversed and retrieved using JavaScript and the D3 and Leaflet JS libraries, and plotted on a Mapbox map through an API request. 

On the map, the magnitude and location of each earthquake is shown in a popup marker. The diameter of the markers for each earthquake reflects the magnitude of the earthquake in their size and color. Earthquakes with higher magnitudes appear larger and darker in color, with a legend providing context for the map data. Finally, to illustrate the relationship between the location and frequency of seismic activity and tectonic plates, fault lines were added to the map.