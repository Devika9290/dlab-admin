import React from "react";
import { Card, Button } from "react-bootstrap";
import img from './lbmin6.png'; 
import i1 from './doctor6.webp';
import i2 from './doctor5.webp';
import i3 from './doctor4.webp';


export default function UserPage() {
  

  const docted = [
    { img: i1, name: "Dr. Sandhya Rajan", qualfcn: "MBBS,MD Pathology", specialzn: "PATHOLOGY TECHNICIAN", dept: "PATHOLOGY", lab: " Hyatt Labs" },
    { img: i2, name: "Dr. Aravind M", qualfcn: "MD Cardiology,FESC", specialzn: "CARDIOLOGIST", dept: "CARDIOLOGY", lab: " Riott Innovations" },
    { img: i3, name: "Dr. John Jacob", qualfcn: "MBBS,DM Endocrinology", specialzn: "ENDOCRINOLOGIST", dept: "ENDOCRINOLOGY", lab: " OptiGen Labs" }
  ];

  return (
    <div style={styles.pageContainer}>
      <div style={styles.header}>
        <h1 style={styles.heading}>Discover Skilled Medical Professionals</h1>
        <p style={{lineHeight:"42px",fontWeight:"bold"}}>Browse through our roster of experienced doctors and specialists.</p>
        <p style={{fontSize:"45px"}}>Doctors List</p>
      </div>
      <div className="container" style={{ marginTop: "60px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gridGap: "20px" }}>
        {docted.map((member, index) => (
          <Card key={index}>
            <Card.Body>
              <div className="team-img">
                <img src={member.img} style={{ height: "40%" }} alt={member.name} /><hr style={{border:"1px solid black"}}/>
              </div>
              <div className="team-info">
                <h4 style={{ color: "green",marginTop:"5px" }}>{member.name}</h4>
                <h6 style={{ fontSize: "12px" }}>{member.qualfcn}</h6>
                <h6>{member.specialzn},{member.lab}</h6>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

const styles = {
  pageContainer: {
    backgroundImage: `url(${img})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    padding: '20px'
  },
  header: {
    textAlign: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
    padding: '20px',
    borderRadius: '10px',
    marginBottom: '20px'
  },
  heading: {
    margin: 0,
    fontSize: '2rem',
  },
  button: {
    marginTop: '4px'
  },
  
};
