import React, { useEffect, useState } from 'react';
import { Button, Modal, Card, CardBody, CardHeader, CardTitle, Table, Row, Col, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import img from './lbmin6.png'
import { x } from 'baseUrl';

function TableLists() {
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);
  const [selectedLab, setSelectedLab] = useState(null);
  const [labs, setLabs] = useState([])

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/icons');
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  useEffect(() => {
    x.get('/user/labadd/').then((nandhana) => {
      console.log(nandhana);
      setLabs(nandhana.data)
    })
  }, [])



  const handleClose = () => setShow(false);
  const handleShow = (lab) => {
    setSelectedLab(lab);
    setShow(true);
  };

  // const [labs, setLabs] = useState([
  //   { name: "EvolveGen Labs", location: "Kannur", status: "Active", contact: "1234567890", email: "evolvegen@example.com", latitude: "11.8745", longitude: "75.3704", address: "123 Street, Kannur", username: "evolveuser", password: "evolvepass" },
  //   { name: "Hyatt Labs", location: "Kannur", status: "Active", contact: "1234567891", email: "hyatt@example.com", latitude: "11.8746", longitude: "75.3705", address: "124 Street, Kannur", username: "hyattuser", password: "hyattpass" },
  //   { name: "Neethi Diagnostics", location: "Kannur", status: "Active", contact: "1234567892", email: "neethi@example.com", latitude: "11.8747", longitude: "75.3706", address: "125 Street, Kannur", username: "neethiuser", password: "neethipass" },
  //   { name: "Med Labs", location: "Kannur", status: "Active", contact: "1234567893", email: "med@example.com", latitude: "11.8748", longitude: "75.3707", address: "126 Street, Kannur", username: "meduser", password: "medpass" },
  // ]);

  const toggleLabStatus = (index) => {
    setLabs(labs.length > 0 && labs.map((lab, i) =>
      i === index ? { ...lab, status: lab.status === "enable" ? "disable" : "enable" } : lab
    ));
  };

  return (
    <div
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        padding: '20px',
      }}
    >
      <Row className="justify-content-center" style={{ width: "1300px", marginLeft: "-170px" }}>
        <Col xs={12} md={10} lg={8}>
          <Card style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)', borderRadius: '10px', padding: '20px', marginTop: "60px", }}>
            <CardHeader className="text-center" style={{ backgroundColor: 'transparent', borderBottom: 'none' }}>
              <CardTitle style={{ fontSize: "40px" }}><b>OUR LABS</b></CardTitle>
              <Button
                variant="info"
                onClick={handleButtonClick}
                style={{ position: "absolute", right: "45px", top: "75px", padding: "12px 12px" }}
              >
                + Add Lab
              </Button>
            </CardHeader>
            <CardBody>
              <Table responsive >
                <thead className="text-primary" >
                  <tr >
                    <th style={{ backgroundColor: "transparent" }}>Lab Name</th>
                    <th style={{ backgroundColor: "transparent" }} className="text-left">Location</th>
                    <th style={{ backgroundColor: "transparent" }} className="text-center">Status</th>
                    <th style={{ backgroundColor: "transparent" }} className="text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {labs.length > 0 && labs.map((lab, index) => (
                    <tr key={index}>
                      <td style={{ backgroundColor: "transparent", fontWeight: "bold" }}>{lab.labname}</td>
                      <td style={{ backgroundColor: "transparent", fontWeight: "bold" }} className="text-left">{lab.city}</td>
                      <td className="text-center" style={{ color: lab.status === "enable" ? "green" : "red", fontWeight: "bold", backgroundColor: 'transparent' }}>{lab.status === "enable" ? "active" : "inactive"}</td>
                      <td style={{ backgroundColor: "transparent" }} className="text-center">
                        <Button variant="secondary" onClick={() => handleShow(lab)} style={{ borderRadius: "3px", border: "none", padding: "10px 14px" }}>View</Button>
                        <Button
                          variant={lab.status === "enable" ? "danger" : "success"}
                          onClick={() => toggleLabStatus(index)}
                          style={{ marginLeft: "22px", borderRadius: "3px", border: "none", padding: "10px 10px" }}
                        >
                          {lab.status === "disable" ? "enable" : "disable"}
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ fontSize: "35px", marginLeft: "130px", fontWeight: "bold" }}>LAB DETAILS</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedLab && (
            <Container>
              <Card>
                <CardBody>
                  <Row className="mb-3">
                    <Col md={4}><strong>Lab Name:</strong></Col>
                    <Col md={8}>{selectedLab.labname}</Col>
                  </Row>
                  <Row className="mb-3">
                    <Col md={4}><strong>Location:</strong></Col>
                    <Col md={8}>{selectedLab.city}</Col>
                  </Row>
                  <Row className="mb-3">
                    <Col md={4}><strong>Status:</strong></Col>
                    <Col md={8}>{selectedLab.status}</Col>
                  </Row>
                  <Row className="mb-3">
                    <Col md={4}><strong>Contact:</strong></Col>
                    <Col md={8}>{selectedLab.contact}</Col>
                  </Row>
                  <Row className="mb-3">
                    <Col md={4}><strong>Email:</strong></Col>
                    <Col md={8}>{selectedLab.email}</Col>
                  </Row>
                  <Row className="mb-3">
                    <Col md={4}><strong>Latitude:</strong></Col>
                    <Col md={8}>{selectedLab.latitude}</Col>
                  </Row>
                  <Row className="mb-3">
                    <Col md={4}><strong>Longitude:</strong></Col>
                    <Col md={8}>{selectedLab.longitude}</Col>
                  </Row>
                  <Row className="mb-3">
                    <Col md={4}><strong>Address:</strong></Col>
                    <Col md={8}>{selectedLab.address}</Col>
                  </Row>
                  <Row className="mb-3">
                    <Col md={4}><strong>Username:</strong></Col>
                    <Col md={8}>{selectedLab.username}</Col>
                  </Row>
                  <Row className="mb-3">
                    <Col md={4}><strong>Password:</strong></Col>
                    <Col md={8}>{selectedLab.password}</Col>
                  </Row>
                </CardBody>
              </Card>
            </Container>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="warning" onClick={() => navigate('/icons')} style={{ marginLeft: '12px' }}>Edit</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default TableLists;
