import React from 'react';
import styled from 'styled-components';

const Spinner = styled.div`
  margin: 100px auto 0;
  width: 70px;
  text-align: center;

  & > div {
    width: 18px;
    height: 18px;
    background-color: #dd3a3c;

    border-radius: 100%;
    display: inline-block;
    -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    animation: sk-bouncedelay 1.4s infinite ease-in-out both;

    & > div::first-child {
      -webkit-animation-delay: -0.32s;
      animation-delay: -0.32s;
    }
    & > div::last-child {
      -webkit-animation-delay: -0.16s;
      animation-delay: -0.16s;
    }

    @-webkit-keyframes sk-bouncedelay {
      0%,
      80%,
      100% {
        -webkit-transform: scale(0);
      }
      40% {
        -webkit-transform: scale(1);
      }
    }
    @keyframes sk-bouncedelay {
      0%,
      80%,
      100% {
        -webkit-transform: scale(0);
        transform: scale(0);
      }
      40% {
        -webkit-transform: scale(1);
        transform: scale(1);
      }
    }
  }
`;

const LoadingSpinner = () => {
  return (
    <Spinner>
      <div></div>
      <div></div>
      <div></div>
    </Spinner>
  );
};

export default LoadingSpinner;
