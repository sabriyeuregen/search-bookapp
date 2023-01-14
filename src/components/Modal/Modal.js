import "./Modal.scss";

const Modal = (props) => {
  if (!props.show) {
    return null;
  }

  let thumbnail = props.thumbnail
   /* props.item.volumeInfo.imageLinks &&
    props.item.volumeInfo.imageLinks.smallThumbnail;*/

  return (
    <div className="overlay">
      <div className="overlay__inner">
        <button className="button" onClick={props.onClose}>
          X
        </button>
        <div className="inner-box">
          <img src={thumbnail} alt="view"></img>
          <div className="info">
            <h1>{props.item.volumeInfo.title}</h1>
            <h3>{props.item.volumeInfo.authors}</h3>
            <h4>
              <span>{props.item.volumeInfo.publishedDate}</span>
            </h4>
            <a href={props.item.volumeInfo.previewLink}>
              <button>More</button>
            </a>
          </div>
        </div>
        <h4 className="description">{props.item.volumeInfo.description}</h4>
      </div>
    </div>
  );
};

export default Modal;
