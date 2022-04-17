import React from 'react'; 
import './home.css';

class Home extends React.Component {
    constructor(props) {
        super(props) 

    }


    render() {
        return( 
            <div className="home">
              <div className='test'>
                <header className="masthead">
                    <div className="container position-relative px-4 px-lg-5">
                        <div className="row gx-4 gx-lg-5 justify-content-center">
                            <div className="col-md-10 col-lg-8 col-xl-7">
                                <div className="page-heading">
                                    <h1>Welcome to REDC</h1>
                                    <span className="subheading">Reuseable Energy Data Collection</span>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </header>
                </div>
                <main className="mb-4">
                    <div className="container px-4 px-lg-5">
                        <div className="row gx-4 gx-lg-5 justify-content-center">
                            <div className="col-md-10 col-lg-8 col-xl-7">
                                <p>Welcome to the Renewable Energy Farm predictor. This collaboration comes from a group of UC Davis students with diverse background in order to help create renewable energy data easier to access. </p>
                                <p>The goal of this project is to generate predictions of future wind speeds and their ideal directions. We want to predict changes in wind direction and wind speeds in the near future using machine learning. By predicting the future ideal conditions for wind turbines there will be an energy use reduction for turbines that are able to freely rotate as they use energy to rotate. This will allow them to decrease the amount of times they need to change their direction for wind. Another additional benefit is predicting models for potential wind turbines to be built in the near future. Figuring out how to predict these models will further the development of wind turbines throughout the US, in order to lower carbon emissions overall.</p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )

    }

}

export default Home; 