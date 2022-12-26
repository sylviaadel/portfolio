import HeroImage from '../assets/images/hero-image.png'

export default function Hero() {
    return (
        <section id='Hero'>
            <img src={HeroImage} alt="A girl sitting on ground with her laptop to write codes and drinking coffee." />
            <h1>Hello, I am Sylvia a frontend developer from Egypt</h1>
        </section>
    );
}