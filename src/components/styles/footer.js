import styled from "styled-components";

export const Item = styled.div`
    display:flex;
    min-height: 440px;
    flex-direction: column;
    justify-content: space-evenly;

    @media (max-width:750px) {
        align-items: center;
    }
`

export const Container = styled.div`
    display: flex;
    backdrop-filter: blur(1px) saturate(194%);
        -webkit-backdrop-filter: blur(3px) saturate(184%);
        background-color: rgba(0, 0, 0, 0.70);
    flex-direction: column;
    align-items:center;
    justify-content: center;
    padding-top:50px;
    padding-bottom: 10px;
    @media(max-width:900px){
        align-items: center;
        width:100%;
    }
`

export const CallUs = styled.div`
    display:flex;
    align-items: center;
`

export const  InnerContainer = styled.div`
    margin:20px auto 20px auto;
    display:grid;
    justify-content: center;
    align-items: center;
    grid-template-columns:  180px 180px 230px 180px;
    grid-template-rows: repeat(4, 48px);
    grid-column-gap: 20px;

    @media(max-width:900px){
        grid-template-columns: repeat(3, 200px);
    }

    @media (max-width:620px) {
        grid-template-rows: repeat(8, 48px);
    }

    @media(max-width:620px){
        grid-template-columns: repeat(2, 130px);
    }

`

export const Data = styled.a`
    :hover{
        text-decoration: underline;
    }
    text-decoration:none;
    font-size: 1.2rem;
    font-weight: 100;
    color:#757575;
    cursor: pointer;

    @media (max-width: 800px) {
        font-size: 1rem;
    }
`

export const DumbData = styled.h2`
    align-self: flex-start;
    padding-right:10px;
    font-weight: 200;
    color: #969494;
`