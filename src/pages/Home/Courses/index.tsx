import { Button, Flex } from "antd";

import CarouselHome from "../../../components/Carousel/MultipleCarousel";
import car1 from "../../../assets/images/carousel11.jpg";
import car2 from "../../../assets/images/carousel12.jpg";
import car3 from "../../../assets/images/carousel13.jpg";
import car4 from "../../../assets/images/carousel14.jpg";
import car5 from "../../../assets/images/carousel15.jpg";
import car6 from "../../../assets/images/carousel16.jpg";
import styles from "./index.module.css";
import { padding } from "../../../globalVariables";

const Courses = () => {
  const CarouselItems = [
    <Flex
      gap={"1rem"}
      justify="center"
      vertical
      className={styles.itemContainer}
    >
      <img src={car1} alt="" />
      <Button size="middle" type="primary" className={styles.littelButton}>
        Arabic Languague
      </Button>
      <p>Online Arabic Speaking Course</p>
      <Button type="primary" className={styles.largeButton}>
        Enroll Now
      </Button>
    </Flex>,
    <Flex
      gap={"1rem"}
      justify="center"
      vertical
      className={styles.itemContainer}
    >
      <img src={car2} alt="" />
      <Button size="middle" type="primary" className={styles.littelButton}>
        Arabic Languague
      </Button>
      <p>Online Arabic Speaking Course</p>
      <Button type="primary" className={styles.largeButton}>
        Enroll Now
      </Button>
    </Flex>,
    <Flex
      gap={"1rem"}
      justify="center"
      vertical
      className={styles.itemContainer}
    >
      <img src={car3} alt="" />
      <Button size="middle" type="primary" className={styles.littelButton}>
        Arabic Languague
      </Button>
      <p>Online Arabic Speaking Course</p>
      <Button type="primary" className={styles.largeButton}>
        Enroll Now
      </Button>
    </Flex>,
    <Flex
      gap={"1rem"}
      justify="center"
      vertical
      className={styles.itemContainer}
    >
      <img src={car4} alt="" />
      <Button size="middle" type="primary" className={styles.littelButton}>
        Arabic Languague
      </Button>
      <p>Online Arabic Speaking Course</p>
      <Button type="primary" className={styles.largeButton}>
        Enroll Now
      </Button>
    </Flex>,
    <Flex
      gap={"1rem"}
      justify="center"
      vertical
      className={styles.itemContainer}
    >
      <img src={car5} alt="" />
      <Button size="middle" type="primary" className={styles.littelButton}>
        Arabic Languague
      </Button>
      <p>Online Arabic Speaking Course</p>
      <Button type="primary" className={styles.largeButton}>
        Enroll Now
      </Button>
    </Flex>,
    <Flex
      gap={"1rem"}
      justify="center"
      vertical
      className={styles.itemContainer}
    >
      <img src={car6} alt="" />
      <Button size="middle" type="primary" className={styles.littelButton}>
        Arabic Languague
      </Button>
      <p>Online Arabic Speaking Course</p>
      <Button type="primary" className={styles.largeButton}>
        Enroll Now
      </Button>
    </Flex>,
  ];
  return (
    <Flex vertical gap={"2rem"} style={{ padding: `${padding}rem 0` }}>
      <h1 className={styles.header}>Our Courses</h1>
      <CarouselHome CarouselItems={CarouselItems} />
      <Flex justify="center">
        <Button size="large" type="primary" className={`buttonStyle1`}>
          {"See All Courses"}
        </Button>
      </Flex>
    </Flex>
  );
};

export default Courses;
