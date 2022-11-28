import styled from "styled-components"

export const Container = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    padding:70px 10%;
    border-bottom:8px solid #222;
    @media(max-width:600px){
        padding:70px 0px;
    }
`

export const Item = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    max-width:870px;
`

export const Title = styled.h1`
    font-size:50px;
    color:white;
    margin-bottom: 50px;
    @media (max-width:900px){
        font-size:35px;
        text-align:center;
    }
`

export const Frame = styled.div`
    display: flex;
    flex-direction: column;
    width:100%;
    user-select: none;
`

export const Wrapper = styled.div`
    transition: height 2s linear 5s;
    cursor:pointer;
    display:flex;
    flex-direction: column;
    width:100%;
    max-width: 760px;
    /* max-height:max-content; */
    background-color: #303030;
    color:#FFFFFF;
    margin-bottom:12px;
`

export const Header = styled.div`
    position: relative;
    display:flex;
    justify-content: space-between;
    user-select: none;
    padding:28px;
    ::after{
        content: '';
        position:absolute;
        display:flex;
        bottom:0px;
        left:0px;
        width:100%;
        height:0.02rem;
        background-color: black;
    }
`

export const HeaderTitle = styled.h1`
    font-weight: 700;
    font-size:22px;
    color:white;
`

export const Body = styled.div`
    height:${({toggleShow}) => toggleShow ?  'inherit' : '0px'};
    max-height: 1200px;
    margin-top:14px;
    padding:28px;
    line-height: normal;
    font-size:20px;
    @media (max-width:600px){
        font-size:16px;
        line-height:22px;
    }
`

export const Description = styled.div`
    position:relative;
    padding-top:50px;

    .error{
        color:black;
        text-align: center;
        width:100%;
        background-color: red;
        position: absolute;
        bottom:-20px;
    }

`

export const DescriptionText = styled.h3`
    color:white;
    font-size:1.4rem;
    @media(max-width:800px){
        text-align:center;
    }
`

export const InnerContainer = styled.form`
    margin-top:30px;
    display:flex;
    .button{
        display:block;
        background-color: red;
        color:white;
        font-weight:bolder;
        width:30%;
        :hover{
            background-color: #f40612;
        }
        :disabled{
            background-color: red;
            color:whitesmoke;
            opacity: 0.5;
        }
    }
    @media(max-width:800px){
        flex-direction: column;
        align-items: center;
        .button{
            width:65%;
            margin-top:20px;
        }
    }
`

export const DescriptionInput = styled.input`
    width:80%;
    padding:14px;
    border-radius: 2px;
    user-select: none;
`