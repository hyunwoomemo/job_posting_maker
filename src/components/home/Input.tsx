import styled from "@emotion/styled";
import React from "react";

const Input = () => {
  return (
    <Base>
      <InputWrapper>
        <InputItem>
          <label htmlFor="company_name">회사명</label>
          <input id="company_name"></input>
        </InputItem>
        <InputItem>
          <label htmlFor="job_post_title">공고 제목</label>
          <input id="job_post_title"></input>
        </InputItem>
        <InputItem>
          <label htmlFor="job_post_title">근무 조건</label>
          <input id="job_post_title"></input>
        </InputItem>
      </InputWrapper>
    </Base>
  );
};

const Base = styled.div`
  background-color: var(--box-bgc);
  padding: 1rem;
  border-radius: 10px;
  flex: 1 1 auto;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const InputItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > input {
    align-self: flex-start;
  }
`;

export default Input;
