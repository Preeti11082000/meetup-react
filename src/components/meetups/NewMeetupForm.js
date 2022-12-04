import React from "react";
import { useRef } from "react";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";
function NewMeetupForm(props) {
    const titleInputref = useRef();
    const imageref =useRef();
    const addessref = useRef();
    const descriptionref= useRef();
    function submithandler(e){
        e.preventDefault();
       const enteredtitle=titleInputref.current.value;
       const enteredImage=imageref.current.value;
       const enteredAddesss=addessref.current.value;
       const entereddescription=descriptionref.current.value;

       const meetupData={
        title:enteredtitle,
        image:enteredImage,
        address:enteredAddesss,
        descriptionref:entereddescription

        
       }
   props.onAddmeetup(meetupData);


    }
  return (
    <Card>
      <form className={classes.form} onSubmit={submithandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputref} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageref} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addessref} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea required rows="5" id="description" ref={descriptionref}></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
