import React, { Component } from "react";
import { Form, Col, Button } from "react-bootstrap";
export default class AddPerson extends Component {
    state = {
        firstName: "",
        adress: "",
        finance: "",
        url: "",
    };
    onchange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };
    render() {
        return (
            <div>
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>FirstName</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your name"
                                name="firstName"
                                onChange={(e) => this.onchange(e)}
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Finance</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="code"
                                name="finance"
                                onChange={(e) => this.onchange(e)}
                            />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="1234 Main St"
                            name="adress"
                            onChange={(e) => this.onchange(e)}
                        />
                    </Form.Group>
                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>image</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="url"
                            name="url"
                            onChange={(e) => this.onchange(e)}
                        />
                    </Form.Group>

                    <Button
                        variant="primary"
                        type="submit"
                        onClick={(e) => {
                            e.preventDefault();
                            this.props.handleAdd(this.state);
                        }}
                    >
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}
