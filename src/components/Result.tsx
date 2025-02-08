type ResultProps = {
    bill: number;
    tip: number;
    people: number;
    handleReset: () => void;
};


export const Result = ({ bill, tip, people, handleReset }: ResultProps) => {
    const tipAmount: number = Math.round(bill * (tip / 100) / people * 100) / 100;
    const totalAmount: number = Math.round((bill + bill * (tip / 100)) / people * 100) / 100;
    return (
        <div className="results">
            <div className="results-text">
                <div className="sum sum-first">
                    <div className="amount-text">
                        <p>Tip Amount</p>
                        <p className="p-results">/ person</p>
                    </div>
                    <p className="total-amount" id="tip-amount">{tipAmount}</p>
                </div>
                <div className="sum">
                    <div className="amount-text">
                        <p>Total</p>
                        <p className="p-results">/ person</p>
                    </div>
                    <p className="total-amount" id="total">{totalAmount}</p>
                </div>
            </div>
            <button className="reset" id="reset" onClick={handleReset}>RESET</button>
        </div>
    );
    }
