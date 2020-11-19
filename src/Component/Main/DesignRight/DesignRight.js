import React from 'react';
import './DesignRight.css';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
const DesignRight = () => {
    return (
        <div className='container p-5 text-center' >
            <h1>Get your design right, right now</h1>
            <small>Be the first know our latest offers and updates!</small>
            <Form inline className='justify-content-center' >
                        <FormControl type="text" placeholder="Search Details" className="lomba" />
                        <Button variant="success" className='ton'>Search</Button>

                </Form>
        </div>
    );
};

export default DesignRight;