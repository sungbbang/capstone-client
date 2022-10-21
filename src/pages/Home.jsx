import React from "react";
import { Button, Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.dongwon.com/assets/_temp/post/191205/01.jpg"
            alt="First slide"
            style={{ height: "700px" }}
          />
          <Carousel.Caption>
            <h3>다른 사람들과 스터디를 함께 해보세요.</h3>
            <p>Try studying with other people.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://mblogthumb-phinf.pstatic.net/MjAyMTAxMjdfMTM0/MDAxNjExNzE5MzQ0MzYy.dWXVSMq7SDIkckEDuEheMjesbQFePOA5bAdldhmztT4g.pFcHfhCgFlED19CHgcgSYj-njW7kLOSiZJKHNt2o5N0g.JPEG.ieeagcc/overhead-shot-of-high-school-pupils-in-group-study-4N8CXEV.jpg?type=w800"
            alt="Second slide"
            style={{ height: "700px" }}
          />
          <Carousel.Caption>
            <h3>직접 자신의 스터디를 생성해보세요.</h3>
            <p>Create your own study.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://guide.worksmobile.com/kr/images/tips-img-07@2x.png"
            alt="Third slide"
            style={{ height: "700px" }}
          />
          <Carousel.Caption>
            <h3>채팅과 화상회의를 통해 온라인 스터디를 해보세요.</h3>
            <p>Study online through chatting and video conferencing.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <br />
      <div className="mb-2" style={{ textAlign: "center" }}>
        <Button
          variant="primary"
          size="lg"
          onClick={() => navigate("/study_list")}
        >
          스터디 둘러보기
        </Button>
        <Button
          variant="success"
          size="lg"
          onClick={() => navigate("/study_create")}
        >
          스터디 생성하기
        </Button>
      </div>
    </>
  );
};

export default Home;
