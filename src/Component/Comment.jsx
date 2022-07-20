import React from "react";
import styled from "styled-components";

const count = 0;

const Comment = () => {
  return (
    <>
      <CommentContainer>
        <LikesContainer>
          {["+", count, "-"].map((item, index) => (
            <LikeSmallBox key={index}>{item}</LikeSmallBox>
          ))}
        </LikesContainer>
        <CommentText></CommentText>
      </CommentContainer>
    </>
  );
};

const CommentContainer = styled.div`
  display: flex;
`;
const LikesContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const LikeSmallBox = styled.div`
  font-size: 15px;
  padding: 10px;
  background-color: #eee;
  color: #111;
  border: 1px solid #ccc;
`;
const CommentText = styled.div``;

export default Comment;
