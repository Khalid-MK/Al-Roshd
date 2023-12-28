import { Col, Divider, Flex, Row } from "antd";
import {
  padding,
  underXXlcontainerSpace,
  xxlContainerSpace,
} from "../../../globalVariables";
import styles from "./index.module.css";
import House from "../../../assets/svgs/House";

const Statistics = () => {
  return (
    <Row
      justify="space-between"
      style={{ padding: `${padding}rem 0` }}
      className={styles.secionContainer}
    >
      <Col
        xxl={{ span: 18, push: xxlContainerSpace, pull: xxlContainerSpace }}
        xl={{
          span: 20,
          push: underXXlcontainerSpace,
          pull: underXXlcontainerSpace,
        }}
        lg={{
          span: 20,
          push: underXXlcontainerSpace,
          pull: underXXlcontainerSpace,
        }}
        md={{
          span: 20,
          push: underXXlcontainerSpace,
          pull: underXXlcontainerSpace,
        }}
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
            xxl: "center",
            xl: "center",
            lg: "center",
            md: "start",
            sm: "start",
            xs: "start",
          }}
          align={"middle"}
          gutter={[0, 30]}
        >
          <Col
            xxl={{ span: 5 }}
            xl={{
              span: 5,
            }}
            lg={{
              span: 5,
            }}
            md={{
              span: "",
            }}
            sm={{
              span: 11,
            }}
            xs={{
              span: 24,
            }}
          >
            <Flex
              vertical
              align="center"
              gap={"0.3rem"}
              className={styles.colContainer}
            >
              <House size="30%" color="--primary-color" isColorCssVar />
              <label>+2000</label>
              <span>Students</span>
            </Flex>
          </Col>
          <Col span="1">
            <Divider className={styles.divider} type="vertical" dashed />
          </Col>
          <Col
            xxl={{ span: 5 }}
            xl={{
              span: 5,
            }}
            lg={{
              span: 5,
            }}
            md={{
              span: 11,
            }}
            sm={{
              span: 11,
            }}
            xs={{
              span: 24,
            }}
          >
            <Flex
              vertical
              align="center"
              gap={"0.3rem"}
              className={styles.colContainer}
            >
              <House size="30%" color="--primary-color" isColorCssVar />
              <label>+2000</label>
              <span>Students</span>
            </Flex>
          </Col>
          <Col span="1">
            <Divider className={styles.divider} type="vertical" dashed />
          </Col>
          <Col
            xxl={{ span: 5 }}
            xl={{
              span: 5,
            }}
            lg={{
              span: 5,
            }}
            md={{
              span: 11,
            }}
            sm={{
              span: 11,
            }}
            xs={{
              span: 24,
            }}
          >
            <Flex
              vertical
              align="center"
              gap={"0.3rem"}
              className={styles.colContainer}
            >
              <House size="30%" color="--primary-color" isColorCssVar />
              <label>+2000</label>
              <span>Students</span>
            </Flex>
          </Col>
          <Col span="1">
            <Divider className={styles.divider} type="vertical" dashed />
          </Col>
          <Col
            xxl={{ span: 5 }}
            xl={{
              span: 5,
            }}
            lg={{
              span: 5,
            }}
            md={{
              span: 11,
            }}
            sm={{
              span: 11,
            }}
            xs={{
              span: 24,
            }}
          >
            <Flex
              vertical
              align="center"
              gap={"0.3rem"}
              className={styles.colContainer}
            >
              <House size="30%" color="--primary-color" isColorCssVar />
              <label>+2000</label>
              <span>Students</span>
            </Flex>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Statistics;
