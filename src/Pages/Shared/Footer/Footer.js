import React from 'react';
import { IconContext } from 'react-icons';
import { FaGithub, FaFacebook, FaLinkedin, FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <div style={{marginTop: '100px',}} className='text-center p-5 text-light bg-secondary'>
      <div>
        <h1>Follow Us</h1>
        <div className='d-flex justify-content-center mt-3'>
          <IconContext.Provider
            value={{ color: 'orange', size: '40px'}}
          >
            <div>
              <FaDiscord className='me-2'></FaDiscord>
              <FaLinkedin className='me-2'></FaLinkedin>
              <FaFacebook className='me-2'></FaFacebook>
              <FaGithub></FaGithub>
            </div>
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default Footer;