import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet"
import markerIcon from "../../public/assests/icon-location.svg";


const Map = ({coordinates}) => {

    const marker = new L.icon({ iconUrl: markerIcon });
    let state = {
      keyMAP: Math.random(),
    };
  return (
    <>
      <MapContainer
        center={[coordinates.lat, coordinates.lng]}
        zoom={18}
        style={{ width: "100%", height: "600px" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[coordinates.lat, coordinates.lng]} icon={marker} />
      </MapContainer>
    </>
  );
};

export default Map;
