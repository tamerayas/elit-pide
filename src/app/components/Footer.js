import { Card, Col, Divider, Row } from "antd";
import styles from "./styles.module.scss"

const Footer = () => {
    return (
        <div className={styles.footer}>
            <Row gutter={[15, 15]}>
                <Col xs={24} sm={24} md={8} lg={8} xl={8} className="footerChild" style={{ padding: '0 30px 0 30px', marginTop: -10}}>
                <Card>
                        <span style={{ textAlign: 'center' }}>LOGO</span>
                    </Card>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8} xl={8} className="footerChild">
                    <Col span={3}>
                        <Divider type="vertical" className={styles.divider} />
                    </Col>
                    <Col span={21}>
                        Content
                    </Col>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8} xl={8} className="footerChild">
                     Adres 222222
                    <Divider type="vertical" className={styles.divider} />
                </Col>
            </Row>
        </div>
    );
}

export default Footer;