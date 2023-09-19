import { IImage } from '@/@types/image.types';

export interface IGallery {
  images: IImage[];
}

export interface IGalleryArrowButton {
  side: 'left' | 'right';
}
