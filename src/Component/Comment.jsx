import { Avatar } from "@mui/material";
import React from "react";
import styled from "styled-components";
import InputBox from "./InputBox";
import Reply from "./Reply";

const Comment = ({ data }) => {
  console.log(data);
  return (
    <MainCommentContainer>
      <CommentContainer>
        <LikesContainer>
          {["+", data.likes, "-"].map((item, index) => (
            <LikeSmallBox key={index}>{item}</LikeSmallBox>
          ))}
        </LikesContainer>
        <CommentText>
          <UserDetails>
            <AvatarWrapper>
              <Avatar sizes="small" />
              {data.user}
            </AvatarWrapper>
            <TimeStampContainer>{data.time}</TimeStampContainer>
          </UserDetails>
          {data.comment}
        </CommentText>
      </CommentContainer>
      {data.reply.map((reply) => (
        <Reply data={reply} />
      ))}
    </MainCommentContainer>
  );
};

const CommentContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  background-color: #eee;
  border: 1px solid #ccc;
  width: 400px;
  padding: 15px;
  border-radius: 10px;
  min-width: 400px;
`;
const LikesContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const LikeSmallBox = styled.div`
  font-size: 15px;
  padding: 2px;
  background-color: #eee;
  color: #111;
  border: 1px solid #ccc;
`;
const CommentText = styled.div`
  width: inherit;
`;
const UserDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 5px;
`;
const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;
const MainCommentContainer = styled.div`
  padding: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 7px;
`;
const TimeStampContainer = styled.span`
  color: #aaa;
  font-weight: 400;
  font-size: 12px;
  font-style: italic;
`;
export default Comment;
