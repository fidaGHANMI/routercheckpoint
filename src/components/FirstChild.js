import React, { Component } from "react";

import { Button, Card } from "react-bootstrap";
export default class FirstChild extends Component {
    render() {
        return (
            <div className="container">
                {this.props.user.map((el) => (
                    <Card style={{ width: "18rem" }}>
                        <Card.Img variant="top" src={el.url} />
                        <Card.Body>
                            <Card.Title>{el.firstName}</Card.Title>
                            <Card.Text>
                                {el.adress},{el.finance}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        );
    }
}
