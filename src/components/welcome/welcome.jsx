import photo from '../../../public/photo.png'

export default function Welcome() {
    return <>
        <section id='home'>
            <div>
            <h1>Welcome to my page</h1>
            <h3>I'm RAFITOARISOA Maminirina Edwino </h3>
            <h3>Web and game developper</h3>
            </div>
            <img src={photo} alt="" />
        </section>
    </>
}