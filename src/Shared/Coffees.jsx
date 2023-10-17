import { Link } from 'react-router-dom';
import bg from '../assets/more/1.png'
import { GiCoffeeCup } from 'react-icons/gi';
import { useEffect, useState } from 'react';
import Coffe from './Coffe';
const Coffees = () => {
    const[coffees,setCoffees]=useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/coffees')
        .then(res => res.json())
        .then(data => setCoffees(data))
    },[])
    // console.log(coffees);
    return (
        <div className='mt-28 space-y-4' style={{backgroundImage:`url(${bg})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
            <h1 className='text-center'>--- Sip & Savor ---</h1>
            <h2 className='text-center text-4xl md:text-6xl font-Rancho text-[#331A15]'>Our Popular Products</h2>
            <div className='flex justify-center'>
            <Link to="/addcoffee"><button className='btn bg-[#E3B577] border-2 border-[#331A15]'><span className='flex items-center gap-3 text-white'>Add Coffee <GiCoffeeCup className='text-[#331A15]'/></span></button></Link>
            </div>
            <div className='grid lg:grid-cols-2 gap-6 px-2 md:px-10 container mx-auto'>
                {
                    coffees?.map(coffe => <Coffe key={coffe?._id} coffe={coffe} setCoffees={setCoffees} coffees={coffees}></Coffe>)
                }
            </div>
        </div>
    );
};

export default Coffees;