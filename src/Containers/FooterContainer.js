import React from 'react';
import { Footer } from '../components';
import data from '../jsonFiles/footer.json';

export function FooterContainer() {
    return (
        <Footer.Container>
            <Footer>
                <Footer.CallUs>
                    <Footer.DumbData>{data.questions}</Footer.DumbData>
                    <Footer.Data>{data.number}</Footer.Data>
                </Footer.CallUs>
                <Footer.InnerContainer>
                    {data.data.map((data)=>(
                        <Footer.Data key={data} href='#'>{data}</Footer.Data>
                    ))}
                </Footer.InnerContainer>
                <Footer.DumbData>{data.netflix}</Footer.DumbData>
            </Footer>
        </Footer.Container>
    )
}
