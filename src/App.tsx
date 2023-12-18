import { Header } from './components/Header';
import { Jobs } from './components/Jobs';
import { FilterProvider } from './contexts/FilterContext';
import './index.css';

function App() {
    return (
        <FilterProvider>
            <Header />
            <main>
                <Jobs />
            </main>
        </FilterProvider>
    );
}

export default App;
