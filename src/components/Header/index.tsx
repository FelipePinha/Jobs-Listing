import { useContext } from 'react';
import { FilterContext } from '../../contexts/FilterContext';

export const Header = () => {
    const { filter, clearFilter } = useContext(FilterContext);

    return (
        <header
            className={`h-40 relative bg-desktop-bg bg-no-repeat bg-top bg-cover bg-desaturatedDarkCyan`}
        >
            <section
                className={`absolute p-5 bottom-[-20%] left-0 right-0 mx-auto w-3/4 h-auto bg-white shadow-md rounded-md flex justify-between items-center ${
                    filter.length > 0 ? 'block' : 'hidden'
                }`}
            >
                <ul className="w-[90%] flex items-center gap-3 flex-wrap">
                    {filter.map(item => (
                        <li key={item} className="bg-lightCyan flex rounded-md">
                            <span className="p-1 text-sm text-desaturatedDarkCyan font-bold">
                                {item}
                            </span>
                            <button className="bg-desaturatedDarkCyan text-white px-2 flex items-center rounded-r-md text-sm font-bold hover:bg-veryDarkCyan transition">
                                X
                            </button>
                        </li>
                    ))}
                </ul>
                <button
                    onClick={clearFilter}
                    className="text-desaturatedDarkCyan font-bold hover:underline "
                >
                    Clear
                </button>
            </section>
        </header>
    );
};
