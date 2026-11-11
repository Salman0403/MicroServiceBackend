import axios from "axios";
import React, { useState, useEffect } from "react";

const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);

  const fetchComments = async (event) => {
    const res = await axios.get(
      `http://localhost:4001/posts/${postId}/comments`,
    );

    setComments(res?.data);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const renderComments = Object.values(comments).map((comment) => {
    return <li key={comment.id}>{comment?.content}</li>;
  });
  return <ul>{renderComments}</ul>;
};

export default CommentList;
