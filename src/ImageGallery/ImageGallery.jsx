import { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';
import styles from './ImageGallery.module.css';

class ImageGallery extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props && this.props.state.length > 14) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  render() {
    const { state, toggleModal } = this.props;
    return (
      <ul className={styles.gallery}>
        {state.map(element => {
          return (
            <ImageGalleryItem
              key={element.id}
              toggleModal={toggleModal}
              element={element}
            />
          );
        })}
      </ul>
    );
  }
}

ImageGallery.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  state: PropTypes.arrayOf(
    PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ImageGallery;
