import { Layout } from "antd";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Col, Container } from "react-bootstrap";
 
const { Content } = Layout;
 
function Cake() {
    const playerData = [
        { "name": "John", "team_name": "Doe","image_path":"https://i.pinimg.com/736x/f4/b4/f1/f4b4f1c3b02cb806b7a792bdbe893089.jpg"},
        { "name": "Anna", "team_name": "Smith","image_path":"https://th.bing.com/th/id/R.354310709c9bac71536a8996fcfc0014?rik=sl2DWTUIiywfyQ&riu=http%3a%2f%2fartofcakesbakery.com%2fuploads%2f3%2f5%2f0%2f6%2f35064375%2fs605835713943169103_p289_i2_w2019.jpeg%3fwidth%3d640&ehk=5PNrewjT1%2bs4vTJULhdnOwtIFFhVObuetmrwxIrSoVc%3d&risl=&pid=ImgRaw&r=0" },
        { "name": "Peter", "team_name": "Jones","image_path":"https://th.bing.com/th/id/R.daba5a2541e66515469e4040e44d507e?rik=pxbx6OnTNZDTTg&riu=http%3a%2f%2f4.bp.blogspot.com%2f-FbVsroCI-A4%2fUNDEEG3mqBI%2fAAAAAAAAbXg%2fJGJLZkAdMSU%2fs1600%2f_christmas%2bcake.jpg&ehk=pUSkBQQ%2bmDsEFnC97Hs1F0P24eJnyfs0Mi1AC%2bCOKhI%3d&risl=&pid=ImgRaw&r=0" },
        { "name": "Peter", "team_name": "Jones","image_path":"https://wallpaperaccess.com/full/986759.jpg" },
        { "name": "Peter", "team_name": "Jones","image_path":"https://th.bing.com/th/id/R.13e4d27f9cc09bfd7fd6f4657e79d082?rik=277o6yi%2btOI7dw&riu=http%3a%2f%2flegateaucakes.com%2fcdn%2fshop%2ffiles%2fexotic-fruit-cake-41560077009175.jpg%3fv%3d1687467069&ehk=H115s1Wevr0V%2bLE554T38u%2f9CzRZcKDA1c5DmZFaiCI%3d&risl=&pid=ImgRaw&r=0" },
        { "name": "Peter", "team_name": "Jones","image_path":"https://th.bing.com/th/id/OIP.QS74_jpdjXRrySrGDpeESwHaE7?w=1445&h=963&rs=1&pid=ImgDetMain" },
        { "name": "Peter", "team_name": "Jones","image_path":"https://assets.winni.in/c_limit,dpr_1,fl_progressive,q_80,w_1000/83221_yummylicious-chocolate-cake.jpeg" },
        { "name": "Peter", "team_name": "Jones","image_path":"https://th.bing.com/th/id/OIP.iF7P7Png78y9rYp_ptzxSgHaIF?rs=1&pid=ImgDetMain" },
        { "name": "Peter", "team_name": "Jones","image_path":"https://th.bing.com/th/id/OIP.P_eWrzg09W57or-NQ_iEkwHaJ4?rs=1&pid=ImgDetMain" }
    ];
 
    return (
        <Content style={{ margin: "25px" }}>
            <Container>
                <Row>
                    {playerData.map((player, k) => (
                        <Col key={k} xs={12} md={4} lg={3} className="mb-4">
                            <Card>
                                <Card.Img
                                    src={`${player.image_path}`}
                                    alt={`${player.name}'s team logo`}
                                    style={{ height: "200px", objectFit: "cover" }} // Set a fixed height and object-fit
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
 
export default Cake;
