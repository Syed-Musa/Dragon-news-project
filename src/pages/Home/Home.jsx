import Header from "../Shared/Header/Header";
import LeftSideMap from "../Shared/LeftSideMap/LeftSideMap";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideMap from "../Shared/RightSIdeMap/RightSideMap";
import BreakingNews from "./BreakingNews";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                <div className="border">
                    <LeftSideMap></LeftSideMap>
                </div>
                <div className="md:col-span-2 border">
                    <h2 className="text-4xl">News coming soon..</h2>
                </div>
                <div className="border">
                    <RightSideMap></RightSideMap>
                </div>
            </div>
        </div>
    );
};

export default Home;