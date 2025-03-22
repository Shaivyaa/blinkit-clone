import styled from "styled-components";

export const NavBarWrapper = styled.div`
  padding: 25px 55px;
  border-bottom: 1px solid lightgray;
`;

export const NavBarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoContainer = styled.a`
  cursor: pointer;
`;

export const LocationContainer = styled.div``;

export const DeliveryTime = styled.div`
  color: rgb(0, 0, 0);
  font-weight: 800;
  margin-bottom: 6px;
  font-size: 18px;
`;

export const DeliveryAddressDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const DeliveryAddress = styled.div`
  font-size: 13px;
  color: rgb(0, 0, 0);
  font-weight: 400;
  clear: both;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  width: auto;
  max-width: 210px;
  text-overflow: ellipsis;
`;

export const DownArrowIcon = styled.div`
  cursor: pointer;
`;

export const SearchBar = styled.div`
  width: 100%;
  max-width: 700px;
  display: flex;
  gap: 20px;

  input {
    width: 100%;
    padding: 0 25px;
    height: 46px;
    display: flex;
    gap: 8px;
    border: 1px solid rgb(232, 232, 232);
    border-radius: 12px;
    background: rgb(248, 248, 248);
    color: rgb(130, 130, 130);
    box-shadow: none;

    ::after {
      border: 1px solid rgb(232, 232, 232);
    }

    ::placeholder {
    }
  }
`;

export const SearchIcon = styled.div`
  position: absolute;
  top: 42px;
  margin-left: 5px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;
`;

export const LoginBtn = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  transition: background-color 0.5s;
  background-color: transparent;
  font-size: 25px;
`;

export const AddToCardBtnContainer = styled.button`
  background-color: rgb(12, 131, 31);
  border-radius: 8px;
  cursor: pointer;
  height: 52px;
  width: 112px;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  display: flex;
  outline: none;
  border: none;
`;

export const CartIcon = styled.div``;

export const CardDetails = styled.div``;

export const TotalCardItems = styled.div`
  font-size: 14px;
  color: rgb(255, 255, 255);
  font-family: Okra-Bold;
  font-weight: 600;
`;

export const TotalPrice = styled.div`
  font-size: 14px;
  color: rgb(255, 255, 255);
  font-family: Okra-Bold;
  font-weight: 600;
`;

export const ModalContainer = styled.div`
  background-color: #f7f7f7;
  width: 100%;
  max-width: 500px;
  padding: 30px;
  margin: 0 auto;
  position: absolute;
  right: 0;
  height: 80%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const CartTitle = styled.div`
  line-height: 20px;
  font-size: 16px;
  font-family: Okra;
  color: rgb(31, 31, 31);
  font-weight: 700;
`;

export const CrossIcon = styled.div`
  cursor: pointer;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

export const DeliveryContainer = styled.div`
  display: flex;
  gap: 15px;
  width: 100%;
`;
export const DeliveryIcon = styled.div``;

export const DeliveryTimeDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
`;

export const DeliveryTimeTitle = styled.div`
  color: black;
  font-family: Okra-Bold;
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  padding-bottom: 4px;
`;

export const DelivertTimeDesc = styled.div`
  font-size: 12px;
  color: gray;
`;
export const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  width: 100%;
`;

export const ProductImg = styled.div``;
export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ProductName = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: rgb(28, 28, 28);
`;

export const ProductQuantity = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: rgb(28, 28, 28);
`;

export const ProductPrice = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: black;
`;

export const AddBtn = styled.div`
  background-color: rgb(12, 131, 31);
  border-radius: 8px;
  cursor: pointer;
  height: 31px;
  width: 66px;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  display: flex;
  outline: none;
  border: none;
  color: white;
`;

export const BillDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: white;
  padding: 15px;
`;

export const BillDesc = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const BillTotalDetails = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;
export const BillIcon = styled.div``;

export const TotalBill = styled.div`
  font-size: 12px;
  color: gray;
`;

export const BillPrice = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: black;
`;

export const CancellationPolicy = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: white;
  padding: 15px;
`;

export const CancelHeader = styled.div`
  font-size: 15px;
  line-height: 20px;
  font-family: Okra-bold;
  font-weight: 700;
  padding-top: 12px;
  padding-bottom: 4px;
  color: rgb(0, 0, 0);
`;
export const CancelDesc = styled.div`
  font-family: Okra;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: rgb(130, 130, 130);
  padding-bottom: 12px;
`;

export const ProceedBtn = styled.button`
  background-color: rgb(12, 131, 31);
  border-radius: 8px;
  cursor: pointer;
  height: 51px;
  width: 100%;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  display: flex;
  outline: none;
  border: none;
  color: white;
`;
