type BillProps = {
    handleChangeBill: (e: React.ChangeEvent<HTMLInputElement>) => void;
    bill: number;
};

export const Bill = ({ handleChangeBill, bill }: BillProps) => {
    return (
        <>
            <label htmlFor="bill">Bill</label>
            <input type="number" id="bill" className="bill" value={bill} onChange={handleChangeBill} required/>
        </>
    );
}
