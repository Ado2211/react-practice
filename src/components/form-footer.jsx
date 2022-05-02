import React from "react";
import { Container, Form } from "react-bootstrap";

export class FormFooter extends React.Component {
    render() {
        return (
            <Form className="gradient d-block mt-5 " expand="lg">
                <Container>
                    <h4 className="pt-4 pb-4">Still need help?</h4>
                    <form className="bg-secondary rounded ">
                        <label className="ps-3 mt-3 me-2 w-25 ">
                            <p className="text-white-50 mb-0">First Name</p>
                            <input className="w-100 mt-0 bg-transparent border-0 border-bottom border-dark text-light" />
                        </label>
                        <label className="me-2 w-25">
                            <p className="text-white-50 mb-0 ">Last Name</p>
                            <input className="w-100 bg-transparent border-0 border-bottom border-dark text-light" />
                        </label>
                        <label className="me-5 w-25" >
                            <p className="text-white-50 mb-0 ">Email</p>
                            <input className="w-100 bg-transparent border-0 border-bottom border-dark text-light" />
                        </label>
                        <input type="button" className="btn btn-sm bg-warning rounded-pill mb-4 ms-5" value="Get Started" />
                    </form>
                    <p className="mt-4 -3 border-bottom border-secondary"></p>
                    <section className="d-flex justify-content-between">
                        <p>Products</p>
                        <p>Resources</p>
                        <p>Who We Are</p>
                        <p className="me-5 pe-5">Employee Login</p>
                    </section>
                </Container>
            </Form>
        )
    }
}