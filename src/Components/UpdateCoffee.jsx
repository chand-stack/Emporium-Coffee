import { useLoaderData } from "react-router-dom";
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import bg from '../assets/more/11.png'

const UpdateCoffee = () => {
    const loadedCoffe = useLoaderData()
    console.log(loadedCoffe);

    const updateHandler = e => {
        e.preventDefault()
        const form = e.target 
    const name = form.name.value 
    const chef = form.chef.value 
    const supplier = form.supplier.value 
    const taste = form.taste.value 
    const category = form.category.value 
    const detail = form.detail.value 
    const photo = form.photo.value 
    console.log(name,chef,supplier,taste,category,detail,photo);

    const updatedCoffe = {
        name,chef,supplier,taste,category,detail,photo
    }
    }

    return (
        <div className='w-full' style={{backgroundImage:`url(${bg})`, backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
        <div className='container mx-auto'>
<Link to="/"><p className='lg:text-4xl  md:px-0 md:mx-32 md:text-2xl flex items-center gap-3 py-12'><BsArrowLeft/> Back To Home</p></Link>

<form onSubmit={updateHandler}>
<div className='bg-[#F4F3F0] p-3 md:p-10 md:mx-32'>

<h1 className='text-center text-2xl md:text-5xl mb-5'>Update Existing Coffee Details</h1>
<p className='text-center md:w-4/5 mx-auto'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
<div className='space-y-4 my-10'>

{/* first row */}

<div className='grid grid-cols-2 gap-2 md:gap-5'>
<div className='space-y-3'><h1 className='text-xl font-semibold'>Name</h1><input defaultValue={loadedCoffe.name} name='name' type="text" placeholder="Enter coffee name" className="input w-full" /></div>
<div className='space-y-3'><h1 className='text-xl font-semibold'>Chef</h1><input name='chef' defaultValue={loadedCoffe.chef} type="text" placeholder="Enter coffee chef" className="input w-full" /></div>
</div>
{/* second row */}

<div className='grid grid-cols-2 gap-2 md:gap-5'>
<div className='space-y-3'><h1 className='text-xl font-semibold'>Supplier</h1><input defaultValue={loadedCoffe.supplier} name='supplier' type="text" placeholder="Enter coffee name" className="input w-full" /></div>
<div className='space-y-3'><h1 className='text-xl font-semibold'>Taste</h1><input defaultValue={loadedCoffe.taste} name='taste' type="text" placeholder="Enter coffee chef" className="input w-full" /></div>
</div>
{/* third row */}

<div className='grid grid-cols-2 gap-2 md:gap-5'>
<div className='space-y-3'><h1 className='text-xl font-semibold'>Category</h1><input defaultValue={loadedCoffe.category} name='category' type="text" placeholder="Enter coffee name" className="input w-full" /></div>
<div className='space-y-3'><h1 className='text-xl font-semibold'>Details</h1><input defaultValue={loadedCoffe.detail} name='detail' type="text" placeholder="Enter coffee chef" className="input w-full" /></div>
</div>

<div className='space-y-3'><h1 className='text-xl font-semibold'>Photo</h1><input defaultValue={loadedCoffe.photo} name='photo' type="text" placeholder="Enter photo URL" className="input w-full" /></div>

<button type='submit' className='btn w-full text-[#331A15] bg-[#D2B48C] border-2 border-[#331A15]'>Add Coffee</button>
</div>



</div>
</form>
        </div>
    </div>
    );
};

export default UpdateCoffee;