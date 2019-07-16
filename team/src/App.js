import React, { useState } from "react";
import { Container, Row, Col } from "styled-bootstrap-grid";
import styled from "styled-components";
import Form from "./components/Form";
import data from "./data/data";
import "./App.css";

const Row1 = styled.div`
    color: red;
`;

export default function App() {
  const [team, updateTeam] = useState(data);
  const [memberToEdit, updateMemberToEdit] = useState({ name: "" });

  const handleSubmit = (event, member) => {
    event.preventDefault();
    updateTeam([...team, member]);
  };

  const editMember = member => {
    console.log("Edit this member: ", member);
  };

  return (
    <Container>
      <Row1>
        <Col col xl="1" lg="2" md="3" sm="6">
          Name
        </Col>
      </Row1>
      <Row>
        <Col col xl="1" lg="2" md="3" sm="6">
          Email
        </Col>
      </Row>
      <Row>
        <Col col xl="1" lg="2" md="3" sm="6">
          Phone
        </Col>
      </Row>
      <Row>
        <Col col xl="1" lg="2" md="3" sm="6">
          Role
        </Col>
      </Row>
      
      {team.map(member => {
        return (
          <div
            key={member.email}
            onClick={event => updateMemberToEdit(member)}
          >
            <Row>{member.name}</Row>
            <Row>{member.email}</Row>
            <Row>{member.phone}</Row>
            <Row>{member.role}</Row>
          </div>
        );
      })}

      <Row>
        <Col col xl="1" lg="2" md="3" sm="6">
          <Form
            teamList={team}
            handleSubmit={handleSubmit}
            memberToEdit={memberToEdit}
            editMember={editMember}
          />
        </Col>
      </Row>
    </Container>
  );
}



