import "./Modal.scss";

const Modal = () => {
  return (
    <div className="overlay">
    <div className="overlay__inner">
        <button className="button"></button>
        <div className="inner-box">
         <img></img>
         <div className="info"></div>
        </div>
    </div>
    <Modal/>
    </div>
  )
}

export default Modal