import React from 'react';
import './WhatWeDo.css';
import image1 from '../../../image/Group 65@2x.png';
import image2 from '../../../image/Group 66@2x.png';
import image3 from '../../../image/Group 69@2x.png';
import image4 from '../../../image/Group 72@2x.png';



const WhatWeDo = () => {
    return (
        <div className='whatwedo'>
            <div className='text-center '>
                <h1 style={{fontFamily: 'Abril Fatface', marginTop:150}}>What We Do</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, facilis.</p>
            </div>

            <div className=" d-flex flex-wrap">
                <div class="container first-part p-2 background">
                    <div class="d-flex justify-content-center flex-column">
                        <div class="card-deck">
                            <div class="col-md-4 card card-withhover text-center hob">
                                <img src={image1} class="card-img-top img-fluid w-50 " alt="..." style={{ margin: 'auto' }} />
                                <div class="card-body">
                                    <h5 class="card-text" style={{ color: ' #413960' }}>Experience Design</h5>
                                    <p class="card-text"><small class="text-muted">Learn Anythings</small></p>
                                </div>
                            </div>
                            <div class="col-md-4 card card-withhover text-center hob">
                                <img src={image2} class="card-img-top img-fluid w-50" alt="..." style={{ margin: 'auto' }} />
                                <div class="card-body">
                                    <h5 class="card-text" style={{ color: '#413960' }}>Interface Design</h5>
                                    <p class="card-text"><small class="text-muted">Learn Anythings</small></p>
                                </div>
                            </div>
                            <div class="card card-withhover text-center hob">
                                <img src={image3} class="card-img-top img-fluid w-50" alt="..." style={{ margin: 'auto' }} />
                                <div class="card-body">
                                    <h5 class="card-text" style={{ color: ' #413960' }}>Prototyping</h5>
                                    <p class="card-text"><small class="text-muted">Learn Anythings</small></p>
                                </div>
                            </div>
                            <div class="card card-withhover text-center hob">
                                <img src={image4} class="card-img-top img-fluid w-50" alt="..." style={{ margin: 'auto' }} />
                                <div class="card-body">
                                    <h5 class="card-text" style={{ color: '#413960' }}>Illustration</h5>
                                    <p class="card-text"><small class="text-muted">Learn Anythings</small></p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>


    );
};

export default WhatWeDo;