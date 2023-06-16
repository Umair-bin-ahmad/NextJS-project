import React from 'react';

const Contact = () => {
  return <>
    <h2>Contact us</h2>
    <form>
      <div class="form-group my-3">
        <label className='my-2' for="name">Name</label>
        <input class="form-control" id="name" type="text" name="Name" required />
      </div>
      <div class="form-group my-3">
        <label className='my-2' for="email">Email</label>
        <input class="form-control" id="email" type="email" name="Email" required />
      </div>
      <div class="form-group my-3">
        <label className='my-2' for="message">Message</label>
        <textarea class="form-control" id="message" name="Message" required></textarea>
      </div>
      <input class="btn btn-primary" type="submit" value="Submit" />
    </form>
  </>
}

export default Contact;