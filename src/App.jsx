
//to fetch from api and print
import {useState} from "react";

function App(){

  const [covid,setCovid] = useState([]);
  const [search,setSearch] = useState("");
  const [message,setMessage] = useState("");
  const [value,setValue] = useState(0);
 const list=[
    {
        "name" : "updated",
        "value" :1791955913267
    },
    {
        "name" : "cases",
        "value" :704753890
    },
    {
      "name" :"deaths",
      "value" :7010681
    }
]
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
//serach function
const filtered =() =>{
  const ans = list.filter((c)=>{
     const y = c.name.includes(search);
    return y;
  })
  setValue(ans[0].value)
  console.log(ans[0].value)
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
  <tr>
    <td>todayRecovered</td>
    <td>{covid.todayRecovered}</td>
  </tr>


      </tbody>
    </table>
</div>

<input type="text" value ={search} onChange = {(e) => setSearch(e.target.value)}/>
<button onClick = {filtered} >Search</button>
<p>The value is {value}</p>


  </div>
  
  </>)
}
export default App;