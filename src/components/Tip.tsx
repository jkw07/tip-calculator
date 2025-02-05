type TipProps = {
    handleChangeTip: (value: number) => void;
    tip: number;
};


function Tip({tip, handleChangeTip}: TipProps) {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        handleChangeTip(Number(e.currentTarget.value));
    }
    return (
        <>
            <label>Select Tip %</label>
            <div className="buttons">
                <button className="tip-button" id="5-percent" value={5} onClick={handleClick}>5%</button>
                <button className="tip-button" id="10-percent" value={10} onClick={handleClick}>10%</button>
                <button className="tip-button"id="15-percent" value={15} onClick={handleClick}>15%</button>
                <button className="tip-button"id="25-percent" value={25} onClick={handleClick}>25%</button>
                <button className="tip-button"id="50-percent" value={50} onClick={handleClick}>50%</button>
                <input id="custom-input" type="number" className="custom" placeholder="Custom" value={tip} onChange={(e)=> handleChangeTip(Number(e.target.value))}/>
            </div>
        </>
    );
}

export default Tip;