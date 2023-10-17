import cup from '../assets/more/logo1.png'
import bg from '../assets/more/15.jpg'


const Header = () => {
    return (
        <div className='flex h-32 items-center justify-center w-full' style={{backgroundImage:`url(${bg})`}}>
            <img className='h-20' src={cup} alt="" />
            <h1 className="font-normal text-3xl md:text-6xl text-white font-Rancho">Espresso Emporium</h1>
        </div>
    );
};

export default Header;