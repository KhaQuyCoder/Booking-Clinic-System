import React, { useState } from "react";
import styles from "./QAPage.module.css";

const DoctorQAPage = () => {
  const [qaList, setQaList] = useState([
    {
      id: 1,
      patient: "Nguyễn Văn A",
      question:
        "Bác sĩ ơi tôi bị ho kéo dài hơn 2 tuần thì có nguy hiểm không?",
    },
    {
      id: 2,
      patient: "Trần Thị B",
      question:
        "Tôi muốn hỏi về lịch tiêm phòng cúm thì nên tiêm vào thời điểm nào?",
    },
    {
      id: 3,
      patient: "Phạm Văn C",
      question: "Thường xuyên đau đầu thì có cần chụp MRI không ạ?",
    },
  ]);

  const [answers, setAnswers] = useState({});

  const handleAnswerChange = (id, value) => {
    setAnswers({ ...answers, [id]: value });
  };

  const handleSubmit = (id) => {
    if (!answers[id] || answers[id].trim() === "") {
      alert("Vui lòng nhập câu trả lời trước khi gửi!");
      return;
    }

    alert("Đã gửi câu trả lời cho bệnh nhân!");

    setQaList(qaList.filter((qa) => qa.id !== id));

    const newAnswers = { ...answers };
    delete newAnswers[id];
    setAnswers(newAnswers);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Danh sách câu hỏi từ bệnh nhân</h1>

      {qaList.length === 0 ? (
        <p className={styles.noQuestion}>Tất cả câu hỏi đã được trả lời!</p>
      ) : (
        <div className={styles.qaList}>
          {qaList.map((qa) => (
            <div key={qa.id} className={styles.qaCard}>
              <p className={styles.patient}>
                <strong>{qa.patient}</strong>
              </p>
              <p className={styles.question}>❓ {qa.question}</p>
              <div className={styles.actionQnA}>
                <textarea
                  className={styles.textarea}
                  placeholder="Nhập câu trả lời của bạn..."
                  value={answers[qa.id] || ""}
                  onChange={(e) => handleAnswerChange(qa.id, e.target.value)}
                />

                <button
                  className={styles.btn}
                  onClick={() => handleSubmit(qa.id)}
                >
                  Gửi trả lời
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DoctorQAPage;
