import { useReducer, useRef } from "react";

export let App = () => { 
 

   // reducer 
   // pure function 
   let reducerFun = (state, action) => {
    switch(action.type){
       
        case "SET_NAME" : return {...state, Name : action.payload }
        case "SET_EMAIL" : return {...state, Email : action.payload }
        case "SET_AGE" : return {...state, Age : action.payload }
        case "SET_CITY" : return {...state, City : action.payload }
        
        default : return state;
    }
   };
   let nameRef = useRef();
   let emailRef = useRef();
   let ageRef = useRef();
   let cityRef = useRef();
   let [store, dispatch] = useReducer(reducerFun,{ Name : "Default Name", Email : "abc@default.com", Age : 1 ,City : "Default City"})

   const handleFormSubmit = () => {
    // Check if all input fields are filled
    if (nameRef.current.value &&emailRef.current.value &&ageRef.current.value &&cityRef.current.value)
     {
      dispatch({ type: "SET_NAME", payload: nameRef.current.value });
      dispatch({ type: "SET_EMAIL", payload: emailRef.current.value });
      dispatch({ type: "SET_AGE", payload: ageRef.current.value });
      dispatch({ type: "SET_CITY", payload: cityRef.current.value });
    } 
    else {
      alert("Please fill in all fields before submitting.");
    }
  };

    return <div className="container mt-5">
     
    <h1 className="mb-4">Use Reducer UserForm</h1>

    <form>
    <div className="mb-3">
      <input className="form-control" ref={nameRef} type="text" placeholder="Enter your Name"  required/><br/>
      
    </div>

    <div className="mb-3">
      <input className="form-control" ref={emailRef} type="email" placeholder="Enter your Email" required /><br/>
      
    </div>

    <div className="mb-3">
      <input className="form-control" ref={ageRef} type="number" placeholder="Enter your Age" required/><br/>
      
    </div>

    <div className="mb-3">
      <input className="form-control" ref={cityRef} type="text" placeholder="Enter your City" required/>
      <br/>
      
    </div>

    <div>
        <button
          className="btn btn-primary"
          onClick={handleFormSubmit}
        >
          Submit Form
        </button>
      </div>
    

    <div >
      <h3>Name : { store.Name }</h3>
      <h3>Email : { store.Email }</h3>
      <h3>Age : { store.Age }</h3>
      <h3>City : { store.City }</h3>
    </div>
    </form>
    
  </div>
  
}

