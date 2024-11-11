import { Layout } from "antd";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Col, Container } from "react-bootstrap";
 
const { Content } = Layout;
 
function MainContent() {
    const playerData = [
        { "name": "John", "team_name": "Doe" },
        { "name": "Anna", "team_name": "Smith" },
        { "name": "Peter", "team_name": "Jones" },
        { "name": "Peter", "team_name": "Jones" },
        { "name": "Peter", "team_name": "Jones" },
        { "name": "Peter", "team_name": "Jones" },
        { "name": "Peter", "team_name": "Jones" },
        { "name": "Peter", "team_name": "Jones" },
        { "name": "Peter", "team_name": "Jones" }
    ];
 
    return (
        <Content style={{ margin: "25px" }}>
            <Container>
                <Row>
                    {playerData.map((player, k) => (
                        <Col key={k} xs={12} md={4} lg={3} className="mb-4">
                            <Card>
                                <Card.Img
                                    src="https://via.placeholder.com/150x75"
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
 
export default MainContent;
 
 