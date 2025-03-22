import React from "react";
import {
  AddBtn,
  Deliverytime,
  DetailsSectionContainer,
  DetailsSectionDescriptionContainer,
  DetailsSectionImageContainer,
  DetailsSectionWrapper,
  ItemTitle,
  Line,
  Price,
  Quantity,
  Tax,
  UnitBox,
  UnitContainer,
  View,
} from "./DetailsSection.styles";

export default function DetailsSection({ cartItems, setCartItems }) {
  const addItems = () => {
    setCartItems((prev) => prev + 1);
  };

  const deleteItmes = () => {
    setCartItems((prev) => prev - 1);
  };

  return (
    <>
      <DetailsSectionWrapper>
        <DetailsSectionContainer>
          <DetailsSectionImageContainer>
            <img src={"/assets/images/milk-products.jpg"} alt="milk" />
          </DetailsSectionImageContainer>

          <DetailsSectionDescriptionContainer>
            <ItemTitle>Amul Gold Full Cream Fresh Milk</ItemTitle>
            <Deliverytime>8 MINS</Deliverytime>
            <View>View all by Amul</View>
            <Line></Line>

            <UnitContainer>Select Unit</UnitContainer>
            <UnitBox>
              <Quantity>500ml</Quantity>
              <Price>₹35</Price>
            </UnitBox>
            <Tax>(Inclusive of all taxes)</Tax>
            <AddBtn>
              <div onClick={deleteItmes}>-</div> {cartItems}
              <div onClick={addItems}>+</div>{" "}
            </AddBtn>
          </DetailsSectionDescriptionContainer>
        </DetailsSectionContainer>
      </DetailsSectionWrapper>
    </>
  );
}
