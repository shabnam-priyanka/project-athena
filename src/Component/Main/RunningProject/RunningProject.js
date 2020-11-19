import React from 'react';
import img from '../../../image/20 [Converted]@2x.png';
import './RunningProject.css'
const RunningProject = () => {
    return (
        <section className="runningBG">
            <div className="d-flex flex-wrap justify-content-center">
                <div className="col-md-6 justify-content-start  ">
                    <img src={img} class="card-img w-100" alt="..." />
                </div>
                <div className="col-md-4 justify-content-end align-self-center offset-md-1">
                    <h1 style={{fontFamily: 'Abril Fatface'}}>Stay Running & Projects</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Modi magni eligendi expedita quas, rem nam id suscipit quos
                        recusandae enim cum accusamus, nostrum vitae totam dolores
                        ipsum possimus! Et, optio! </p>
                
                    <button class="btn btn-success">Contact US</button>
                </div>
            </div>
        </section>
    );
};

export default RunningProject;