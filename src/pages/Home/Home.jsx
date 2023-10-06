import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideMap from "../Shared/LeftSideMap/LeftSideMap";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideMap from "../Shared/RightSIdeMap/RightSideMap";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";

const Home = () => {

    const newsData = useLoaderData();

    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                <div className="border">
                    <LeftSideMap></LeftSideMap>
                </div>
                {/* news container */}
                <div className="md:col-span-2">
                    {
                        newsData.map(aNews => <NewsCard key={newsData.id} newsData={aNews}></NewsCard>)
                    }
                </div>
                <div className="border">
                    <RightSideMap></RightSideMap>
                </div>
            </div>
        </div>
    );
};

export default Home;