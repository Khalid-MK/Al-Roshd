import { useEffect, useRef, useState } from "react";

import type { MenuProps } from "antd";
import { Col, Row } from "antd";
import { Link } from "react-router-dom";
import { Dropdown, Space } from "antd";
import { useTranslation } from "react-i18next";
import {
  CaretDownOutlined,
  MenuOutlined,
  CloseOutlined,
} from "@ant-design/icons";

import {
  underXXlcontainerSpace,
  xxlContainerSpace,
} from "../../../globalVariables";
import logo from "../../../assets/images/logo.png";

import styles from "./index.module.css";

import React from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

const StickyHeader = () => {
  const { t } = useTranslation();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isSticky, setIsSticky] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Function to update screenWidth when the window is resized
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Attach event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

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

  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: "group"
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem;
  }

  const items: MenuProps["items"] = [
    getItem("Navigation One", "sub1", <MailOutlined />, [
      getItem(
        "Item 1",
        "g1",
        null,
        [getItem("Option 1", "1"), getItem("Option 2", "2")],
        "group"
      ),
      getItem(
        "Item 2",
        "g2",
        null,
        [getItem("Option 3", "3"), getItem("Option 4", "4")],
        "group"
      ),
    ]),

    getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
      getItem("Option 5", "5"),
      getItem("Option 6", "6"),
      getItem("Submenu", "sub3", null, [
        getItem("Option 7", "7"),
        getItem("Option 8", "8"),
      ]),
    ]),

    { type: "divider" },

    getItem("Navigation Three", "sub4", <SettingOutlined />, [
      getItem("Option 9", "9"),
      getItem("Option 10", "10"),
      getItem("Option 11", "11"),
      getItem("Option 12", "12"),
    ]),
  ];

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };

  const handleMenuButtonClick = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <nav
      ref={navbarRef}
      className={`${styles.nav} ${isSticky ? styles.sticky : ""}`}
    >
      <Row justify={"space-between"} align="middle">
        <Col
          xxl={{ span: 6, push: xxlContainerSpace, pull: 0 }}
          xl={{ span: 6, push: underXXlcontainerSpace, pull: 0 }}
          lg={{ span: 6, push: underXXlcontainerSpace, pull: 0 }}
          md={{ span: 6, push: underXXlcontainerSpace, pull: 0 }}
          sm={{ span: 6, push: underXXlcontainerSpace, pull: 0 }}
          xs={{ span: 6, push: underXXlcontainerSpace, pull: 0 }}
          // push={underXXlcontainerSpace}
          // style={{ backgroundColor: "red" }}
        >
          <Row justify={"start"}>
            <Link to="/">
              <div
                className={`${
                  isSticky ? styles.stickyImageContainer : styles.imageContainer
                }`}
              >
                <img src={logo} alt="Logo" className={styles.containedImage} />
              </div>
            </Link>
          </Row>
        </Col>
        <Col
          xxl={{ span: 14, push: 0, pull: xxlContainerSpace }}
          xl={{ span: 14, push: 0, pull: underXXlcontainerSpace }}
          lg={{ span: 14, push: 0, pull: underXXlcontainerSpace }}
          sm={{ span: 14, push: 0, pull: underXXlcontainerSpace }}
          md={{ span: 14, push: 0, pull: underXXlcontainerSpace }}
          xs={{ span: 14, push: 0, pull: underXXlcontainerSpace }}
          // style={{ backgroundColor: "blue" }}
        >
          <Row justify={"end"}>
            {screenWidth > 1000 ? (
              <ul className={styles.list}>
                <li>
                  <Link className={styles.itemStyle} to="/">
                    {t("Home")}
                  </Link>
                </li>
                <li>
                  <Dropdown
                    menu={{ items: aboutItems, className: styles.menu }}
                  >
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
                  <Dropdown
                    menu={{ items: learningItems, className: styles.menu }}
                  >
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
                  <Dropdown
                    menu={{ items: coursesItems, className: styles.menu }}
                  >
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
            ) : (
              <>
                {" "}
                <div className={styles.menuContainer}>
                  <div
                    className={styles.iconWrapper}
                    onClick={handleMenuButtonClick}
                  >
                    {isMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
                  </div>
                  <Menu
                    onClick={onClick}
                    className={styles.minWidthMenu}
                    overflowedIndicator
                    style={{
                      marginTop: isSticky ? "3%" : "5%",
                      height: isMenuOpen ? "100vh" : "0",
                    }}
                    mode="inline"
                    items={items}
                  />
                </div>
              </>
            )}
          </Row>
        </Col>
      </Row>
    </nav>
  );
};

export default StickyHeader;
