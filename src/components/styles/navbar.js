import { Search } from "@material-ui/icons";
import styled from "styled-components";


export const Item = styled.div`
    display:flex;
`

export const Container = styled.div`
    position:${({toggle})=>!toggle && "fixed"};
    padding:20px 40px;
    width:100%;
    display:flex;
    background-color: ${({showBg})=>showBg && "#010001"};
    justify-content: space-between;
    align-items: center;
    z-index:1;
    /* Animation */
    transition-timing-function: ease-in;
    transition:all 0.5s;
    .button{
        z-index:11111;
        width: 100px;
        color:white;
        font-weight:bold;
        background-color: red;
        :hover{
            background-color: purple;
        }
    }
`

export const ButtonContainer = styled.div`
    display : ${({toggle})=> toggle ? "none" : "flex"};
`

export const Logo = styled.img`
    cursor: pointer;
    width:120px;
    margin-right:10px;
    @media (max-width:850px){
        width:97px;
    }
`

export const InnerContainer = styled.div`
    flex:1;
    display:flex;
    justify-content: space-between;
    @media (max-width:750px){
        flex-direction: row-reverse;
    }
`

export const InnerLeft = styled.div`
    width:45%;
    max-width:570px;
    display:${({mobileScreen})=>mobileScreen ? 'none' : 'flex'};
    justify-content: space-evenly;
    align-items: center;
    .title{
        cursor:pointer;
    color:#8C8C8C;
    font-size:0.9rem;
    margin-left:7px;
    text-decoration: none;
    /* background-color: ${({toggle})=>toggle && "red"}; */
    :hover{
        color:#6F6F6F;
    }
    }
    .active{
        color:white;
        :hover{
            color:white;
        }
    }
    @media (max-width:1000px){
        font-size:24px;
        width:80%;
    }
    @media (max-width:750px){
        display:none;
    }
`

export const Title = styled.h3`
`

export const InnerRight = styled.div`
    display:flex;
    justify-content: space-evenly;
    align-items: center;

    .item{
        cursor:pointer;
        margin-right:10px;
        :hover{
            color:white;
        }
    }

    .dropdown {
        color:white;
        position:absolute;
        top:80px;
        display:flex;
        flex-direction: column;
    }

`

export const AccountsLogo = styled.img`
    object-fit: contain;
    width:40px;
    border-radius:5px;
    cursor:pointer;
`

export const DropDownMenu = styled.div`
    display:${({dropToggle}) => dropToggle ? 'block' : 'none'};
    position:absolute;
    top:80px;
    padding:15px;
    background-color:#141213;
    border-radius:4px;
    .signoutbtn {
        background-color: red;
        padding:8px 12px;
        border-radius:4px;
        color:white;
    }
`;
export const DropDownMenuList = styled.ul`
    list-style:none;
    cursor:pointer;
`;
export const DropDownMenuListItems = styled.li`
    width:100%;
    padding:12px 15px;
    color:#bbb9b9;
`;
export const ItemsText = styled.p`
    align-items:left;
`;

export const SearchContainer = styled.div`
    display:flex;
    margin-left:8px;
    .MuiSvgIcon-root {
    display: ${({searchStatus}) => searchStatus && "none" } ;
    /* z-index:-1; */
    cursor:pointer;
    margin-right:10px;
    :hover{
        color:white;
    }
    }
`

export const SearchIcon = styled(Search)`
    /* display:none; */
`

export const SearchInput = styled.input`
    padding:5px;
    border-radius:2px;
    border:none;
`