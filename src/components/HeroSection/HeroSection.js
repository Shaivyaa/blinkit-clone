import React from "react";
import { HeroSectionContainer, HeroSectionWrapper } from "./HeroSection.styles";
import heroSectionCategory from "../../assets/images/hero-section-category1.webp";

export default function HeroSection() {
  return (
    <>
      <HeroSectionWrapper>
        <HeroSectionContainer>
          <img src={heroSectionCategory} alt="category-img" />
        </HeroSectionContainer>
      </HeroSectionWrapper>
    </>
  );
}
