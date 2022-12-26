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
        align-items: flex-start;

        div {
         /*    display: block;
            width: 100px; */

            h1 {
                position: relative;
                top: 50%;
                transform: translate(0, -50%);
            }
        }
        
        nav {
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
                line-height: 1.6;
                display: flex;
                gap: 3px;
                align-items: center;
                white-space: nowrap;
                font-size: 20px;
                transition: all 0.5s;
                border-top: 2px solid transparent;
                border-bottom: 2px solid transparent;
                
                &:hover {
                    filter: brightness(150%);
                }

                &.active {
                    border-bottom: 2px solid ${props => props.theme.cyan};
                }
            }
        }
    }
`