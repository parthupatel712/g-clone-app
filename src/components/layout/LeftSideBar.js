import React from 'react'
import styled from 'styled-components'
import Compose from '../buttons/Compose'
import {leftSidebarItems} from '../data/LeftSidebarItems'

import VideoCallIcon from '@material-ui/icons/VideoCall';
import KeyboardIcon from '@material-ui/icons/Keyboard';

const LeftSideBar = () => {
    return (
        <Wrapper>
            <ComposeContainer>

                <Compose />

            </ComposeContainer>

            <SideButtonsContainer>
                {
                    leftSidebarItems.map(item => (
                        <SideBarButtons> {item.icon} {item.text} </SideBarButtons>
                    ))
                }
            </SideButtonsContainer>

            <MeetingContainer>
                <Title>Meet</Title>
                <p><VideoCallIcon />New Meeting</p>
                <p><KeyboardIcon /> Join Meeting</p>
            </MeetingContainer>

            <HangoutContainer>

            </HangoutContainer>

            <BottomContainer>

            </BottomContainer>
            
        </Wrapper>
    )
}

export default LeftSideBar

const Wrapper = styled.div`
    border-right: 1px solid lightgray;
    height: 100vh;
`

const ComposeContainer = styled.div`
    display: grid;
    place-items: start;
    padding: 10px 20px;
`

const SideButtonsContainer = styled.div``

const SideBarButtons = styled.div`
    display: grid;
    grid-template-columns: 14% auto;
    color: gray;
    padding: 5px 25px;
    border-radius: 0 100px 100px 0;
    cursor: pointer;
    margin-right: 8px;
    font-family: Roboto,RobotoDraft,Helvetica,Arial,sans-serif;

    :hover{
        background-color: #f5f7f7;
    }
`

const MeetingContainer = styled.div``

const HangoutContainer = styled.div``

const BottomContainer = styled.div``


