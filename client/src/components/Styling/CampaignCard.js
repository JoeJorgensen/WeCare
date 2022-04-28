import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import styled from 'styled-components';
import Update from '../shared/Update';

const cardWidth = 320;
const borderRadius = 8;
const transition = 'all 0.45s ease';

const Screenshot = styled.figure`
  z-index: 200;
  position: relative;
  margin: 0;
  padding: 0;
  width: ${cardWidth }px;
  height: 185px;
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


const Profile_image = styled.figure`
z-index: 200;
position: relative;
margin: 0;
padding: 0;
objectFit: "cover"; 
width: "50px";
height: "50px";
margin: "7px";
background: url(${(props) => props.image }) 0 0 no-repeat;
borderRadius: "50%";
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
  margin: 15px;
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

  &:hover {
    transform: scale(1.04);

    ${Title},
    ${Description},
    ${BottomBar} {
      transform: scale(0.92);
    }

    ${Title} {
      transform: translateY(-10px);
    }

    ${Description} {
      transform: translateY(-12px);
    }
    ${Current_amount} {
        transform: translateY(-14px);
      }
      ${Goal} {
        transform: translateY(-14px);
      }
      

    ${BottomBar} {
      border-radius: ${borderRadius - 2}px;
      transform: translateY(-14px) scale(0.88);
    }

    ${Screenshot} {
      transform: translateY(4px) scale(0.92);
      border-radius: ${borderRadius - 2}px;

      &::before {
        background: rgba(0, 0, 0, 0.1);
      }
    }

    ${Profile_image} {
        transform: translateY(4px) scale(0.92);
        border-radius: ${borderRadius - 2}px;
  
        &::before {
          background: rgba(0, 0, 0, 0.1);
        }
      }
  }
`;

const CampaignCard = ({ hexa, title, description, image, profile_image, current_amount , goal, onClick}) => (
  <Style onClick={onClick}>
    <Screenshot 
    image={image} />

    <Profile_image 
    profile_image={profile_image} />

    <Content>
      <Title>{title}</Title>
      <Description>{description}</Description>

      {/* <Current_amount>Current amount: ${current_amount}</Current_amount> */}
      <Goal>Goal: ${goal}</Goal>
        <br/>

      <div style={{marginTop:'5px', marginBottom:'5px'}}>
      <ProgressBar  variant="mustard"  now={current_amount } max={goal} label={`$${current_amount}`}/>
      </div>


      <BottomBar background={'#035EB6'} />
    </Content>
  </Style>
);

export default CampaignCard;
