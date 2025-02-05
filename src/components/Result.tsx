type ResultProps = {
    bill: number;
    tip: number;
    people: number;
    handleReset: () => void;
};


function Result({ bill, tip, people, handleReset }: ResultProps) {
    const tipAmount: number = Math.round(bill * (tip / 100) / people);
    const totalAmount: number = Math.round((bill + bill * (tip / 100)) / people);
    return (
        <div className="results">
            <div className="results_text">
                <div className="sum sum--first">
                    <div className="amount_text">
                        <p className="Subtitle_results">Tip Amount</p>
                        <p className="p_results">/ person</p>
                    </div>
                    <p className="total_amount" id="tip_amount">{tipAmount}</p>
                </div>
                <div className="sum">
                    <div className="amount_text">
                        <p className="Subtitle_result">Total</p>
                        <p className="p_results">/ person</p>
                    </div>
                    <p className="total_amount" id="total">{totalAmount}</p>
                </div>
            </div>
            <button className="reset" id="reset" onClick={handleReset}>RESET</button>
        </div>
    );
    }

    export default Result;