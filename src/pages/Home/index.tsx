import { Fragment } from "react";
import HomeCarousel from "./HomeCarousel";
import LearnOnline from "./LearnOnline";
import WhyUs from "./WhyUs";
import HomeSteps from "./HomeSteps";
import AboutUs from "./AboutUs";
import StudyPlan from "./StudyPlan";
import Statistics from "./Statistics";
import Courses from "./Courses";
import Testimonials from "./Testimonials";
import Tutors from "./Tutors";

const Home = () => {
  return (
    <Fragment>
      <HomeCarousel />
      <LearnOnline />
      <WhyUs />
      <HomeSteps />
      <StudyPlan />
      <Courses />
      <Statistics />
      <Testimonials />
      <Tutors />
      <AboutUs />
    </Fragment>
  );
};

export default Home;
