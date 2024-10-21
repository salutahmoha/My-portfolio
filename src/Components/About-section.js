import styled, { keyframes } from "styled-components";

// Define the sliding animation
const slideIn = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const AboutStyled = styled.div`

  .About-container {
    padding-top: 3rem;
    text-align: center;

    h3 {
      font-size: 2rem;
      padding: 0 2rem .7rem 2rem;
    }

    p {
      font-size: 1.1rem;
    }
  }

  .about {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 2rem 0;
  }

  .about-div {
    display: block;
    width: 12rem;
    height: 14rem;
    background: #312d6f;
    color: #fff;
    border-radius: 10px;
    text-align: center;
    opacity: 0;
    animation: ${slideIn} 1s ease forwards;
    animation-delay: calc(0.2s * var(--i));

    img {
      width: 100px;
      height: 100px;
      margin-top: 20px;
      border-radius: 50%;
    }

    h4 {
      padding-top: 70px;
      color: white;
      font-size: 1.3rem;
    }
  }

  .about-experience-div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8rem;

    h4 {
      font-size: 3rem;
    }

    p {
      font-size: 1.5rem;
    }
  }

  .btn {
    background: #198754;
    border: 1px solid #198754;
    color: #fff;
    transition: all ease 0.5s;
    font-size: 1rem;
    margin-top: 1.3rem;
    border-radius: .4rem;

    margin-bottom: 4rem; 
  }
  .btn:hover {
    background: transparent;
    cursor: pointer;
    color: #000;
  }

  @media screen and (max-width: 56.25rem) {
    .about{
    width: 100%;
    flex-wrap: wrap;
    }

    .about-div{
      margin-bottom: 2rem;
    }
    .about-experience-div{
      gap: 5rem;
    }
    .about-experience-div p{
      font-size: 2rem;
    }
  }
`;

export default AboutStyled;
