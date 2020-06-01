// Write your Character component here
import React from "react";
import { Container, Col, Row, Card, CardHeader, CardFooter, CardBody,
 CardText } from 'reactstrap';

 function Character (props) {
    console.log(props.characterArray)
  
      return(
          <Container>
            <Row>
          {props.characterArray.map(character => {
           return(    
  
  <Col xs="3">
  <Card key = {character.created} >
        <CardHeader>{character.name}</CardHeader>
        <CardBody>
 
          <CardText>{`Born: ${character.birth_year}`}</CardText>
          <CardText>{character.gender}</CardText>
          <CardText>{`Created: ${character.created}`}</CardText>
        </CardBody>
        <CardFooter>
        </CardFooter>
      </Card>
  </Col>)})}
  </Row>
          </Container>
           );}
   
  
  export default Character;