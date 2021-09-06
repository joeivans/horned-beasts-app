import {Button, Container, Image, Modal} from 'react-bootstrap';


export default function HornedBeastModal(props) {

  return (
    <Modal size={'xl'}
           show={props.showModal}
           onHide={props.handleModalClose}>
      <Modal.Header closeButton>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Image style={{width: '100%'}}
                 src={props.imageUrl}/>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary"
                onClick={props.handleModalClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
