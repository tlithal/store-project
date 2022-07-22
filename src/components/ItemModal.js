import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { ItemForm } from './ItemForm';

function ItemModal(props) {
    
    const item = props;

    const handleClose = () => {
        props.handleClose();
    }

    return(
            <Modal show={props.show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Item Here</Modal.Title>
                </Modal.Header>
                <Modal.Body><ItemForm {...item} handleClose={handleClose} /></Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
    );
}

export default ItemModal;