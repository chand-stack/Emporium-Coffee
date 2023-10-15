import cup1 from '../assets/cups/Rectangle 10.png'
import cup2 from '../assets/cups/Rectangle 11.png'
import cup3 from '../assets/cups/Rectangle 12.png'
import cup4 from '../assets/cups/Rectangle 13.png'
import cup5 from '../assets/cups/Rectangle 14.png'
import cup6 from '../assets/cups/Rectangle 15.png'
import cup7 from '../assets/cups/Rectangle 16.png'
import cup8 from '../assets/cups/Rectangle 9.png'

const Instagram = () => {
    return (
        <div className="container mx-auto mt-28 space-y-4">
            <h1 className='text-center'>Follow Us Now</h1>
            <h2 className='text-center text-4xl md:text-6xl'>Follow on Instagram</h2>

<div className='grid grid-cols-2 md:grid-cols-4 gap-3 px-2 mt-10'>
    <img className='mx-auto' src={cup1} alt="" />
    <img className='mx-auto' src={cup2} alt="" />
    <img className='mx-auto' src={cup3} alt="" />
    <img className='mx-auto' src={cup4} alt="" />
    <img className='mx-auto' src={cup5} alt="" />
    <img className='mx-auto' src={cup6} alt="" />
    <img className='mx-auto' src={cup7} alt="" />
    <img className='mx-auto' src={cup8} alt="" />
</div>

        </div>
    );
};

export default Instagram;