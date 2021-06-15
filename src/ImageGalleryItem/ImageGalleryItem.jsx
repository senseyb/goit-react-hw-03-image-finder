import styles from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ toggleModal, element }) => {
  return (
    <li className={styles.item}>
      <img
        src={element.webformatURL}
        alt={element.tags}
        className={styles.item__image}
        onClick={() => toggleModal(element.largeImageURL)}
      />
    </li>
  );
};
ImageGalleryItem.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  element: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }),
};

export default ImageGalleryItem;
