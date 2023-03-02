import { SocialLink } from "./SocialLink"
import './Header.css'
export function Header(){
    return(
        <header>
            <h1 className="logo">Dev.PETRYSSON</h1>

            <nav className="navigation">
                <SocialLink url="https://github.com/Petrysson"
                 icon="bi bi-github" />

                <SocialLink url="https://www.instagram.com/r.petrysson/"
                 icon="bi bi-instagram" />

                <SocialLink url="https://www.facebook.com/petrysson.silva.7"
                 icon="bi bi-facebook" />
            </nav>
        </header>
    )
}
