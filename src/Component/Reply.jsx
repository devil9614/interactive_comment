import { Avatar } from "@mui/material";
import React from "react";
import styled from "styled-components";

const Reply = ({ data }) => {
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
    </MainCommentContainer>
  );
};

const CommentContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  background-color: #eee;
  width: 350px;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 10px;
  min-width: 350px;
  margin-left: 50px;
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
  margin-top: 10px;
`;
const TimeStampContainer = styled.span`
  color: #aaa;
  font-weight: 400;
  font-size: 12px;
  font-style: italic;
`;
export default Reply;
