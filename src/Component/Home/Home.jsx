import HomeLeft from "./HomeLeft";
import HomeMedile from "./HomeMedile";
import HomeRight from "./HomeRight";

const Home = () => {
    return (
        <div className="flex ">
            <div className="col-span-1 bg-black lg:block lg:w-3/12  md:hidden hidden ">
                <HomeRight>
                </HomeRight>
            </div>
            <div className="col-span-2 w-full lg:flex-1">
                <HomeMedile>

                </HomeMedile>
            </div>
            <div className="col-span-1 lg:w-3/12 bg-black lg:block md:hidden hidden">
                <HomeLeft>

                </HomeLeft>
            </div>

        </div>
    );
};

export default Home;