import React from "react";
import Table from 'react-bootstrap/Table';
import { Card, CardBody, CardHeader, CardTitle, Row, Col } from "reactstrap";
import backgroundImage from './lbmin6.png'; 

function Typography() {
  return (
    <>
      <div
        className="content"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
          padding: '40px',
        }}
      >
        <Row>
          <Col xs={12}>
            <Card style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)', borderRadius: '10px',margin:"30px",marginLeft:"3px" }}>
              <CardHeader>
                <CardTitle tag="h2" className="text-center" style={{ fontSize: "40px", fontWeight: "bold" }}>
                  FEEDBACKS
                </CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th style={{ width: '25%',backgroundColor:"transparent" }}>
                        <div style={{ border: '1px', padding: '5px' }}><b>PATIENT NAME</b></div>
                      </th>
                      <th style={{ width: '25%',backgroundColor:"transparent"  }}><b>LAB NAME</b></th>
                      <th style={{ width: '25%',backgroundColor:"transparent"  }}><b>DATE</b></th>
                      <th style={{ width: '25%',backgroundColor:"transparent"  }}><b>FEEDBACK</b></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{backgroundColor:"transparent",fontWeight:"bold" }}>Laura</td>
                      <td style={{backgroundColor:"transparent",fontWeight:"bold" }}>Hyatt Labs</td>
                      <td style={{backgroundColor:"transparent",fontWeight:"bold" }}>24-02-2024</td>
                      <td style={{backgroundColor:"transparent",fontWeight:"bold" }}>The clinic was very hygienic and clinic staff were friendly. My visit was pleasant</td>
                    </tr>
                    <tr>
                      <td style={{backgroundColor:"transparent",fontWeight:"bold" }}>Aardhra </td>
                      <td style={{backgroundColor:"transparent",fontWeight:"bold" }}>Optigen Labs</td>
                      <td style={{backgroundColor:"transparent",fontWeight:"bold" }}>31-07-2023</td>
                      <td style={{backgroundColor:"transparent",fontWeight:"bold" }}>My visit to the clinic was very upsetting as I had to wait an awful lot of time for a single blood test</td>
                    </tr>
                    <tr>
                      <td style={{backgroundColor:"transparent",fontWeight:"bold" }}>Devika</td>
                      <td style={{backgroundColor:"transparent",fontWeight:"bold" }}>Riott Innovations</td>
                      <td style={{backgroundColor:"transparent",fontWeight:"bold" }}>01-03-2024</td>
                      <td style={{backgroundColor:"transparent",fontWeight:"bold" }}>It was an ok experience for me as testing duration and waiting period was alright but the staff were unprofessional and just chatting around</td>
                    </tr>
                    <tr>
                      <td style={{backgroundColor:"transparent",fontWeight:"bold" }}>Naina</td>
                      <td style={{backgroundColor:"transparent",fontWeight:"bold" }}>Hyatt Labs</td>
                      <td style={{backgroundColor:"transparent" ,fontWeight:"bold"}}>06-02-2024</td>
                      <td style={{backgroundColor:"transparent",fontWeight:"bold" }}>It was an ok experience for me as testing duration and waiting period was alright but the staff were unprofessional</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Typography;
