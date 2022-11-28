import React from 'react'
import FaqContainer from '../Containers/FaqContainer'
import { FooterContainer } from '../Containers/FooterContainer'
import JumbotronContainer from '../Containers/JumbotronContainer'
import ShowTheme from '../Containers/ShowTheme'

function Home() {
    return (
        <>
          <ShowTheme />
          <JumbotronContainer />
          <FaqContainer />
          <FooterContainer />
        </>
    )
}

export default Home
