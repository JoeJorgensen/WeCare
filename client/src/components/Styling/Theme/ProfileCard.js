import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import styled from 'styled-components';


const cardWidth = 250;
const borderRadius = 8;
const transition = 'all 0.45s ease';

const Screenshot = styled.figure`
  z-index: 200;
  position: relative;
  top: 10px;
    left: 25px;
    right: 0;
    bottom: 0;
  margin: 0px;
  padding: 0;
  width: 200px;
  height: 200px;
  background: url(${(props) => props.image }) 0 0 no-repeat;
  background-size: cover;
  border-radius: ${borderRadius}px ${borderRadius}px 0 0;
  overflow: hidden;
  backface-visibility: hidden;
  transition: ${transition};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0);
    transition: ${transition};
  }
`;






const Content = styled.div`
  z-index: 200;
  position: relative;
  padding: 20px 20px 30px;
`;

const Title = styled.span`
  display: block;
  margin-bottom: 4px;
  font-size: 1.25em;
  font-weight: 500;
  transition: ${transition};
`;

const Description = styled.span`
  display: block;
  font-size: 0.875em;
  color: #999999;
  transition: ${transition};
  transition-delay: 0.04s;
`;
const Current_amount = styled.span`
  transition: ${transition};
  transition-delay: 0.06s;
`;

const Goal = styled.span`
  display: block;
  font-size: 0.875em;
  color: #999999;
  transition: ${transition};
  transition-delay: 0.08s;
`;

const BottomBar = styled.span`
  position: absolute;
  left: 0;
  bottom: 0;
  width: ${cardWidth }px;
  height: 10px;
  background: ${(props) => props.background && props.background};
  border-radius: 0 0 ${borderRadius}px ${borderRadius}px;
  transition: ${transition};
`;


const Style = styled.button`
  padding: 0;
  margin:0;
  position: relative;
  flex-shrink: 0;
  width: ${cardWidth}px;
  text-align: left;
  background: #ffffff;
  border-radius: ${borderRadius}px;
  cursor: pointer;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.12), 0 20px 20px -10px rgba(0, 0, 0, 0.125);
  transition: ${transition};
  border: none;


`;

const ProfileCard = ({ hexa, title, bio, image, current_amount , goal, onClick}) => (
  <Style onClick={onClick}>
    <Screenshot 
    image={image} />

    

    <Content>
      <Title>{title}</Title>
      <hr></hr>
      <Description>{bio}</Description>


      <BottomBar background={'#035EB6'} />
    </Content>
  </Style>
);

export default ProfileCard;
