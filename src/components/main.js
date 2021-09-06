import React from 'react';
import {Container} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import {HornedBeastColumn} from './hornedBeastColumn';
import HornedBeastFilter from './hornedBeastFilter';
import HornedBeastModal from './hornedBeastModal';


export class Main extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      modalImageUrl: '',
      modalTitle: '',
      hornPredicate: '*',
      beastLikes: [],
    };
  }

  handleModalClick = (title, imageUrl) => {
    this.setState({
      showModal: !this.state.showModal,
      modalTitle: title,
      imageUrl,
    });
  };

  handleFavoriteClick = beast => {
    const beastLikes = [];

    // adds new
    if (this.state.beastLikes.filter(_ => _.beast === beast).length < 1) {
      beastLikes.push(...this.state.beastLikes, {beast: beast, likes: 1});
    } else {
      // updates existing
      this.state.beastLikes.forEach(_ => {
        if (_.beast === beast) {
          _.likes += 1;
          beastLikes.push(_);
        } else {
          beastLikes.push(_);
        }
      });
    }

    this.setState({beastLikes: beastLikes});
  };

  handleModalClose = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };

  // REVIEW Main wants to know when something changes in HornFilterComponent
  // - Keep it agnostic to implementation details
  // - Signature: 1 argument of type string (expecting *, 1, 2, 3)
  handleBeastChange = hornPredicate => {
    // Now parent component has the predicate for the filter
    // Let's keep it in the state object
    this.setState({
      hornPredicate,
    });
  };

  filterBeasts = beast => {
    if (this.state.hornPredicate === '*' ||
      beast.horns === parseInt(this.state.hornPredicate, 10)) {
      return beast;
    }
    if (this.state.hornPredicate === '4+' &&
      parseInt(beast.horns, 10) > 3) {
      return beast;
    }
  };

  getFavoriteCount = beast => {
    const beastFavorites = this.state.beastLikes.filter(_ => _.beast === beast);
    if (beastFavorites.length > 0) {
      return beastFavorites[0].likes;
    }
    return 0;
  };

  render() {

    return <main>
      <HornedBeastFilter onChange={this.handleBeastChange}/>
      <HornedBeastModal
        showModal={this.state.showModal}
        handleModalClose={this.handleModalClose}
        imageUrl={this.state.imageUrl}
        title={this.state.modalTitle}
      />
      <Container>
        <Row>
          {this.props.beasts
            .filter(beast => this.filterBeasts(beast))
            .map(beast =>
              <HornedBeastColumn
                key={beast.image_url}
                beast={beast}
                handleModalClick={this.handleModalClick}
                handleFavoriteClick={this.handleFavoriteClick}
                favoriteCount={this.getFavoriteCount(beast.title)}
              />)
          }
        </Row>
      </Container>
    </main>;
  }
}
