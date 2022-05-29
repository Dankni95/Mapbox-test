import React, { useContext, useEffect, useRef, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line
import "mapbox-gl/dist/mapbox-gl.css";
import styled from "styled-components";

import data from "../data";

import { mapContext } from "../context/mapContext";
import Popup from "./Popup";
import PopupContent from "./PopupContent";

const StyledContainer = styled.div`
  width: 100%;
  min-width: 600px;
  height: calc(100vh - 80px);
`;

const Map = () => {
  const [content, setContent] = useState([]);
  const [popupLngLat, setPopupLngLat] = useState(null);
  const { setMap, map } = useContext(mapContext);
  const mapContainer = useRef(null);

  function onPopupClose() {
    setContent([]);
    setPopupLngLat(null);
  }

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiYnJpYW5iYW5jcm9mdCIsImEiOiJja3ZxcWRxZWxldWk0MnBtYWpscnF2Y2xsIn0.ChVPofS85WHosvsggmzaXQ";

    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
        center: [-78.137343, 41.137451], // starting position
        zoom: 5 // starting zoom
      });

      map.on("load", () => {
        setMap(map);

        map.resize();
      });

      map.on("load", () => {
        // Add a data source containing GeoJSON data.
        map.addSource("geojson-layer", {
          type: "geojson",
          data
        });

        // Add a new layer to visualize the polygon.
        map.addLayer({
          id: "geojson-layer",
          type: "fill",
          source: "geojson-layer", // reference the data source
          layout: {},
          paint: {
            "fill-color": "#0080ff", // blue color fill
            "fill-opacity": 0.5
          }
        });
        // Add a black outline around the polygon.
        map.addLayer({
          id: "outline",
          type: "line",
          source: "geojson-layer",
          layout: {},
          paint: {
            "line-color": "#000",
            "line-width": 3
          }
        });

        map.on("click", "geojson-layer", (e) => {
          const labels = e.features.map((feature) => (
            <PopupContent
              key={feature.properties.label}
              label={feature.properties.label}
            />
          ));

          setContent(labels);
          setPopupLngLat(e.lngLat);
        });
      });
    };

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map, setMap]);

  return (
    <>
      {popupLngLat && (
        <Popup lngLat={popupLngLat} onClose={onPopupClose}>
          {content}
        </Popup>
      )}
      <StyledContainer ref={(el) => (mapContainer.current = el)} />
    </>
  );
};

export default Map;
