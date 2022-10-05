import React from "react";
import styled from "styled-components";

const StyledLoading = styled.div`
  .loading::after {
    display: inline-block;
    animation: dotty steps(1, end) 1s infinite;
    content: "";
  }

  @keyframes dotty {
    0% {
      content: "   ";
    }
    25% {
      content: ". ";
    }
    50% {
      content: ".. ";
    }
    75% {
      content: "...";
    }
    100% {
      content: "   ";
    }
  }
`;

const Loading = () => {
  return (
    <StyledLoading>
      <div className="loading" />
    </StyledLoading>
  );
};

export default Loading;
