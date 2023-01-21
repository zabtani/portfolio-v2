import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
import useWindowSize from '../hooks/useWindowSize';

interface Props {
  resoultionsSlideCount?: { desktop: number; mobile: number };
  imgs?: string[];
}
const Slider = ({ imgs, resoultionsSlideCount = { desktop: 3, mobile: 2 } }: Props) => {
  const { width } = useWindowSize();
  const { desktop, mobile } = resoultionsSlideCount;
  const slidesCount = (width ?? 0) < 600 ? mobile : mobile;
  return (
    <>
      <Swiper
        slidesPerView={slidesCount}
        spaceBetween={0}
        slidesPerGroup={slidesCount}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={(width ?? 0) > 400}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {imgs?.length ? (
          imgs.map((img) => (
            <SwiperSlide key={img}>
              <img src={img} />
            </SwiperSlide>
          ))
        ) : (
          <div key={'s'}>
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
          </div>
        )}
      </Swiper>
    </>
  );
};

export default Slider;
