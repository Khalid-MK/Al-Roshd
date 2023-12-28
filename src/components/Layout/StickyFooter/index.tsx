import { useState, useRef, useEffect } from "react";
import { Col, Row } from "antd";
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
        <Row
          justify={{
            md: "space-between",
            sm: "center",
            xs: "center",
          }}
          gutter={[0, 8]}
          align="middle"
          wrap
        >
          <Col
            xxl={{ span: 6, push: xxlContainerSpace, pull: 0 }}
            xl={{ span: 6, push: underXXlcontainerSpace, pull: 0 }}
            lg={{ span: 6, push: underXXlcontainerSpace, pull: 0 }}
            md={{ span: 6, push: underXXlcontainerSpace, pull: 0 }}
            sm={{
              span: 20,
            }}
            xs={{
              span: 20,
            }}
          >
            <Row
              justify={{
                md: "start",
                sm: "center",
                xs: "center",
              }}
            >
              <a href="javascript void(0)" className={`${styles.iconWrapper}`}>
                <SocialMediaSVGIcon
                  type="whatsapp"
                  color="white"
                  isColorCssVar={false}
                  size="25"
                />
              </a>
            </Row>
          </Col>
          <Col
            md={{
              span: 6,
            }}
            sm={{
              span: 20,
            }}
            xs={{
              span: 20,
            }}
          >
            <Row
              justify={{
                md: "center",
                sm: "center",
                xs: "center",
              }}
            >
              <Button
                type="primary"
                size="large"
                className={`${styles.btn} gBGTransition`}
              >
                {t("BookAFreeTrialNow")}
              </Button>
            </Row>
          </Col>
          <Col
            xxl={{ span: 6, pull: xxlContainerSpace, push: 0 }}
            xl={{ span: 6, pull: underXXlcontainerSpace, push: 0 }}
            lg={{ span: 6, pull: underXXlcontainerSpace, push: 0 }}
            md={{ span: 6, pull: underXXlcontainerSpace, push: 0 }}
            sm={{
              span: 20,
            }}
            xs={{
              span: 20,
            }}
          >
            <Row
              justify={{
                md: "end",
                sm: "center",
                xs: "center",
              }}
            >
              <a href="javascript void(0)" className={`${styles.iconWrapper}`}>
                <BackwardOutlined className={styles.upIcon} />
              </a>
            </Row>
          </Col>
        </Row>
      </nav>
    </>
  );
};

export default StickyFooter;
