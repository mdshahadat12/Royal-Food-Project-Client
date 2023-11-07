import Message from "../Components/Home/Message";
import Slider from "../Components/Home/Slider";
import TopSixContainer from "../Components/Home/topSixContainer";

const Home = () => {
    return (
        <>
            {/* banner */}
            <div className="h-[70vh] my-10 rounded-lg bg-green-500"></div>
            <TopSixContainer></TopSixContainer>
            <div className="h-[300px] my-10 w-[90vw]">
            <Slider></Slider>
            </div>
            <Message></Message>
     </>
    );
};

export default Home;