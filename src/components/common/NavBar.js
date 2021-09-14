import styles from './NavBar.module.css'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
    // const router = useRouter()
    const MenuList = require('../../db/menu.json')

    function renderMenu() {
        return Object.keys(MenuList).map( key => {
            return (
                <div key={ key }>
                    <NavLink exact to={ MenuList[key] } activeClassName={ styles.active }>{ key }</NavLink>
                </div>
            )
        })
    }

    return (
        <nav>
            { renderMenu() }
        </nav>
    )
}