import Bill from './Bill';
import Tip from './Tip';
import People from './People';
import Result from './Result';
import { useState } from 'react';

const Form = () => {
    const [bill, setBill] = useState<number>(0);
    const [tip, setTip] = useState<number>(0);
    const [people, setPeople] = useState<number>(1);  
    const handleChangeBill = (e: React.ChangeEvent<HTMLInputElement>) => {
      setBill(parseFloat(e.target.value));
    };
    const handleChangeTip = (value: number) => {
      setTip(value);
    }
    const handleChangePeople = (e: React.ChangeEvent<HTMLInputElement>) => {
      setPeople(parseFloat(e.target.value));
    };
    const handleReset = () => {
      setBill(0);
      setTip(0);
      setPeople(1);
    }
    return (
    <form className="form" id="form">
      <div className='inputs'>
        <Bill handleChangeBill={handleChangeBill} bill={bill}/>
        <Tip tip={tip} handleChangeTip={handleChangeTip}/>
        <People people={people} handleChangePeople={handleChangePeople}/>
      </div> 
      <Result bill={bill} tip={tip} people={people} handleReset={handleReset}/>
    </form>
  );
};

export default Form;