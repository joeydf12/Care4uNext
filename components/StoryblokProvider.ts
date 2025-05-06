"use client";

import {
  storyblokInit,
  apiPlugin,
} from "@storyblok/react";
import type { SbReactComponentsMap } from "@storyblok/react/dist/types/components";
import Page from "./page.component";
import Feature from "./Feature/Feature";
import ThreeQuarterLayout from "./ThreeQuarterLayout/ThreeQuarterLayout";
import Grid from "./Grid";
import "../app/globals.css";
import Teaser from "./Teaser";
import "../components/Footer/footer.css";
import "../components/header/navigation.css";
import ProductenComponent from "./Homecomponent";
import Hero from "./hero";
import AboutSection from "./AboutSection";
import Sectie from "./Sectie";
import ImageComponent from "./ImageComponent";
import imageblok1 from "./imageblok";
import imageblok2 from "./imageblok";


const components = {
  page: Page,
  feature: Feature,
  threequarterlayout: ThreeQuarterLayout,
  grid: Grid,
  teaser: Teaser,
  producten: ProductenComponent,
  hero: Hero,
  about_section: AboutSection,
  sectie: Sectie,
  image: ImageComponent, // 👈 voeg image toe hier
  imageblok1: imageblok1,
  imageblok2: imageblok2,
};

storyblokInit({
  accessToken: "Qwz006v8zvdDr6ue2K3kXgtt",
  use: [apiPlugin],
  components: components as SbReactComponentsMap,
});


export default function StoryblokProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

console.log("Qwz006v8zvdDr6ue2K3kXgtt");
