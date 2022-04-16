import React from 'react'; 

class AboutUs extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <h1>{this.props.name} </h1>
                <h3>Major: {this.props.major}</h3>
                <h4>Bio: {this.props.bio}</h4>
            </div>
        )
    }
}

export default AboutUs;