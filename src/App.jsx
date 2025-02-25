import { useTranslation } from 'react-i18next';
import { Blog } from './components/blog';

function App() {
    const { t } = useTranslation();

    return (
        <Blog />
    );
}

export default App;
