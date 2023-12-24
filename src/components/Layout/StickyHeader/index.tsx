import { useEffect, useRef, useState } from "react";

import { Col, Row } from "antd";
import { Link } from "react-router-dom";
import { Dropdown, Space } from "antd";
import { useTranslation } from "react-i18next";
import type { MenuProps } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";

import { containerSpace } from "../../../globalVariables";
import logo from "../../../assets/images/Logo.png";

import styles from "./index.module.css";

const StickyHeader = () => {
  const { t } = useTranslation();
  const [isSticky, setIsSticky] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (navbarRef.current) {
        const isNavbarSticky = window.scrollY >= navbarRef.current.offsetTop;
        setIsSticky(isNavbarSticky && window.scrollY > 0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const aboutItems: MenuProps["items"] = [
    {
      label: t("AboutUs"),
      key: "1",
    },
    {
      label: t("HowItWorks"),
      key: "2",
    },
    {
      label: t("TermsAndConditions"),
      key: "3",
    },
  ];
  const learningItems: MenuProps["items"] = [
    {
      label: t("Curriculum"),
      key: "1",
    },
    {
      label: t("TeachingMethodology"),
      key: "2",
    },
    {
      label: t("QualityAssurance"),
      key: "3",
    },
    {
      label: t("Testimonials"),
      key: "4",
    },
    {
      label: t("Scholarship"),
      key: "5",
    },
  ];
  const coursesItems: MenuProps["items"] = [
    {
      label: t("QuarnCourses"),
      key: "1",
    },
    {
      label: t("ArabicCourses"),
      key: "2",
    },
    {
      label: t("IslamicCourses"),
      key: "3",
    },
  ];
  const subscribeItems: MenuProps["items"] = [
    {
      label: t("CreditDebitCard"),
      key: "1",
    },
    {
      label: t("PayPal"),
      key: "2",
    },
  ];
  const loginItems: MenuProps["items"] = [
    {
      label: t("Admin"),
      key: "1",
    },
    {
      label: t("Student"),
      key: "2",
    },
    {
      label: t("Teacher"),
      key: "3",
    },
  ];
  const moreItems: MenuProps["items"] = [
    {
      label: t("DownloadFreeEBooks"),
      key: "1",
    },
    {
      label: t("FAQS"),
      key: "2",
    },
    {
      label: t("BeATeacher"),
      key: "3",
    },
    {
      label: t("ContactUs"),
      key: "4",
    },
  ];

  return (
    <nav
      ref={navbarRef}
      className={`${styles.nav} ${isSticky ? styles.sticky : ""}`}
    >
      <Row justify={"space-between"} align="middle" wrap>
        <Col push={containerSpace}>
          <Link to="/">
            <div
              className={`${
                isSticky ? styles.stickyImageContainer : styles.imageContainer
              }`}
            >
              <img src={logo} alt="Logo" className={styles.containedImage} />
            </div>
          </Link>
        </Col>
        <Col pull={containerSpace}>
          <ul className={styles.list}>
            <li>
              <Link className={styles.itemStyle} to="/">
                {t("Home")}
              </Link>
            </li>
            <li>
              <Dropdown menu={{ items: aboutItems, className: styles.menu }}>
                <a
                  className={styles.itemStyle}
                  onClick={(e) => e.preventDefault()}
                >
                  <Space>
                    {t("About")}
                    <CaretDownOutlined style={{ fontSize: "small" }} />
                  </Space>
                </a>
              </Dropdown>
            </li>
            <li>
              <Dropdown menu={{ items: learningItems, className: styles.menu }}>
                <a
                  className={styles.itemStyle}
                  onClick={(e) => e.preventDefault()}
                >
                  <Space>
                    {t("Learning")}
                    <CaretDownOutlined style={{ fontSize: "small" }} />
                  </Space>
                </a>
              </Dropdown>
            </li>
            <li>
              <Dropdown menu={{ items: coursesItems, className: styles.menu }}>
                <a
                  className={styles.itemStyle}
                  onClick={(e) => e.preventDefault()}
                >
                  <Space>
                    {t("Courses")}
                    <CaretDownOutlined style={{ fontSize: "small" }} />
                  </Space>
                </a>
              </Dropdown>
            </li>
            <li>
              <Link className={styles.itemStyle} to="/">
                {t("Tutors")}
              </Link>
            </li>
            <li>
              <Link className={styles.itemStyle} to="/">
                {t("Pricing")}
              </Link>
            </li>
            <li>
              <Dropdown
                menu={{ items: subscribeItems, className: styles.menu }}
              >
                <a
                  className={styles.itemStyle}
                  onClick={(e) => e.preventDefault()}
                >
                  <Space>
                    {t("Subscribe")}
                    <CaretDownOutlined style={{ fontSize: "small" }} />
                  </Space>
                </a>
              </Dropdown>
            </li>
            <li>
              <Link className={styles.itemStyle} to="/">
                {t("Blog")}
              </Link>
            </li>
            <li>
              <Dropdown
                className={styles.itemStyle}
                menu={{ items: loginItems, className: styles.menu }}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    {t("LogIn")}
                    <CaretDownOutlined style={{ fontSize: "small" }} />
                  </Space>
                </a>
              </Dropdown>
            </li>
            <li>
              <Dropdown
                menu={{
                  items: moreItems,
                  className: styles.menu,
                }}
              >
                <a
                  className={styles.itemStyle}
                  onClick={(e) => e.preventDefault()}
                >
                  <Space>
                    {t("More")}
                    <CaretDownOutlined style={{ fontSize: "small" }} />
                  </Space>
                </a>
              </Dropdown>
            </li>
          </ul>
        </Col>
      </Row>
    </nav>
  );
};

export default StickyHeader;
