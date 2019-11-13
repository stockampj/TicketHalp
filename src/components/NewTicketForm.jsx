import React from 'react';

function NewTicketForm(props) {
    var newTicketFormStyles = {
        backgroundColor: "red",
        fontFamily: "sans-serif",
        paddingTop: "50px"
    }

  return (
    <div style={newTicketFormStyles}>
      <form>
        <input
          type='text'
          id='names'
          placeholder='Pair Names'/>
        <input
          type='text'
          id='location'
          placeholder='Location'/>
        <textarea
          id='issue'
          placeholder='Describe your issue.'/>
        <button type='submit'>Help!</button>
      </form>
    </div>
  );
}

export default NewTicketForm;