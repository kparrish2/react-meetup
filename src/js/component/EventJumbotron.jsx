import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import {Consumer} from "../stores/AppContext.jsx";

function EventJumbotron(props){
    return (
        <div>
            <div className="jumbotron text-white text-right bg-dark">
                <div className="row">
                    <div className="col text-left">
                    
                        {/*<Consumer>
                            {({ state, actions }) => 
                            (
                                state.events.map((item,index)=>{
                                    return <EventInfo 
                                            key={index}
                                            ID={item.ID}
                                            name={item.name}
                                            dateTime={item.dateTime}
                                            description={item.description}
                                            location={item.location}
                                            RSVPYes={item.RSVPYes}
                                            RSVPNo={item.RSVPNo}
                                            />;
                                    
                                })
                                
                            )
                        }
                        </Consumer>*/}
                    
                        <h5>Apr 28</h5>
                        <h1>5th Event for meetup 1</h1>
                        <h4 className="text-primary">Meetup 1</h4>
                    </div>
                    <div className="card text-white text-center bg-secondary mb-3">
                        <div className="card-body">
                            <h2 className="card-title">3 People Going</h2>
                            <a href="#" className="btn btn-primary">Login to RSVP</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default EventJumbotron;