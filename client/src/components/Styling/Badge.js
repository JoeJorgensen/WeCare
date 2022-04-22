import React from 'react';
import styled from 'styled-components';

const Style = styled.div`
  display: inline-block;
  padding: 4px 8px;
  font-size: 0.815em;
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: 0.025em;
  color: #333333;
  background: #ffffff;
  border: 2px solid #ffffff;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  user-select: none;
  cursor: default;

  ${(props) =>
    props.fixed &&
    `
    z-index: 10000;
    position: fixed;
    top: 12px;
    left: 12px;
  `};
`;

const Badge = ({ children, fixed }) => <Style fixed={fixed}>{children}</Style>;

export default Badge;
