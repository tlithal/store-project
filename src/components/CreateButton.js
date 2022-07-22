import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import ItemModal from './ItemModal';

function CreateButton(props) {

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
            <Button variant="primary" onClick={handleShow}>Create an Item</Button>
            <ItemModal show={show} handleClose={handleClose} {...item} />
        </div>
    );
}

export default CreateButton;