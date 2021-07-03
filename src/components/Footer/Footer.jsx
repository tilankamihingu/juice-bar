import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-map-react'

const Footer = () => {
    return (
        <div className="foot">
            <footer>
                <div className="main-content">
                    <div className="left-box">
                        <h2>Abuot Us</h2>
                        <div className="content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga pariatur, ipsa, fugiat quod nobis quos a sapiente, est corrupti enim animi eius esse deserunt? Dolor quasi commodi quae eius delectus!</p>
                        </div>
                    </div>
                    <div className="center-box">
                       <ul>
                           <li>best juices</li>
                           <li>other countries</li>
                           <li>best juices</li>
                           <li>other countries</li>
                       </ul>
                    </div>
                    <div className="right-box">
                        <Map google={this.props.google} zoom={14} >
                            <Marker onClick={this.onMarkerClick} name={`current location`} />
                            <InfoWindow onClose={this.onInfoWindowClose}>
                                <div>
                                    <h1>{this.state.selectedPlace.name}</h1>
                                </div>
                            </InfoWindow>
                        </Map>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default GoogleApiWrapper ({
    apiKey: ("AIzaSyAvd1agCML8jpOIjIze23E98gQ_O5EaH3A")
})(Footer)

