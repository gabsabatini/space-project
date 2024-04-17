"use client"

import galaxyImage from '../assets/galaxy.png';

const Header = () => {

    return (
        <header>
            <img src={galaxyImage.src} />
            <p className='header-title'>Imagens Astronomia</p>
        </header>
    );
}

export default Header;