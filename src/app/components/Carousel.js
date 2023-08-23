import { Carousel } from 'antd';
import Image from 'next/image'

const MainCarousel = () => (
    <Carousel effect='fade' autoplay>
        <div>
            <Image src="/pide.jpeg" alt="pide" width="1500" height="300" />
        </div>
        <div>
            <Image src="/pide.jpeg" alt="pide" width="1500" height="300" />
        </div>
    </Carousel>
);
export default MainCarousel;