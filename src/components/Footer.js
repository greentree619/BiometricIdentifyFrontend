import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-left py-5'>Copyright &copy;2022-2023 All Rights Reseved</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;
