import { Component } from 'react';
import './App.css';
import fetchSearchImage from './API/Pixabay';
import Button from './Button';
import SearchBar from './SearchBar';
import ImageGallery from './ImageGallery';
import LoaderSpinner from './LoaderSpinner';
import Modal from './Modal';

class App extends Component {
  state = {
    showModal: false,
    isLoading: false,
    onModalImage: '',
    imageGalleryItems: [],
    searchQuery: '',
    pageNumber: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.searchQuery !== prevState.searchQuery) {
      this.onFetchImages();
    }
  }

  toggleModal = (data = '') => {
    this.setState(({ showModal }) => {
      return { showModal: !showModal, onModalImage: data };
    });
  };

  onSubmitForm = data => {
    this.setState({ searchQuery: data, imageGalleryItems: [], togglePage: 1 });
  };

  onFetchImages = () => {
    const { searchQuery, pageNumber } = this.state;

    this.onSpinnerShow();

    fetchSearchImage(searchQuery, pageNumber)
      .then(hits => {
        this.setState(({ imageGalleryItems, pageNumber }) => {
          return {
            imageGalleryItems: [...imageGalleryItems, ...hits],
            pageNumber: pageNumber + 1,
          };
        });
      })
      .catch(error => console.log(error))
      .finally(this.onSpinnerShow());
  };

  onSpinnerShow = () => {
    this.setState(prevState => {
      return { isLoading: !prevState.isLoading };
    });
  };

  render() {
    const { imageGalleryItems, onModalImage, isLoading, showModal } =
      this.state;
    return (
      <div className="App">
        <SearchBar onSubmit={this.onSubmitForm} />

        <ImageGallery
          toggleModal={this.toggleModal}
          state={imageGalleryItems}
        />
        {imageGalleryItems.length > 0 && !isLoading && (
          <Button onClick={this.onFetchImages} />
        )}
        {isLoading && <LoaderSpinner />}

        {showModal && (
          <Modal toggleModal={this.toggleModal} onModalImage={onModalImage} />
        )}
      </div>
    );
  }
}

export default App;
