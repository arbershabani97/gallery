import { FC, ReactNode } from "react"
import { NavLink } from "react-router-dom"
import styled from "styled-components"

const StyledContainer = styled.div`
    display:flex;
    flex-direction:column;
    padding: 0 10%;
`
const Navbar = styled.div`
    display:flex;
    box-shadow: 0 1px 0 #f7f7f7;
    padding: 0 10%;
    height:60px;

`
const NavItem = styled(NavLink)`
    height:60px;
    display:flex;
    justify-content:center;
    align-items:center;
    padding: 0 20px;
    font-weight: 600;
    font-size: 16px;
    font-weight: 500;
    line-height: 26px;
    text-decoration: none;
    color: rgb(104, 104, 104);
    
    &.active {
        color: rgb(50, 50, 50);
    }

    &:hover{
        color: #05a081;
    }

    &.profile{
        color: #05a081;
        margin-left:auto;
    }
`

export const Container: FC<{ children: ReactNode }> = (props) => (
    <>
        <Navbar>
            <NavItem to="/">
                Home
            </NavItem>
            <NavItem to="/gallery">
                Gallery
            </NavItem>

            <NavItem className="profile" to="/profile">
                Me
            </NavItem>
        </Navbar>
        <StyledContainer {...props} />
    </>
)