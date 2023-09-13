/* eslint-disable react/jsx-key */

import { useEffect, useState } from 'react';

import './Home.css'
import Cart from '../Cart/Cart';
const Home = () => {
 const [allActors,setAllActor]=useState([]);
 const [selectedActors,setSelectedActors]=useState([])
 const [remaing,setReming]=useState(0)
 const  [totalCost,setTotalCost]=useState(0)
useEffect(()=>{
fetch("data.json")
.then(res=>res.json())
.then(data=>setAllActor(data))
},[])

const handleSelectActor=(actor)=>{
  const isExist=selectedActors.find((iteam)=>iteam.id==actor.id);
  let count=actor.salary;
if (isExist){
 return alert('alrady booked this person');
}
else{

selectedActors.forEach((item) => {
  count =count+item.salary;
});

const totalRwmaing=20000-count;

if(count>20000){
 return alert('taka shes ');
}else{
  setTotalCost(count);
setReming(totalRwmaing);

setSelectedActors([...selectedActors,actor]);
}

}
};
// console.log(selectedActors);
// console.log(allActors);

    return (
        <div className="container">
          <div className="card-container">
            {/*card  */}
         { allActors.map(actor =>(
             <div key={actor.id} className="card">
          <img className='photo' src={actor.image} alt="" />
          <div>
          <h2>{actor.name}</h2>
          <p><small>Lorem ipsum dolor sit amet consectetur, 
            adipisicing elit. Tempore repudiandae sapiente magni.</small></p>
        </div>
        <div className="info">
          <p>salerry:{actor.salary} $</p>
          <p>{actor.role}</p>
        </div>
        <div>
          <button onClick={()=>handleSelectActor(actor)} 
          className='button-select'>Select</button>
        </div>
        </div>))
         }
         


        </div>

        {/* cart */}
<div className="cart">
<Cart  selectedActors={selectedActors} remaing={remaing} totalCost={totalCost}></Cart>

</div>

        </div>
    );
};

export default Home;