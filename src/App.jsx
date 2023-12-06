import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
  return data;
}
let img_arr=imageData()

function App() {
  // code here
  return(
    <>
    <h1>kalvium gallery</h1>
    <div className='main'>
      <img src= {img_arr[0].img} className='image' alt="" />
      <img src= {img_arr[0].img} className='image' alt="" />
      <img src= {img_arr[0].img} className='image' alt="" />
      <img src= {img_arr[0].img} className='image' alt="" />



    </div>
    
    </>
    
    
  )
}

export default App;
