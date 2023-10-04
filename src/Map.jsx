import React from 'react'
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
} from 'react-leaflet'

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