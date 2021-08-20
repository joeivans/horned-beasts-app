import React from 'react';
import {Container} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import {BeastColumn} from './beastColumn';
import BeastModalComponent from './beastModalComponent';


export class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      imageUrl: '',
    };
  }

  handleModalClick = (event) => {
    this.setState({
      showModal: !this.state.showModal,
      imageUrl: event.target.src,
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
        <BeastModalComponent
          showModal={this.state.showModal}
          handleModalClose={this.handleModalClose}
          imageUrl={this.state.imageUrl}
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
