import React from 'react'
import styled from 'styled-components'
import LeftSideBar from './LeftSideBar'
import EmailInboxBar from './EmailInboxBar'
import RightSideBar from './RightSideBar'


function Main() {
    return (
        <Wrapper>
            
            <LeftSideBar />
            <EmailInboxBar />
            <RightSideBar />

        </Wrapper>
    )
}

export default Main


const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 270px auto 50px;
`