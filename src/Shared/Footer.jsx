import bg from '../assets/more/13.jpg'
import logo from '../assets/more/logo1.png'
import { AiFillLinkedin } from 'react-icons/ai';
import { IoMailSharp } from 'react-icons/io5';
import { FaLocationDot } from 'react-icons/fa6';
import { BsFacebook,BsTwitter,BsInstagram,BsFillTelephoneFill } from 'react-icons/bs';
import footerbg from '../assets/more/28.jpg'
const Footer = () => {
    return (
        <div className='w-full mt-10 text-[#331A15]' style={{backgroundImage:`url(${bg})`, backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>


            <div className='container mx-auto md:flex justify-around p-10 items-center gap-5'>
            <div className='space-y-4'>
             <img className='h-24' src={logo} alt="" />
             <h1 className='text-5xl'>Espresso Emporium</h1>
             <p>Always ready to be your friend. Come & Contact with us to share your <br /> memorable moments, to share with your best companion.</p>
             <div className='flex items-center gap-2 text-3xl'>
                <BsFacebook/>
                <BsInstagram/>
                <BsTwitter/>
                <AiFillLinkedin/>
             </div>
             <p className='text-5xl'>Get in Touch</p>
             <p className='flex items-center gap-3 font-semibold'><BsFillTelephoneFill/>+88 01533 333 333</p>
             <p className='flex items-center gap-3 font-semibold'><IoMailSharp/>info@gmail.com</p>
             <p className='flex items-center gap-3 font-semibold'><FaLocationDot/>72, Wall street, King Road, Dhaka</p>
            </div>

            <div className='space-y-3'>
<h1 className='text-5xl'>Connect with Us</h1>
<input type="text" placeholder="Name" className="input w-full max-w-xs" /> <br />
<input type="text" placeholder="Email" className="input w-full max-w-xs" /> <br />
<textarea placeholder="Message" className="textarea  textarea-md w-full max-w-xs" ></textarea> <br />
<button className="btn btn-outline rounded-full">Send Message</button>

            </div>

            </div>
            
<div style={{backgroundImage:`url(${footerbg})`}}>
<footer className="footer footer-center p-4 text-base-content bg-black bg-opacity-50" >
  <aside>
    <p className='text-white text-xl'>Copyright Espresso Emporium ! All Rights Reserved</p>
  </aside>
</footer>
</div>
            

        </div>
    );
};

export default Footer;