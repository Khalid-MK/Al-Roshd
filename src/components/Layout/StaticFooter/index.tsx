import {
  underXXlcontainerSpace,
  xxlContainerSpace,
} from "../../../globalVariables";
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
      <Row justify={"space-between"} align="top" wrap gutter={[0, 50]}>
        <Col
          xxl={{ span: 7, push: xxlContainerSpace, pull: 0 }}
          xl={{ span: 7, push: underXXlcontainerSpace, pull: 0 }}
          lg={{ span: 7, push: underXXlcontainerSpace, pull: 0 }}
          md={{ span: 6, push: underXXlcontainerSpace, pull: 0 }}
          sm={{
            span: 20,
            push: underXXlcontainerSpace,
            pull: underXXlcontainerSpace,
          }}
          xs={{
            span: 20,
            push: underXXlcontainerSpace,
            pull: underXXlcontainerSpace,
          }}
        >
          <Row
            gutter={[0, 15]}
            justify={{
              md: "start",
              sm: "center",
              xs: "center",
            }}
          >
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
            <Button size="large" type="primary" className={`${styles.btn}`}>
              {"Get Started Now"}
            </Button>
          </Row>
        </Col>
        <Col
          xxl={{ span: 13, push: 0, pull: xxlContainerSpace }}
          xl={{ span: 13, push: 0, pull: underXXlcontainerSpace }}
          lg={{ span: 13, push: 0, pull: underXXlcontainerSpace }}
          md={{ span: 12, push: 0, pull: underXXlcontainerSpace }}
          sm={{
            span: 20,
            push: underXXlcontainerSpace,
            pull: underXXlcontainerSpace,
          }}
          xs={{
            span: 20,
            push: underXXlcontainerSpace,
            pull: underXXlcontainerSpace,
          }}
        >
          <Row
            justify={{ md: "space-between", sm: "center", xs: "center" }}
            wrap
            gutter={[0, 80]}
          >
            <Col md={{ span: 6 }} sm={{ span: 20 }} xs={{ span: 20 }}>
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
            <Col md={{ span: 6 }} sm={{ span: 20 }} xs={{ span: 20 }}>
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
            <Col md={{ span: 9 }} sm={{ span: 20 }} xs={{ span: 20 }}>
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
