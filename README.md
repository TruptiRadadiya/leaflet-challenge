# leaflet-challenge

## Earthquake Data Visualization Dashboard

This project involves creating an interactive dashboard to visualize earthquake data collected by the United States Geological Survey (USGS). The dashboard includes a map with data markers indicating the location, magnitude, and depth of earthquakes. Users can interact with the map to gain insights into seismic activity worldwide.

### File structure

```
leaflet-challenge/
├── Leaflet-Part-1/
│   ├── static/
│   │   ├── css/
│   │   │   └── style.css            # CSS file for styling
│   │   └── js/
│   │       └── logic.js             # JavaScript file for data processing and
│   └── index.html                   # HTML file for the dashboard
├── Leaflet-Part-2/
│   ├── static/
│   │   ├── css/
│   │   │   └── style.css            # CSS file for styling
│   │   └── js/
│   │       └── logic.js             # JavaScript file for data processing and
│   └── index.html                   # HTML file for the dashboard
└── README.md                        # This README file
```

### What do you need?

- Leaflet.js
- D3.js
- HTML/CSS
- JavaScript

### How to Use the Code?

1. Clone this repository to your local machine.
2. Navigate to the project directory (e.g., Leaflet-Part-1 or Leaflet-Part-2).
3. Open the `index.html` file in a web browser to view the dashboard.

### Summary of Features

#### Part 1: Basic Earthquake Visualization

- Interactive Map:
  - Plots all earthquakes from the selected dataset based on their longitude and latitude.
  - Data markers reflect the magnitude of the earthquake by size and the depth of the earthquake by color.
  - Includes popups that provide additional information about the earthquake when a marker is clicked.
  - Features a legend that provides context for the map data.

#### Part 2: Advanced Earthquake Visualization

- Additional Data Visualization:
  - Plots a second dataset to illustrate the relationship between tectonic plates and seismic activity.
  - Adds other base maps to choose from.
  - Includes layer controls to toggle between different datasets and base maps.
