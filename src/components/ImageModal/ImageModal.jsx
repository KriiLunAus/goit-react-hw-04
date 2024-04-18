const ImageModal = ({onClose, onOpen, modalIsOpen}) => {
    return (
        <>
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={onClose}
        contentLabel="Example Modal"
      >
        <img onClick={onOpen} src="" alt="" />
      </Modal>
        </>
    )
}

export default ImageModal;