import React from 'react'
import styled from 'styled-components'
import Compose from '../buttons/Compose'

const LeftSideBar = () => {
    return (
        <Wrapper>
            <ComposeContainer>

                <Compose />

            </ComposeContainer>

            <SideButtonsContainer>

            </SideButtonsContainer>

            <MeetingContainer>

            </MeetingContainer>

            <HangoutContainer>

            </HangoutContainer>

            <BottomContainer>

            </BottomContainer>
            
        </Wrapper>
    )
}

export default LeftSideBar

const Wrapper = styled.div``

const ComposeContainer = styled.div``

const SideButtonsContainer = styled.div``

const MeetingContainer = styled.div``

const HangoutContainer = styled.div``

const BottomContainer = styled.div``


