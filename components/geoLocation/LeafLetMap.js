
import { MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
import FlyToUserLocation from './flytouserLocation';
import UserLocation from './userLocation';

export default function LeafLetMap() {
  const matabLocation = [30.958545596786156, 51.25635877846443];

  return (
  <>
<MapContainer center={matabLocation} zoom={12} scrollWheelZoom={true}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  <Marker position={matabLocation}>
      <Popup>
       مطب دکتر بیتا بهور<br />
      </Popup>
    </Marker>
     <UserLocation/>
    <FlyToUserLocation/>
  </MapContainer>
  </>
  )
}
//set .leaflet-container css style in global style {width:100%,height:300px}