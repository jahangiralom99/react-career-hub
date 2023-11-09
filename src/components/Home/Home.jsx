import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";

const Home = () => {
    return (
        <div className="mx-12">
            <Banner></Banner>
            <Category></Category>
            <Featured></Featured>
            <h1>home components </h1>
        </div>
    );
};

export default Home;