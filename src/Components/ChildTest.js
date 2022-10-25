import PropTypes from 'prop-types';


// const ChildTest=(props)=>{
//     console.log(props)
    const ChildTest=({name,age,tab,user,asma,handleAlert,brahim,children,show})=>{
   
    return(
        <div>
            {/* <h2>Child Component</h2>
            <h2>My name is {props.name}</h2>
            <h2>My age is {props.age}</h2>
            <h2>My country list :</h2>
            <ul>
                {
                    props.tab.map((el,i,t)=> <li key={i}>{el}</li>)
                }
            </ul>
            <h3>The user Name is : {props.user.name}</h3>
            <h3>I am from : {props.user.city}</h3> */}

            <h2>Child Component</h2>
            <h2>My name is {name}</h2>
            <h2>My age is {age}</h2>
            <h2>My country list :</h2>
            <ul>
                {
                    tab.map((el,i,t)=> <li key={i}>{el}</li>)
                }
            </ul>
            <h3>The user Name is : {user.name}</h3>
            <h3>I am from : {user.city}</h3>
            <h3>Nbr of checkpoint : {asma.checkpoint}</h3>
        
             <button onClick={handleAlert}>Alert</button>   
            
            {
                show == true &&  <button onClick={()=>brahim("Moez")}>Alert Brahim</button>
            }

            



             {
                children
             }
        </div>
    )
}

ChildTest.defaultProps ={
    name : 'Zaineb'
}

ChildTest.propTypes = {
   
    name : PropTypes.string

}

export default ChildTest