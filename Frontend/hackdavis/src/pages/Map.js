import React from 'react'; 
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import InputField from '../components/InputField';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
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
            fields: {},
            currentLocation: {}
        }
    }
    async componentDidMount() {
        const { lat, lng } = await this.getcurrentLocation();
        this.setState(prev => ({
          fields: {
            ...prev.fields,
            location: {
              lat,
              lng
            }
          },
          currentLocation: {
            lat,
            lng
          }
        }));
      }
    
       getcurrentLocation() {
        if (navigator && navigator.geolocation) {
          return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(pos => {
              const coords = pos.coords;
              resolve({
                lat: coords.latitude,
                lng: coords.longitude
              });
            });
          });
        }
        return {
          lat: 0,
          lng: 0
        };
      }
      addMarker = (location, map) => {
        this.setState(prev => ({
          fields: {
            ...prev.fields,
            location
          }
        }));
        map.panTo(location);
      };

    setInputValue(property, val) {
        
        if (val.length > 100) {
          return; //checks the values length to see how long it is
        }
        this.setState({
          [property]: val // [property] can be reused since we are changing it in the state
        })
      }

      handleClick(event) {
          var lat = event.latLng.lat(), lng = event.latLng.lng()
            this.setState({
                lat : lat,
                long: lng
            })
        }


    render() {
            return (
                <div className='Map' id='wrapper'> 
                   
                   <div id='first'>
                        <h3 className='text-light w-50'>Pick a point</h3>
                        <InputField
                        type='text' 
                        placeholder='Select Coordinates' 
                        onChange={(val) => { this.setInputValue('lat', val)} } />
                    </div>
    
                   
            <Wrapper apiKey={api_Key}>
            <Map
                  google={this.props.google}
                  style={{
                    width: "40%",
                    height: "50%"
                  }}
                  initialCenter={this.state.fields.location}
                  center={this.state.fields.location}
                  zoom={14}
                  onClick={(t, map, c) => this.addMarker(c.latLng, map)}
                >
                  <Marker position={this.state.fields.location} />
                </Map>
                    </Wrapper>
                </div>
            )
        

    }


}





export default GoogleApiWrapper({
    apiKey: api_Key
  })(MapContainer);



  /**
   * 
   * <div id='second'>     
                    <h3 className='text-light w-50'>North West</h3>
                    <InputField
                        type='text-light'
                        placeholder='North West Coord.'
                        onChange={(val) => { this.setInputValue('long', val)} }
                        />
                </div>
   */

                /**
                 *      
                 */