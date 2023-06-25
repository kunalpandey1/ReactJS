// import './App.css';
// import React from 'react'
// import { Table } from 'react-bootstrap'

// function App() {

//   const users = [
//     {
//       name: 'Anil', email: 'anil@test.com', address: [
//         { hm: '101', city: 'Noida', country: 'India' },
//         { hm: '10', city: 'Gurgaon', country: 'India' },
//         { hm: '23', city: 'Noida', country: 'India' },
//         { hm: '45', city: 'Delhi', country: 'India' },
//       ]
//     },

//     {
//       name: 'Burce', email: 'bruce@test.com', address: [
//         { hm: '101', city: 'Noida', country: 'India' },
//         { hm: '10', city: 'Gurgaon', country: 'India' },
//         { hm: '23', city: 'Noida', country: 'India' },
//         { hm: '45', city: 'Delhi', country: 'India' },
//       ]
//     },

//     {
//       name: 'Peter', email: 'peter@test.com', address: [
//         { hm: '101', city: 'Noida', country: 'India' },
//         { hm: '10', city: 'Gurgaon', country: 'India' },
//         { hm: '23', city: 'Noida', country: 'India' },
//         { hm: '45', city: 'Delhi', country: 'India' },
//       ]
//     },

//     {
//       name: 'Sam', email: 'sam@test.com', address: [
//         { hm: '101', city: 'Noida', country: 'India' },
//         { hm: '10', city: 'Gurgaon', country: 'India' },
//         { hm: '23', city: 'Noida', country: 'India' },
//         { hm: '45', city: 'Delhi', country: 'India' },
//       ]
//     }
//   ]
//   return (
//     <div className="App">
//       <h1>List with Nested Array</h1>
//       <Table variant="dark"  >
//         <tbody>
//           <tr>
//           <td>S.N</td>
//             <td>Name</td>
//             <td>Email</td>
//             <td>Address</td>
//           </tr>
//           {
//             users.map((item,i)=>
//             <tr key={i}>
//                <td>{i+1}</td>
//             <td>{item.name}</td>
//           <td>{item.email}</td>
//             <td>
//               {/*  */}
//               <Table variant="dark"  >
//         <tbody>
//               {
//                 item.address.map((data)=>

//                 <tr>
//                   <td>{data.hm}</td>
//                   <td>{data.city}</td>
//                   <td>{data.country}</td>
//                 </tr>
//                 )
//               }
//               </tbody>
//               </Table>
//               {/*  */}
//             </td>
//           </tr>
//           )
//           }
//         </tbody>
//       </Table>

//     </div>
//   );
// }

// export default App;


import React from 'react';
import {CommonContext} from './Components/CommonContext';
import Main from './Components/Main'
import UpdateButton from './Components/UpdateButton';
import Header from './Components/Header';
import Footer from './Components/Footer';
class App extends React.Component{

     
    constructor(){
        super();
       this.updateColor=(color_ko_update_karo)=>{
            this.setState({
                color:color_ko_update_karo
             });
           }
       this.state ={
        color:"green",
        updateColor:this.updateColor
       }

    }
    render(){
        return (
        <CommonContext.Provider value={this.state}>
            <Header/>           
            <h1>Complete and easy example of Context API</h1>
            <Main/>
            <UpdateButton/>
            <Footer/>
        </CommonContext.Provider>
        );
    }
}

export default App;