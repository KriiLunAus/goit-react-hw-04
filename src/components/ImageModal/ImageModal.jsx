import Modal from 'react-modal';
import { CgStudio } from 'react-icons/cg';
Modal.setAppElement('#root');


const customStyles = {
  overlay: {
     backgroundColor: 'black',
   },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'black',
    padding: '20px',
    border: 'none',
  }
}

const ImageModal = ({ imgId, photos, onClose, modalIsOpen }) => {
  
  const photo = photos.find(photo => photo.id === imgId);

    return (
        <>
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={onClose}
        contentLabel="Example Modal"
        style={customStyles}
        >
          
          {photo && (
            <img src={photo.urls.regular} alt="" />
          )}
      </Modal>
        </>
    )
}

export default ImageModal;