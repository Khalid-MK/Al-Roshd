import styles from "./index.module.css";

import MultipleCarousel from "../../../components/Carousel/MultipleCarousel";
import { padding } from "../../../globalVariables";
import Testmonials from "../../../components/Testmonials";
import { Flex } from "antd";

const Testimonials = () => {
  const CarouselItems = [
    <Flex vertical align="center" gap={"2rem"}>
      <Testmonials
        color="var(--secondary-color)"
        textColor="var(--primary-color)"
        containerStyle={styles.testimonialContainer}
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus
    minima aut optio amet saepe voluptatem impedit pariatur neque obcaecati
    suscipit! Incidunt consequatur distinctio unde et impedit? Similique sit
    incidunt excepturi."
      />
      <Flex
        vertical
        align="center"
        gap={"0.5rem"}
        className={styles.infoContainer}
      >
        <span>Ahmed Osama</span>
        <span>ARE</span>
      </Flex>
    </Flex>,
    <Flex vertical align="center" gap={"2rem"}>
      <Testmonials
        color="var(--secondary-color)"
        textColor="var(--primary-color)"
        containerStyle={styles.testimonialContainer}
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus
    minima aut optio amet saepe voluptatem impedit pariatur neque obcaecati
    suscipit! Incidunt consequatur distinctio unde et impedit? Similique sit
    incidunt excepturi."
      />
      <Flex
        vertical
        align="center"
        gap={"0.5rem"}
        className={styles.infoContainer}
      >
        <span>Ahmed Osama</span>
        <span>ARE</span>
      </Flex>
    </Flex>,
    <Flex vertical align="center" gap={"2rem"}>
      <Testmonials
        color="var(--secondary-color)"
        textColor="var(--primary-color)"
        containerStyle={styles.testimonialContainer}
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus
    minima aut optio amet saepe voluptatem impedit pariatur neque obcaecati
    suscipit! Incidunt consequatur distinctio unde et impedit? Similique sit
    incidunt excepturi."
      />
      <Flex
        vertical
        align="center"
        gap={"0.5rem"}
        className={styles.infoContainer}
      >
        <span>Ahmed Osama</span>
        <span>ARE</span>
      </Flex>
    </Flex>,
    <Flex vertical align="center" gap={"2rem"}>
      <Testmonials
        color="var(--secondary-color)"
        textColor="var(--primary-color)"
        containerStyle={styles.testimonialContainer}
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus
    minima aut optio amet saepe voluptatem impedit pariatur neque obcaecati
    suscipit! Incidunt consequatur distinctio unde et impedit? Similique sit
    incidunt excepturi."
      />
      <Flex
        vertical
        align="center"
        gap={"0.5rem"}
        className={styles.infoContainer}
      >
        <span>Ahmed Osama</span>
        <span>ARE</span>
      </Flex>
    </Flex>,
    <Flex vertical align="center" gap={"2rem"}>
      <Testmonials
        color="var(--secondary-color)"
        textColor="var(--primary-color)"
        containerStyle={styles.testimonialContainer}
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus
    minima aut optio amet saepe voluptatem impedit pariatur neque obcaecati
    suscipit! Incidunt consequatur distinctio unde et impedit? Similique sit
    incidunt excepturi."
      />
      <Flex
        vertical
        align="center"
        gap={"0.5rem"}
        className={styles.infoContainer}
      >
        <span>Ahmed Osama</span>
        <span>ARE</span>
      </Flex>
    </Flex>,
    <Flex vertical align="center" gap={"2rem"}>
      <Testmonials
        color="var(--secondary-color)"
        textColor="var(--primary-color)"
        containerStyle={styles.testimonialContainer}
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus
    minima aut optio amet saepe voluptatem impedit pariatur neque obcaecati
    suscipit! Incidunt consequatur distinctio unde et impedit? Similique sit
    incidunt excepturi."
      />
      <Flex
        vertical
        align="center"
        gap={"0.5rem"}
        className={styles.infoContainer}
      >
        <span>Ahmed Osama</span>
        <span>ARE</span>
      </Flex>
    </Flex>,
  ];
  return (
    <Flex vertical gap={"2rem"} style={{ padding: `${padding}rem 0` }}>
      <h1 className={`underlinedHeader`}>Testimonials</h1>
      <MultipleCarousel CarouselItems={CarouselItems} />
    </Flex>
  );
};

export default Testimonials;
