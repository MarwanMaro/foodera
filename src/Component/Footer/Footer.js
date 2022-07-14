import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import "./Footer.css"

const Footer = () => {
  return (
    <>
      <footer className='FOOTER'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12 footerA text-center'>
                <a href="/#">Register</a>
                <a href="/#">Forum</a>
                <a href="/#">Affiliate</a>
                <a href="/#">FAQ</a>
                </div>
                <div className='social text-center'>
                    <a href='/#'> <FaFacebookF/> </a>
                    <a href='/#'> <FaTwitter/> </a>
                    <a href='/#'> <FaGoogle/> </a>
                    <a href='/#'> <FaLinkedinIn/> </a>
                    <a href='/#'> <FaGithub/> </a>
                    <a href='/#'> <FaInstagram/> </a>
                </div>
            </div>
        </div>

      </footer>
      <div className='footer-copy text-center'>
        <div className='container'>
            
        © 2022. Foodera. marwanessam555@gmail.com.
            
        </div>

      </div>
    </>
  )
}

export default Footer