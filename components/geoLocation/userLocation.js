import { useState } from "react";
import { Marker, Popup, useMapEvents, Polyline } from "react-leaflet";
 function UserLocation() {
    const [position, setPosition] = useState(null)
      ///----///
      const map = useMapEvents({
        load() {
        map.locate()
        },
        locationfound(e) {
       setPosition(e.latlng)
        },
      });
      const polyline = [
        [30.958545596786156, 51.25635877846443],
        position,
      ]
      const limeOptions = { color: 'lime' }
      /////-------------------////
      return position === null ? null : (<>
         <Marker position={position}>
          <Popup>موقعیت فعلی شما</Popup>
        </Marker>
     <Polyline pathOptions={limeOptions} positions={polyline} />
      </>
     
      )
}
export default UserLocation;