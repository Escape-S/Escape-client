import styled from "styled-components";
import HomeStoreListItem from "./StoreListItem";

const Container = styled.div`
  padding: 30px;
`;

const HomeStoreList = ({ storeList }) => {
  return (
    <Container>
      <h1>방탈출카페 리스트</h1>
      {storeList.map((store) => (
        <HomeStoreListItem storeInfo={store} key={store.id} />
      ))}
    </Container>
  );
};

export default HomeStoreList;
