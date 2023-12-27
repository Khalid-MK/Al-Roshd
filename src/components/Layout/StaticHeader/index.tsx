import { Button } from "antd";
import { useTranslation } from "react-i18next";
import { Col, Row } from "antd";

import {
  underXXlcontainerSpace,
  xxlContainerSpace,
} from "../../../globalVariables";
import SocialMediaSVGIcon from "../../../assets/svgs/SocialMediaSVGIcon";
import styles from "./index.module.css";
import LanguageDropdown from "./LanguageDropdown";

const StaticHeader = () => {
  const { t } = useTranslation();

  return (
    <nav className={styles.nav}>
      <Row justify="space-between" wrap gutter={[0, 12]}>
        <Col
          xxl={{ span: 10, push: xxlContainerSpace, pull: 0 }}
          xl={{ span: 10, push: underXXlcontainerSpace, pull: 0 }}
          lg={{ span: 10, push: underXXlcontainerSpace, pull: 0 }}
          md={{ span: 10, push: underXXlcontainerSpace, pull: 0 }}
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
          >
            <Button type="primary" className={`${styles.btn} gBGTransition`}>
              {t("BookAFreeTrialClass")}
            </Button>
          </Row>
        </Col>
        <Col
          xxl={{ span: 10, push: 0, pull: xxlContainerSpace }}
          xl={{ span: 10, push: 0, pull: underXXlcontainerSpace }}
          lg={{ span: 10, push: 0, pull: underXXlcontainerSpace }}
          md={{ span: 10, push: 0, pull: underXXlcontainerSpace }}
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
            gutter={[0, 12]}
            align="middle"
            justify={{
              xxl: "end",
              xl: "end",
              lg: "end",
              md: "center",
              sm: "center",
              xs: "center",
            }}
            className={styles.iconsContainer}
            style={{ gap: "0.6rem" }}
          >
            <Col className={styles.langIcon}>
              <LanguageDropdown />
            </Col>
            <Col>
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
            </Col>

            <Col>
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
            </Col>

            <Col>
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
            </Col>

            <Col>
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
          </Row>
        </Col>
      </Row>
    </nav>
  );
};

export default StaticHeader;
