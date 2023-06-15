import React,{useState} from 'react'
import './Form.css'
import RearCard from '../RearCard/RearCard'
import { Fronrcard } from '../FrontCard/Fronrcard'
export function Form() {
  const[error,setError]=useState(false)
  const [holderName, setHolderName] = useState('')
  const[cardNumber,setCardNumber]=useState('')
  const[expMonth,setExpMonth]=useState('')
  const[expYear,setExpYear]=useState('')
  const[cvc,setCvc]=useState('')
  let formData=null
  const handleClick=(e)=>{
    e.preventDefault()
    if(holderName.length===0 || cardNumber.length===0 || expMonth>12 || cvc.length ===0){
      setError(true)
    }
    formData={
      holderName,cardNumber,expMonth,expYear,cvc
    }
    console.log(formData)

  }
  return (
    <>
    <Fronrcard error={error} holderName={holderName} cardNumber={cardNumber} expMonth={expMonth} expYear={expYear}/>
    <form action="">
      <div className='holderName'>
        <strong>CARDHOLDER NAME</strong><br/>
        <input placeholder='e.g. Jane Appleseed' onChange={e=>setHolderName(e.target.value)}></input>
      </div>
      {error&&holderName.length<=0?<label htmlFor="">Cardholder name can't be empty</label>:''}
      
      <div className='number'>
        <strong>CARD NUMBER</strong><br/>
        <input placeholder='e.g. 1234 5678 9123 0000' onChange={e=>setCardNumber(e.target.value)}></input>
      </div>
      {error&&cardNumber.length<=0?<label htmlFor="">Card number required</label>:''}
      <div className="other">
        <div className="exp">
        <strong>EXP.DATE (MM/YY)</strong>
        <div className="expInner">
          <input className='mm' placeholder='MM' onChange={e=>setExpMonth(e.target.value)} />
          <input className='yy' placeholder='YY' onChange={e=>setExpYear(e.target.value)} />
        </div>
        </div>
        <div className="cvc">
        <strong>CVC</strong>
        <input className='cvcBox' placeholder='e.g. 123' onChange={e=>setCvc(e.target.value)} />
        {error&&cvc.length<=0?<label htmlFor="">CVC must be numeric</label>:''}
        </div>
        
      </div>
      <div>
        <button className='submitButton' onClick={handleClick}>
          CONFIRM
        </button>
      </div>
    </form>
    <RearCard cvc={cvc}/>
    </>
  )
}
