import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import {Consumer} from "../stores/AppContext.jsx";

function EventJumbotron(props){
    return (
        <div>
            <div className="jumbotron text-white text-right bg-dark">
                <div className="row">
                    <div className="col">
                        <img className="img-fluid" src="https://www.4geeksacademy.co/wp-content/themes/the-fastest/assets/img/logo-black.png"></img>
                        <h5>{props.dateTime}</h5>                       
                        <h1>{props.name}</h1>
                        <h3>{props.meetupID}</h3>
                        <a className="btn btn-primary btn-lg" href="#" role="button">Login</a>
                        <Consumer>
                            {({ state, actions }) => {
                                const user = state.session;
                                
                                var yesDisabled=props.RSVPYes.includes(user.id);
                                var noDisabled=props.RSVPNo.includes(user.id);
                                
                                //var yesDisabled
                                        
                                //var noDisabled=state.events.filter(item => {
                                   //return item.ID === parseInt (props.match.params.theid);
                                
                                    return <div className="col-md-3 text-center rounded rsvpBox">
                                        <h4 className="mb-4"> {props.RSVPYes.length} people going </h4>
                                        {!user.token ? 
                                            <div className="row mb-4"> 
                                                <div className="col mx-auto">
                                                    <button type="button" 
                                                            className="btn btn-primary"
                                                            data-toggle="modal"
                                                            data-target="#exampleModal"
                                                            onClick={ () => this.setState({login: true})}
                                                            >
                                                            Login to RSVP
                                                    </button>
                                                </div>
                                            </div>
                                        :
                                            <div className="row mb-4">
                                                <div className="col-md-6">
                                                    <button type="button" 
                                                            className="btn btn-primary w-100 yesBTN" 
                                                            disabled={yesDisabled} 
                                                            onClick={() => actions.rsvpEvent(   this.props.match.params.theid, 
                                                                                                user.id, 
                                                                                                "yes", 
                                                                                                user.token)}
                                                            >
                                                            Yes
                                                    </button>
                                                </div>
                                                <div className="col-md-6">
                                                    <button type="button" 
                                                            className="btn btn-primary w-100 noBTN"
                                                            disabled={noDisabled}
                                                            onClick={() => actions.rsvpEvent(   this.props.match.params.theid, 
                                                                                                user.id, 
                                                                                                "no", 
                                                                                                user.token)}
                                                            >
                                                            No
                                                    </button>
                                                </div>
                                            </div>
                                        }
                                    </div>;
                            }}
                        </Consumer>
                    </div>                
                </div>
            </div>
        </div>

        );
    }
    

EventJumbotron.propTypes = {
        dateTime: PropTypes.string,
        name: PropTypes.string,
        meetupID: PropTypes.number,
        match: PropTypes.object,
        RSVPNo: PropTypes.array,
        RSVPYes: PropTypes.array
    
    };


export default EventJumbotron;