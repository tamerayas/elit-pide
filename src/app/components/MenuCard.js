import Card from "./Card";
import styles from "./styles.module.scss"

const MenuCard = () => {
    return (
        <Card>
            <div className={styles.flexCard}>
                <div>
                    <span className={styles.bold}>Coca-Cola (33 cl.)</span>
                </div>
                <div className={styles.image}>
                    <img src="https://media-cdn.yummyadvisor.com/store/c73ca258-513c-46a8-b7ee-33556fe6b937.jpg?x-oss-process=style/type_4" width="84" height="84" alt="" className="flased-data-img" data-src="https://media-cdn.yummyadvisor.com/store/c73ca258-513c-46a8-b7ee-33556fe6b937.jpg?x-oss-process=style/type_4" lazy="loaded" />
                </div>
                <div className={styles.price}>
                    <span>20 TL</span>
                </div>
            </div>
        </Card>
    );
}

export default MenuCard;