import React, { useState } from "react";
import '../CSSpart/style.css';

const StudentsUrl = () => {
    const [data] = useState([
        {name: "John", age: 26, course:"MERN", batch:"Octuber" },
        {name: "Deo", age: 25, course:"MERN", batch:"November" },
        {name: "Biden", age: 28, course:"MERN", batch:"Octuber" },
        {name: "Ram", age: 36, course:"MERN", batch:"September" },
        {name: "Shyam", age: 27, course:"MERN", batch:"September" },
        {name: "Rohit", age: 56, course:"MERN", batch:"January" },
        {name: "Virat", age: 30, course:"MERN", batch:"Octuber" },
        {name: "Shera", age: 25, course:"MERN", batch:"March" }
    ])
    return(
        <>
            <div className="Stufixcontent">
                <h1>Students Details......</h1>
                <button className="btn">Add new student</button>
            </div>
            <div className="tablecontainer">
                <table className="table" border="{{1px}}">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Course</th>
                            <th>Batch</th>
                            <th>Change</th>
                        </tr>
                    </thead>
                   
                        {data.map((item,index) => {
                            return(
                                <tbody key={index}>            
                                    <tr>
                                        <td> {item.name} </td>
                                        <td> {item.age} </td>
                                        <td> {item.course} </td>
                                        <td> {item.batch} </td>
                                        <td className="hyperlink"> Edit </td>
                                    </tr>
                                </tbody>
                            )
                        })}
                        
                </table>
            </div>
        </>
    )
}

export default StudentsUrl;