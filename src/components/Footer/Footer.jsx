import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faTwitter,
    faFacebook,
    faInstagram,
    faGithub
} from '@fortawesome/free-brands-svg-icons';

function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className='px-0 pb-0 pt-5' id='footer'>
            <div className='images-footer'>
                <button className='rounded-circle'>
                    <i className='social-icon fab fa-twitter'>
                        <FontAwesomeIcon icon={faTwitter} />
                    </i>
                </button>
                <button className='rounded-circle'>
                    <i className='social-icon fab fa-facebook-f'>
                        <FontAwesomeIcon icon={faFacebook} />
                    </i>
                </button>
                <button className='rounded-circle'>
                    <i className='social-icon fab fa-instagram'>
                        <FontAwesomeIcon icon={faInstagram} />
                    </i>
                </button>
                <button className='rounded-circle'>
                    <i className='social-icon fas fa-envelope'>
                        <FontAwesomeIcon icon={faGithub} />
                    </i>
                </button>
            </div>
            <div className='footer-text-section py-4'>
                <div className='footer-text-upper'>
                    <p>© Copyright, RCA | Movie-list App</p>
                </div>
                <div className='footer-text-below'>
                    <p>
                        Made with{' '}
                        <span role='img' aria-label='love'>
                            ❤
                        </span>{' '}
                        and{' '}
                        <span role='img' aria-label='coffee'>
                            ☕
                        </span>{' '}
                        in Izmir, {year}
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
