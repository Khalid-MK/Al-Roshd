import { useEffect, useState } from "react";

import { Button, Flex } from "antd";

import slider1 from "../../../assets/images/general-hero-slide-desktop.svg";
import slider2 from "../../../assets/images/Quran-desktop-slider.svg";
import slider3 from "../../../assets/images/Arabic-language-desktop-slider.svg";
import slider4 from "../../../assets/images/Islamic-studies-desktop-slider.svg";
import slider22 from "../../../assets/images/Arabic-language-courses-mobile-slider.svg";
import OneItemCarousel from "../../../components/Carousel/OneItemCarousel";
import styles from "./index.module.css";

const HomeCarousel = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const LargeCarouselItems = [
    <div className={styles.carouselLargeItemsContainer}>
      <img src={slider1} alt="slider1" />
      <Flex
        vertical
        justify="center"
        gap={"1rem"}
        className={styles.textLargeItemsContainer}
      >
        <h3>Online Quran, Arabic & Islamic Studies Courses</h3>
        <p>
          Your Quran, Tajweed, Arabic & Islamic Studies Journey starts here with
          Mishkah Academy.
        </p>
        <Button size="large" type="primary" className="buttonStyle1">
          Learn More
        </Button>
      </Flex>
    </div>,
    <div className={styles.carouselLargeItemsContainer}>
      <img src={slider2} alt="slider2" />
      <Flex
        vertical
        justify="center"
        gap={"1rem"}
        className={styles.textLargeItemsContainer}
      >
        <h3>Online Quran, Arabic & Islamic Studies Courses</h3>
        <p>
          Your Quran, Tajweed, Arabic & Islamic Studies Journey starts here with
          Mishkah Academy.
        </p>
        <Button size="large" type="primary" className="buttonStyle1">
          Learn More
        </Button>
      </Flex>
    </div>,
    <div className={styles.carouselLargeItemsContainer}>
      <img src={slider3} alt="slider3" />
      <Flex
        vertical
        justify="center"
        gap={"1rem"}
        className={styles.textLargeItemsContainer}
      >
        <h3>Online Quran, Arabic & Islamic Studies Courses</h3>
        <p>
          Your Quran, Tajweed, Arabic & Islamic Studies Journey starts here with
          Mishkah Academy.
        </p>
        <Button size="large" type="primary" className="buttonStyle1">
          Learn More
        </Button>
      </Flex>
    </div>,
    <div className={styles.carouselLargeItemsContainer}>
      <img src={slider4} alt="slider4" />
      <Flex
        vertical
        justify="center"
        gap={"1rem"}
        className={styles.textLargeItemsContainer}
      >
        <h3>Online Quran, Arabic & Islamic Studies Courses</h3>
        <p>
          Your Quran, Tajweed, Arabic & Islamic Studies Journey starts here with
          Mishkah Academy.
        </p>
        <Button size="large" type="primary" className="buttonStyle1">
          Learn More
        </Button>
      </Flex>
    </div>,
  ];

  const SmallCarouselItems = [
    <div
      style={{ backgroundImage: `url(${slider22})` }}
      className={styles.carouselSmallSizeContainer}
    >
      <Flex style={{ height: "100%" }} justify="flex-end">
        <Flex
          vertical
          justify="flex-start"
          align="center"
          className={styles.textSmallSizeContainer}
          gap={"1rem"}
        >
          <h3>Online Quran, Arabic & Islamic Studies Courses</h3>
          <p>
            Your Quran, Tajweed, Arabic & Islamic Studies Journey starts here
            with Mishkah Academy.
          </p>
          <Button size="large" type="primary" className="buttonStyle1">
            Learn More
          </Button>
        </Flex>
      </Flex>
    </div>,
    <div
      style={{ backgroundImage: `url(${slider22})` }}
      className={styles.carouselSmallSizeContainer}
    >
      <Flex style={{ height: "100%" }} justify="flex-end">
        <Flex
          vertical
          justify="flex-start"
          align="center"
          className={styles.textSmallSizeContainer}
          gap={"1rem"}
        >
          <h3>Online Quran, Arabic & Islamic Studies Courses</h3>
          <p>
            Your Quran, Tajweed, Arabic & Islamic Studies Journey starts here
            with Mishkah Academy.
          </p>
          <Button size="large" type="primary" className="buttonStyle1">
            Learn More
          </Button>
        </Flex>
      </Flex>
    </div>,
    <div
      style={{ backgroundImage: `url(${slider22})` }}
      className={styles.carouselSmallSizeContainer}
    >
      <Flex style={{ height: "100%" }} justify="flex-end">
        <Flex
          vertical
          justify="flex-start"
          align="center"
          className={styles.textSmallSizeContainer}
          gap={"1rem"}
        >
          <h3>Online Quran, Arabic & Islamic Studies Courses</h3>
          <p>
            Your Quran, Tajweed, Arabic & Islamic Studies Journey starts here
            with Mishkah Academy.
          </p>
          <Button size="large" type="primary" className="buttonStyle1">
            Learn More
          </Button>
        </Flex>
      </Flex>
    </div>,
    <div
      style={{ backgroundImage: `url(${slider22})` }}
      className={styles.carouselSmallSizeContainer}
    >
      <Flex style={{ height: "100%" }} justify="flex-end">
        <Flex
          vertical
          justify="flex-start"
          align="center"
          className={styles.textSmallSizeContainer}
          gap={"1rem"}
        >
          <h3>Online Quran, Arabic & Islamic Studies Courses</h3>
          <p>
            Your Quran, Tajweed, Arabic & Islamic Studies Journey starts here
            with Mishkah Academy.
          </p>
          <Button size="large" type="primary" className="buttonStyle1">
            Learn More
          </Button>
        </Flex>
      </Flex>
    </div>,
  ];
  return (
    <OneItemCarousel
      CarouselItems={
        windowWidth > 576 ? LargeCarouselItems : SmallCarouselItems
      }
    />
  );
};

export default HomeCarousel;
