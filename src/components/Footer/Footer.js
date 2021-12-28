import React from 'react';
import './Footer.css';
import CULogo from "../../images/University_of_Chittagong_logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";
import Copyright from './Copyright/Copyright';

const Footer = () => {
    return (
        <div className="footer">
            <div class="row justify-content-evenly">
                <div class="col-4 mt-5 text-center">
                    <img style={{ marginBottom: '10px' }} src={CULogo} alt="" srcset="" />
                    <h3 className="text-danger"><strong>University Of Chittagong</strong></h3>
                    <a href="https://www.facebook.com/ictcu" target="_blank" rel="norefferer"><FontAwesomeIcon icon={faFacebook} size="2x"></FontAwesomeIcon></a>
                    <a href="https://www.youtube.com/channel/UClQg__wc5h3uW_YHSD-iMbg" target="_blank" rel="norefferer"><FontAwesomeIcon style={{ marginLeft: "15px" }} icon={faYoutube} size="2x" /></a>
                </div>
                <div className="col-4 ict mt-5 text-center">
                <h3 className="text-danger"><strong>Contact</strong></h3>
                    <b>ICT Cell Help Desk</b>
                    <br/>
                    <b>01555555140, 01555555141, 01556570077</b>
                    <br/>
                    <b>Email: admission@cu.ac.bd</b>
                    <br/>
                    <b>Working Hour: 9.00AM - 9.00PM</b>
                    <br/>
                    <b>Location: ICT Cell, IT Building, University of Chittagong</b>
                    <br/>
                    <b>Official SMS: 01708404777, 01841644355</b>
                </div>
            </div>
        </div>
    );
};

export default Footer;