import React, { useState } from "react";
import qaData from "./../../../../data/QnA.json";
import "./QnA.css";

const defaultAvatar = "https://i.pravatar.cc/40?img=1";

const QnA = () => {
  // Quản lý toàn bộ danh sách câu hỏi
  const [questions, setQuestions] = useState(qaData);
  const [selectedId, setSelectedId] = useState(qaData[0].id);
  const [reply, setReply] = useState("");
  const [file, setFile] = useState(null);

  const selectedQuestion = questions.find((q) => q.id === selectedId);

  const handleSelectQuestion = (id) => {
    setSelectedId(id);
    setReply("");
    setFile(null);
  };

  const handleSendReply = () => {
    if (!reply.trim()) return;
    const newAnswer = {
      id: Date.now(),
      doctor: { name: "BS. Hệ Thống", avatar: "https://media-cdn-v2.laodong.vn/storage/newsportal/2025/4/13/1490893/Go-Youn-Jung.jpg?w=800&h=496&crop=auto&scale=both" },
      content: reply,
      likes: 0,
    };
    // Cập nhật toàn bộ danh sách câu hỏi
    setQuestions((prev) =>
      prev.map((q) =>
        q.id === selectedId ? { ...q, answers: [...q.answers, newAnswer] } : q
      )
    );
    setReply("");
    setFile(null);
  };

  const handleLike = (answerId) => {
    setQuestions((prev) =>
      prev.map((q) =>
        q.id === selectedId
          ? {
            ...q,
            answers: q.answers.map((a) =>
              a.id === answerId ? { ...a, likes: a.likes + 1 } : a
            ),
          }
          : q
      )
    );
  };

  const getStatusClass = (q) => {
    if (q.id === selectedId && reply.trim()) return "replying";
    return q.answers && q.answers.length > 0 ? "answered" : "unanswered";
  };

  return (
    <div className="qa-container">
      <div className="qa-box">
        {/* Sidebar */}
        <div className="qa-sidebar">
          <h3>Câu hỏi</h3>
          <div className="qa-list">
            {questions.map((q) => (
              <div
                key={q.id}
                className={`qa-item ${selectedId === q.id ? "active" : ""} ${getStatusClass(q)}`}
                onClick={() => handleSelectQuestion(q.id)}
              >
                <img src={q.asker.avatar || defaultAvatar} alt="asker" className="avatar" />
                <div>
                  <strong>{q.asker.name}</strong>
                  <p>{q.question.slice(0, 40)}...</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat */}
        <div className="qa-chat">
          <div className="qa-chat-window">
            {/* Question */}
            <div className="qa-question">
              <img src={selectedQuestion.asker.avatar || defaultAvatar} alt="asker" className="avatar" />
              <div className={`bubble asker-bubble ${selectedQuestion.answers.length === 0 ? "unanswered" : reply.trim() ? "replying" : "answered"}`}>
                <strong>{selectedQuestion.asker.name}</strong>
                <p>{selectedQuestion.question}</p>
              </div>
            </div>

            {/* Default answer nếu chưa có answers */}
            {selectedQuestion.answers.length === 0 && selectedQuestion.defaultAnswer && (
              <div className="qa-answer default-answer">
                <div className="bubble doctor-bubble">
                  <strong>BS. Hệ Thống</strong>
                  <p>{selectedQuestion.defaultAnswer}</p>
                </div>
              </div>
            )}

            {/* Answers */}
            {selectedQuestion.answers.map((ans) => (
              <div key={ans.id} className="qa-answer">
                <div className="bubble doctor-bubble">
                  <strong>{ans.doctor.name}</strong>
                  <p>{ans.content}</p>
                  <button className="like-btn" onClick={() => handleLike(ans.id)}>👍 {ans.likes}</button>
                </div>
                <img src={ans.doctor.avatar || defaultAvatar} alt="doctor" className="avatar" />
              </div>
            ))}
          </div>

          {/* Reply Box */}
          <div className="qa-reply-box">
            <input type="text" placeholder="Nhập câu trả lời..." value={reply} onChange={(e) => setReply(e.target.value)} />

            {/* Icon chọn file */}
            <label htmlFor="file-upload" className="file-icon">📎</label>
            <input id="file-upload" type="file" onChange={(e) => setFile(e.target.files[0])} style={{ display: "none" }} />

            <button onClick={handleSendReply}>Gửi</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QnA;
