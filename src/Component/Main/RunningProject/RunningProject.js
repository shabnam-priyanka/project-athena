import React from 'react';
import img from '../../../image/20 [Converted]@2x.png';

const RunningProject = () => {
    return (
        <div className='container container-fluid p-5'>
            <div className="d-flex flex-wrap">
                <div className="col-md-6 justify-content-end">
                    <img src={img} class="card-img w-75" alt="..." />
                </div>
                <div className="col-md-6 justify-content-start align-self-center">
                    <h1>Stay Running & Project</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Modi magni eligendi expedita quas, rem nam id suscipit quos
                    recusandae enim cum accusamus, nostrum vitae totam dolores
                        ipsum possimus! Et, optio! </p>

                    <button class="btn btn-success">Get Started</button>
                </div>

            </div>
        </div>
    );
};

export default RunningProject;