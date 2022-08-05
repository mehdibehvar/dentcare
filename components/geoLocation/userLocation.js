const { Popup, Marker, useMapEvents } = require("react-leaflet")
import { useState } from 'react';
function UserLocation() {
    const [position, setPosition] = useState(null)
    const map = useMapEvents({
      click() {
        map.locate()
      },
      locationfound(e) {
        setPosition(e.latlng)
        map.flyTo(e.latlng, map.getZoom())
      },
    })
  
    return position === null ? null : (
      <Marker position={position}>
        <Popup>موقعیت فعلی شما</Popup>
      </Marker>
    )
  }
  export default UserLocation