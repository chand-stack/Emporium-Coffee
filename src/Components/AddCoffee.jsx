import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import bg from '../assets/more/11.png'
const AddCoffee = () => {
    return (
        <div className='w-full' style={{backgroundImage:`url(${bg})`, backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
            <div className='container mx-auto'>
<Link><p className='lg:text-4xl md:text-2xl flex items-center gap-3 py-12'><BsArrowLeft/> Back To Home</p></Link>


<div className='bg-[#F4F3F0] p-3 md:p-10 md:mx-32'>

<h1 className='text-center text-2xl md:text-5xl mb-5'>Add New Coffee</h1>
<p className='text-center md:w-4/5 mx-auto'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
<div className='space-y-4 my-10'>

    {/* first row */}

    <div className='grid grid-cols-2 gap-2 md:gap-5'>
    <div className='space-y-3'><h1 className='text-xl font-semibold'>Name</h1><input type="text" placeholder="Enter coffee name" className="input w-full" /></div>
    <div className='space-y-3'><h1 className='text-xl font-semibold'>Chef</h1><input type="text" placeholder="Enter coffee chef" className="input w-full" /></div>
    </div>
    {/* second row */}

    <div className='grid grid-cols-2 gap-2 md:gap-5'>
    <div className='space-y-3'><h1 className='text-xl font-semibold'>Supplier</h1><input type="text" placeholder="Enter coffee name" className="input w-full" /></div>
    <div className='space-y-3'><h1 className='text-xl font-semibold'>Taste</h1><input type="text" placeholder="Enter coffee chef" className="input w-full" /></div>
    </div>
    {/* third row */}

    <div className='grid grid-cols-2 gap-2 md:gap-5'>
    <div className='space-y-3'><h1 className='text-xl font-semibold'>Category</h1><input type="text" placeholder="Enter coffee name" className="input w-full" /></div>
    <div className='space-y-3'><h1 className='text-xl font-semibold'>Details</h1><input type="text" placeholder="Enter coffee chef" className="input w-full" /></div>
    </div>

    <div className='space-y-3'><h1 className='text-xl font-semibold'>Photo</h1><input type="text" placeholder="Enter photo URL" className="input w-full" /></div>

    <button type='submit' className='btn w-full text-[#331A15] bg-[#D2B48C] border-2 border-[#331A15]'>Add Coffee</button>
</div>



</div>

            </div>
        </div>
    );
};

export default AddCoffee;