import { Button, Flex } from "antd";
import { padding } from "../../../globalVariables";
import MultipleCarousel from "../../../components/Carousel/MultipleCarousel";
import { Image } from "antd";
import WomanAvatar from "../../../assets/images/avatar-woman.jpg";
import styles from "./index.module.css";

const Tutors = () => {
  const CarouselItems = [
    <Flex
      vertical
      justify="center"
      align="center"
      className={styles.carouselItemContainer}
    >
      <Image
        width={"70%"}
        src={WomanAvatar}
        placeholder={<Image preview={false} src={WomanAvatar} width={200} />}
      />
      <a href="javascript void(0)">SH. Ahmed Osama</a>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto hic
        quia eaque quaerat, vitae.
      </p>
      <Button size="middle" type="primary">
        Read More
      </Button>
    </Flex>,
    <Flex
      vertical
      justify="center"
      align="center"
      className={styles.carouselItemContainer}
    >
      <Image
        width={"70%"}
        src={WomanAvatar}
        placeholder={<Image preview={false} src={WomanAvatar} width={200} />}
      />
      <a href="javascript void(0)">SH. Ahmed Osama</a>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto hic
        quia eaque quaerat, vitae.
      </p>
      <Button size="middle" type="primary">
        Read More
      </Button>
    </Flex>,
    <Flex
      vertical
      justify="center"
      align="center"
      className={styles.carouselItemContainer}
    >
      <Image
        width={"70%"}
        src={WomanAvatar}
        placeholder={<Image preview={false} src={WomanAvatar} width={200} />}
      />
      <a href="javascript void(0)">SH. Ahmed Osama</a>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto hic
        quia eaque quaerat, vitae.
      </p>
      <Button size="middle" type="primary">
        Read More
      </Button>
    </Flex>,
    <Flex
      vertical
      justify="center"
      align="center"
      className={styles.carouselItemContainer}
    >
      <Image
        width={"70%"}
        src={WomanAvatar}
        placeholder={<Image preview={false} src={WomanAvatar} width={200} />}
      />
      <a href="javascript void(0)">SH. Ahmed Osama</a>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto hic
        quia eaque quaerat, vitae.
      </p>
      <Button size="middle" type="primary">
        Read More
      </Button>
    </Flex>,
    <Flex
      vertical
      justify="center"
      align="center"
      className={styles.carouselItemContainer}
    >
      <Image
        width={"70%"}
        src={WomanAvatar}
        placeholder={<Image preview={false} src={WomanAvatar} width={200} />}
      />
      <a href="javascript void(0)">SH. Ahmed Osama</a>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto hic
        quia eaque quaerat, vitae.
      </p>
      <Button size="middle" type="primary">
        Read More
      </Button>
    </Flex>,
    <Flex
      vertical
      justify="center"
      align="center"
      className={styles.carouselItemContainer}
    >
      <Image
        width={"70%"}
        src={WomanAvatar}
        placeholder={<Image preview={false} src={WomanAvatar} width={200} />}
      />
      <a href="javascript void(0)">SH. Ahmed Osama</a>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto hic
        quia eaque quaerat, vitae.
      </p>
      <Button size="middle" type="primary">
        Read More
      </Button>
    </Flex>,
  ];
  return (
    <Flex
      vertical
      gap={"2rem"}
      style={{ padding: `${padding}rem 0` }}
      className={styles.container}
    >
      <h1 className={`underlinedHeader`}>Our Tutors</h1>
      <MultipleCarousel CarouselItems={CarouselItems} />
      <Button size="large" type="primary" className="buttonStyle1">
        See All Tutors
      </Button>
    </Flex>
  );
};

export default Tutors;
