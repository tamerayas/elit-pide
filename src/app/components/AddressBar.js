import styles from "./styles.module.scss"

const AddressBar = () => {
    return (
        <div className={styles.addressBar}>
            <h3 style={{ textAlign: 'center', padding: 10 }}> Adresimiz </h3>
            <div style={{ overflow: 'hidden', width: '700px', position: 'relative', justifyContent: 'center', display: 'flex' }}>
                <iframe width="700" height="440" src="https://maps.google.com/maps?width=700&amp;height=440&amp;hl=en&amp;q=adana+(Title)&amp;ie=UTF8&amp;t=&amp;z=10&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                <div style={{ position: 'absolute', width: '80%', bottom: '10px', left: 0, right: 0, marginLeft: 'auto', marginRight: 'auto', color: '#000', textAlign: 'center' }}>
                </div>
            </div>
        </div>
    );
}
export default AddressBar;