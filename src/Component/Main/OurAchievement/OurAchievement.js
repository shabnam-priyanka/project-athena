import React from 'react';
import './OurAchievement.css';
import happy from '../../../image/happy@2x.png';
import marketing from '../../../image/marketing@2x.png';
import surface from '../../../image/surface1@2x.png';
import transport from '../../../image/transportation@2x.png';



const OurAchievement = () => {
    return (
        <div className='container'>
            <div className="d-inline-flex">
                <div className="col-md-4 justify-content-start align-self-center">
                    <h1>Our Achievement</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Modi magni eligendi expedita quas, rem nam id suscipit quos
                    recusandae enim cum accusamus, nostrum vitae totam dolores
                        ipsum possimus! Et, optio! </p>

                    <button className="btn btn-success">Get Started</button>
                </div>
                <div className="d-flex flex-wrap col-md-8 justify-content-end">
                    <div class="card m-3" style={{width: '15rem', height:'5rem', borderRadius: '0 50px'}} className='beauty' >
                        <div class="card-body text-dark d-flex">
                            <div>
                            <img src={happy} alt="" style={{color:'black', width:'50%', height:'50%' }} className='cmn-text' />
                            </div>
                            <div>
                            <h5 class="card-title cmn-text"> treatment</h5>
                            <p class="card-text cmn-text"> content.</p>
                            
                            </div>
                        </div>
                    </div>

                    <div class="card text-center m-3" style={{width: '15rem', height:'5rem', borderRadius: ' 50px 0'}} className='beauty' >
                    <div class="card-body text-dark d-flex">
                            <div>
                            <img src={marketing} alt="" style={{color:'black', width:'50%', height:'50%' }} className='cmn-text' />
                            </div>
                            <div>
                            <h5 class="card-title cmn-text"> treatment</h5>
                            <p class="card-text cmn-text"> content.</p>
                            
                            </div>
                        </div>
                    </div>

                    <div class="card text-right m-3" style={{width: '15rem', height:'5rem', borderRadius: '0 50px'}} className='beauty' >
                    <div class="card-body text-dark d-flex">
                            <div>
                            <img src={surface} alt="" style={{color:'black', width:'50%', height:'50%' }} className='cmn-text' />
                            </div>
                            <div>
                            <h5 class="card-title cmn-text"> treatment</h5>
                            <p class="card-text cmn-text"> content.</p>
                            
                            </div>
                        </div>
                    </div>
                    <div class="card text-right m-3" style={{width: '15rem', height:'5rem', borderRadius: ' 50px 0'}} className='beauty' >
                    <div class="card-body text-dark d-flex">
                            <div>
                            <img src={transport} alt="" style={{color:'black', width:'50%', height:'50%' }} className='cmn-text' />
                            </div>
                            <div>
                            <h5 class="card-title cmn-text"> treatment</h5>
                            <p class="card-text cmn-text"> content.</p>
                            
                            </div>
                        </div>
                    </div>
                    {/* <div class="container first-part">
                        <div class="row d-flex">
                            <div class="card-deck">
                                <div class="card card-withhover text-center border w-50">
                                    <img src={happy} class="card-img-top img-fluid w-50 " alt="..." />
                                    <div class="card-body">
                                        <h4 class="card-text" style={{ color: ' #413960' }}>1500+ Topic</h4>
                                        <p class="card-text"><small class="text-muted">Learn Anythings</small></p>
                                    </div>
                                </div>
                                <div class="card card-withhover text-center">
                                    <img src={marketing} class="card-img-top img-fluid w-50" alt="..." />
                                    <div class="card-body">
                                        <h4 class="card-text" style={{ color: '#413960' }}>1800+ Students</h4>
                                        <p class="card-text"><small class="text-muted">Learn Anythings</small></p>
                                    </div>
                                </div>
                                <div class="card card-withhover text-center">
                                    <img src={surface} class="card-img-top img-fluid w-50" alt="..." />
                                    <div class="card-body">
                                        <h4 class="card-text" style={{ color: ' #413960' }}>9K+ Test Token</h4>
                                        <p class="card-text"><small class="text-muted">Learn Anythings</small></p>
                                    </div>
                                </div>
                                <div class="card card-withhover text-center">
                                    <img src={transport} class="card-img-top img-fluid w-50" alt="..." />
                                    <div class="card-body">
                                        <h4 class="card-text" style={{ color: '#413960' }}>2000+ Student</h4>
                                        <p class="card-text"><small class="text-muted">Learn Anythings</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default OurAchievement;