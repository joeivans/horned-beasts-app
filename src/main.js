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

  render() {
    return (
      <main>
        <HornFilterComponent />
        <BeastModalComponent
          showModal={this.state.showModal}
          handleModalClose={this.handleModalClose}
          imageUrl={this.state.imageUrl}
          title={this.state.modalTitle}
        />
        <Container>
          <Row>
            {this.props.beasts.map(beast =>
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
