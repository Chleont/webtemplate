import { Button } from '@material-tailwind/react';
import { useTranslation } from 'react-i18next';

function App() {
    const { t } = useTranslation();
    return (
        <>
            <Button>{t('Hello')}</Button>
        </>
    );
}

export default App;
