import { StaticImageData } from "next/image";

export type Project = {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
  carouselImages?: StaticImageData[];
  link: string;
  isHosted: boolean;
  isResponsive : boolean,
}