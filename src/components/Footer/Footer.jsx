import React from 'react';
import Map from '../Map';
import './Footer.css';

const Footer = () => {
    return (
        <div className="foot">
            <footer>
                <div className="main-content">
                    <div className="left-box">
                        <h2>Abuot Us</h2>
                    
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga pariatur, ipsa, fugiat quod nobis quos a sapiente, est corrupti enim animi eius esse deserunt? Dolor quasi commodi quae eius delectus!</p>
                    </div>
                    <div className="center-box">
                        <h3>Quick Contacts</h3>
                       <ul>
                           <li>02568935</li>
                           <li>aqua@gmail.com</li>
                           <li>Aqua store</li>
                           <li>galle,sri lanka</li>
                       </ul>
                        <p>Copyright@tilankamihingu</p>
                    </div>
                    <div className="right-box">
                        {/*<Map google={this.props.google} zoom={14} >
                            <Marker onClick={this.onMarkerClick} name={`current location`} />
                            <InfoWindow onClose={this.onInfoWindowClose}>
                                <div>
                                    <h1>{this.state.selectedPlace.name}</h1>
                                </div>
                            </InfoWindow>
    </Map>*/}
                        <Map />
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default Footer
/*export default GoogleApiWrapper ({
    apiKey: ("AIzaSyAvd1agCML8jpOIjIze23E98gQ_O5EaH3A")
})(Footer)*/

