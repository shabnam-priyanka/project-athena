import React from 'react';
import Navbar from './Navbar/Navbar';
import image from '../../image/16 [Converted]@2x.png'
import WhatWeDo from './WhatWeDo/WhatWeDo';
import RunningProject from './RunningProject/RunningProject';
import OurAchievement from './OurAchievement/OurAchievement';
import DedicatedTeam from './DedicatedTeam/DedicatedTeam';
import DesignRight from './DesignRight/DesignRight';
import Footer from './Footer/Footer';
import './Main.css'



const Main = () => {
    return (
        <div className='body'>
            <Navbar></Navbar>
            <div className="d-flex flex-wrap">
                <div className="col-md-4 justify-content-start align-self-center offset-md-1">
                    <h1 style={{fontFamily: 'Abril Fatface'}}>Florence <br/> agency</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Modi magni eligendi expedita quas, rem nam id suscipit quos
                        recusandae enim cum accusamus, nostrum vitae totam dolores
                        ipsum possimus! Et, optio! </p>
                
                    <button class="btn btn-success">Get Started</button>
                </div>
                <div className="col-md-6 justify-content-end">
                    <img src={image} class="card-img " alt="..." />
                </div>
            </div>
            <br/>
            <WhatWeDo></WhatWeDo>
            <br/>
            <RunningProject></RunningProject>
            <br/>
            <OurAchievement></OurAchievement>
            <br/>
            <DedicatedTeam></DedicatedTeam>
            <br/>
            <DesignRight></DesignRight>
            <Footer></Footer>
        </div>
    );
};

export default Main;