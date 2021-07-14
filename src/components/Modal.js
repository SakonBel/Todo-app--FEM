const Modal = ({ visible, toggleModal, deleteCompleted }) => {
  return (
    <div className={`modal ${visible}`}>
      <div className="box">
        <p>Are you sure you want to delete all completed todos?</p>
        <div className="button-box">
          <button className="cancel" onClick={toggleModal}>
            Cancel
          </button>
          <button
            className="confirm"
            onClick={() => {
              deleteCompleted();
              toggleModal();
            }}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
