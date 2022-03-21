import React from "react";
import "./App.css";
//const intialState = [{ id: Date.now(), todo: "my tasks" }];
const intialState = [{ id: Date.now(), todo: "my tasks" }];
const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "delete":
      return state.filter((todos) => {
        return todos.id !== action.payload.id;
      });

    default:
      throw new Error();
  }
};
function App() {
  const [state, despachfn] = React.useReducer(reducer, intialState);
  const [todo, setTodo] = React.useState("");
  console.log(todo);
  const Handler = (e) => {
    setTodo(e.target.value);
  };
  const todoSubmit = (e) => {
    e.preventDefault();
    const taskTodo = {
      id: Date.now(),
      todo,
    };
    setTodo("");
    despachfn({ type: "add", payload: taskTodo });
  };
  return (
    <div className="contactform">
      <h1>My EveryDay Task</h1>
      <form onSubmit={todoSubmit}>
        <input
          type="text"
          placeholder="Enter task ..........."
          value={todo}
          onChange={Handler}
        />
        <button>Submit Todo</button>
      </form>

      <div className="todo-List-Item">
        <ul>
          {state.map((tasks) => {
            return (
              <li key={tasks.id}>
                <h2>{tasks.todo}</h2>
                <button
                  onClick={() =>
                    despachfn({ type: "delete", payload: { id: tasks.id } })
                  }
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;

// import React, { useReducer } from "react";
// import "./App.css";
// const intialState = [{ id: Date.now(), task: "todo list" }];
// function reducer(state, action) {
//   switch (action.type) {
//     case "add":
//       return [...state, action.payload];
//     default:
//       throw new Error();
//   }
// }
// function App() {
//   const [state, despach] = useReducer(reducer, intialState);
//   const [task, setName] = React.useState("");

//   //console.log(todo);
//   const handler = (e) => {
//     setName(e.target.value);
//   };

//   const submitHandler = (e) => {
//     e.preventDefault();
//     const todos = {
//       id: Date.now(),
//       task,
//     };
//     setName("");
//     despach({ type: "add", payload: todos });
//   };
//   return (
//     <div className="contactform">
//       <form onSubmit={submitHandler}>
//         <input
//           placeholder="ToDolist"
//           type="text"
//           value={task}
//           onChange={handler}
//         />

//         <button>Submit TODU</button>
//       </form>

//       <div>
//         <ul>
//           {state.map((todos) => {
//             return (
//               <li key={todos.id}>
//                 <h2>{todos.task}</h2>
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import "./App.css";
// const intialState = [
//   {
//     id: Date.now(),
//     name: "luul",
//     email: "test1@gmail.com",
//   },
// ];
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "add":
//       return [...state, action.payload];
//     case "delete":
//       return state.filter((contacts) => {
//         return contacts.id !== action.payload.id;
//       });
//     default:
//       return state;
//   }
// };
// function App() {
//   const [state, DispatcherFn] = React.useReducer(reducer, intialState);
//   const [contact, setContact] = React.useState({ name: "", email: "" });
//   console.log(state);

//   const contactHandler = (event) => {
//     setContact((prevContact) => {
//       return {
//         ...prevContact,
//         [event.target.name]: event.target.value,
//       };
//     });
//   };

//   const SubmitHandler = (event) => {
//     event.preventDefault();
//     const contacts = {
//       id: Date.now(),
//       name: contact.name,
//       email: contact.email,
//     };
//     DispatcherFn({ type: "add", payload: contacts });
//     //console.log(contact);
//   };
//   // const deleteHandler = () => {
//   //   DispatcherFn({ type: "delete", payload: { id: contact.id } });
//   // };

//   return (
//     <div className="contactform">
//       <form onSubmit={SubmitHandler}>
//         <input
//           name="name"
//           placeholder="name"
//           value={contact.name}
//           onChange={contactHandler}
//         />
//         <input
//           name="email"
//           placeholder="email"
//           value={contact.email}
//           onChange={contactHandler}
//         />
//         <button>Add Contact</button>
//       </form>
//       <div>
//         <ul>
//           {state.map((contactNames) => {
//             return (
//               <li key={contactNames.id}>
//                 <h1>{contactNames.name}</h1>
//                 <h1>{contactNames.email}</h1>
//                 <div>
//                   <button
//                     onClick={() =>
//                       DispatcherFn({
//                         type: "delete",
//                         payload: { id: contactNames.id },
//                       })
//                     }
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default App;

///////////////////////////
// function App() {
//   const [contact, setContact] = React.useState({
//     name: "",
//     email: "",
//     comments: "",
//   });
//   //console.log(contact);
//   const ContactHandler = (event) => {
//     setContact((prevContact) => {
//       return {
//         ...prevContact,
//         [event.target.name]: event.target.value,
//       };
//     });
//   };

//   const submitHandler = (e) => {
//     e.preventDefault();
//     console.log(contact);
//   };

//   // value={contact.name} this makes the input controled by react not by input /// controlled component

//   return (
//     <div className="contactform">
//       <form onSubmit={submitHandler}>
//         <input
//           type="text"
//           name="name"
//           placeholder="name"
//           onChange={ContactHandler}
//           value={contact.name}
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="email"
//           onChange={ContactHandler}
//           value={contact.email}
//         />

//         <textarea
//           name="comments"
//           value={contact.comments}
//           placeholder="comments"
//           onChange={ContactHandler}
//         />
//         <button>SUBMIT</button>
//         <button>Add Contact</button>
//       </form>
//     </div>
//   );
// }

// export default App;

//////////////////////////////////////////////// REDUCE HOOK
// const intialState = 0;
// const reducer = (state, action) => {
//   if (action.type === "increment") {
//     return state + 1;
//   } else if (action.type === "decrement") {
//     return state - 1;
//   } else {
//     return new Error();
//   }
// };

// function App() {
//   const [state, DispatcherFn] = React.useReducer(reducer, intialState);

//   const incrementHandler = () => {
//     //setCount((prevcount) => prevcount + 1);
//     DispatcherFn({ type: "increment" });
//   };
//   const decremntHandler = () => {
//     //setCount((count) => count - 1);
//     DispatcherFn({ type: "decrement" });
//   };

//   return (
//     <div className="App">
//       <h1>counter demo</h1>
//       <button onClick={incrementHandler}>increament</button>
//       <button onClick={decremntHandler}>decrement</button>
//       <div>{state}</div>
//     </div>
//   );
// }

/**
 * 
 * 
 * 
 * 
 * ////////////////////////////FORM IN REACTS
 * import React from "react"

export default function Form() {
    const [formData, setFormData] = React.useState(
        {
            firstName: "", 
            lastName: "", 
            email: "", 
            comments: "", 
            isFriendly: true,
            employment: "",
            favColor: ""
        }
    )
    
    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    
    function handleSubmit(event) {
        event.preventDefault()
        // submitToApi(formData)
        console.log(formData)
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
            />
            <input
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />
            <textarea 
                value={formData.comments}
                placeholder="Comments"
                onChange={handleChange}
                name="comments"
            />
            <input 
                type="checkbox" 
                id="isFriendly" 
                checked={formData.isFriendly}
                onChange={handleChange}
                name="isFriendly"
            />
            <label htmlFor="isFriendly">Are you friendly?</label>
            <br />
            <br />
            
            <fieldset>
                <legend>Current employment status</legend>
                <input 
                    type="radio"
                    id="unemployed"
                    name="employment"
                    value="unemployed"
                    checked={formData.employment === "unemployed"}
                    onChange={handleChange}
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />
                
                <input 
                    type="radio"
                    id="part-time"
                    name="employment"
                    value="part-time"
                    checked={formData.employment === "part-time"}
                    onChange={handleChange}
                />
                <label htmlFor="part-time">Part-time</label>
                <br />
                
                <input 
                    type="radio"
                    id="full-time"
                    name="employment"
                    value="full-time"
                    checked={formData.employment === "full-time"}
                    onChange={handleChange}
                />
                <label htmlFor="full-time">Full-time</label>
                <br />
            </fieldset>
            <br />
            
            <label htmlFor="favColor">What is your favorite color?</label>
            <br />
            <select 
                id="favColor" 
                value={formData.favColor}
                onChange={handleChange}
                name="favColor"
            >
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>
            <br />
            <br />
            <button>Submit</button>
        </form>
    )
}

 */
