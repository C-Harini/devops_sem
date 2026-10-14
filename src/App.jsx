
//to fetch from api and print
import {useState} from "react";

function App(){

  const [covid,setCovid] = useState([]);
  const [search,setSearch] = useState("");
  const [message,setMessage] = useState("");
  const [value,setValue] = useState(0);


  const fetchItems = async() =>{
    try{
      const response = await fetch("https://disease.sh/v3/covid-19/all");
      const data = await response.json();
      if(!response.ok){
        setMessage("Error in fetching data");
        return;
      }
      console.log(data);
      setCovid(data);
      setMessage("message has been loaded");
    }
    catch(error){
      setMessage("Error in loading data found by catch block ");
    }
  }
  
  const filtered=()=>{

    const ans =covid.search;
    console.log(ans);
    setValue(ans);
  }

  

  return(<>
  <div style={{"backgroundColor":"pink"}}>
  <h1>COVID DISEASE TRACKER</h1>
  <p>This displays the covid details</p>
    <button onClick ={fetchItems}>Fetch</button>
<p>{message}</p>

<div >
  <table>
    <thead>
      <tr>
        <th style={{"padding":"50px"}}>NAME</th>
        <th>VALUE</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>cases</td>
        <td>{covid.cases}</td>
       
      </tr>
      <tr>
         <td>todayCases</td>
         <td>{covid.todayCases}</td>
      </tr>
      <tr>
        <td> deaths</td>
        <td>{covid. deaths}</td>
      </tr>
      <tr>
        <td>oneTestPerPeople
</td>
<td>{covid.oneTestPerPeople
}</td>
      </tr>
      <tr>
        <td>recovered</td>
        <td>{covid.recovered}</td>
      </tr>



      </tbody>
    </table>
</div>







<input type="text" value ={search} onChange={(e)=>setSearch(e.target.value)}/>
<button onClick={filtered}>Searchhh button</button>
<p>the value is </p>
<p>{value}</p>




  </div>
  
  </>)
}
export default App;