const Modal = ({ check, theme, visible, toggleModal, deleteCompleted }) => {
  return (
    <div className={`modal ${visible} ${theme}`}>
      <div className="box">
        {check ? (
          <div>
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
        ) : (
          <div>
            <p>There is no "completed" todo left to be deleted!</p>
            <button className="okay" onClick={toggleModal}>
              OK
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
