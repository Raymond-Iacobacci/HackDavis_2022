import React from 'react'; 
import './aboutus.css';

class AboutUs extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            
                        
 <div class="container bootstrap snippets bootdey py-5">
 <div class="profile card bg-dark ">
     <div class="profile-body">
         <div class="profile-bio">
             <div class="row">
                 <div class="col-md-5 text-center">
                     <img class="img-thumbnail md-margin-bottom-10" src={this.props.img} alt="" />
                 </div>
                 <div class="col-md-7">
                     <h2>{this.props.name}</h2>
                     <span><strong>Job:</strong> Web Developer</span>
                     <br />
                     <span><strong>Major:</strong>{this.props.major}</span>
                     <hr />
                     <p>{this.props.bio}</p>
                    </div>
             </div>    
         </div>
     </div>
 </div>
</div>                                                            
        )
    }
}

export default AboutUs;



/**
 * <div className="aboutus center">
                <h1>{this.props.name} </h1>
                <h3>Major: <em>{this.props.major}</em></h3>
                <h4>Bio:</h4>
                <p>{this.props.bio}</p>
            </div>

 */