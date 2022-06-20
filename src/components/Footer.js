import React, { Component } from "react";

class Footer extends Component{

    render()
    {
        return(
            <>
                <div className="footer">
                    <div className="box-container">

                        <div className="box">
                            <h3>Product</h3>
                            
                                <p>Features</p>
                                <p>Pricing</p>
                                <p>Integrations</p>
                                <p>Product</p>
                            
                        </div>
                        <div className="box">
                            <h3>Company</h3>
                            
                                <p>About us</p>
                                <p>Contact us</p>
                                <p>Submit a ticket</p>
                                <p>Privacy policy</p>
                                <p>Terms & conditions</p>
                        </div>
                        <div className="box">
                            <h3>Users</h3>
                            
                                <p>Login</p>
                                <p>Get a demo</p>
                                <p>Talk to us</p>
                                <p>Privacy policy</p>
                                <p>Terms & conditions</p>
                        </div>
                        <div className="box">
                            <h3>Guides</h3>
                            
                                <p>MSP</p>
                                <p>MSP Sales</p>
                        </div>
                        <div className="box">
                            <h3>Contact Us</h3>
                            
                                <p>Address</p>
                        </div>

                        <div className="credit">
                            <p>&#169; 2020 Pactora Inc. All rights reserved.</p>
                            <p>Follow us on social</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Footer;