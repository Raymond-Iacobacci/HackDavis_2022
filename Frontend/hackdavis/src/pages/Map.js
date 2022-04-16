import React from 'react'; 
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
// remove google maps api 

const api_Key = 'AIzaSyCVqBK1RQ9LAUR8CspSF2axRU-6MVNThu8';
const mapStyles = {
    width: '40%',
    height: '50%',
  };

class MapContainer extends React.Component {
    constructor(props) {
        super(props); 
    }


    render() {
        return (
            <div className='Map'> 

                <Map
                    google={this.props.google}
                    zoom={6}
                    style={mapStyles}
                    initialCenter={{ lat: 47.444, lng: -122.176}}
                
                />

            </div>



        )
    }


}

export default GoogleApiWrapper({
    apiKey: api_Key
  })(MapContainer);