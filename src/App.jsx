import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react';

function App() {
  const[data, setData] = useState([]);
  const [filter, setFilter] = useState("");

  const filteredData = useMemo(() => {
    if(filter.length === 0) return data;

    return data.filter((student) => {
      const condition = student.name.toLowerCase().includes(filter.toLowerCase()|| student.nim.includes(filter.toLowerCase()));

      return condition;
    });
  }, [data,filter]);

  const programList = useMemo(() => {
    const list = data.map((student) => student.studyProgram)
    return [...new Set(list)];
  }, [data])

  const fetchData = async () => {
    const {data : studentData} = await axios.get("/students.json");
    setData(studentData);

    // console.log(data)
  }

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    // console.log(e.target.value);
  }

  // useEffect(() => {
  //   console.log("Filter here : ");
  // },[filter]);

  useEffect(() => {
    fetchData();
    
    return ( () => {
      console.log("component unmounted")
    })
  }, []);

  const handleClick = () => {
    alert('Clicked');
  };

  return (
    <div>
      <h1>Ave's list of future accomplices</h1>
      <input type="text" value={filter} onChange={handleFilterChange}/>
      <select name="" id="">
        <option value=""></option>
        {
          programList.map((program, i) = > {
            option
          })
        }
      </select>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>NIM</th>
            <th>Study Program</th>
            <th>Addition Data</th>

          </tr>
        </thead>
        <tbody>
          {
            filteredData.map((student, i) => {
              return (
                <tr>
                  <td>{student.name}</td>
                  <td>{student.nim}</td>
                  <td>{student.studyProgram}</td>
                  <td>{student.additionalData ? JSON.stringify(student.additionalData) : ''}</td>
                  <td>
                    <button>View</button>
                  </td>
                </tr>
              )
              
              
            })
          }
        </tbody>
      </table>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default App;
