import { Button, Flex } from "antd";
import { padding } from "../../../globalVariables";
import MultipleCarousel from "../../../components/Carousel/MultipleCarousel";
import { Image } from "antd";
import styles from "./index.module.css";
import Mosque from "../../../assets/images/How-To-Recite-The-Shahada-In-Arabic-and-English.jpg";

const FeaturedArticles = () => {
  const CarouselItems = [
    <Flex
      vertical
      justify="center"
      align="center"
      className={styles.carouselItemContainer}
    >
      <Image
        width={"100%"}
        src={Mosque}
        placeholder={<Image preview={false} src={Mosque} width={200} />}
      />
      <a href="javascript void(0)">Article Title | Title</a>
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
        width={"100%"}
        src={Mosque}
        placeholder={<Image preview={false} src={Mosque} width={200} />}
      />
      <a href="javascript void(0)">Article Title | Title</a>
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
        width={"100%"}
        src={Mosque}
        placeholder={<Image preview={false} src={Mosque} width={200} />}
      />
      <a href="javascript void(0)">Article Title | Title</a>
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
        width={"100%"}
        src={Mosque}
        placeholder={<Image preview={false} src={Mosque} width={200} />}
      />
      <a href="javascript void(0)">Article Title | Title</a>
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
        width={"100%"}
        src={Mosque}
        placeholder={<Image preview={false} src={Mosque} width={200} />}
      />
      <a href="javascript void(0)">Article Title | Title</a>
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
        width={"100%"}
        src={Mosque}
        placeholder={<Image preview={false} src={Mosque} width={200} />}
      />
      <a href="javascript void(0)">Article Title | Title</a>
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
      <h1 className={`underlinedHeader`}>Featured Articles</h1>
      <MultipleCarousel CarouselItems={CarouselItems} />
      <Button size="large" type="primary" className="buttonStyle1">
        See All Articles
      </Button>
    </Flex>
  );
};

export default FeaturedArticles;
