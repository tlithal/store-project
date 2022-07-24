import React from 'react';
import { Container, Row } from 'react-bootstrap';

function Home() {
    return(
        <Container fluid className="text-center mx-auto font-link">
            <Row>
                <h1>Home</h1>
                <hr />
            </Row>
            <Row>
                <p className="description">This is a simple website to showcase all that I have learned during the Promineo Tech Front-End Developer bootcamp<br />
                It simulates a store website with access to the inventory management side that allows for CRUD operations <br />
                The store page is arranged in a card display format and it allows for a filter that shows what is currently available and unavailable.<br />
                I would like to thank Promineo for giving me the tools to learn and complete this project and I will always remember them on my future endeavours <br />
                -Toby Lithalangsy-</p>
                <img src="/images/melt.jpg" className="mx-auto d-block img-fluid" alt="Store picture"></img>
            </Row>
        </Container>
    );
}

export default Home;