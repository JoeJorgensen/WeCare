import React, { useEffect, useState } from "react";
import "./Calendar.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "@fullcalendar/daygrid/main.css";
import MyDonation from "../MyDonationInfo";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";
import axios from "axios";

export default function Calendar() {
  const auth = useContext(AuthContext);
  
  const [myDonations, setMyDonations] = useState([]);
  console.log("MyDonations Being Called:");
  console.log("donations", myDonations);
  const events = [{ title: "today's event", date: new Date() }];

  useEffect(() => {
    getDonations();
  }, []);

  const getDonations = async () => {
    try {
      let res = await axios.get("/api/user_donations");
      console.log(res.data)
      setMyDonations(res.data);
    } catch (error) {
      alert("error occurred getting donations data");
    }
  };

  const renderData = () => {
    return myDonations.map((c) => {
      return (
      
      {title:`${c.name} $${c.amount}`, 
      date:c.created_at}
      
      );
    });
  };

  return (
    <div className="Calendar">
      <FullCalendar
        defaultView="dayGridMonth"
        plugins={[dayGridPlugin]}
        events={renderData()}
        aspectRatio={3.25}
        timeZone="mountain standard time"
      />
   
    </div>
    
  );
};