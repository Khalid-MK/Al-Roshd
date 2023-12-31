import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import {
  underXXlcontainerSpace,
  xxlContainerSpace,
} from "../../../globalVariables";
import { FC } from "react";
import { Col, Row } from "antd";
import Chveron from "../../../assets/svgs/Chveron";
import styles from "./index.module.css";
import { ICarousel } from "../../../shared/interfaces";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
    partialVisibilityGutter: 40,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 40,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisibilityGutter: 20,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 20,
  },
};

const RightArrow = ({ onClick = () => null }) => {
  return (
    <div>
      <Chveron
        size="2rem"
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
        size="2rem"
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

const MultipleCarousel: FC<ICarousel> = ({ CarouselItems }) => {
  return (
    <Row>
      <Col
        xxl={{ span: 18, pull: xxlContainerSpace, push: xxlContainerSpace }}
        xl={{
          span: 20,
          pull: underXXlcontainerSpace,
          push: underXXlcontainerSpace,
        }}
        lg={{
          span: 20,
          pull: underXXlcontainerSpace,
          push: underXXlcontainerSpace,
        }}
        md={{
          span: 20,
          pull: underXXlcontainerSpace,
          push: underXXlcontainerSpace,
        }}
        sm={{
          span: 20,
          pull: underXXlcontainerSpace,
          push: underXXlcontainerSpace,
        }}
        xs={{
          span: 20,
          pull: underXXlcontainerSpace,
          push: underXXlcontainerSpace,
        }}
        style={{
          padding: "0 10px",
          position: "relative",
        }}
      >
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlay
          autoPlaySpeed={5000}
          centerMode={false}
          className={`${styles.xClass}`}
          containerClass={`${styles.containerClass} container`}
          customButtonGroup={<CustomGroup />}
          customLeftArrow={<></>}
          customRightArrow={<></>}
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass={`${styles.customCarouselItem} `}
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={true}
          renderDotsOutside={false}
          responsive={responsive}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass={`${styles.sliderClass}`}
          slidesToSlide={1}
          swipeable
          partialVisible={false}
        >
          {CarouselItems}
        </Carousel>
      </Col>
    </Row>
  );
};

export default MultipleCarousel;
