import React, {useEffect, useRef} from "react";
import { Wrapper,Status } from "@googlemaps/react-wrapper";

const render = (status) => {
    switch (status) {
        case Status.LOADING:
            return <p>Loading...</p>;
        case Status.FAILURE:
            return <p>Failed to load map!</p>;
        case Status.SUCCESS:
            return <MyMapComponent center={{ lat: 48.8566, lng: 2.3522 }} zoom={10} />;
    }
};

export default function Map () {
    return ( <>
      <Wrapper apiKey={"AIzaSyB1bRXJXZsNDeeQXyYWA_UnVHrlvX4RxYE"} render={render} />
    </>)
}
function MyMapComponent({center, zoom}) {
    const ref = useRef();

    useEffect(() => {
        new window.google.maps.Map(ref.current, {
            center,
            zoom,
        });
    });

    return <div 
        className="Map"
        style={{float: "right", height: 635, width: 500, borderRadius: 20}}
        ref={ref} id="map" />;
}