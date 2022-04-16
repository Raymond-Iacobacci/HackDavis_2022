import React from 'react'; 
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import InputField from '../components/InputField';
// remove google maps api 

const api_Key = 'AIzaSyCVqBK1RQ9LAUR8CspSF2axRU-6MVNThu8';
const mapStyles = {
    width: '40%',
    height: '50%',
  };

class MapContainer extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            lat: '',
            long: ''
        }
    }

    setInputValue(property, val) {
        
        if (val.length > 100) {
          return; //checks the values length to see how long it is
        }
        this.setState({
          [property]: val // [property] can be reused since we are changing it in the state
        })
      }


    render() {
        return (
            <div className='Map' id='wrapper'> 
               
               <div id='first'>
                    <h3 className='text-light w-50'>Enter Latitude</h3>
                    <InputField
                    type='text' 
                    placeholder='Latitude Coordinates' 
                    onChange={(val) => { this.setInputValue('lat', val)} } />
                </div>

               <div id='second'>     
                    <h3>Enter Longitude</h3>
                    <InputField
                        type='text-light'
                        placeholder='Longitude Coordinates'
                        onChange={(val) => { this.setInputValue('long', val)} }
                        />
                </div>
        
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