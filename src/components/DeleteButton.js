import React from 'react';
import { Button } from 'react-bootstrap';
import { storeApi } from '../api/StoreApi';

function DeleteButton(props) {

    const deleteItem = async(e, id) => {
        e.preventDefault();
        await storeApi.deleteInv(id);
        props.refresh();

    }

    return(
        <Button variant="outline-danger" onClick={(e) => { deleteItem(e, props.id) }}>Delete</Button>
    );
}

export default DeleteButton;