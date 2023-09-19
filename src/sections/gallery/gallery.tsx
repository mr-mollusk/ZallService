import { Swiper, SwiperRef, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Controller } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Box, Image } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import s from './gallery.module.css';
import { Swiper as SwiperType } from 'swiper';
import { SliderIcon } from '@/assets/svg/sliderArrow';
import { IGallery, IGalleryArrowButton } from './gallery.types';

export const Gallery: React.FC<IGallery> = ({ images }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const controlledSwiper = useRef<SwiperType>(null);
  const mainSlider = useRef<SwiperType>(null);

  useEffect(() => {
    if (controlledSwiper.current && mainSlider?.current) {
      controlledSwiper?.current.slideTo(activeSlide);
      mainSlider?.current.slideTo(activeSlide);
    }
  }, [activeSlide]);

  const handleChangeActiveSlide = (newActiveSlide: number) => {
    setActiveSlide(newActiveSlide);
  };

  const handleMainSliderInit = (swiper: SwiperType) => {
    //@ts-ignore
    mainSlider.current = swiper;
  };
  const handleControl = (swiper: SwiperType) => {
    //@ts-ignore
    controlledSwiper.current = swiper;
  };

  return (
    <Box className={s.wrapper}>
      <Swiper
        modules={[Navigation, Controller]}
        controller={{ control: controlledSwiper.current }}
        slidesPerView={1}
        onSlideChange={(swiper) => handleChangeActiveSlide(swiper.activeIndex)}
        onSwiper={(swiper) => handleMainSliderInit(swiper)}
      >
        <SliderArrowButton side="left" />
        {images.map(({ src, alt, fallback, height, id, width }) => (
          <SwiperSlide key={id}>
            <Image
              src={src}
              height="400px"
              w="100%"
              objectFit="cover"
              alt={alt}
              fallbackSrc={fallback}
            />
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
        {images.map(({ src, alt, fallback, height, id, width }, index) => (
          <SwiperSlide key={id} onClick={() => setActiveSlide(index)}>
            <Box p="10px 7.5px">
              <Image
                src={src}
                alt={alt}
                height="160px"
                w="100%"
                objectFit="cover"
                fallbackSrc={fallback}
                className={clsx(s.image, { [s.activeSlide]: activeSlide === index })}
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

const SliderArrowButton: React.FC<IGalleryArrowButton> = ({ side }) => {
  const swiper = useSwiper();

  const handleClick = () => {
    if (side === 'left') {
      swiper.slidePrev();
    } else {
      swiper.slideNext();
    }
  };

  return (
    <Box onClick={handleClick} className={clsx(s.arrowButton, s[side])}>
      <SliderIcon width="19" height="39" />
    </Box>
  );
};
