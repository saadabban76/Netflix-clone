import { useState } from "react";
import useContent from "../../hooks/use-content"
import requests from "../../Requests"
import { BrowseTheme, Container, ShowCase } from "../styles/browse"

export default function BrowseContainer({children,...restProps}) {

    const {content} = useContent(requests.fetchRomanceMovies);

    const bgImage = content[Math.floor(Math.random() * content.length)];

    console.log("bgImage : ",bgImage);

    return (
        <Container bgImage={bgImage?.backdrop_path}>
            {children}
        </Container>
    )
}

BrowseContainer.BrowseTheme = function BrowseBrowseTheme({children,...restProps}) {
    return (
        <BrowseTheme>
            {children}
        </BrowseTheme>
    )
}

BrowseContainer.Showcase = function BrowseShowcase({children, ...restProps}) {
    return (
        <ShowCase>
            {children}
        </ShowCase>
    )
}