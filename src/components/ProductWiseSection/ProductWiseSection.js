import React from "react";
import {
  AddBtn,
  Deliverytime,
  Price,
  ProductHeader,
  ProductsDetailsSectionContainer,
  ProductSectionCard,
  ProductSectionImg,
  ProductsWiseContainer,
  ProductWiseSectionWrapper,
  Quantity,
  Title,
} from "./ProductWiseSection.styles";
import ProductsSection from "./ProductsSection.json";
import { Link } from "react-router-dom";

export default function ProductWiseSection({ cartItems, setCartItems }) {
  const addItems = () => {
    setCartItems((prev) => prev + 1);
  };

  const deleteItmes = () => {
    setCartItems((prev) => prev - 1);
  };

  return (
    <>
      <ProductWiseSectionWrapper>
        <ProductsWiseContainer>
          <ProductHeader>Dairy, Bread & Eggs</ProductHeader>
          <ProductsDetailsSectionContainer>
            {ProductsSection.map((item, index) => (
              <>
                <div key={index}>
                  <ProductSectionCard href="/product-page">
                    <Link to="/DetailsPage">
                      <ProductSectionImg>
                        <img src={item.img} alt="items" />{" "}
                      </ProductSectionImg>
                    </Link>
                    <Deliverytime>{item["delivery-time"]}</Deliverytime>
                    <Title>{item.title}</Title>
                    <Quantity>{item.quantity}</Quantity>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        width: "100%",
                        alignItems: "center",
                      }}
                    >
                      <Price>{item.price}</Price>
                      <AddBtn>
                        <div onClick={deleteItmes}>-</div> {cartItems}
                        <div onClick={addItems}>+</div>{" "}
                      </AddBtn>
                    </div>
                  </ProductSectionCard>
                </div>
              </>
            ))}
          </ProductsDetailsSectionContainer>
        </ProductsWiseContainer>
      </ProductWiseSectionWrapper>
    </>
  );
}
