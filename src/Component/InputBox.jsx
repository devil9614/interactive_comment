import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";

const InputBox = ({ width, setFunction }) => {
  const [text, setText] = useState("");
  return (
    <MainContainer width={width}>
      <TextField
        placeholder="Write a comment..."
        fullWidth
        size="small"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <Button variant="contained" color="primary">
        Send
      </Button>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  margin-top: 15px;
  gap: 10px;
  width: ${(props) => props.width};
`;

export default InputBox;
