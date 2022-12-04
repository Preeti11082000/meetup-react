import React from 'react'
import {useNavigate} from 'react-router-dom';
import NewMeetupForm from '../components/meetups/NewMeetupForm'

function NewMeetup() {
    const navigate = useNavigate()
    function addMeetupHandler(meetupData){
    
        fetch('https://meetup-page-d1141-default-rtdb.firebaseio.com/meetups.json',
        {
            method:'POST',
            body:JSON.stringify(meetupData),
            headers:{
                'Content-Type':'application/json'
            }
        }).then(()=>{
          navigate('/');
        });

    }
  return (
    <section>
        <h1>Add New Meetup</h1>
        <NewMeetupForm onAddmeetup={addMeetupHandler} />
    </section>
  )
}

export default NewMeetup