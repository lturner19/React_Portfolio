import React from 'react';
import './Footer.css';
import { Grid, Cell } from 'react-mdl';

function Footer() {
    return (


        <div className="sticky-footer">
            <Grid className="footer">
                <Cell col={6}>
                    <div className="social-links">
                        {/* Linkedin */}
                        <a href="https://www.linkedin.com/in/leandraturner" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-linkedin-square" aria-hidden="true"></i></a>

                        {/* Github */}
                        <a href="https://github.com/lturner19" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-github-square" aria-hidden="true"></i></a>
                    </div>
                    {/* end of column 1  */}
                </Cell>
                <Cell col={6}>
                    <div className="contact">
                        <p><i className="fa fa-mobile" aria-hidden="true"></i>lturner19@protonmail.com</p>
                        <p><i className="fa fa-envelope-o" aria-hidden="true"></i>512.673.6253</p>
                    </div>
                </Cell>
            </Grid >
        </div >



    )
}

export default Footer;