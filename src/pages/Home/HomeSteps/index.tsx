import { Col, Flex, Row } from "antd";
import styles from "./index.module.css";
import { Button } from "antd";
import stepsImage from "../../../assets//images/vite.svg";

const HomeSteps = () => {
  return (
    <Row className={styles.conatiner}>
      <Col md={12} className={styles.imgSection}>
        <div className={styles.imgContainer}>
          <img width={"100%"} src={stepsImage} alt="" />
        </div>
      </Col>

      <Col md={12} className={styles.textSection}>
        <Flex vertical gap={"2rem"}>
          <h2>3 Simple Steps To Start</h2>
          <ul>
            <li>
              <div>1</div>
              <p>Fill in the Trial Form below.</p>
            </li>
            <li>
              <div>2</div>
              <p>Book your Free Trial Class.</p>
            </li>
            <li>
              <div>3</div>
              <p>Choose Your Study Plan.</p>
            </li>
          </ul>
          <Button type="primary" className={`${styles.btn}`}>
            {"Book a Free Trial Now "}
          </Button>
        </Flex>
      </Col>
    </Row>
  );
};

export default HomeSteps;
