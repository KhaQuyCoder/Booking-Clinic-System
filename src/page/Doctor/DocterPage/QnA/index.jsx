import React, { useState } from "react";
import "./QnA.css";

const defaultAvatar = "https://i.pravatar.cc/50?img=1";

const initialComments = [
  {
    id: 1,
    user: { name: "Nguyen Van A", avatar: defaultAvatar },
    content: "I think the service is very good!",
    likes: 2,
    replies: [
      {
        id: 11,
        user: { name: "BS. System", avatar: "https://th.bing.com/th/id/R.eb6175173ddee60459d5df8f00ad6285?rik=fHF%2bwPKRRN5AtQ&pid=ImgRaw&r=0" },
        content: "Thank you for trusting!",
        likes: 1
      }
    ]
  },
  {
    id: 2,
    user: { name: "Tran Thi B", avatar: defaultAvatar },
    content: "How is the cost, doctor?",
    likes: 0,
    replies: []
  }
];

const QnA = () => {
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState("");
  const [replyingTo, setReplyingTo] = useState(null);
  const [replyText, setReplyText] = useState("");

  const handleAddComment = () => {
    if (!newComment.trim()) return;
    const newCmt = {
      id: Date.now(),
      user: { name: "Friend", avatar: defaultAvatar },
      content: newComment,
      likes: 0,
      replies: []
    };
    setComments([newCmt, ...comments]);
    setNewComment("");
  };

  const handleAddReply = (commentId) => {
    if (!replyText.trim()) return;
    const newReply = {
      id: Date.now(),
      user: { name: "BS. System", avatar: "https://th.bing.com/th/id/R.eb6175173ddee60459d5df8f00ad6285?rik=fHF%2bwPKRRN5AtQ&pid=ImgRaw&r=0" },
      content: replyText,
      likes: 0
    };
    setComments(
      comments.map((c) =>
        c.id === commentId ? { ...c, replies: [...c.replies, newReply] } : c
      )
    );
    setReplyingTo(null);
    setReplyText("");
  };

  const handleLikeComment = (id) => {
    setComments(
      comments.map((c) => (c.id === id ? { ...c, likes: c.likes + 1 } : c))
    );
  };

  const handleLikeReply = (commentId, replyId) => {
    setComments(
      comments.map((c) =>
        c.id === commentId
          ? {
              ...c,
              replies: c.replies.map((r) =>
                r.id === replyId ? { ...r, likes: r.likes + 1 } : r
              )
            }
          : c
      )
    );
  };

  return (
    <div className="post-container">
      {/* Post */}
      <div className="post-header">
        <img src="https://th.bing.com/th/id/R.eb6175173ddee60459d5df8f00ad6285?rik=fHF%2bwPKRRN5AtQ&pid=ImgRaw&r=0" alt="User" />
        <div className="info">
          <strong>Doctor Online</strong>
          <span style={{ fontSize: "12px", color: "#65676b" }}>2 hours ago</span>
        </div>
      </div>
      <div className="post-content">
        <p>General health check only 199k! Schedule today! 🎯</p>
        <img src="https://tse3.mm.bing.net/th/id/OIP.u6WmAvYsl1o2rEtqzazmYwHaE8?r=0&cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Post" />
      </div>

      {/* Post actions */}
      <div className="post-actions">
        <button>👍 Like</button>
        <button>Comments</button>
      </div>

      {/* Comments */}
      <div className="comment-section">
        <div className="add-comment">
          <input
            type="text"
            placeholder="Write a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button onClick={handleAddComment}>Send</button>
        </div>

        {comments.map((c) => (
          <div key={c.id} className="comment-item">
            <img src={c.user.avatar} alt={c.user.name} className="avatar" />
            <div>
              <div className="comment-content">
                <strong>{c.user.name}</strong>
                <p>{c.content}</p>
              </div>
              <div className="comment-actions">
                <button onClick={() => handleLikeComment(c.id)}>👍 {c.likes}</button>
                <button onClick={() => setReplyingTo(c.id)}>Reply</button>
              </div>

              {c.replies.length > 0 && (
                <div className="reply-list">
                  {c.replies.map((r) => (
                    <div key={r.id} className="reply-item">
                      <img src={r.user.avatar} alt={r.user.name} className="avatar" />
                      <div>
                        <div className="comment-content">
                          <strong>{r.user.name}</strong>
                          <p>{r.content}</p>
                        </div>
                        <button
                          onClick={() => handleLikeReply(c.id, r.id)}
                          style={{ fontSize: "12px", color: "#65676b", marginTop: "4px" }}
                        >
                          👍 {r.likes}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {replyingTo === c.id && (
                <div className="reply-box">
                  <input
                    type="text"
                    placeholder="Enter your reply..."
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                  />
                  <button onClick={() => handleAddReply(c.id)}>Send</button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QnA;
