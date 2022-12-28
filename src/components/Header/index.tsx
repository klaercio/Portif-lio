import { HeaderDiv } from './styles';
import { House, UserPlus, FolderOpen} from 'phosphor-react'
import { defaultTheme } from '../../styles/themes/default';
import { NavLink, Outlet } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <HeaderDiv>
                <div>
                    <div>
                        <h1>Logo</h1>
                    </div>
                    <nav>
                        <NavLink to='/' title='Home'><House/>Home</NavLink>
                        <NavLink to='/AboutMe' title='AboutMe'><UserPlus/>About Me</NavLink>
                        <NavLink to='/Projects'><FolderOpen/>Projects</NavLink>
                    </nav>
                </div>
            </HeaderDiv>
            <Outlet/>
        </>
    );
}