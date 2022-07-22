import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import ItemModal from './ItemModal';

function EditButton(props) {

    const item = props;
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        props.refresh();
    }

    const handleShow = () => {
        setShow(true);
    }


    return(
        <div>
            <Button variant="outline-success" onClick={handleShow}>Edit</Button>
            <ItemModal show={show} handleClose={handleClose} {...item} />
        </div>
    );
}

export default EditButton;