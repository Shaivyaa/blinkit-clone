import styled from "styled-components";

export const DetailsSectionWrapper = styled.div``;

export const DetailsSectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  max-width: 1280px;
`;

export const DetailsSectionImageContainer = styled.div`
  width: 100%;
  max-width: 55%;

  img {
    height: 480px;
    width: 480px;
  }
`;

export const DetailsSectionDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 45%;
`;

export const ItemTitle = styled.div`
  color: rgb(0, 0, 0);
  font-size: 24px;
  line-height: 32px;
  font-weight: 700;
  margin: 0px;
`;

export const Deliverytime = styled.div`
  padding: 8px;
  width: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 4px;
  font-weight: 700;
  color: rgb(38, 50, 56);
  background-color: rgb(245, 245, 245);
`;

export const View = styled.div`
  text-decoration: none;
  color: rgb(12, 131, 31);
  font-size: 22px;
  line-height: 24px;
  font-family: Okra-Medium;
  cursor: pointer;
  font-weight: 600;
`;

export const Line = styled.div`
  border: 1px solid lightgray;
  color: transparent;
`;

export const UnitContainer = styled.div`
  font-weight: 600;
  color: rgb(79, 79, 79);
  font-size: 18px;
`;

export const Title = styled.div`
  color: rgb(31, 31, 31);
  font-weight: 600;
  font-size: 13px;
  line-height: 18px;
  width: 100%;
  height: 36px;
  margin-bottom: 6px;
`;

export const Quantity = styled.div`
  color: gray;
  font-weight: 600;
  font-size: 22px;
`;

export const UnitBox = styled.div`
  padding: 8px 16px;
  border-radius: 12px;
  border: 0.5px solid rgb(58, 183, 87);
  cursor: pointer;
  background: rgb(247, 255, 249);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  min-width: 56px;
  width: max-content;
  box-shadow: rgba(0, 0, 0, 0.16) 2px 2px 8px;
`;

export const Price = styled.div`
  color: rgb(31, 31, 31);
  font-weight: 600;
  font-size: 13px;
  line-height: 18px;
`;

export const Tax = styled.div`
  color: rgb(79, 79, 79);
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  width: 100%;
`;

export const AddBtn = styled.button`
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
