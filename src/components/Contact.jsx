import React from 'react'
import {motion} from 'framer-motion';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaTwitter } from 'react-icons/fa';

const Contact = () => {
    const [result,setResult] =React.useState("");
    const onSubmit =async (event) =>{
        event.preventDefault();
        setResult("Sending...");
        const formData=new FormData(event.target);
        formData.append("access_key","5456bbfe-bf0b-4a08-ad96-ecc697f96b68");

        const response =await fetch("https://api.web3forms.com/submit",{
            method:"POST",
            body:formData
        });
        const data = await response.json();

        if(data.success) {
            setResult("");
            toast.success("Form Submitted Successfully");
            event.target.reset();
        }
        else {
            toast.error(data.message);
            setResult("");
        }
    };
  return (
    <motion.div
    initial={{opacity:0,y:50}}
    whileInView={{opacity:1, y:0}}
    transition={{duration:1,ease:'easeOut'}}
    viewport={{once:false, amount:0.2}}
    id="Contact"
    className='py-20 bg-dark-200'
    >
    <div className='container mx-auto px-6'>
        <h2 className='text-3xl font-bold text-center mb-4'>Get In
        <span className='text-purple'>Touch</span></h2>
        <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Have a project in mind or want to collaborate? Let's talk!</p>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>
            <div>
                <form onSubmit={onSubmit} className='space-y-6'>
                      <div>
                        <label htmlFor='name' className='block text-gray-300 mb-2'>Your Name</label>
                        <input type='text' className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none'></input>
                      </div>
                      <div>
                        <label htmlFor='email' className='block text-gray-300 mb-2'>Your Email</label>
                        <input type='email' className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none'></input>
                      </div>
                      <div>
                        <label htmlFor='message' className='block text-gray-300 mb-2'>Your Message</label>
                        <textarea type='text' className='w-full h-35  bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none'></textarea>
                      </div>
                      <button type='submit' className='w-full px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300 cursor-pointer'>
                        {result? result:"Send"}
                      </button>
            </form>
            </div>

            <div className='space-y-8 pt-4'>
                <div  className='flex items-start'>
                    <div className='text-purple text-2xl mr-4'>
                    <FaMapMarkerAlt/>

                    </div>
                    <div>
                        <h3 className='text-lg font-semibold mb-2'>Location</h3>
                        <p className='text-gray-400'>Gurugram, Haryana</p>
                    </div>
                </div>
                <div  className='flex items-start'>
                    <div className='text-purple text-2xl mr-4'>
                    <FaEnvelope/>

                    </div>
                    <div>
                        <h3 className='text-lg font-semibold mb-2'>Email</h3>
                        <p className='text-gray-400'>danishmanyotra@gmail.com</p>
                    </div>
                </div>
                <div  className='flex items-start'>
                    <div className='text-purple text-2xl mr-4'>
                    <FaPhone/>

                    </div>
                    <div>
                        <h3 className='text-lg font-semibold mb-2'>Phone</h3>
                        <p className='text-gray-400'>+91 6005935329</p>
                    </div>
                </div>
                <div className='pt-4'>
                    <h3 className='text-lg font-semibold mb-4'>Follow Me</h3>
                    <div className='flex space-x-4'>
                    <a href='https://github.com/Danishmanyotra'
                    target="_blank" 
  rel="noopener noreferrer"
                    
                     className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple hover:bg-purple hover:text-white transition duration-300'>
                        <FaGithub/>
                    </a>
                     <a href='https://www.linkedin.com/in/danish-manyotra-ab08b3339/'
                     target="_blank" 
  rel="noopener noreferrer"

                      className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple hover:bg-blue hover:text-white transition duration-300'>
                        <FaLinkedin/>
                    </a>
                     <a href='https://x.com/danishmanyotra'
                     target="_blank" 
  rel="noopener noreferrer"
                      className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple hover:bg-blue hover:text-white transition duration-300'>
                        <FaTwitter/>
                    </a>
                     <a href='https://www.instagram.com/danish_rajput_03/'
                     target="_blank" 
  rel="noopener noreferrer"
                      className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple hover:bg-purple hover:text-white transition duration-300'>
                        <FaInstagram/>
                    </a>

                    </div>
                </div>
            </div>
        </div>
    </div>
      
    </motion.div>
  )
}

export default Contact
