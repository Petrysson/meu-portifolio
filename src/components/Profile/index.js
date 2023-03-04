import photo from '../../assets/techs/WhatsApp Image 2023-03-03 at 21.17.22.jpeg'
import './Profile.css'
export function Profile(){
    return(
        <figure>
            <img src={ photo } alt='imagem do petrysson' />
            <figcaption>Richard Petrysson correia da silva</figcaption>
        </figure>
    )
}