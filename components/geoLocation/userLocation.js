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
        [28.956999182352924,50.83648404560775],
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