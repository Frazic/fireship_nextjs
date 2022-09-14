import Link from 'next/link';
import MetaTags from '../components/Metatags';

export default function Custom404() {
    return (
        <main>
            <MetaTags title='404 page' />
            <h1>404 - That page does not seem to exist...</h1>
            <iframe
                src="https://giphy.com/embed/g01ZnwAUvutuK8GIQn"
                width="960"
                height="540"
                frameBorder="0"
                allowFullScreen>
            </iframe>
            <Link href="/">
                <button className="btn-blue">Go home</button>
            </Link>
        </main>
    );
}