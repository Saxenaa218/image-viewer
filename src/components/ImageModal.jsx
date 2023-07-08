/* eslint-disable react/prop-types */
import "./ImageModal.css"

const ImageModal = ({ activeImage, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <img src={activeImage.download_url} alt={activeImage.author} />
        <button className="modal-close" onClick={onClose}>
          close
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
