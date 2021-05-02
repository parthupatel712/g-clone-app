import React from 'react'
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Header() {
    return (
        <Wrapper>
            <LogoWrapper>
                <div>
                    <MenuIcon>

                    </MenuIcon>
                </div>
                <img src='https://blog.logomyway.com/wp-content/uploads/2021/02/gmail-logo.jpg' />
            </LogoWrapper>
            <SearchWrapper>
                <SearchBarWrapper>
                    <SearchIcon />
                    <input type= 'text' placeholder ='Search mail' />
                    <ExpandMoreIcon />
                </SearchBarWrapper>
            </SearchWrapper>

            <IconsWrapper>
                <HelpOutlineIcon />
                <SettingsIcon />
                <AppsIcon />
                <AccountCircleIcon />
            </IconsWrapper>
            <h1> Hey buddy .....</h1>
        </Wrapper>
    )
}

export default Header

const Wrapper = styled.div``

const LogoWrapper = styled.div``

const SearchWrapper = styled.div``

const SearchBarWrapper = styled.div``

const IconsWrapper = styled.div``