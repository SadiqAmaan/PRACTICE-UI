import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
      <main>
        <h1>CONTACT US</h1>
        <form id='form'>
            <div className="form">
                <label htmlFor="">Name</label>
                <input type="text" placeholder='Enter Your Name' />
            </div>
            <div className="form">
                <label htmlFor="">E-Mail</label>
                <input type="email" placeholder='Enter Your email' />
            </div>
            <div className="form">
                <label htmlFor="">Query</label>
                <textarea cols="30" rows="10" placeholder='Enter Your Query'></textarea>
            </div>
            <button className='btn' type='submit'>SUBMIT NOW</button>
        </form>
      </main>
    </div>
  )
}

export default Contact
