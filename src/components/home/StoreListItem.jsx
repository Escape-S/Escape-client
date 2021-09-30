import styled from "styled-components";

const StoreContainer = styled.div`
  display: flex;
  margin: 30px;
`;
const StoreImg = styled.img`
  width: 150px;
  height: 150px;
  margin-right: 30px;
`;
const StoreInfo = styled.p`
  display: inline;
  margin-right: 20px;

  span {
    font-weight: bold;
    margin-right: 5px;
  }
`;
const StoreReservationLink = styled.a`
  display: block;
`;

const HomeStoreListItem = ({ storeInfo }) => {
  return (
    <StoreContainer>
      <StoreImg src={storeInfo.imgSrc} alt="store_image" />
      <div>
        <h3>{storeInfo.name}</h3>
        <StoreInfo>
          <span>주소</span> {storeInfo.location}
        </StoreInfo>
        <StoreInfo>
          <span>전화</span> {storeInfo.tell}
        </StoreInfo>
        <StoreReservationLink href={storeInfo.homepage}>
          바로 예약하기
        </StoreReservationLink>
      </div>
    </StoreContainer>
  );
};

export default HomeStoreListItem;
