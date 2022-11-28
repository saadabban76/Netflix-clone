import React from 'react';
import faqs from '../jsonFiles/faqs.json'
import { Faq } from '../components';
import EmailContainer from './EmailContainer';
// import { Provider, useDispatch, useSelector } from 'react-redux';

function FaqContainer() {
    return (
        <Faq.Container>
            <Faq>
                <Faq.Title>Frequently Asked Questions</Faq.Title>
                {faqs.map(faq=>(
                <Faq.Frame key={faq.id}>
                    <Faq.Wrapper>
                        <Faq.Header>
                            <Faq.HeaderTitle>{faq.header}</Faq.HeaderTitle>
                        </Faq.Header>
                        <Faq.Body>{faq.body}</Faq.Body>
                    </Faq.Wrapper>
                </Faq.Frame>
                ))}
                <EmailContainer />
            </Faq>
        </Faq.Container>
    )
}

export default FaqContainer
