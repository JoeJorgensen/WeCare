import React from "react";
import styled from "styled-components";

const cardWidth = 280;
const borderRadius = 8;
const transition = "all 0.45s ease";


const Screenshot = styled.figure`
  z-index: 200;
  position: relative;
  left: 50px;
  margin: 0;
  padding: 0;
  width: 180px;
  height: 100px;
  background: url(${(props) => props.image}) 0 0 no-repeat;
  background-size: cover;
  border-radius: ${borderRadius}px ${borderRadius}px ;

  overflow: hidden;
  backface-visibility: hidden;
  transition: ${transition};

  &::before {
    content: "";
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
  padding: 10px 10px 25px;
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



const Date = styled.span`
  display: block;
  font-size: 0.875em;
  color: #999999;
  transition: ${transition};
  transition-delay: 0.04s;

`;

const BottomBar = styled.span`
  position: absolute;
  left: 0;
  bottom: 0;
  width: ${cardWidth}px;
  height: 10px;
  background: ${(props) => props.background && props.background};
  border-radius: 0 0 ${borderRadius}px ${borderRadius}px;
  transition: ${transition};
`;
const Current_amount = styled.span`
  display: block;
  font-size: 0.875em;
  color: black;
  transition: ${transition};
  transition-delay: 0.04s;


`;

const Style = styled.button`
  padding: 5px;
  margin: 15px;
  position: relative;
  flex-shrink: 0;
  width: ${cardWidth}px;
  text-align: left;
  background: #ffffff;
  border-radius: ${borderRadius}px;
  cursor: pointer;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.12),
    0 20px 20px -10px rgba(0, 0, 0, 0.125);
  transition: ${transition};
  border: none;

  &:hover {
    transform: scale(1.04);

    ${Title},
    ${Current_amount},
    ${Date},
    ${Description},
    ${BottomBar} {
      transform: scale(0.92);
    }

    ${Title} {
      transform: translateY(-10px);
    }
    ${Date} {
        transform: translateY(-10px);



      }
      ${Current_amount} {
        transform: translateY(-10px);


      }


    ${Description} {
      transform: translateY(-12px);
    }
    

    ${BottomBar} {
      border-radius: ${borderRadius - 2}px;
      transform: translateY(-14px) scale(0.9);
    }

    ${Screenshot} {
      transform: translateY(-4px) scale(0.92);
      border-radius: ${borderRadius - 5}px;


      &::before {
        background: rgba(0, 0, 0, 0.1);
      }
    }

    
  }
`;

const UserDonationCard = ({
  hexa,
  current_amount,
  title,
  date,
  description,
  image,
 
  onClick,
  onClickImg,

}) => (
  <Style onClick={onClick}>
    <div style={{display:'inline-flex', alignItems:'center', gap: "5px "}}>
      <Screenshot  image={image} />


    </div>
    <div style={{textAlign:'center', margin:'10px'}}>
       < Title >{title}</Title>
        
    </div>



    <div style={{ display:'flex', justifyContent:'space-evenly'}}>

      <Current_amount> ${current_amount}</Current_amount>
      <Date>{date}</Date> 
    </div>
     
       
        
    <hr></hr>
    <Content >
      <Description>{description}</Description>






    </Content>
      <BottomBar background={'#035EB6'} />
  </Style>
);

export default UserDonationCard;
