import React, { useEffect, useState } from "react";
import {
  AddToCardBtnContainer,
  BillDesc,
  BillDetails,
  BillIcon,
  BillPrice,
  BillTotalDetails,
  ButtonContainer,
  CancelDesc,
  CancelHeader,
  CancellationPolicy,
  CardDetails,
  CartIcon,
  CartTitle,
  CrossIcon,
  DelivertTimeDesc,
  DeliveryAddress,
  DeliveryAddressDetails,
  DeliveryContainer,
  DeliveryIcon,
  DeliveryTime,
  DeliveryTimeDetails,
  DeliveryTimeTitle,
  DownArrowIcon,
  HeaderContainer,
  ItemContainer,
  LocationContainer,
  LoginBtn,
  LogoContainer,
  ModalContainer,
  NavBarContainer,
  NavBarWrapper,
  ProceedBtn,
  ProductContainer,
  ProductDetails,
  ProductImg,
  ProductName,
  ProductPrice,
  ProductQuantity,
  SearchBar,
  SearchIcon,
  TotalBill,
  TotalCardItems,
  TotalPrice,
} from "./NavBar.styles";
import logo from "../../assets/svgs/logo.svg";
import downArrowIcon from "../../assets/svgs/down-arrow.svg";
import searchIcon from "../../assets/svgs/search-icon.svg";
import cartIcon from "../../assets/svgs/cart-icon.svg";
import crossIcon from "../../assets/svgs/cross-icon.svg";
import deliveryIcon from "../../assets/svgs/delivery-icon.svg";
import billIcon from "../../assets/svgs/bill-icon.svg";

export default function NavBar({ cartItems, setCartItems }) {
  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => {
    setOpenModal(true);
  };

  const closeModal = () => [setOpenModal(false)];

  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openModal]);

  return (
    <>
      <NavBarWrapper>
        <NavBarContainer>
          <LogoContainer href="/">
            <img src={logo} alt="logo" />
          </LogoContainer>
          <LocationContainer>
            <DeliveryTime>Delivery in 8 minutes</DeliveryTime>
            <DeliveryAddressDetails>
              {" "}
              <DeliveryAddress>DLF Cyber City, Gurgaon</DeliveryAddress>
              <DownArrowIcon>
                {" "}
                <img
                  src={downArrowIcon}
                  alt="down-icon"
                  height={15}
                  width={15}
                />
              </DownArrowIcon>
            </DeliveryAddressDetails>
          </LocationContainer>
          <SearchBar>
            <SearchIcon>
              <img src={searchIcon} alt="search-icon" height={15} width={15} />
            </SearchIcon>
            <input type="text" placeholder="Search any product..." />
          </SearchBar>
          <ButtonContainer>
            <LoginBtn>Login</LoginBtn>
            <AddToCardBtnContainer onClick={toggleModal}>
              <CartIcon>
                <img src={cartIcon} alt="cart-icon" height={25} width={25} />
              </CartIcon>
              <CardDetails>
                <TotalCardItems>{cartItems} Items</TotalCardItems>
                <TotalPrice>₹ 0</TotalPrice>
              </CardDetails>
            </AddToCardBtnContainer>
          </ButtonContainer>
        </NavBarContainer>
      </NavBarWrapper>

      {openModal && (
        <ModalContainer>
          <HeaderContainer>
            <CartTitle>My Cart</CartTitle>
            <CrossIcon onClick={closeModal}>
              <img src={crossIcon} alt="cross-icon" height={15} width={15} />
            </CrossIcon>
          </HeaderContainer>

          <ItemContainer>
            <DeliveryContainer>
              <DeliveryIcon>
                <img src={deliveryIcon} alt="delivery" height={30} width={30} />
              </DeliveryIcon>
              <DeliveryTimeDetails>
                <DeliveryTimeTitle>Delivery in 8 minutes</DeliveryTimeTitle>
                <DelivertTimeDesc>Shipment of 1 item</DelivertTimeDesc>
              </DeliveryTimeDetails>
            </DeliveryContainer>

            <ProductContainer>
              <ProductImg>
                <img
                  src={"/assets/images/milk-products.jpg"}
                  alt="product"
                  height={100}
                  width={100}
                />
              </ProductImg>
              <ProductDetails>
                <ProductName>Amul Gold Full Cream Fresh Milk</ProductName>
                <ProductQuantity>500 ml</ProductQuantity>
                <ProductPrice>₹34</ProductPrice>
              </ProductDetails>

              <TotalCardItems style={{ color: "black" }}>
                {cartItems} Items
              </TotalCardItems>
            </ProductContainer>
          </ItemContainer>

          <BillDetails>
            <div style={{ color: "black", fontSize: "12px" }}>Bill Details</div>
            <BillDesc>
              <BillTotalDetails>
                <BillIcon>
                  <img src={billIcon} alt="bill" height={12} width={12} />
                </BillIcon>
                <TotalBill>₹34</TotalBill>
              </BillTotalDetails>
              <BillPrice>Grand Total: ₹34</BillPrice>
            </BillDesc>
          </BillDetails>

          <CancellationPolicy>
            <CancelHeader>Cancellation Policy</CancelHeader>
            <CancelDesc>
              Orders cannot be cancelled once packed for delivery. In case of
              unexpected delays, a refund will be provided, if applicable.
            </CancelDesc>
          </CancellationPolicy>

          <ProceedBtn>Login to Proceed</ProceedBtn>
        </ModalContainer>
      )}
    </>
  );
}
