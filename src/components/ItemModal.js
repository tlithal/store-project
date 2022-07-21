import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

function ItemModal(props) {
    const [show, setShow] = useState(false);
    
    const handleClose = () => {
        props.handleClose();
    }

    return(
            <Modal show={props.show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal Heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Testing</Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
    );
}

export default ItemModal;