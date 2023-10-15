import Banner from "../Shared/Banner";
import Header from "../Shared/Header";
import Quality from "../Shared/Quality";


const Home = () => {
    return (
        <div>
            <Header/>
            <div className="w-full">
            <Banner/>
            </div>
            <Quality/>
        </div>
    );
};

export default Home;