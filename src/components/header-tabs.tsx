'use client';

import { AppDispatch, RootState } from '@/redux/store';
import { changeCurrentTtab } from '@/redux/utilSlice';
import { useDispatch, useSelector } from 'react-redux';

const HeaderTabs = () => {
    const { currentTab } = useSelector((s: RootState) => s.util);
    const dispatch: AppDispatch = useDispatch();

    return (
        <div className="flex items-center space-x-4 text-lg font-bold">
            <h6
                className={`hover:opacity-80 cursor-pointer ${
                    currentTab === 'country' &&
                    'px-4 py-3 rounded-lg shadow-md text-slate-200 bg-slate-800'
                }`}
                onClick={() => dispatch(changeCurrentTtab('country'))}
            >
                Country
            </h6>
            <h6
                className={`hover:opacity-80 cursor-pointer ${
                    currentTab === 'cities' &&
                    'px-4 py-3 rounded-lg shadow-md text-slate-200 bg-slate-800'
                }`}
                onClick={() => dispatch(changeCurrentTtab('cities'))}
            >
                Cities
            </h6>
        </div>
    );
};

export default HeaderTabs;
