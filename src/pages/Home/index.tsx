import { HomeDiv, Perfil } from "./styles";
import  { SiCss3,  SiHtml5,  SiReact, SiJavascript, SiTypescript, SiGithub, SiLinkedin } from 'react-icons/Si'
import {MdEmail} from 'react-icons/md';

export default function Home() { 
    return (
        <HomeDiv>
            <Perfil>
                <header>
                    <div>
                        <img src="https://github.com/klaercio.png"/>
                    </div>
                    <ul>
                        <li><SiGithub color="black" size={30} title="GitHub"/></li>
                        <li><SiLinkedin color="#0e76a8" size={30}  title="Linkedin"/></li>
                        <li><MdEmail color="#BBB" size={30} title="Email"/></li>
                    </ul>
                    <h1>Klaércio Castro</h1>
                    <h2>Front-End Developer</h2>
                </header>
                <ul>
                    <li><SiHtml5 color="orange"/>HTML</li>
                    <li><SiCss3 color="blue"/>CSS3</li>
                    <li><SiJavascript color="yellow" style={{background: 'black'}}/>JAVASCRIPT</li>
                    <li><SiTypescript color="cyan"/>TYPESCRIPT</li>
                    <li><SiReact color="cyan"/>REACT</li>
                </ul>
            </Perfil>
        </HomeDiv>
    );
}