const SuccessMsg = ({ label, onClick }) => {
    return (
      <>
        <h5>Success</h5>
        <button
          type="submit"
          className="btn btn-light"
          onClick={onClick}>
          {label}
        </button>
      </>
    );
  };

  export default SuccessMsg;