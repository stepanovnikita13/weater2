import styled, { css, keyframes } from 'styled-components';
import { theme } from 'antd';

const token = theme.getDesignToken();

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const Backdrop = styled.div<{ $isOpen?: boolean; $duration: number }>(
  ({ $isOpen, $duration }) => css`
    position: fixed;
    top: 0;
    height: 100vh;
    width: 100%;
    background-color: ${token.colorFill};
    backdrop-filter: blur(3px);
    z-index: 10;
    opacity: 0;
    animation-name: ${$isOpen ? fadeIn : fadeOut};
    animation-duration: ${$duration}s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in-out;
  `
);
