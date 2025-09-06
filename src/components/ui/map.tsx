import { MapContainer, Marker, Popup, TileLayer, Tooltip } from "react-leaflet";
import type { Map } from "@/types/map";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

export default function Map({ position, zoom }: Pick<Map, "position" | "zoom">) {
  return (
    <MapContainer center={position} zoom={zoom} scrollWheelZoom className="h-full w-full" zoomControl={false}>
      <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position}>
        <Popup>
          <Tooltip>Tapoin</Tooltip>
        </Popup>
      </Marker>
    </MapContainer>
  );
}