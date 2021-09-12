import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import styles from './NavBar.module.css'

export default function NavBar() {
    const router = useRouter()
    const MenuList = {
        'Home': '/',
        'Project': '/project',
        'Work': '/work',
        'Resume': '/resume',
        'Gallery': '/gallery',
        'Timeline': '/timeline',
        'Reward': '/reward',
    }
    let activeMenu
    if (router.pathname === '/') {
        activeMenu = 'Home'
    } else if (router.pathname === '/project' || router.pathname === '/project/[id]') {
        activeMenu = 'Project'
    } else if (router.pathname === '/work') {
        activeMenu = 'Work'
    } else if (router.pathname === '/resume') {
        activeMenu = 'Resume'
    } else if (router.pathname === '/gallery') {
        activeMenu = 'Gallery'
    } else if (router.pathname === '/timeline') {
        activeMenu = 'Timeline'
    } else if (router.pathname === '/reward') {
        activeMenu = 'Reward'
    }

    function renderMenu() {
        console.log(router)
        return Object.keys(MenuList).map( key => {
            return (
                <div key={key} className={ activeMenu === key ? styles.active : undefined}>
                    <Link href={ MenuList[key] }>{ key }</Link>
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