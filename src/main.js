import React from 'react';
import {Container} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import {BeastColumn} from './beastColumn';
import BeastModalComponent from './beastModalComponent';
import HornFilterComponent from './hornFilterComponent';


export class Main extends React.Component {
  'use strict';

  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      modalImageUrl: '',
      modalTitle: '',
      hornPredicate: '*',
    };
  }

  handleModalClick = (event) => {
    this.setState({
      showModal: !this.state.showModal,
      imageUrl: event.target.src,
      modalTitle: event.target.title,
    });
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
        <HornFilterComponent onChange={this.handleBeastChange}/>
        <BeastModalComponent
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
                <BeastColumn
                  key={beast.image_url}
                  beast={beast}
                  handleModalClick={this.handleModalClick}
                />)
            }
          </Row>
        </Container>
      </main>
    );
  }
}
