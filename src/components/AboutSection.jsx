import AboutImage from '../assets/images/about-image.png'

export default function About() {
    return (
        <section id='About'>
            <h1>About Me</h1>
            <p>Hello! I’m Sylvia, a frontend developer with eight years of experience in UI development. I am from Cairo, Egypt but currently I live in Stockholm, Sweden. </p>
            <p>This is my website as I want to showcase my work that I have done till now. Please check all details below and I will be super happy to hear from you soon!</p>
            <img src={AboutImage} alt="A girl playing yoga." />
        </section>
    );
}