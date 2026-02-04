import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";

const defaultIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
});

const activeIcon = new L.Icon({
  iconUrl: "https://maps.gstatic.com/mapfiles/ms2/micons/blue.png",
  iconSize: [32, 32],
});

function AutoPan({ data, selectedId }) {
  const map = useMap();

  useEffect(() => {
    const item = data.find((d) => d.id === selectedId);
    if (item) {
      map.flyTo([item.latitude, item.longitude], 8, { duration: 0.8 });
    }
  }, [selectedId]);

  return null;
}

function MapView({ data, selectedId, onMarkerClick }) {
  return (
    <MapContainer
      center={[22.5, 75]}
      zoom={5}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        attribution="© OpenStreetMap"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <AutoPan data={data} selectedId={selectedId} />

      {data.map((item) => (
        <Marker
          key={item.id}
          position={[item.latitude, item.longitude]}
          icon={item.id === selectedId ? activeIcon : defaultIcon}
          eventHandlers={{
            click: () => onMarkerClick(item.id),
          }}
        >
          <Popup>
            <strong>{item.projectName}</strong>
            <br />
            Status: {item.status}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default MapView;
