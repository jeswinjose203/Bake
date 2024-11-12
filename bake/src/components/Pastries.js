import { Layout } from "antd";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Col, Container } from "react-bootstrap";
 
const { Content } = Layout;
 
function Pasteries() {
    const playerData = [
        { "name": "John", "team_name": "Doe", "imagepath": "https://ohsweetbasil.com/wp-content/uploads/chocolate-cake-with-chocolate-frosting-recipe-13-1365x2048.jpg"},
        { "name": "Anna", "team_name": "Smith", "imagepath": "https://www.shugarysweets.com/wp-content/uploads/2021/06/vanilla-cake-recipe.jpg" },
        { "name": "Peter", "team_name": "Jones", "imagepath": "https://product-assets.faasos.io/production/product/image_1657272196421_image_1635342896740_Rich_Red_Velvet_Pastry.jpg" },
        { "name": "Peter", "team_name": "Jones", "imagepath": "https://th.bing.com/th/id/OIP.JEMKREieegkAMKDAYL338QAAAA?rs=1&pid=ImgDetMain" },
    //     { "name": "Peter", "team_name": "Jones", "imagepath": "https://ohsweetbasil.com/wp-content/uploads/chocolate-cake-with-chocolate-frosting-recipe-13-1365x2048.jpg" },
    //     { "name": "Peter", "team_name": "Jones", "imagepath": "https://ohsweetbasil.com/wp-content/uploads/chocolate-cake-with-chocolate-frosting-recipe-13-1365x2048.jpg" },
    //     { "name": "Peter", "team_name": "Jones", "imagepath": "https://ohsweetbasil.com/wp-content/uploads/chocolate-cake-with-chocolate-frosting-recipe-13-1365x2048.jpg" },
    //     { "name": "Peter", "team_name": "Jones", "imagepath": "https://ohsweetbasil.com/wp-content/uploads/chocolate-cake-with-chocolate-frosting-recipe-13-1365x2048.jpg" },
    //     { "name": "Peter", "team_name": "Jones", "imagepath": "https://ohsweetbasil.com/wp-content/uploads/chocolate-cake-with-chocolate-frosting-recipe-13-1365x2048.jpg" }
     ];
 
    return (
        <Content style={{ margin: "25px" }}>
            <Container>
                <Row>
                    {playerData.map((player, k) => (
                        <Col key={k} xs={12} md={4} lg={3} className="mb-4">
                            <Card>
                                <Card.Img
                                    src={`${player.imagepath}`}
                                    alt={`${player.name}'s team logo`}
                                />
                                <Card.Body>
                                    <Card.Title>{player.name}</Card.Title>
                                    <Card.Text>{player.team_name}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </Content>
    );
}
 
export default Pasteries;
 