import React from "react";
import Event from './Event' 

const Calendar = () => {
  
    return (
            <div className="Calender"> 
            <table>
            <thead>
            <tr>
             <th></th>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
            </tr>
            </thead>  

            <tbody>
            <tr>
            <td className="time">8:00 AM</td>
            <Event event = 'Ghost In The Wires 👻' location='Online' color = 'blue' />
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            </tr>
            <tr>
            <td className="time">9:00 AM</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event event = 'Hacking the Hacker 👾' location='Online' color = 'blue3' />
            <td></td>
            </tr>
            <tr>
            <td className="time">10:00 AM</td>
            <td></td>
            <td></td>
            <td></td>
            <Event event = 'Build 🛠️' location='Online' color = 'blue2' />
            <td></td>
            <td></td>
            <td></td>
            </tr>
            <tr>
            <td className="time">11:00 AM</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            </tr>
            <tr>
            <td className="time">12:00 PM</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            </tr>
            <tr>
            <td className="time">1:00 PM</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            </tr>
            <tr>
            <td className="time">2:00 PM</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            </tr>
            </tbody>

            </table>
            </div>

        )

}

export default Calendar;