import React , {useState} from "react";
import data from "./data";
import List from "./List" ;

import {Button, Container, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [people, setPeople] = useState(data);
  return (
  <main>
    <section>
      <Container >
        <Row className="justify-content-lg-center">
            <h3>{people.length} birthdays today</h3>
        </Row>

               <List people={ people}/>

        <Button variant="warning" size="lg" onClick={()=> setPeople([])}>
          Clear All
        </Button>


      </Container>

    </section>
  </main>

  );
}

export default App;
