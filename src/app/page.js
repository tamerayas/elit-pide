"use client"

import styles from './page.module.scss'
import Navbar from './components/Navbar'
import Card from './components/Card'
import Tabs from './components/Tabs'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import AddressBar from './components/AddressBar'
import { Col, FloatButton, Row } from 'antd';
import { useRef } from "react"

export default function Home() {
  const menuRef = useRef(null);
  const drinksRef = useRef(null);
  const addressRef = useRef(null);

  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.content}>
        <div className={styles.slider}>
          <Carousel />
        </div>
        <div className={styles.menus}>
          <Row gutter={[12, 12]}>
            <Col xs={24} sm={24} md={24} lg={12} xl={12} ref={menuRef}>
              <Card>
                <span className={styles.subtitle}>Ana Menüler</span>
                <Tabs />
              </Card>
            </Col>
            <Col xs={24} sm={24} md={24} lg={12} xl={12} ref={drinksRef}>
              <Card>
                <span className={styles.subtitle}>İçecekler ve Yan Ürünler</span>
                <Tabs />
              </Card>
            </Col>
          </Row>
        </div>
      </div>
      <div ref={addressRef}>
        <AddressBar />
      </div>
      <Footer refProp={{
        menuRef,
        drinksRef,
        addressRef
      }} />
      <FloatButton />
    </main>
  )
}
