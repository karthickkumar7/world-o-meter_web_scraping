'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchCountriesInput = () => {
    const [srchTerm, setSrchTerm] = useState('');
    const { push } = useRouter();

    const handler = () => {
        push(`/?country=${srchTerm.toLowerCase()}`);
    };

    return (
        <div className="w-full lg:w-[40%] mt-8 lg:mt-0 space-x-2 flex items-center justify-center lg:justify-end">
            <input
                className="rounded-lg px-4 py-3 bg-slate-800 border-none outline-none focus:outline-slate-500 focus:shadow-lg lg:focus:w-[100%] duration-300"
                placeholder="Search countries..."
                value={srchTerm}
                onChange={(e) => setSrchTerm(e.target.value)}
            />
            <button className="ml-2 text-4xl lg:text-2xl" onClick={handler}>
                <AiOutlineSearch />
            </button>
        </div>
    );
};

export default SearchCountriesInput;
