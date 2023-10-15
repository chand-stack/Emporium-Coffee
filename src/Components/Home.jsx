import Banner from "../Shared/Banner";
import Coffees from "../Shared/Coffees";
import Instagram from "../Shared/Instagram";
import Quality from "../Shared/Quality";


const Home = () => {
    return (
        <div>
            <div className="w-full">
            <Banner/>
            </div>
            <Quality/>
            <Coffees/>
            <Instagram/>
        </div>
    );
};

export default Home;