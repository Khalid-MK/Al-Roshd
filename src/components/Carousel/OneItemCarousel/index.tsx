import styles from "./index.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Chveron from "../../../assets/svgs/Chveron";
import { ICarousel } from "../../../shared/interfaces";
import { FC } from "react";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const RightArrow = ({ onClick = () => null }) => {
  return (
    <div>
      <Chveron
        size="1.5rem"
        color="--primary-color"
        isColorCssVar
        direction="right"
        onClick={onClick}
      />
    </div>
  );
};
const LeftArrow = ({ onClick = () => null }) => {
  return (
    <div>
      <Chveron
        size="1.5rem"
        color="--primary-color"
        isColorCssVar
        direction="left"
        onClick={onClick}
      />
    </div>
  );
};

const CustomGroup = ({ next = () => null, previous = () => null }) => {
  const isTablet = window.innerWidth <= 576;
  console.log(isTablet);

  return (
    <div>
      {isTablet ? (
        <></>
      ) : (
        <>
          <div className={styles.chevronLeft} onClick={() => previous()}>
            <LeftArrow />
          </div>
          <div className={styles.chevronRight} onClick={() => next()}>
            <RightArrow />
          </div>
        </>
      )}
    </div>
  );
};

const CustomDot = ({ onClick = () => null, active = "" }) => (
  <div
    style={{
      background: active ? "var(--primary-color)" : "var(--secondary-color)",
      borderRadius: "100%",
      width: "0.8rem",
      height: "0.8rem",
      margin: "0 0.4rem 1rem 0.4rem",
      cursor: "pointer",
      display: "flex",
    }}
    onClick={onClick}
  />
);

const OneItemCarousel: FC<ICarousel> = ({ CarouselItems }) => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      // autoPlay
      centerMode={false}
      className=""
      containerClass="container"
      customDot={<CustomDot />}
      customButtonGroup={<CustomGroup />}
      customLeftArrow={<></>}
      customRightArrow={<></>}
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={responsive}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      {CarouselItems}
    </Carousel>
  );
};

export default OneItemCarousel;
