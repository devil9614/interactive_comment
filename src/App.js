import { useState } from "react";
import styled from "styled-components";
import Comment from "./Component/Comment";
import InputBox from "./Component/InputBox";
import commentData from "./data.json";

function App() {
  const [CommentDetails, setCommentDetails] = useState(commentData[0].comments);
  return (
    <Main>
      <CommentsContainer>
        {CommentDetails.map((comment, index) => (
          <Comment key={index} data={comment} />
        ))}
        <CardContainer>
          <InputBox width={400} setFunction={setCommentDetails} />
        </CardContainer>
      </CommentsContainer>
    </Main>
  );
}

const CommentsContainer = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
const Main = styled.div`
  width: 100vw;
  background-color: #f5f5f5;
  min-height: 100vh;
`;
const CardContainer = styled.div`
  padding: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 7px;
`;
export default App;
