import styled from "styled-components";

export const CategorySectionWrapper = styled.div`
  padding: 35px 0;
`;

export const CategorySectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  flex-wrap: wrap;
`;

export const CategorySectionProducts = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  gap: 35px;
  height: 188px;
`;

export const CategorySectionProductsImg = styled.div`
  cursor: pointer;
  img {
    height: 100px;
    width: 100px;
    background-color: #bfd3ef;
  }
`;

export const CategorySectionProductsTitle = styled.div`
  cursor: pointer;
  font-size: 15px;
  font-weight: 400;
  text-align: center;
`;
