import { Card } from 'antd';

const MainCard = ({ children }) => {
    return (
        <Card
            style={{
                width: '100%'
            }}
        >
            {children}
        </Card>
    );
}

export default MainCard;