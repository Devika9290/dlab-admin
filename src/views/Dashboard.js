import React from "react";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
import img from './lbmin6.png'

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Table,
  Button,
  Label,
  FormGroup,
  Input,
  UncontrolledTooltip,
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import { FaUser } from 'react-icons/fa';


import {
  dashboardShippedProductsChart,
  dashboardAllProductsChart,
  dashboard24HoursPerformanceChart,
} from "variables/charts.js";

function Dashboard() {
  const backgroundImageStyle = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    padding: "25px"
  };

  return (
    <>
      <div style={{ backgroundColor: '#0a9a73', padding: '10px', display: 'flex', alignItems: 'center' }}>
      <p style={{fontSize:"25px",fontWeight:"bold",color:"white",marginLeft:'240px',marginTop:'6px',fontFamily:"monospace"}}>Your healthcare journey starts here...</p>
        <div style={{ flex: 1 }}>
        </div>
        <div style={{ backgroundColor: '#ccc', borderRadius: '21px', padding: '2px', maxWidth: '140px', display: 'flex', alignItems: 'center' }}>
          <div style={{ backgroundColor: 'black', borderRadius: '54%', padding: '7px', marginRight: '25px',maxHeight:"28px" }}>
            <FaUser style={{ color: 'white', width: '15px', height: '25px',marginTop:"-8px" }} />
          </div>
          <span style={{ color: '#333', lineHeight: '1.5', fontSize: '14px',marginLeft:"3px" }}>ADMIN</span>
        </div>
      </div>
      <PanelHeader size="sm" />
      <div style={backgroundImageStyle}>
        <div className="content" style={{ marginTop: "25px", background: "transparent" }}>
          <Row>
            <Col xs={12} md={4}>
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Monthly Target</h5>
                  <CardTitle tag="h4">Lab Ratings</CardTitle>
                  <UncontrolledDropdown>
                    <DropdownToggle
                      className="btn-round btn-outline-default btn-icon"
                      color="default"
                    >
                      <i className="now-ui-icons loader_gear" />
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Another Action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                      <DropdownItem className="text-danger">
                        Remove data
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line
                      data={dashboardShippedProductsChart.data}
                      options={dashboardShippedProductsChart.options}
                    />
                  </div>
                </CardBody>
                <CardFooter>
                  <div className="stats">
                    <i className="now-ui-icons arrows-1_refresh-69" /> Just Updated
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">2022 Census</h5>
                  <CardTitle tag="h4">All Test details</CardTitle>
                  <UncontrolledDropdown>
                    <DropdownToggle
                      className="btn-round btn-outline-default btn-icon"
                      color="default"
                    >
                      <i className="now-ui-icons loader_gear" />
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Another Action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                      <DropdownItem className="text-danger">
                        Remove data
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line
                      data={dashboardAllProductsChart.data}
                      options={dashboardAllProductsChart.options}
                    />
                  </div>
                </CardBody>
                <CardFooter>
                  <div className="stats">
                    <i className="now-ui-icons arrows-1_refresh-69" /> Just Updated
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Revenue Statistics</h5>
                  <CardTitle style={{fontSize:'18px'}}>Total Revenue</CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Bar
                      data={dashboard24HoursPerformanceChart.data}
                      options={dashboard24HoursPerformanceChart.options}
                    />
                  </div>
                </CardBody>
                <CardFooter>
                  <div className="stats">
                    <i className="now-ui-icons ui-2_time-alarm" /> Last 7 days
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          <Row style={{marginTop:'15px'}}>
            <Col xs={12} md={12}>
              <Card style={{height:"100%"}}>
                <CardHeader style={{ marginLeft: "30px" }}>
                  <CardTitle className="text-center" tag="h4" style={{ fontSize: "30px" }}>Lab Details</CardTitle>
                </CardHeader>
                <CardBody style={{ marginLeft: "45px" }}>
                  <Table responsive style={{ margin: "5px" }}>
                    <thead className="text-primary">
                      <tr>
                        <th>Lab Name</th>
                        <th>Contact</th>
                        <th>City</th>
                        <th className="text-left">Email</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Hyatt Labs</td>
                        <td>9274538208</td>
                        <td>Caltex</td>
                        <td className="text-left">Hyattlabs@gmail.com</td>
                      </tr>
                      <tr>
                        <td>OptiGen Labs</td>
                        <td>92376328708</td>
                        <td>Cantonment</td>
                        <td className="text-left">OptiGenlabs@gmail.com</td>
                      </tr>
                      <tr>
                        <td>Riott Labs</td>
                        <td>927388208</td>
                        <td>Plaza</td>
                        <td className="text-left">Riotlabs@gmail.com</td>
                      </tr>
                      <tr>
                        <td>Med Labs</td>
                        <td>9291638208</td>
                        <td>Chovva</td>
                        <td className="text-left">Medlabs@gmail.com</td>
                      </tr>
                      <tr>
                        <td>Genotics Labs</td>
                        <td>9270268208</td>
                        <td>Talap</td>
                        <td className="text-left">Genoticslabs@gmail.com</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
