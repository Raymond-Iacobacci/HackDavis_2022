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
  let newCoord = []

class MapContainer extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            fields: {},
            currentLocation: {},
            lat: '', 
            longitude: ''
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

      
      async sendData() {
        try {
            let res = await fetch('/cData', {
              method: 'post',
              headers: {
                'Accept': 'application/json',
                'Content-Type' : 'application/json'
              }, 
              body: JSON.stringify(newCoord, null, 2)
            });
            let result = await res.json();



        } 
        catch(e) {
          console.log(e);
        }
      }

      
      addMarker = (location, map) => {
        
        this.setState(prev => ({
          fields: {
            ...prev.fields,
            location
          }
        }));



        if(newCoord.length < 4) {
            newCoord.push(location);
         } else if (newCoord.length === 3) {
           
         }

        newCoord.push(location);
        console.log(JSON.stringify(newCoord, null, 2));
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
                  onClick={(t, map, c) => {
                    console.log(c);  
                    this.addMarker(c.latLng, map)}}
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