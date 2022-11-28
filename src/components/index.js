import { Container, Txt } from './styles/dummies';

export { default as Jumbotron } from './jumbotron';
export { default as Footer } from './footer';
export {default as Faq} from './faq';
export {default as Navbar} from './navbar';
export {default as Form} from './form';

// ? For Dummies 

export default  function Dummies({children, ...restProps}){
    return (
        <Dummies.Container>
            {children}
        </Dummies.Container>
    )
}

Dummies.Container = function DummiesContainer({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Dummies.Txt = function DummiesTxt({children, ...restProps}) {
    return <Txt {...restProps} >{children}</Txt>
}