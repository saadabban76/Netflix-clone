import React from 'react';
import jumboData from '../jsonFiles/jumbo.json';
import Jumbotron from '../components/jumbotron';

function JumbotronContainer({children, ...restProps}) {
    return (
        <Jumbotron.Container>
            {jumboData.map((data)=>(
                <Jumbotron key={data.id} direction={data.direction}>
                    <Jumbotron.InnerContainer>
                        <Jumbotron.Title>{data.title}</Jumbotron.Title>
                        <Jumbotron.SubTitle>{data.subTitle}</Jumbotron.SubTitle>
                    </Jumbotron.InnerContainer>
                    <Jumbotron.Image src={data.image} alt={data.alt} />
                </Jumbotron>
            ))}
        </Jumbotron.Container>
    )
}

export default JumbotronContainer