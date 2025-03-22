import React from "react";
import {
  CategorySectionContainer,
  CategorySectionProducts,
  CategorySectionProductsImg,
  CategorySectionProductsTitle,
  CategorySectionWrapper,
} from "./CategorySection.styles";
import CategorySectionItems from "./CategorySection.json";

export default function CategorySection() {
  return (
    <>
      <CategorySectionWrapper>
        <CategorySectionContainer>
          {CategorySectionItems.map((item, index) => (
            <>
              <div key={index}>
                <CategorySectionProducts>
                  <CategorySectionProductsImg>
                    <img src={item.img} alt="items" />
                  </CategorySectionProductsImg>
                  <CategorySectionProductsTitle>
                    {item.title}
                  </CategorySectionProductsTitle>
                </CategorySectionProducts>
              </div>
            </>
          ))}
        </CategorySectionContainer>
      </CategorySectionWrapper>
    </>
  );
}
