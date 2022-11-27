import DottedMap from "dotted-map/without-countries";
import Image from "next/image";
import mapString from "./map";
export default function Map(): React.ReactElement {
  const map = new DottedMap({ map: JSON.parse(mapString) });

  const color = "#eabe57";
  const radius = 1;

  map.addPin({
    lat: 43.6532,
    lng: -79.3832,
    svgOptions: { color, radius },
  });

  map.addPin({
    lat: 25.2048,
    lng: 55.2708,
    svgOptions: { color, radius },
  });

  map.addPin({
    lat: 34.0522,
    lng: -118.2437,
    svgOptions: { color, radius },
  });

  map.addPin({
    lat: 55.7558,
    lng: 37.6173,
    svgOptions: { color, radius },
  });

  map.addPin({
    lat: 53.6902,
    lng: 91.3708291,
    svgOptions: { color, radius },
  });

  map.addPin({
    lat: -33.870453,
    lng: 151.208755,
    svgOptions: { color, radius },
  });

  map.addPin({
    lat: 18.793403,
    lng: -5.0001955,
    svgOptions: { color, radius },
  });

  map.addPin({
    lat: 41.890251,
    lng: 12.492373,
    svgOptions: { color, radius },
  });

  map.addPin({
    lat: 71.1333324,
    lng: 149.2578907,
    svgOptions: { color, radius },
  });

  map.addPin({
    lat: -15.721575,
    lng: -48.2240857,
    svgOptions: { color, radius },
  });

  const svgMap = map.getSVG({
    radius: 0.22,
    color: "#101a78",
    shape: "circle",
    backgroundColor: "transparent",
  });

  return (
    <>
      <Image
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        fill
        alt="map"
      />
    </>
  );
}
