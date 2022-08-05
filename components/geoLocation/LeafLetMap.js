
import Loading from 'components/loader/loading';
import { MapContainer, Marker, Polyline, Popup, TileLayer } from 'react-leaflet'
import useGeoLocation from 'utils/getLocation'
import UserLocation from './userLocation';
export default function LeafLetMap() {
  const {coordinates,loaded}=useGeoLocation();
  const {lat,lng}=coordinates;
  const matabLocation = [28.956999182352924,50.83648404560775];
  const polyline = [
    [28.956999182352924,50.83648404560775],
    [lat, lng],
  ]
  const limeOptions = { color: 'lime' }
  return (
  <>
  {!loaded?<Loading/>:  <MapContainer center={matabLocation} zoom={12} scrollWheelZoom={true}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  <Marker position={matabLocation}>
      <Popup>
       مطب دکتر بیتا بهور<br />
      </Popup>
    </Marker>
  <Marker position={[lat, lng]}>
      <Popup>
      موقعیت فعلی شما<br />
      </Popup>
    </Marker>
    <UserLocation/>
    <Polyline pathOptions={limeOptions} positions={polyline} />
  </MapContainer>}

  </>
  )
}
