import React, { useMemo, useRef, useState, useEffect } from "react";
import "./Question.css";
import Header from "../../../layouts/LayoutsUser/Header/Header";
import questionData from "../../../data/question.json";
import Footer from "../../../components/FooterComponent/Footer";
import TotalPage from "../../../components/TotalPagaComponent/TotalPage";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../../../components/InputComponent/Input";
import { SelectCpm } from "../../../components/FIlterComponent/Filter";
import clinicData from "../../../data/clinic.json";
const Question = () => {
  const { page: pageParam } = useParams();
  const inforDocterRef = useRef();
  const navigate = useNavigate();
  const [showAnswer, setShowAnswer] = useState(null);
  const [checkMessageName, setCheckMessageName] = useState(false);
  const [checkMessageAge, setCheckMessageAge] = useState(false);
  const [checkMessagePhone, setCheckMessagePhone] = useState(false);
  const [checkQuestion, setCheckQuestion] = useState(false);
  const [messageName, setMessageName] = useState();
  const [messagePhone, setMessagePhone] = useState();
  const [messageAge, setMessageAge] = useState();

  const PER_PAGE = 8;
  const totalPages = Math.max(1, Math.ceil(questionData.length / PER_PAGE));
  const NameRef = useRef();
  const AgeRef = useRef();
  const PhoneRef = useRef();
  const NameRefInput = useRef();
  const AgeRefInput = useRef();
  const PhoneRefInput = useRef();
  const QuestionRef = useRef();
  const handelShowAnswer = (index) => {
    if (showAnswer === index) {
      setShowAnswer(null);
    } else {
      setShowAnswer(index);
    }
  };
  const currentPage = useMemo(() => {
    const n = parseInt(pageParam || "1", 10);
    return Math.min(Math.max(n, 1), totalPages);
  }, [pageParam, totalPages]);

  const handlePage = (p) => {
    if (p !== currentPage) {
      navigate(`/tu-van/page/${p}`);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const dataToShow = useMemo(() => {
    const start = (currentPage - 1) * PER_PAGE;
    const end = start + PER_PAGE;
    return questionData.slice(start, end);
  }, [questionData, currentPage]);

  const totalClinic = useMemo(() => {
    const filterClinic = clinicData.map((clinicItem) => clinicItem.name);
    return [...new Set(filterClinic.map((i) => i.trim()))];
  }, [clinicData]);

  const handelTransitionText = (labelRef) => {
    if (labelRef.current) {
      labelRef.current.style.transition = "transform 0.3s ease";
      labelRef.current.style.transform = "translateY(-100%)";
    }
  };

  const handelBLurText = (refInput, labelRef) => {
    if (refInput.current.value === "") {
      labelRef.current.style.transition = "transform 0.3s ease";
      labelRef.current.style.transform = "translateY(0%)";
    }
  };
  useEffect(() => {
    window.scrollTo({ top: true, behavior: "instant" });
  }, []);

  const handelSubmit = (e) => {
    e.preventDefault();
    const valuePhone = PhoneRefInput.current.value;
    const valueAge = AgeRefInput.current.value;

    if (QuestionRef.current.value === "") {
      setCheckQuestion(true);
      QuestionRef.current.style.border = "1px solid red";
    } else {
      setCheckQuestion(false);
      QuestionRef.current.style.border = "1px solid #28c76f";
    }

    if (NameRefInput.current.value === "") {
      setMessageName("Vui lòng nhập thông tin!");
      NameRefInput.current.style.border = "1px solid red";
      setCheckMessageName(true);
    } else {
      setMessageName("");
      NameRefInput.current.style.border = "1px solid #28c76f";
      setCheckMessageName(false);
    }

    if (!/^(0|\+84)[3|5|7|8|9]\d{8}$/.test(valuePhone)) {
      if (valuePhone === "") {
        setMessagePhone("Vui lòng nhập thông tin!");
        setCheckMessagePhone(true);
      } else {
        setMessagePhone("Vui lòng nhập số điện thoại hợp lệ!");
        setCheckMessagePhone(true);
      }
      PhoneRefInput.current.style.border = "1px solid red";
    } else {
      setMessageName("");
      PhoneRefInput.current.style.border = "1px solid #28c76f";
      setCheckMessagePhone(false);
    }

    if (/.*[a-zA-Z].*/.test(valueAge) || valueAge > 100 || valueAge <= 0) {
      if (valueAge === "") {
        setMessageAge("Vui lòng nhập thông tin!");
        setCheckMessageAge(true);
      } else {
        AgeRefInput.current.style.border = "1px solid red";
        setMessageAge("Vui lòng nhập tuổi hợp lệ!");
        setCheckMessageAge(true);
      }
      AgeRefInput.current.style.border = "1px solid red";
    } else {
      setMessageName("");
      AgeRefInput.current.style.border = "1px solid #28c76f";
      setCheckMessageAge(false);
    }
  };
  useEffect(() => {
    window.scrollTo({
      top: "true",
      behavior: "instant",
    });
  }, []);
  return (
    <>
      <Header />
      <div className="container-question">
        {dataToShow.map((question, index) => (
          <div className="item-question">
            <strong>
              <i class="fa-regular fa-comment-dots"></i> {question.name}
            </strong>
            <p className="content-question">{question.question}</p>
            <button
              className="active-answer"
              onClick={() => handelShowAnswer(index)}
            >
              {showAnswer === index ? "Ẩn câu trả lời" : "Xem câu trả lời"}
            </button>
            {showAnswer === index && (
              <div className="answer-wrapper show">
                <div className="item-answer">
                  <img
                    className="img-answer"
                    alt={question.docter}
                    src={question.image}
                  />
                  <div className="infor-docter-answer" ref={inforDocterRef}>
                    <p className="name-docter-answer">{question.docter}</p>
                    <p className="specityal-docter-answer">
                      {question.specityal}
                    </p>
                  </div>
                </div>
                <p className="docter-answer">{question.answer}</p>
              </div>
            )}
          </div>
        ))}
        <div className="indexPage">
          <TotalPage
            totalPages={totalPages}
            currentPage={currentPage}
            handlePage={handlePage}
          />
        </div>
        <h2 className="title-question">Bạn muốn gửi câu hỏi để được tư vấn?</h2>
        <form
          className="wrappre-form-question"
          onSubmit={(e) => handelSubmit(e)}
        >
          <Input
            name={"Họ và tên"}
            handelTransitionText={handelTransitionText}
            labelRef={NameRef}
            refInput={NameRefInput}
            handelBLurText={handelBLurText}
            message={messageName}
            checkMessage={checkMessageName}
          />
          <SelectCpm data={["Nam", "Nữ", "Khác"]} />
          <Input
            name={"Tuổi"}
            handelTransitionText={handelTransitionText}
            labelRef={AgeRef}
            refInput={AgeRefInput}
            handelBLurText={handelBLurText}
            message={messageAge}
            checkMessage={checkMessageAge}
          />
          <Input
            name={"Số điện thoại"}
            handelTransitionText={handelTransitionText}
            labelRef={PhoneRef}
            refInput={PhoneRefInput}
            handelBLurText={handelBLurText}
            message={messagePhone}
            checkMessage={checkMessagePhone}
          />
          <SelectCpm data={totalClinic} />
          <textarea
            className="user-content-question"
            ref={QuestionRef}
          ></textarea>
          {checkQuestion && (
            <div className="messageQuestion">Vui lòng nhập câu hỏi!</div>
          )}
          <button className="active-answer">Gửi câu hỏi</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Question;
