import SearchDataCard from "./SearchDataCard";
import "./SearchDataList.scss";
import Modal from "../Modal/Modal";
const SearchDataList = (props) => {
  return (
    <div className="datalist">
      {props.data.map((item) => {
        let thumbnail =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail;
        let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
        if (thumbnail != undefined && amount != undefined) {
          return (
            <div>
              <SearchDataCard
                image={
                  <img
                    style={{ objectFit: "contain" }}
                    width="200"
                    height="200"
                    src={thumbnail}
                    alt=""
                  ></img>
                }
                title={item.volumeInfo.title}
                key={item.id}
                amount={item.amount}
              />
              <Modal />
            </div>
          );
        }
      })}
    </div>
  );
};

export default SearchDataList;
