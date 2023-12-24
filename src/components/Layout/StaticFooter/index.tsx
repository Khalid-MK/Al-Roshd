import { containerSpace } from "../../../globalVariables";
import styles from "./index.module.css";
import { Col, Flex, Row } from "antd";
import logo from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { Button } from "antd";
// import { useTranslation } from "react-i18next";
import { PhoneFilled, WhatsAppOutlined, MailFilled } from "@ant-design/icons";
import SocialMediaSVGIcon from "../../../assets/svgs/SocialMediaSVGIcon";

const StaticFooter = () => {
  // const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={styles.overlay}></div>
      <Row justify={"space-between"} align="top" wrap>
        <Col span={6} push={containerSpace}>
          <Flex align="flex-start" vertical gap="middle">
            <Link to="/">
              <div className={styles.imageContainer}>
                <img src={logo} alt="Logo" className={styles.containedImage} />
              </div>
            </Link>
            <p className={styles.paragraph1}>
              Mishkah Academy is the best place to learn Quran, Arabic & Islamic
              Studies. We have maintained a world-class reputation across the
              globe for many years. Undoubtedly, Mishkah Academy has quickly
              become one of the Leading Online Quran & Arabic Institutes.
            </p>
            <Button type="primary" className={`${styles.btn}`}>
              {"Get Started Now"}
            </Button>
          </Flex>
        </Col>
        <Col span={13} pull={containerSpace}>
          <Row justify="space-between">
            <Col span={7}>
              <Flex
                align="center"
                justify="flex-start"
                vertical
                gap="middle"
                className={styles.listContainer}
              >
                <h2>Courses</h2>
                <ul>
                  <li>
                    <Link to="/"> Arabic Language </Link>
                  </li>
                  <li>
                    <Link to="/"> Islamic Studies </Link>
                  </li>
                  <li>
                    <Link to="/"> Quarn & Tajweed </Link>{" "}
                  </li>
                </ul>
              </Flex>
            </Col>
            <Col span={7}>
              <Flex
                align="center"
                justify="flex-start"
                vertical
                gap="middle"
                className={styles.listContainer}
              >
                <h2>Pages</h2>
                <ul>
                  <li>
                    <Link to="/">About us</Link>
                  </li>
                  <li>
                    <Link to="/">How it works</Link>
                  </li>
                  <li>
                    <Link to="/">curriculum</Link>
                  </li>
                  <li>
                    <Link to="/">Trial Lesson</Link>
                  </li>
                  <li>
                    <Link to="/">Pricing</Link>
                  </li>
                </ul>
              </Flex>
            </Col>
            <Col span={10}>
              <Flex
                align="center"
                justify="center"
                vertical
                gap="middle"
                className={styles.listContainer}
              >
                <h2>Contact Us</h2>
                <ul className={styles.contactList}>
                  <li>
                    <Link to="tel:+2 01011494459">
                      <PhoneFilled />
                      +2 01011494459
                    </Link>
                  </li>
                  <li>
                    <Link to="tel:+2 01011494459">
                      <WhatsAppOutlined />
                      +2 01011494459
                    </Link>
                  </li>
                  <li>
                    <Link to="mailto:ahmedeng099@gmail.com">
                      <MailFilled />
                      ahmedeng099@gmail.com
                    </Link>
                  </li>
                </ul>
                <div>
                  <Col className={styles.iconContainer}>
                    <a
                      href="javascript void(0)"
                      className={`${styles.iconWrapper} gBGTransition `}
                    >
                      <SocialMediaSVGIcon
                        type="facebook"
                        color="--primary-color"
                        isColorCssVar
                        size="25"
                      />
                    </a>
                    <a
                      href="javascript void(0)"
                      className={`${styles.iconWrapper} gBGTransition`}
                    >
                      <SocialMediaSVGIcon
                        type="twitter"
                        color="--primary-color"
                        isColorCssVar
                        size="25"
                      />
                    </a>
                    <a
                      href="javascript void(0)"
                      className={`${styles.iconWrapper} gBGTransition`}
                    >
                      <SocialMediaSVGIcon
                        type="whatsapp"
                        color="--primary-color"
                        isColorCssVar
                        size="25"
                      />
                    </a>
                    <a
                      href="javascript void(0)"
                      className={`${styles.iconWrapper} gBGTransition`}
                    >
                      <SocialMediaSVGIcon
                        type="telegram"
                        color="--primary-color"
                        isColorCssVar
                        size="25"
                      />
                    </a>
                  </Col>
                </div>
              </Flex>
            </Col>
          </Row>
        </Col>
      </Row>
    </footer>
  );
};

export default StaticFooter;
