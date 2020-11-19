import React from 'react';
import './DesignRight.css';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
const DesignRight = () => {
    return (
        <div className='container p-5 text-center' >
            <h1 style={{fontFamily: 'Abril Fatface'}}>Get your design right, right now</h1>
            <small>Be the first know our latest offers and updates!</small>
            <div className="row" >
                <div className="col-md-2">

                </div>
                <div className="col-md-8">
                    <Form className="form-group"  >
                        <input type="text" className="form-control" name="email" placeholder="Enter Your Email Address..." />
                        <button className="btn btn-get">Submit</button>

                    </Form>
                </div>
                <div className="col-md-2">

                </div>
            </div>
        </div>
    );
};

export default DesignRight;