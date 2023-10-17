import { useLoaderData } from "react-router-dom";
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import bg from '../assets/more/11.png'

const Detail = () => {

    const loadedCoffee = useLoaderData()

    return (
        <div className='w-full' style={{backgroundImage:`url(${bg})`, backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
        <div className='container mx-auto'>
<Link to="/"><p className='lg:text-4xl  md:px-0 md:mx-32 md:text-2xl flex items-center gap-3 py-12'><BsArrowLeft/> Back To Home</p></Link>


<div className='bg-[#F4F3F0] p-3 md:p-10 md:mx-32'>

<div className="lg:flex justify-around items-center">
    <img className="h-80 w-64 mx-auto lg:mx-0" src={loadedCoffee.photo} alt="" />
    <div className="space-y-2">
        <p className="text-[#331A15] text-4xl my-4">Niceties</p>
        <p><span className="font-semibold">Name: </span>{loadedCoffee.name}</p>
        <p><span className="font-semibold">Chef: </span>{loadedCoffee.chef}</p>
        <p><span className="font-semibold">Supplier: </span>{loadedCoffee.supplier}</p>
        <p><span className="font-semibold">Taste: </span>{loadedCoffee.supplier}</p>
        <p><span className="font-semibold">Category: </span>{loadedCoffee.category}</p>
        <p><span className="font-semibold">Details: </span>{loadedCoffee.detail}</p>
    </div>
</div>




</div>

        </div>
    </div>
    );
};

export default Detail;