import { Card, Col, Row } from "antd";
import styles from "./styles.module.scss"

const Footer = (props) => {
    return (
        <div className={styles.footer}>
            <Row gutter={[15, 15]}>
                <Col xs={24} sm={24} md={8} lg={8} xl={8} className="footerChild" style={{ padding: '0 30px 0 30px', marginTop: -20 }}>
                    <Card>
                        <Row gutter={[20, 20]}>
                            <Row style={{ display: "flex", textAlign: "center" }}>
                                <Col style={{ textAlign: "center" }}>
                                    <div style={{ textAlign: 'center' }}>LOGO</div>
                                </Col>
                            </Row>
                            <Row style={{ display: "flex", textAlign: "center" }} onClick={() => props.refProp.menuRef.current.scrollIntoView({ behavior: "smooth" })}>
                                <Col>
                                    <span>Ana Menüler</span>
                                </Col>
                            </Row>
                            <Row style={{ display: "flex", textAlign: "center" }} onClick={() => props.refProp.drinksRef.current.scrollIntoView({ behavior: "smooth" })}>
                                <Col>
                                    <span>İçecekler ve Yan Ürünler</span>
                                </Col>
                            </Row>
                            <Row style={{ display: "flex", textAlign: "center" }} onClick={() => props.refProp.addressRef.current.scrollIntoView({ behavior: "smooth" })}>
                                <Col>
                                    <span>Adresimiz</span>
                                </Col>
                            </Row>
                        </Row>
                    </Card>

                </Col>
                <Col xs={24} sm={24} md={8} lg={8} xl={8} className="footerChild">
                    <Col span={3}>
                    </Col>
                    <Col span={21}>
                        <div className={styles.footerContent}>
                            <div>
                                content
                            </div>
                            <div>
                                content
                            </div>
                        </div>
                    </Col>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8} xl={8} className="footerChild">
                    <div className={styles.footerContent}>
                        <div>
                            Adresimiz
                        </div>
                        <div>
                            Adresimiz
                        </div>
                    </div>
                </Col>
                <div className={styles.copyright}>
                                © 2023 Elit Pide
                            </div>
            </Row>
        </div>
    );
}

export default Footer;