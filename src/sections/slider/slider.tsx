import { Swiper, SwiperProps, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Controller } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { ISlider, ISliderArrowButton } from './slider.types';
import { Box, Icon, Image } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import s from './slider.module.css';
import { Swiper as SwiperType } from 'swiper';
import ArrowIcon from '../../assets/svg/sliderArrow.svg';
import { SliderIcon } from '@/assets/svg/sliderArrow';

export const Slider: React.FC<ISlider> = ({ images }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [controlledSwiper, setControlledSwiper] = useState<SwiperType>();
  const [mainSlider, setMainSlider] = useState<SwiperType>();

  useEffect(() => {
    controlledSwiper?.slideTo(activeSlide);
    mainSlider?.slideTo(activeSlide);
  }, [activeSlide]);

  const handleChangeActiveSlide = (newActiveSlide: number) => {
    setActiveSlide(newActiveSlide);
    console.log(newActiveSlide);
  };

  const handleControl = (swiper: SwiperType) => {
    setControlledSwiper(swiper);
  };
  const handleMainSliderInit = (swiper: SwiperType) => {
    setMainSlider(swiper);
  };

  return (
    <Box className={s.wrapper}>
      <Swiper
        modules={[Navigation, Controller]}
        controller={{ control: controlledSwiper }}
        slidesPerView={1}
        onSlideChange={(swiper) => handleChangeActiveSlide(swiper.activeIndex)}
        onSwiper={(swiper) => handleMainSliderInit(swiper)}
      >
        <SliderArrowButton side="left" />
        {images.map((img) => (
          <SwiperSlide key={img}>
            <Image src={img} height="400px" w="100%" objectFit="cover" />
          </SwiperSlide>
        ))}
        <SliderArrowButton side="right" />
      </Swiper>

      <Swiper
        modules={[Navigation, Controller]}
        slidesPerView={4}
        watchSlidesProgress
        className={s.sliderPanel}
        onSwiper={(swiper) => handleControl(swiper)}
      >
        {images.map((img, index) => (
          <SwiperSlide key={img} onClick={() => setActiveSlide(index)}>
            <Box p={'10px 7.5px'}>
              <Image
                src={img}
                height="160px"
                w="100%"
                objectFit="cover"
                className={clsx({ [s.activeSlide]: activeSlide === index })}
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

const SliderArrowButton: React.FC<ISliderArrowButton> = ({ side }) => {
  const swiper = useSwiper();

  const handleClick = () => {
    if (side === 'left') {
      swiper.slidePrev();
    } else {
      swiper.slideNext();
    }
  };

  return (
    <Box onClick={() => handleClick()} className={clsx(s.arrowButton, s[side])}>
      <SliderIcon width="19" height="39" />
    </Box>
  );
};
