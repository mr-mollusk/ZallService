import { IImage } from '@/@types/image.types';
import Img1 from '../assets/img/1.jpg';
import Img2 from '../assets/img/2.jpg';
import Img3 from '../assets/img/3.jpg';
import Img4 from '../assets/img/4.jpg';
import Img5 from '../assets/img/5.jpg';

export const fallbackSrc =
  'https://placehold.co/600x400?text=%D0%A3%D0%9F%D0%A1!+%D0%9A%D0%90%D0%A0%D0%A2%D0%98%D0%9D%D0%9A%D0%90+%D0%A3%D0%9F%D0%90%D0%9B%D0%90!';

export const sliderMock: Array<IImage> = [
  {
    id: 'Gallery_Image_1',
    src: Img1,
    alt: 'Вай прижала Кейт',
    fallback: fallbackSrc,
  },
  { id: 'Gallery_Image_2', src: Img2, alt: 'Тут они курят', fallback: fallbackSrc },
  { id: 'Gallery_Image_3', src: Img3, alt: 'А тут обнимаются', fallback: fallbackSrc },
  { id: 'Gallery_Image_4', src: Img4, alt: 'Наелась и спит', fallback: fallbackSrc },
  { id: 'Gallery_Image_5', src: Img5, alt: 'Фига там Джинкс в окне', fallback: fallbackSrc },
];
