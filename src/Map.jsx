import React, {useEffect, useRef} from 'react'
import { Wrapper, Status } from "@googlemaps/react-wrapper"
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
} from 'react-leaflet'

const MyMap = () => {
    const render = (status) => {
        switch (status) {
            case Status.LOADING:
                return <p>Loading...</p>
            case Status.FAILURE:
                return <p>Failed to load</p>
            case Status.SUCCESS:
                return <p>MyMapComponent</p>
        }
    };

    return (<>
        <Wrapper apiKey={AIzaSyB1bRXJXZsNDeeQXyYWA_UnVHrlvX4RxYE} render={render}/>
    </>)
}

function MyMapComponent({
                            center,
                            zoom,
                        }) {
    const ref = useRef();

    useEffect( ()  => {
        new window.google.maps.Map(ref.current, {
            center,
            zoom,
        });
    });

    return <div ref={ref} id='map'/>;
}
export default function Map () {
    return ( <>
        <MapContainer center={[44.833328, -0.56667]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://%7Bs%7D.tile.openstreetmap.org/%7Bz%7D/%7Bx%7D/%7By%7D.png"
            />
            <Marker position={[51.505, -0.09]}>
                <Popup>
                    A pretty CSS3 popup. <br/> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    </>)
}