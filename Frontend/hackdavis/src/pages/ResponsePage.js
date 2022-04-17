import React from 'react'; 
import Information from '../Information/Info';


class ResponsePage extends React.Component {
    constructor(props) {
        super(props);
    }

    testLog() {
        console.log(JSON.stringify(Information.pos))
    }


    render() {
        return (
            <div >
                <h1>Test</h1>
                {this.testLog()}
            </div>
        )
    }

}


export default ResponsePage;