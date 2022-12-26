import styled from "styled-components"

export const HomeDiv = styled.div`
<<<<<<< HEAD
    display: grid;
    width: 80rem;
    max-width: 1200px;
    margin: 0 auto;
    grid-template-columns: 1fr 2fr;
    grid-template-areas: "perfil conteudo";
`;

export const Perfil = styled.div`
    grid-area: perfil;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: calc(100vh - 8rem);
    position: relative;

    header {
        padding-block: 2rem;


        div {
            width: 50%;
            margin: 0 auto;
        }

        img {
            outline: 3px solid cyan;
            width: 6rem;
            height: 6rem;
            border-radius: 50%;
            overflow: hidden;

            &:hover {
                animation: border 5s infinite;
            }

            @keyframes border{
                0% {
                    outline: 3px solid cyan;
                }
                20% {
                    outline-color: #0000FF;
                }
                40% { 
                    outline-color: #8B00FF;
                }
                60% {
                    outline-color: #FF000F;
                }
                80% {
                    outline-color: #FF7F00;
                }
                100% {
                    outline-color: #00FF00
                }

            }
        }


        h1, h2 {
            text-align: center;
            font-size: 18px;
            color: ${props => props.theme.gray};
        }

        h2 {
            filter:opacity(0.8);
        }

        ul  {
            display: flex;
            gap: 1rem;
            justify-content: center;
            padding-bottom: 1rem;
        }

    }

    ul li {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        list-style: none;
        color: ${props => props.theme.cyan};
        padding-top: 1rem;
        font-weight: bold;

        svg {
            font-size: 2rem;
        }
    }

    ul:last-child li:last-child {
        svg:hover{
            animation: rotate infinite 10s linear
        }

        @keyframes rotate {
           from {
                transform: rotate(0deg) ;
            } 
            to {
                transform: rotate(3600deg);
            }
        }
    }
`
=======
    color: red;
`;
>>>>>>> ba3fdbf07a88ab8317ec278a038a745061bf76da
