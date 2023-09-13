/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */


const Cart = ({selectedActors,remaing,totalCost}) => {
    console.log(selectedActors)
    return (
        <div>
            <h1>Total Actors:{selectedActors.length}</h1>
            <h5>Reaming:{remaing}</h5>
            <h4>TotalCost:{totalCost}</h4>
            {
                selectedActors.map((actor)=>(
                   <ul className="show-list">
                    <li><img src={actor.image} alt="" /></li>
                     <li key={actor.id}>{actor.name}</li>
                   </ul>
                ))
            }
        </div>
    );
};

export default Cart;