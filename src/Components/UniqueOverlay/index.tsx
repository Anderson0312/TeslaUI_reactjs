import { useTransform } from 'framer-motion';
import React from 'react';
import useWrapperScroll from '../Model/useWrapperScroll';

import { Container, Header, Logo,  Burguer, Footer} from './styles';

const UniqueOverlay: React.FC = () => {
    const {scrollProgress} = useWrapperScroll()

    const opacity= useTransform(scrollProgress, [0.9, 1], [0,1])

  return (
    <Container>
        <Header>
            <Logo />
            <Burguer />
        </Header>

        <Footer style ={{opacity}}>
            <ul>
                <li>
                    <a href="#">Ui Clone</a>
                </li>
                <li>
                    <a href="#">Made with S2</a>
                </li>
                <li>
                    <a href="#">by AndersonMoura</a>
                </li>
            </ul>
        </Footer>
    </Container>
  )
}

export default UniqueOverlay;