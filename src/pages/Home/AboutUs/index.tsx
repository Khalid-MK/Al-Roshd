import { Button, Col, Row } from "antd";

import AboutImage from "../../../assets/images/about-icon.png";
import {
  topBottomPadding,
  underXXlcontainerSpace,
  xxlContainerSpace,
} from "../../../globalVariables";
import styles from "./index.module.css";

const AboutUs = () => {
  return (
    <Row
      className={styles.container}
      justify="space-between"
      gutter={[0, 16]}
      wrap
      style={{ padding: `${topBottomPadding}rem 0` }}
    >
      <Col
        xxl={{ span: 4, push: xxlContainerSpace, pull: 0 }}
        xl={{ span: 5, push: underXXlcontainerSpace, pull: 0 }}
        lg={{ span: 5, push: underXXlcontainerSpace, pull: 0 }}
        md={{ span: 5, push: underXXlcontainerSpace, pull: 0 }}
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
          justify={{
            xxl: "end",
            xl: "end",
            lg: "end",
            md: "end",
            sm: "center",
            xs: "center",
          }}
          align="top"
          className={styles.imageContainer}
        >
          <img src={AboutImage} alt="AboutImage" />
        </Row>
      </Col>
      <Col
        xxl={{ span: 13, push: 0, pull: xxlContainerSpace }}
        xl={{ span: 14, push: 0, pull: underXXlcontainerSpace }}
        lg={{ span: 14, push: 0, pull: underXXlcontainerSpace }}
        md={{ span: 14, push: 0, pull: underXXlcontainerSpace }}
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
          justify={{
            xxl: "start",
            xl: "start",
            lg: "start",
            md: "start",
            sm: "center",
            xs: "center",
          }}
          align="middle"
          gutter={[0, 16]}
          className={styles.textSection}
        >
          <h2>About us</h2>
          <p className="paragraphStyle1">
            Mishkah Academy has become one of the leading online Islamic schools
            in the World due to its good reputation for many years in teaching
            Quran, Arabic & Islamic Studies. Our mission is to enrich the lives
            of Muslims by offering an affordable methods to learn conveniently
            at home by developing effective methods to help students learn with
            interactive online options that make learning accessible. We offer
            different ways that can be adapted to the amount of time you have
            available, your area of interest, and the type of teacher you
            prefer. We offer a wide range of Courses that can fit into even the
            busiest schedules that are the best fit for your learning needs and
            interests.
          </p>
          <Button size="large" type="primary" className={`buttonStyle1`}>
            {"Book Your Free Trial"}
          </Button>
        </Row>
      </Col>
    </Row>
  );
};

export default AboutUs;
