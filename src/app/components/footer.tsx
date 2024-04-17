import github from '../assets/github.png';

export const Footer = () => {
    return (
        <footer>
            <p className="dev">Desenvolvido por Gabriel Sabatini
                <a href="https://github.com/gabsabatini" target="_blank">
                    <img src={github.src} />
                </a>
            </p>
        </footer>
    );
}