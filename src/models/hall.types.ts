export interface IHall {
  id: number;
  name: string;
  descriptions: string;
  owner: number;
  moderated: number;
  hallType?: number[];
  viewCount?: number;
  areaMin?: string;
  area?: string;
  capacityMin?: number;
  capacity?: number;
  rating: number;
  adress?: string;
  priceMin?: number;
  price?: number;
  unit: number;
  email?: string;
  longitude?: string;
  latitude?: string;
  condition?: string;
  phone?: string;
  site?: string;
  vk?: string;
  telegram?: string;
  whatsapp?: string;
  properties: IProperty[];
  services?: object;
  approvedOrderDate: string;
  avatar: string;
  media: string;
  eventType?: number[];
  recommendations: string[];
  comments: IComment[];
}

export interface IComment {
  id: number;
  user?: number;
  hall: number;
  text?: string;
}
export type IPropertyTypeEnum = 'boolean' | 'string' | 'number';

export interface IProperty {
  id: number;
  propertyName: string;
  propertyType: IPropertyTypeEnum;
  hallType: number[];
}
