import { Fragment } from "react";
import HomeCarousel from "./HomeCarousel";
// import LearnOnline from "./LearnOnline";
import WhyUs from "./WhyUs";
import HomeSteps from "./HomeSteps";
import AboutUs from "./AboutUs";
import StudyPlan from "./StudyPlan";
import Statistics from "./Statistics";

const Home = () => {
  return (
    <Fragment>
      <HomeCarousel />
      {/* <LearnOnline /> */}
      <WhyUs />
      <HomeSteps />
      <StudyPlan />
      <Statistics />
      <AboutUs />
    </Fragment>
  );
};

export default Home;
