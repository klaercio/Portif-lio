import { HeaderDiv } from './styles';
import { House, UserPlus, FolderOpen} from 'phosphor-react'
import { defaultTheme } from '../../styles/themes/default';
<<<<<<< HEAD
import { NavLink, Outlet } from 'react-router-dom';
=======
import { NavLink } from 'react-router-dom';
>>>>>>> ba3fdbf07a88ab8317ec278a038a745061bf76da

export default function Header() {
    return (
        <>
            <HeaderDiv>
                <div>
<<<<<<< HEAD
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
=======
                    <h1>Logo</h1>
                </div>
                <nav>
                    <NavLink to='/' title='Home'><House/>Home</NavLink>
                    <NavLink to='/AboutMe' title='AboutMe'><UserPlus/>About Me</NavLink>
                    <NavLink to='/Projects'><FolderOpen/>Projects</NavLink>
                </nav>
            </div>
        </HeaderDiv>
>>>>>>> ba3fdbf07a88ab8317ec278a038a745061bf76da
    );
}