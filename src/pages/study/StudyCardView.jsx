import { Card, ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const StudyCardView = ({ study }) => {
  return (
    <>
      <Card style={{ width: "18rem", margin: "10px 10px" }}>
        <Card.Img
          variant="top"
          src="https://img.freepik.com/free-photo/computer-program-coding-on-screen_53876-138060.jpg"
        />
        <CardHeader title={study.title} description={study.description} />
        <CardContent hashtag={study.hashtag} date={study.date} id={study.id} />
      </Card>
    </>
  );
};

const CardHeader = ({ title, description }) => {
  return (
    <>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </>
  );
};

const CardContent = ({ hashtag, date, id }) => {
  const navigate = useNavigate();
  return (
    <>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>#{hashtag}</ListGroup.Item>
        <ListGroup.Item>개설일자: {date}</ListGroup.Item>
        <ListGroup.Item>
          <Card.Link onClick={() => navigate(`/study_list/${id}`)}>
            상세보기
          </Card.Link>
        </ListGroup.Item>
      </ListGroup>
    </>
  );
};

export default StudyCardView;
