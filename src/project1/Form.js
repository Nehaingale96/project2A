import React, { useState } from 'react';
import './Form.css';

function Form() {
  const [selectedOption, setSelectedOption] = useState('');
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (selectedOption && firstName && lastName && (selectedOption === 'number' ? phoneNumber : email)) {
      setIsFormComplete(true);
      console.log('Form submitted:', {
        selectedOption,
        firstName,
        lastName,
        phoneNumber,
        email,
      });

      setSelectedOption('');
      setFirstName('');
      setLastName('');
      setPhoneNumber('');
      setEmail('');
    } else {
      setIsFormComplete(false);
    }
  };

  return (
    <div className='container' style={{border:'1px solid black',marginTop:'50px',padding:'20px 0'}}>
      <form onSubmit={handleSubmit} >
      <div className='container d-flex justify-content-between' >
          <div style={{width:'300px',margin:'10px auto'}} className='d-flex'>
            <label >
              {/* First Name<br /> */}
              <input
                type='text'
                value={firstName}
                placeholder='First Name'
                style={{width:'250px'}}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </label>
          </div>
          <div style={{width:'300px',margin:'10px auto'}}>
            <label>
              {/* Last Name<br /> */}
              <input
                type='text'
                value={lastName}
                placeholder='Last Name'
                style={{width:'250px'}}
                onChange={(e) => setLastName(e.target.value)}
              />
            </label>
          </div>
    </div>


      <div  className='container d-flex justify-content-between'>
        <div  style={{width:'300px',margin:'0 auto'}} className='d-flex'>
          <select value={selectedOption} onChange={handleChange} style={{width:'250px'}}  >
            <option value="">Choose option</option>
            <option value="number">Phone Number</option>
            <option value="email">Email Address</option>
          </select>
        </div>

        <div  style={{width:'300px',margin:'0 auto'}} className='d-flex'>
        {selectedOption === 'number' && (
          <div>
            <label></label>
            <input
              type='number'
              value={phoneNumber}
              placeholder='Phone No'
              style={{width:'250px'}}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
        )}
        {selectedOption === 'email' && (
          <div>
            <label></label>
            <input
              type='email'
              value={email}
              placeholder='Email Id'
              style={{width:'250px'}}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        )}
      </div>
        
       
      </div>
    </form>
    </div>
  );
}

export default Form;