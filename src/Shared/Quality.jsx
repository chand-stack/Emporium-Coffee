import imgone from '../assets/icons/1.png'
import imgtwo from '../assets/icons/2.png'
import imgthree from '../assets/icons/3.png'
import imgfour from '../assets/icons/4.png'

const Quality = () => {
    return (
        <div className="bg-[#ECEAE3] w-full">
            <div className="container mx-auto">
                <div className='grid grid-cols-2 md:grid-cols-4 gap-3 px-10 py-14 lg:px-20'>

<div>
    <img src={imgone} alt="" />
    <h1 className='text-[#331A15] text-4xl'>Awesome Aroma</h1>
    <p className='text-[#1B1A1A]'>You will definitely be a fan of the design & aroma of your coffee</p>
</div>
<div>
    <img src={imgtwo} alt="" />
    <h1 className='text-[#331A15] text-4xl'>High Quality</h1>
    <p className='text-[#1B1A1A]'>We served the coffee to you maintaining the best quality</p>
</div>
<div>
    <img src={imgthree} alt="" />
    <h1 className='text-[#331A15] text-4xl'>Pure Grades</h1>
    <p className='text-[#1B1A1A]'>The coffee is made of the green coffee beans which you will love</p>
</div>
<div>
    <img src={imgfour} alt="" />
    <h1 className='text-[#331A15] text-4xl'>Proper Roasting</h1>
    <p className='text-[#1B1A1A]'>Your coffee is brewed by first roasting the green coffee beans</p>
</div>





                </div>

            </div>
            
        </div>
    );
};

export default Quality;