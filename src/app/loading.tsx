import { PiSpinnerGap } from 'react-icons/pi';

const loading = () => {
    return (
        <div className="w-screen h-screen bg-gradient-to-b from-blue-600 to-purple-600 flex items-center justify-center">
            <PiSpinnerGap className="text-4xl animate-spin text-white" />
        </div>
    );
};

export default loading;
