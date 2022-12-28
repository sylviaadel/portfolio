import AboutImage from '../assets/images/about-image.png'

export default function About() {
    return (
        <section id='About'>
            <div>
                <h2>About Me</h2>
                <p>Hello! I'm Sylvia, a frontend developer with eight years of experience in UI development. I am from Cairo, Egypt but currently I live in Stockholm, Sweden. </p>
                <p>This is my website as I want to showcase my work that I have done till now. Please check all details below and I will be super happy to hear from you soon!</p>
            </div>
            <img src={AboutImage} alt="A girl playing yoga and thinking about her intrests." />
        </section>
    );
}