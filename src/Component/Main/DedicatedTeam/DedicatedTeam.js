import React from 'react';
import './DedicatedTeam.css';

const DedicatedTeam = () => {
    return (
        <div className='container p-5 text-center team-container'>
        
        <div className='container p-5 text-center'>
            <h1 className='text-center' style={{fontFamily: 'Abril Fatface'}}> Choose Your Dedicated Team</h1>
            <div>
                <div class="card-deck p-5">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">$199</h5>
                            <small>For Basic</small>
                            <hr />
                            <div className="card-content">
                                <p class="card-text"> Homepage</p>
                                <p class="card-text"> No Inner Page</p>
                                <p class="card-text"> Asset file</p>
                                <p class="card-text"> Source file</p>
                                <p class="card-text"> Free Stock Photos</p>
                                <p class="card-text"> 10 Days Free Support</p>
                                <p class="card-text"> 24/7 Support</p>
                            </div>
                            <div className="btn btn-team">
                                <button>Order Now</button>
                            </div>
                        </div>

                    </div>
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">$399</h5>
                            <small>For Preferred</small>
                            <hr />
                            <div className="card-content">
                                <p class="card-text"> Homepage</p>
                                <p class="card-text"> 4 Inner Pages</p>
                                <p class="card-text"> Asset file</p>
                                <p class="card-text"> Source file</p>
                                <p class="card-text"> Free Stock Photos</p>
                                <p class="card-text"> 20 Days Free Support</p>
                                <p class="card-text"> 24/7 Support</p>
                            </div>

                            <div className="btn btn-team">
                                <button>Order Now</button>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">$199</h5>
                            <small>For Basic</small>
                            <hr />
                            <div className="card-content">
                                <p class="card-text"> Homepage</p>
                                <p class="card-text"> 8 Inner Pages</p>
                                <p class="card-text"> Asset file</p>
                                <p class="card-text"> Source file</p>
                                <p class="card-text"> Free Stock Photos</p>
                                <p class="card-text"> 30 Days Free Support</p>
                                <p class="card-text"> 24/7 Support</p>
                            </div>

                            <div className="btn btn-team">
                                <button>Order Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default DedicatedTeam;