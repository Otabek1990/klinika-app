         import { useState } from 'react'

function Calculator() {
    const [input, setInput] = useState('');

    const handleButtonClick = (btn: string) => {
        if (btn === 'C') {
            setInput('');
        } else if (btn === '=') {
            try {
                // Evaluate the expression safely
                setInput(eval(input).toString());
            } catch {
                setInput('Error');
            }
        } else {
            setInput((prev) => prev + btn);
        }
    };
    return (
        <>
            <div className="flex items-center justify-center h-screen bg-gray-100">
                <div className="calculator bg-white shadow-lg rounded-lg p-6">
                    <div className="display bg-gray-200 text-right text-2xl p-4 rounded mb-4">
                        {input || '0'}
                    </div>
                    <div className="buttons grid grid-cols-4 gap-4">
                        {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+', 'C'].map((btn) => (
                            <button
                                key={btn}
                                className={`p-4 text-lg font-bold rounded ${btn === '='
                                    ? 'bg-blue-500 text-white'
                                    : btn === 'C'
                                        ? 'bg-red-500 text-white'
                                        : 'bg-gray-300 text-black'
                                    } hover:bg-gray-400`}
                                onClick={() => handleButtonClick(btn)}
                            >
                                {btn}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Calculator