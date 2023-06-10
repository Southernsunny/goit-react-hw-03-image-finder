import React, { Component } from 'react';
// import shortid from 'shortid';
import { Container } from './App.styled';

import Modal from '../Modal';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
// import ImageGalleryItem from 'components/ImageGalleryItem';
import { getImages } from 'service/image-service';

class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    showModal: false,

    // image: null,
    // loading: false,
  };

  // componentDidMount() {
  //   this.setState({ loading: true });
  //   fetch(
  //     'https://pixabay.com/api/?q=cat&page=1&key=35671692-51ec16839e173ffbc9750b66b&image_type=photo&orientation=horizontal&per_page=12'
  //   )
  //     .then(res => res.json())
  //     .then(image => this.setState({ image }))
  //     .finally(() => this.setState({ loading: false }));
  // }
  componentDidUpdate(prevProps, prevState) {
    const { query } = this.state;
    if (prevState.query !== query) {
      getImages(query).then(data => {
        this.setState({ images: data.hits });
      });
    }
  }

  handleSubmit = query => {
    this.setState({ query });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { images,showModal } = this.state;
    console.log(this.state);
    return (
      <>
        {/* <Section> */}
        <Container>
          <Searchbar onSubmit={this.handleSubmit} />
          <ImageGallery images={images} />
          {/* <div style={{ maxWidth: 1170, padding: 20 }}>
            {this.state.loading && <h1>loading</h1>}
            {this.state.image && <div>hi{this.state.image.name}</div>}
          </div> */}

          <button type="button" onClick={this.toggleModal}>
            Open
          </button>
          {showModal && (
            <Modal onClose={this.toggleModal}>
              {/* <button type="button" onClick={this.toggleModal}>
              Close
            </button> */}
              <img
                src="https://i.pinimg.com/originals/6d/50/ef/6d50efb46f1c5b38714a995c2dc4cddf.gif"
                alt=""
              />
            </Modal>
          )}
        </Container>
        {/* </Section> */}
      </>
    );
  }
}

export default App;
