import {Component, FC} from 'react'
import templatesConfig from '../templates/templates_config'
import { ListGroup } from 'react-bootstrap';
import { Link } from "react-router-dom";


const Home: FC = () => {
    
  const templates = Object.keys(templatesConfig).map((key) => (
    <ListGroup.Item key={key}>
      <Link to={`/app/${key}/job1`}>
      {templatesConfig[key as keyof typeof templatesConfig].title}
      </Link>
    </ListGroup.Item>
  ));
    
  return (
    <div>
      <h1>Choose a Document Type</h1>
      <ListGroup>
          {templates}
      </ListGroup>
    </div>
  ) 
}

export default Home;