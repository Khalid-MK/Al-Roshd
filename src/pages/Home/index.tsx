import { Fragment } from "react";
import HomeCarousel from "./HomeCarousel";
import LearnOnline from "./LearnOnline";
import WhyUs from "./WhyUs";
import HomeSteps from "./HomeSteps";

const Home = () => {
  return (
    <Fragment>
      <HomeCarousel />
      <LearnOnline />
      <WhyUs />
      <HomeSteps />
    </Fragment>
  );
};

export default Home;
