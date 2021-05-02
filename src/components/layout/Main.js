import React from 'react'
import styled from 'styled-components'

function Main() {
    return (
        <Wrapper>
            <h1> Het buddy...</h1>
            <LeftSideBar />
            <EmailInboxBar />
            <RightSideBar />

        </Wrapper>
    )
}

export default Main


const Wrapper = styled.div``