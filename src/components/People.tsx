type PeopleProps = {
    handleChangePeople: (e: React.ChangeEvent<HTMLInputElement>) => void;
    people: number;
};


export const People = ({people, handleChangePeople}: PeopleProps) => {
    return (
        <>
        <div className="group">
            <label htmlFor="peopleAmount">Number of People</label>
            {people === 0 ? <p className="zero"><b>Can't be zero</b></p> : null}
            </div>
            <input className="number-of-people" type="number" id="peopleAmount" name="people" min="1" value={people} required onChange={handleChangePeople}/>
        </>
    );
}
