import styled, { createGlobalStyle} from 'styled-components';
import Caminho from '../assets/fundo.png';

export const GlobalStyle = createGlobalStyle`
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Chivo Mono', sans-serif;
    }

    :focus {
        outline: transparent;
        box-shadow: 0px 0px 0px 2px ${props => props.theme.white};
        border-radius: 4px;
    }

    body {
       /*  background-image: url(${Caminho}); */
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
        color: red;
        background-color: ${props => props.theme.porcelanete};
    }
`

export const Wrapper = styled.div`
    width: 80rem;
    min-width: 1200px;
`