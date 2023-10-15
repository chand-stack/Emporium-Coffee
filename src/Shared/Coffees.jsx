import { Link } from 'react-router-dom';
import bg from '../assets/more/1.png'
import { GiCoffeeCup } from 'react-icons/gi';
const Coffees = () => {
    return (
        <div className='mt-28 space-y-4' style={{backgroundImage:`url(${bg})`,backgroundRepeat:"no-repeat"}}>
            <h1 className='text-center'>--- Sip & Savor ---</h1>
            <h2 className='text-center text-4xl md:text-6xl'>Our Popular Products</h2>
            <div className='flex justify-center'>
            <Link to="/addcoffee"><button className='btn bg-[#E3B577] border-2 border-[#331A15]'><span className='flex items-center gap-3 text-white'>Add Coffee <GiCoffeeCup className='text-[#331A15]'/></span></button></Link>
            </div>
        </div>
    );
};

export default Coffees;