import { StaticImageData } from "next/image";

export type Project = {
  title: string;
  description: string;
  image: StaticImageData;
  link: string;
  isHosted: boolean;
  carouselImages?: StaticImageData[];
}