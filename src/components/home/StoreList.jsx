import HomeStoreListItem from "./StoreListItem";

const HomeStoreList = ({ storeList }) => {
  return (
    <div>
      {storeList.map((store) => (
        <HomeStoreListItem storeInfo={store} key={store.id} />
      ))}
    </div>
  );
};

export default HomeStoreList;
