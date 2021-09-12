import Link from 'next/link'

export default function NavBar() {
    return (
        <nav>
            <Link href="/">Home</Link>
            <Link href="/project">Project</Link>
            <Link href="/work">Work</Link>
            <Link href="/resume">Resume</Link>
            <Link href="/gallery">Aallery</Link>
            <Link href="/timeline">Timeline</Link>
            <Link href="/reward">Reward</Link>
        </nav>
    )
}