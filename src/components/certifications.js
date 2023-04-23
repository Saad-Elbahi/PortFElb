import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pagination from 'react-bootstrap/Pagination';
import pic1 from '../assets/pic1.png';
import pic2 from '../assets/pic2.png';
import pic3 from '../assets/pic3.png';
import pic4 from '../assets/pic4.png';
import pic5 from '../assets/pic5.png';


function CertificationCard(props) {
    const { logo, title, date} = props;
    return (
        <Card className="h-100">
            <Card.Img variant="top" src={logo} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    
                    <br />
                    <span>Date : {date}</span>
                    <br />
                    
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

function Certifications() {
    const certifications = [
        {
            logo: pic1,
            title: 'Developing Back-end Apps with Node.js and Express',
         
            date: 'Feb 21, 2023'
            
        },
        {
            logo: pic2,
            title: 'DevOps,Cloud and Agile Foundations',
         
            date: 'Mar 22, 2023'
            
        },
        {
            logo: pic3,
            title: 'Python Functions Files and Dictionaries',
         
            date: 'jun 25, 2022'
            
        },
        {
            logo: pic4,
            title: 'Front-end Web Ui Frameworks And Tools : Bootstrap 4',
         
            date: 'March 19, 2023'
            
        },
        {
            logo: pic5,
            title: 'Data Collection and Processing with Python',
         
            date: 'March 19, 2023'
            
        },
      
    ];
    const PAGE_SIZE = 3;
    const [activePage, setActivePage] = React.useState(1);

    const totalPages = Math.ceil(certifications.length / PAGE_SIZE);

    const handleClick = (event) => {
        setActivePage(event.target.text);
    }

    const pages = [];

    for (let number = 1; number <= totalPages; number++) {
        pages.push(
            <Pagination.Item key={number} active={number === activePage} onClick={handleClick}>
                {number}
            </Pagination.Item>,
        );
    }

    const startIndex = (activePage - 1) * PAGE_SIZE;
    const endIndex = activePage * PAGE_SIZE;
    const currentCertifications = certifications.slice(startIndex, endIndex);

    return (
        <div>
            <Row className="my-3">
                {currentCertifications.map(certification => (
                    <Col key={certification.id} xs={12} sm={6} lg={4} className="d-flex">
                        <CertificationCard {...certification} />
                    </Col>
                ))}
            </Row>
            <Row className="my-3">
                <Col>
                    <Pagination>{pages}</Pagination>
                </Col>
            </Row>
        </div>
    );
}

export default Certifications;