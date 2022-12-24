import { HeaderDiv } from './styles';

export default function Header() {
    return (
        <HeaderDiv>
            <div>
                <div>
                    <img src='https://github.com/klaercio.png'></img>
                </div>
                <div>
                    <a href="#">Home</a>
                    <a href="#">About Me</a>
                    <a href="#">Projects</a>
                </div>
            </div>
        </HeaderDiv>
    );
}