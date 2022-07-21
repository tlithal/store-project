import React, { useState } from 'react';
import { Button, Container, Modal } from 'react-bootstrap';
import ItemModal from './ItemModal';

function Home() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = () => {
        setShow(true);
    }

    return(
        <Container fluid className="text-center mx-auto">
            <h1>Home</h1>
            <hr />

            <Button variant="outline-primary" onClick={handleShow}>Testing</Button>
            <ItemModal show={show} handleClose={handleClose} />

        </Container>
    );
}

export default Home;