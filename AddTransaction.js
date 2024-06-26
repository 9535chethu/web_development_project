import React, {useState, useContext} from 'react'
import { GlobalProvider } from './Context/Globalstate';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { AddTransactionTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
        id: Math.floor(Math.random() * 10000000),
        text,
        amount: +amount
    }

    AddTransaction(newTransaction);
  }

  return (
    <div>
        <h3>Add New transaction</h3>
        <form onSubmit={onsubmit}>
            <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type='text'  value={text} onChange={(e)=>setText(e.target.value)} placeholder='Enter text..'/>
            </div>

            <div className="form-control">
                <label htmlFor="amount">Amount <br/>
                (negative - expense, positive - income) </label>
                <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)}   placeholder='Enter amount..?'/>
                <div>
                    <button className='btn'>Add transaction</button>
                </div>
            </div>
        </form>
    </div>
  )
}
