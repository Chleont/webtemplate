import { HomeSection } from '../blogSections';
import Background from '/src/images/home-bg.png';

export function Home() {
    return (
        <HomeSection>
            <div style={{
                backgroundImage: 'url(' + Background + ')',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '80%',
                backgroundPosition: 'center 5vh'
            }} className='w-full h-full bg-green-200'>
                asdasdadsadsada
            </div>
        </HomeSection>
    );
}

export default Home;