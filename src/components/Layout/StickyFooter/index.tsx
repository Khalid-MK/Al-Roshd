import { useState, useRef, useEffect } from "react";
import { Col, Flex, Row } from "antd";
import { useTranslation } from "react-i18next";
import { Button } from "antd";
import { BackwardOutlined } from "@ant-design/icons";

import styles from "./index.module.css";
import SocialMediaSVGIcon from "../../../assets/svgs/SocialMediaSVGIcon";
import {
  underXXlcontainerSpace,
  xxlContainerSpace,
} from "../../../globalVariables";

const StickyFooter = () => {
  const { t } = useTranslation();
  const footerRef = useRef<HTMLDivElement>(null);
  const [footerHeight, setFooterHeight] = useState("");
  useEffect(() => {
    if (footerRef.current) {
      const elementHeight = footerRef.current.offsetHeight;
      setFooterHeight(`${elementHeight}px`);
    }
  }, []);

  return (
    <>
      <nav style={{ height: footerHeight }}></nav>
      <nav ref={footerRef} className={`${styles.footer} ${styles.sticky}`}>
        <Row>
          <Col
            xxl={{ push: xxlContainerSpace, pull: xxlContainerSpace }}
            xl={{ push: underXXlcontainerSpace, pull: underXXlcontainerSpace }}
            lg={{ push: underXXlcontainerSpace, pull: underXXlcontainerSpace }}
            md={{ push: underXXlcontainerSpace, pull: underXXlcontainerSpace }}
            sm={{ push: underXXlcontainerSpace, pull: underXXlcontainerSpace }}
            xs={{ push: underXXlcontainerSpace, pull: underXXlcontainerSpace }}
            span={20}
          >
            <Row justify={"space-between"} gutter={[0, 8]} align="middle" wrap>
              <Col span={6}>
                <Flex justify="start">
                  <a
                    href="javascript void(0)"
                    className={`${styles.iconWrapper}`}
                  >
                    <SocialMediaSVGIcon
                      type="whatsapp"
                      color="white"
                      isColorCssVar={false}
                      size="25"
                    />
                  </a>
                </Flex>
              </Col>
              <Col span={6}>
                <Flex justify="center">
                  <Button
                    type="primary"
                    size="large"
                    className={`${styles.btn} gBGTransition`}
                  >
                    {t("BookAFreeTrialNow")}
                  </Button>
                </Flex>
              </Col>
              <Col span={6}>
                <Flex justify="end">
                  <a
                    href="javascript void(0)"
                    className={`${styles.iconWrapper}`}
                  >
                    <BackwardOutlined className={styles.upIcon} />
                  </a>
                </Flex>
              </Col>
            </Row>
          </Col>
        </Row>
      </nav>
    </>
  );
};

export default StickyFooter;
