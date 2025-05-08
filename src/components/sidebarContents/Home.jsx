import React, { Fragment, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { AiOutlineDoubleRight } from "react-icons/ai";
import PieChart from './PieChart';

import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Home = () => {
  useEffect(() => {
    
  }, []);



  return (
    <Fragment>
      <Container fluid className='d-flex mt-5'>
        <Row className="mt-5">

          <Col sm={12} md={3} lg={3}>
            <Card border="primary" className="bg-primary" style={{ width: '16rem' }}>
              <Card.Body style={{ cursor: "pointer" }}>
                <Card.Title className="display-2 text-white">1</Card.Title>
                <Card.Text className="text-white">
                  New Orders
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Link to="/orderList" className="text-white text-decoration-none">
                 
                 More info <AiOutlineDoubleRight />
                
                </Link>
              </Card.Footer>
            </Card>
          </Col>

          <Col sm={12} md={3} lg={3}>
            <Card border="primary" className="bg-success" style={{ width: '16rem' }}>
              <Card.Body>
                <Card.Title className="display-2 text-white">5%</Card.Title>
                <Card.Text className="text-white">
                  Bounce Rate
                </Card.Text>
              </Card.Body>
              <Card.Footer className="text-white">More info <AiOutlineDoubleRight /></Card.Footer>
            </Card>
          </Col>

          <Col sm={12} md={3} lg={3}>
            <Card border="primary" className="bg-warning" style={{ width: '16rem' }}>
              <Card.Body>
                <Card.Title className="display-2 text-white">3</Card.Title>
                <Card.Text className="text-white">
                  User Registration
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                
                 <Link to="/userinformation" className="text-white text-decoration-none">
                More info <AiOutlineDoubleRight />
                
                </Link>
                </Card.Footer>
            </Card>
          </Col>

          <Col sm={12} md={3} lg={3}>
            <Card border="primary" className="bg-info" style={{ width: '16rem' }}>
              <Card.Body>
                <Card.Title className="display-2 text-white">1</Card.Title>
                <Card.Text className="text-white">
                  Unic Visitor
                </Card.Text>
              </Card.Body>
              <Card.Footer >
                
                 <Link to="/unicVisitor" className="text-white text-decoration-none">
                
                More info <AiOutlineDoubleRight />
                
                </Link>
                </Card.Footer>
            </Card>
          </Col>

        </Row>
      </Container>

      <div className="mt-3" style={{ marginBottom: "100px" }}></div>

      <PieChart />
    </Fragment>
  );
};

export default Home;
