import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Card, Container, Row, Col, Form, InputGroup, Button } from "react-bootstrap";
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import labmain5 from "./lbmin6.png";
import { x } from "baseUrl";

const isValidEmail = (email) => {
  // Regular expression to validate email format
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

function Icons() {
  const [formData, setFormData] = useState({ labname: "", contact: "", email: "", latitude: "", longitude: "", address: "", city: "", state: "", username: "", password: "" })
  const [validated, setValidated] = useState(false);
  const [labName, setLabName] = useState("");
  const validClass1 = labName.length > 0 && /^[a-zA-Z\s]+$/.test(labName) ? "is-valid" : "";
  const invalidClass1 = labName.length > 0 && !/^[a-zA-Z\s]+$/.test(labName) ? "is-invalid" : "";
  const [contact, setContact] = useState("");
  const validClass2 = contact.length === 10 && /^[0-9]+$/.test(contact) ? "is-valid" : "";
  const [email, setEmail] = useState("");
  const invalidClass2 = contact.length > 0 && (!/^[0-9]+$/.test(contact) || contact.length !== 10) ? "is-invalid" : "";
  const validClass = isValidEmail(email) ? "is-valid" : "";
  const invalidClass = email.length > 0 && !isValidEmail(email) ? "is-invalid" : "";
  const navigate = useNavigate();

  // const handleClicks = () => {
  //   navigate('/tablelist'); // Navigate to the '/tablelist' route
  // };

  const handleSubmit = (event) => {
    event.preventDefault()
    // const form = event.currentTarget;
    // if (form.checkValidity() === false) {
    //   event.preventDefault();
    //   event.stopPropagation();
    // }

    console.log(formData);

    x.post('/user/labadd/', formData).then((nandhana) => {
      console.log(nandhana);
    })

    setValidated(true);
  };

  const handleLabNameChange = (event) => {
    setLabName(event.target.value);
    // Check labName validity while typing
    if (!/^[a-zA-Z\s]+$/.test(event.target.value)) {
      event.target.setCustomValidity("Lab name should only contain letters and spaces.");
    } else {
      event.target.setCustomValidity("");
    }
  };

  const handleContactChange = (event) => {
    setContact(event.target.value);
    // Check contact validity while typing
    if (!/^[0-9]{10}$/.test(event.target.value)) {
      event.target.setCustomValidity("Please enter a valid 10-digit phone number.");
    } else {
      event.target.setCustomValidity("");
    }
  };



  const handleEmailChange = (event) => {
    const inputEmail = event.target.value;
    setEmail(inputEmail);
    setValidated(isValidEmail(inputEmail));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value })
  }

  return (
    <>
      <PanelHeader size="sm" />
      <div className="content" style={{ backgroundImage: `url(${labmain5})` }}>
        <div className="floating-text" style={{ position: 'absolute', top: '30%', left: '2%', color: 'white', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', width: '40%' }}>
          <h2>Empowering health with reliable diagnostics.</h2>
          <h4>Your health, our priority - ensuring accurate results every time.</h4>
        </div>
        <Container className="text-left" style={{ maxWidth: "600px", padding: "20px" }}>
          <Row>
            <Col Col md="12">
              <Card style={{ marginTop: "40px", left: "45%", backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                <Card.Body style={{ backgroundColor: "transparent" }}>
                  <h2 className="text-center mt-4" style={{ fontFamily: "Helvetica", fontWeight: 'bold' }}>LAB REGISTRATION</h2>
                  <Form noValidate validated={validated} style={{ margin: "25px" }}>
                    <Row className="mb-3">
                      <Form.Group style={{ marginTop: '10px' }} as={Col} controlId="validationCustom01">
                        <Form.Label style={{ color: "black", fontSize: "15px", fontWeight: 'bold', marginLeft: "5px" }}>LAB NAME</Form.Label>
                      </Form.Group>
                      <Col md="8">
                        <Form.Control
                          style={{ height: "35px", border: '1px solid black' }}
                          required
                          type="text"
                          name="labname"
                          pattern="[a-zA-Z\s]+"
                          placeholder="Enter name"
                          onChange={handleChange}
                          className={`${validClass1} ${invalidClass1}`}
                        />
                        {/* Display error message only when the input is invalid */}
                        {labName.length > 0 && !/^[a-zA-Z\s]+$/.test(labName) && (
                          <Form.Control.Feedback type="invalid" style={{ display: 'block' }}>
                            * Lab name should only contain letters and spaces.
                          </Form.Control.Feedback>
                        )}
                      </Col>
                    </Row>


                    <Row className="mb-3">
                      <Form.Group style={{ marginTop: '10px' }} as={Col} controlId="validationCustomPhone">
                        <Form.Label style={{ color: "black", fontSize: "15px", fontWeight: 'bold', marginLeft: "5px" }}>CONTACT</Form.Label>
                      </Form.Group>
                      <Col md="8">
                        <InputGroup hasValidation>
                          <Form.Control
                            style={{ height: "35px", border: '1px solid black' }}
                            type="tel"
                            name="contact"
                            placeholder="Enter contact Number"
                            aria-describedby="inputGroupPrepend"
                            onChange={handleChange} required
                            className={`${validClass2} ${invalidClass2}`}
                          />
                          {/* Display error message only when the input is invalid */}
                          {contact.length > 0 && ((!/^[0-9]+$/.test(contact) || contact.length !== 10)) && (
                            <Form.Control.Feedback type="invalid" style={{ display: 'block' }}>
                              Please enter a valid 10-digit phone number.
                            </Form.Control.Feedback>
                          )}
                        </InputGroup>
                      </Col>
                    </Row>

                    <Row className="mb-3">
                      <Form.Group style={{ marginTop: '10px' }} as={Col} controlId="validationCustomEmail">
                        <Form.Label style={{ color: "black", fontSize: "15px", fontWeight: 'bold', marginLeft: "5px" }}>EMAIL</Form.Label>
                      </Form.Group>
                      <Col md="8">
                        <InputGroup hasValidation>
                          <Form.Control
                            style={{ height: "35px", border: '1px solid black' }}
                            type="email"
                            name="email"
                            placeholder="Enter email"
                            aria-describedby="inputGroupPrepend"
                            className={`${validClass} ${invalidClass}`}
                            onChange={handleChange} required
                          />
                          {/* Display error message only when the input is invalid */}
                          {email.length > 0 && !isValidEmail(email) && (
                            <Form.Control.Feedback type="invalid">
                              Please enter a valid email address.
                            </Form.Control.Feedback>
                          )}
                        </InputGroup>
                      </Col>
                    </Row>

                    <Row className="mb-3">
                      <Form.Group style={{ marginTop: '10px' }} as={Col} controlId="validationCustomLatitude">
                        <Form.Label style={{ color: "black", fontSize: "15px", fontWeight: 'bold', marginLeft: "5px" }}>LATITUDE</Form.Label>
                      </Form.Group>
                      <Col md="8">
                        <InputGroup hasValidation>
                          <Form.Control
                            style={{ height: "35px", border: '1px solid black' }}
                            type="text"
                            placeholder="Enter latitude"
                            name="latitude"
                            onChange={handleChange}
                            // pattern="^(-?\d+(\.\d+)?),\s*(-?\d+(\.\d+)?)$"
                            aria-describedby="inputGroupPrepend"
                            required
                          />
                          <Form.Control.Feedback type="invalid">
                            Please enter a valid latitude.
                          </Form.Control.Feedback>
                        </InputGroup>
                      </Col>
                    </Row>

                    <Row className="mb-3">
                      <Form.Group style={{ marginTop: '10px' }} as={Col} controlId="validationCustomLongitude">
                        <Form.Label style={{ color: "black", fontSize: "15px", fontWeight: 'bold', marginLeft: "5px" }}>LONGITUDE</Form.Label>
                      </Form.Group>
                      <Col md="8">
                        <InputGroup hasValidation>
                          <Form.Control
                            style={{ height: "35px", border: '1px solid black' }}
                            type="text"
                            name="longitude"
                            onChange={handleChange}
                            placeholder="Enter longitude"
                            // pattern="^(-?\d+(\.\d+)?),\s*(-?\d+(\.\d+)?)$"
                            aria-describedby="inputGroupPrepend"
                            required
                          />
                          <Form.Control.Feedback type="invalid">
                            Please enter a valid longitude.
                          </Form.Control.Feedback>
                        </InputGroup>
                      </Col>
                    </Row>

                    <Row className="mb-3">
                      <Form.Group style={{ marginTop: '10px' }} as={Col} controlId="validationCustomAddress">
                        <Form.Label style={{ color: "black", fontSize: "15px", fontWeight: 'bold', marginLeft: "5px" }}>ADDRESS</Form.Label>
                      </Form.Group>
                      <Col md="8">
                        <InputGroup hasValidation>
                          <Form.Control
                            style={{ height: "35px", border: '1px solid black' }}
                            type="text"
                            name="address"
                            onChange={handleChange}
                            placeholder="Enter address"
                            pattern="^(?=.*[a-zA-Z])[a-zA-Z0-9\s,.-]+$"
                            aria-describedby="inputGroupPrepend"
                            required
                          />
                          <Form.Control.Feedback type="invalid">
                            Please enter an address.
                          </Form.Control.Feedback>
                        </InputGroup>
                      </Col>
                    </Row>


                    <Row className="mb-3">
                      <Form.Group style={{ marginTop: '10px' }} as={Col} controlId="validationCustom03">
                        <Form.Label style={{ color: "black", fontSize: "15px", fontWeight: 'bold', marginLeft: "5px" }}>CITY</Form.Label>
                      </Form.Group>
                      <Col md="8">
                        <Form.Control
                          style={{ height: "35px", border: '1px solid black' }}
                          type="text"
                          name="city"
                          placeholder="City"
                          onChange={handleChange}
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid city.
                        </Form.Control.Feedback>
                      </Col>
                    </Row>

                    <Row className="mb-3">
                      <Form.Group style={{ marginTop: '10px' }} as={Col} controlId="validationCustom04">
                        <Form.Label style={{ color: "black", fontSize: "15px", fontWeight: 'bold', marginLeft: "5px" }}>STATE</Form.Label>
                      </Form.Group>
                      <Col md="8">
                        <Form.Control
                          style={{ height: "35px", border: '1px solid black' }}
                          type="text"
                          name="state"
                          onChange={handleChange}
                          placeholder="State"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid state.
                        </Form.Control.Feedback>
                      </Col>
                    </Row>

                    <Row className="mb-3">
                      <Form.Group style={{ marginTop: '10px' }} as={Col} controlId="validationCustomUsername">
                        <Form.Label style={{ color: "black", fontSize: "15px", fontWeight: 'bold', marginLeft: "5px" }}>USERNAME</Form.Label>
                      </Form.Group>
                      <Col md="8">
                        <InputGroup hasValidation>
                          <Form.Control
                            style={{ height: "35px", border: '1px solid black' }}
                            type="text"
                            name="username"
                            placeholder="Enter username"
                            onChange={handleChange}
                            aria-describedby="inputGroupPrepend"
                            required
                          />
                          <Form.Control.Feedback type="invalid">
                            Please enter a username.
                          </Form.Control.Feedback>
                        </InputGroup>
                      </Col>
                    </Row>

                    <Row className="mb-3">
                      <Form.Group style={{ marginTop: '10px' }} as={Col} controlId="validationCustomPassword">
                        <Form.Label style={{ color: "black", fontSize: "15px", fontWeight: 'bold', marginLeft: "5px" }}>PASSWORD</Form.Label>
                      </Form.Group>
                      <Col md="8">
                        <InputGroup hasValidation>
                          <Form.Control
                            style={{ height: "35px", border: '1px solid black' }}
                            type="password"
                            name="password"
                            onChange={handleChange}
                            placeholder="Enter password"
                            aria-describedby="inputGroupPrepend"
                            required
                          />
                          <Form.Control.Feedback type="invalid">
                            Please enter a password.
                          </Form.Control.Feedback>
                        </InputGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                        <Button type="submit" style={{ backgroundColor: "#007bff", marginLeft: "150px" }}>BACK</Button>&nbsp;
                        <Button variant="success" type="submit" style={{ padding: "11px 11px", marginLeft: "15px" }} onClick={handleSubmit}>ADD LAB</Button>&nbsp;
                      </Col>
                    </Row>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Icons;
