import { Card } from './Card'
import './CardsContainer.css'

import HtmlLogo from '../../assets/techs/html-logo.png'
import cssLogo from '../../assets/techs/css-logo.png'
import jsLogo from '../../assets/techs/js-logo.png'
import reactLogo from '../../assets/techs/react-logo.png'

export function CardsContainer(){
    return(
        <div className="techs">
            <h2>👩‍💻 Tecnologias</h2>

            <main className="cards-container">
                <Card image={HtmlLogo} alt='logo do html' />
                <Card image={cssLogo} alt='logo do css' />
                <Card image={jsLogo} alt='logo do JavaScript' />
                <Card image={reactLogo} alt='logo do react' />
            </main>
        </div>
    )
}