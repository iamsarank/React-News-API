import React, {useState, useEffect} from 'react';
import {Card, ListGroup, Container} from 'react-bootstrap';
import axios from 'axios';

function NewsAPI() {
    const [newsData,setNewsData] = useState([]);

    const getAPI = async () =>{
        const res = await axios.get("https://newsapi.org/v2/everything?q=tesla&from=2022-10-30&sortBy=publishedAt&apiKey=3ff60e5bde3d479bbbe09f58357e810f")
        setNewsData(res.data.articles);
    }

    useEffect(() =>{
        getAPI();
    },[])

    return (
        <Container fluid>
        <div className='row'>
            {
                newsData.map(data =>(
                    <div className='col-md-3 col-lg-3 mb-15'>
                    <Card>
                        <Card.Img variant="top" src={data.urlToImage} />
                        <Card.Body className='text-center'>
                            <Card.Title>{data.title}</Card.Title>
                            <Card.Text>
                           {data.content}
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush text-center">
                            <ListGroup.Item>{data.author}</ListGroup.Item>
                            <ListGroup.Item>{data.publishedAt}</ListGroup.Item>                           
                        </ListGroup>
                        <Card.Body className='text-center'>
                            <Card.Link href={data.url}>Read more</Card.Link>                           
                        </Card.Body>
                    </Card>
                    </div>
                ))
             }
         </div>
         </Container>
  )
}

export default NewsAPI;