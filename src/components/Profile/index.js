import photo from '../../assets/techs/avatar.png'
import './Profile.css'
export function Profile(){
    return(
        <figure>
            <img src={ photo } alt='imagem do petrysson' />
            <figcaption>Richard Petrysson correia da silva</figcaption>
        </figure>
    )
}