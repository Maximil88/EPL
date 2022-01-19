import './style.css'

function Modal({ description, closeModal }) {
  return (
    <div className="modal" onClick={closeModal}>
      {description}
    </div>
  );
}

export default Modal;