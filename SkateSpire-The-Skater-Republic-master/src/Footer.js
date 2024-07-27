import React from "react";
import styled from "styled-components";

const StyledFooter= styled.div`
    background-color: black;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    padding: 3rem 5rem;
    font-size: 1.8rem;
    height: 3rem;

    @media (max-width: 350px){
        font-size: 2rem;
        flex-direction: column;
    }
`;

const ConncetMe= styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`;
const Anchor= styled.a`
    display: flex;
    align-items: center;
    transition: all 0.3s;
    &:hover{
        transform: scale(1.2);
    }
`;

const Img= styled.img`
    @media (max-width: 300px){
        width: 80%;
    }
`

const Footer= React.forwardRef((props, ref) => { 
    return (
        <StyledFooter ref={ref}>
            <span>Made with 💗 by Suman &nbsp;|| </span>
            <ConncetMe>
                <Anchor href="https://www.linkedin.com/in/suman09/" target="_blank"><Img src="/linkedin.svg" alt="linkedin" /></Anchor>
                <Anchor href="https://github.com/suman-maji?tab=repositories" target="_blank"><Img src="/github.svg" /></Anchor>
                <Anchor href="mailto:smaji3587@gmail.com" target="_blank"><Img src="/mail.svg" /></Anchor>
            </ConncetMe>
        </StyledFooter>
    );
});

export default Footer;
