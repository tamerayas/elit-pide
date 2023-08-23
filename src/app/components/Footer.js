import { Card, Col, Row } from "antd";
import styles from "./styles.module.scss"

const Footer = () => {
    return (
        <div className={styles.footer}>
            <Row gutter={[15, 15]}>
                <Col xs={24} sm={24} md={8} lg={8} xl={8} className="footer-child" style={{ padding: '0 30px 0 30px', marginTop: -10}}>
                    <Card>
                        <span style={{ textAlign: 'center' }}>LOGO</span>
                    </Card>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8} xl={8} className="footer-child">
                    Adres
                </Col>
                <Col xs={24} sm={24} md={8} lg={8} xl={8} className="footer-child">
                    Adres 222222
                </Col>
            </Row>
        </div>
    );
}

export default Footer;