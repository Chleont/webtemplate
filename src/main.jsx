import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import './i18n.js';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from "@material-tailwind/react";
import Layout from './components/layout.jsx';

createRoot(document.getElementById('root')).render(
    <ThemeProvider>
        <BrowserRouter basename='/webtemplate'>
            <Layout>
                <App />
            </Layout>
        </BrowserRouter>
    </ThemeProvider>
);
