import React from 'react';
import {Container} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import {HornedBeastColumn} from './hornedBeastColumn';
import HornedBeastModal from './hornedBeastModal';
import HornedBeastFilter from './hornedBeastFilter';


export class Main extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      modalImageUrl: '',
      modalTitle: '',
      hornPredicate: '*',
    };
  }

  handleModalClick = (title, imageUrl) => {
    this.setState({
      showModal: !this.state.showModal,
      modalTitle: title,
      imageUrl: imageUrl,
    });
  };

  handleFavoriteClick = (event) => {
    // todo
    event;
  };

  handleModalClose = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };

  // REVIEW Main wants to know when something changes in HornFilterComponent
  // - Keep it agnostic to implementation details
  // - Signature: 1 argument of type string (expecting *, 1, 2, 3)
  handleBeastChange = (hornPredicate) => {
    // Now parent component has the predicate for the filter
    // Let's keep it in the state object
    this.setState({
      hornPredicate: hornPredicate,
    });
  };

  filterBeasts = (beast) => {
    if (this.state.hornPredicate === '*' ||
      beast.horns === parseInt(this.state.hornPredicate)) return beast;
    if (this.state.hornPredicate === '4+' && parseInt(beast.horns) > 3) return beast;
  };

  render() {
    return (
      <main>
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
                />)
            }
          </Row>
        </Container>
      </main>
    );
  }
}
