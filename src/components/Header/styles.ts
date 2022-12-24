import styled from "styled-components";

export const HeaderDiv = styled.div`
    width: 100vw;
    background-color: ${props => props.theme.purple};
    height: 8rem;

    div {
        width: 80rem;
        max-width: 1200px;
        display: flex;
        margin: 0 auto;
        justify-content: space-between;
      
        height: 100%;

        div:nth-child(1) {
            width: 8rem;
            border-radius: 50px;
            overflow: hidden;
        }
        
        div:nth-child(2) {
            display: flex;
            align-items: center;
            height: 100%;
            gap: 1rem;
            justify-content: flex-end;
            
            a { 
                text-decoration: none;
                cursor: pointer; 
                color: ${props => props.theme.cyan};
                font-weight: bold;
                padding-right: 1rem;
                
                &:hover {
                    filter: brightness(150%);
                }
            }
        }
    }
`