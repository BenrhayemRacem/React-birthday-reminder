import React  from "react";
import {Col, Image, Row} from "react-bootstrap";

const List = (props)=> {
    const people = props.people ;
    return (
        people.map((person) => {
            const {id , name ,age , image} = person ;
            return (
                <Row key={id}>
                    <Col >
                        <Image src={image} roundedCircle />
                    </Col>
                <Col  >
                        <br/>
                        <h3>{name}</h3>
                        <p>{age}</p>

                </Col>

                </Row>


            )
        })
    )
}

export default List ;