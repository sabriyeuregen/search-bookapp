import "./SearchDataCard.scss";

const SearchDataCard = (props) => {

  return (
    <div className="searchcard" onClick={props.onCardClick} >
        <div className="searchcard__img">{props.image}</div>
        <div className="searchcard__title">{props.title}</div>
        <div>{props.amount}</div>
     </div>
  )
}

export default SearchDataCard