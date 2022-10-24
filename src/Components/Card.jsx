import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
function TextExample({data}) {
    console.log(data)
  return (

    <Card style={{ width: '18rem' }}>
        
      <Card.Body style={{textAlign:"center"}}>
        <img style={{height:"75px"}} src={data.icon}></img>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text style={{fontsize: "10px"}}>
        {data.description}
        </Card.Text>
        <Button variant="outline-dark"><strong>READ MORE</strong> </Button>
        
      </Card.Body>
    </Card>
  );
}

export default TextExample;