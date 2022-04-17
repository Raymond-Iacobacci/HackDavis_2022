import React from 'react'; 
import './aboutus.css';

class AboutUs extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="aboutus center">
                <h1>{this.props.name} </h1>
                <h3>Major: {this.props.major}</h3>
                <h4>Bio:</h4>
                <p>{this.props.bio}</p>
            </div>
        )
    }
}

export default AboutUs;