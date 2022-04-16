import React from 'react'; 

class AboutUs extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        return(
            <div>
                <h1>{this.props.name} </h1>
                <h2>{this.props.bio}</h2>
            </div>


        )
    }


}

export default AboutUs;