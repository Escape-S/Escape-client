import { useEffect, useState } from "react";
import HomeStoreList from "../components/home/StoreList";

const tempStoreListData = [
  {
    id: 1,
    name: "비밀의 화원 리버타운",
    location: "서울 강남구 강남대로96길 20",
    tell: "02-508-7063",
    homepage: "http://secretgardenescape.com/reservation.html?k_shopno=9",
    imgSrc:
      "https://teleskola.mt/wp-content/uploads/elementor/thumbs/room-escape-room-3169e1fb6b9d54512e7a4d08e98dcdb4-oqfis031qtx8xbvufez0e8o5seckd8v1ktvyjwf7k0.jpg",
  },
  {
    id: 2,
    name: "비밀의 화원 리버타운",
    location: "서울 강남구 강남대로96길 20",
    tell: "02-508-7063",
    homepage: "http://secretgardenescape.com/reservation.html?k_shopno=9",
    imgSrc:
      "https://teleskola.mt/wp-content/uploads/elementor/thumbs/room-escape-room-3169e1fb6b9d54512e7a4d08e98dcdb4-oqfis031qtx8xbvufez0e8o5seckd8v1ktvyjwf7k0.jpg",
  },
  {
    id: 3,
    name: "비밀의 화원 리버타운",
    location: "서울 강남구 강남대로96길 20",
    tell: "02-508-7063",
    homepage: "http://secretgardenescape.com/reservation.html?k_shopno=9",
    imgSrc:
      "https://teleskola.mt/wp-content/uploads/elementor/thumbs/room-escape-room-3169e1fb6b9d54512e7a4d08e98dcdb4-oqfis031qtx8xbvufez0e8o5seckd8v1ktvyjwf7k0.jpg",
  },
  {
    id: 4,
    name: "비밀의 화원 리버타운",
    location: "서울 강남구 강남대로96길 20",
    tell: "02-508-7063",
    homepage: "http://secretgardenescape.com/reservation.html?k_shopno=9",
    imgSrc:
      "https://teleskola.mt/wp-content/uploads/elementor/thumbs/room-escape-room-3169e1fb6b9d54512e7a4d08e98dcdb4-oqfis031qtx8xbvufez0e8o5seckd8v1ktvyjwf7k0.jpg",
  },
  {
    id: 5,
    name: "비밀의 화원 리버타운",
    location: "서울 강남구 강남대로96길 20",
    tell: "02-508-7063",
    homepage: "http://secretgardenescape.com/reservation.html?k_shopno=9",
    imgSrc:
      "https://teleskola.mt/wp-content/uploads/elementor/thumbs/room-escape-room-3169e1fb6b9d54512e7a4d08e98dcdb4-oqfis031qtx8xbvufez0e8o5seckd8v1ktvyjwf7k0.jpg",
  },
];

const Home = () => {
  const [storeList, setStoreList] = useState([]);

  useEffect(() => {
    setStoreList(tempStoreListData);
  }, []);

  return (
    <div>
      This is Home
      <HomeStoreList storeList={storeList} />
    </div>
  );
};

export default Home;
