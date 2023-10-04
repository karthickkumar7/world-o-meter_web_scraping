'use client';

import { AppDispatch } from '@/redux/store';
import { setSearchTerm } from '@/redux/utilSlice';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const SearchCountriesInput = () => {
    const [srchTerm, setSrchTerm] = useState('');
    const dispatch: AppDispatch = useDispatch();

    const handler = () => {
        dispatch(setSearchTerm(srchTerm));
    };

    return (
        <>
            <input
                className="rounded-lg px-4 py-3 bg-slate-800 border-none outline-none focus:outline-slate-500 focus:shadow-lg lg:focus:w-[400px] duration-300"
                placeholder="Search countries..."
                value={srchTerm}
                onChange={(e) => setSrchTerm(e.target.value)}
            />
            <button onClick={handler}>srch</button>
        </>
    );
};

export default SearchCountriesInput;
