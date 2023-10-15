import banner from '../assets/more/3.png'

const Banner = () => {
    return (
        <div className='lg:h-screen md:flex justify-end p-2 md:p-4 lg:p-0  text-white' style={{backgroundImage:`url(${banner})`,backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>

            <div className=' md:w-2/4 md:mt-56'>
            <div className='space-y-3'>
            <h1 className='className="font-normal text-3xl md:text-6xl text-white"'>Would you like a Cup of Delicious Coffee?</h1>
            <p className='text-lg'>It&apos;s coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful <br /> moments and make them memorable.</p>
            <button className='text-[#242222] md:text-2xl bg-[#E3B577] btn rounded-none border-none'>Learn More</button>
            </div>
            </div>
            
        </div>
    );
};

export default Banner;