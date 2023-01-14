import SearchDataCard from "./SearchDataCard";
import "./SearchDataList.scss";
import { useState } from "react";
import Modal from "../Modal/Modal";
const SearchDataList = (props) => {
  const [show, setShow] = useState(false);
  const [bookItem, setBookItem] = useState();

  return (
    <div className="datalist">
      {props.data.map((item) => {
        const cardClickHandler = () => {
          setShow(true);
          setBookItem(item);
        };

        let thumbnail =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail;
        console.log(item);
        if (thumbnail !== undefined) {
          return (
            <div>
              <SearchDataCard
                key={item.id}
                onCardClick={cardClickHandler}
                item={item}
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
                amount={item.amount}
              />
              <Modal
                show={show}
                item={bookItem}
                onClose={() => {
                  setShow(false);
                }}
                thumbnail={thumbnail}
              />
            </div>
          );
        }
      })}
    </div>
  );
};

export default SearchDataList;
