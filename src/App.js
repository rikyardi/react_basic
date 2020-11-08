import React, {Component} from 'react';
import './App.css';
import { Card } from './components'
import { Counter } from './container'

// function

class App extends Component{
  state = {
    data : [
      {
        produk : "Camera Canon",
        img : "https://cdn.shopify.com/s/files/1/0070/7032/files/camera_56f176e3-ad83-4ff8-82d8-d53d71b6e0fe.jpg?v=1527089512",
        harga : "20",
        desc : "Camera Canon MH370",
        diskon : "10"
      },{
        produk : "Camera Canon",
        img : "https://cdn.shopify.com/s/files/1/0070/7032/files/camera_56f176e3-ad83-4ff8-82d8-d53d71b6e0fe.jpg?v=1527089512",
        harga : "20",
        desc : "Camera Canon MH370",
        diskon : "15"
      },{
        produk : "Camera Canon",
        img : "https://cdn.shopify.com/s/files/1/0070/7032/files/camera_56f176e3-ad83-4ff8-82d8-d53d71b6e0fe.jpg?v=1527089512",
        harga : "20",
        desc : "Camera Canon MH370",
        diskon : "20"
      }
    ],
    number : 0
  } 

  handleOnCounterChanger = (newValue) =>{
    this.setState({
      number : newValue
    })
  }

  render(){
    return(
      <div>
       <h1>List Product</h1>

       <div className="flex-container">
         {
           this.state.data.map((data) =>{
             return(
               <Card 
                produk = {data.produk}
                img = {data.img}
                harga = {data.harga}
                desc = {data.desc}
                >
                  <strong style={{color:'red'}}>{data.diskon}$ OFF</strong>
                </Card>
             )
           })
         }
        </div>
        <h1>Counter {this.state.number}</h1>
        <Counter 
          CounterChanger={(val) => this.handleOnCounterChanger(val)}
        />
        </div>
        
    )
  }

}
// function App() {
//   return (
//     <div>
//       <h1>List Product</h1>
//       <div className="flex-container">
//         <Card 
//           produk = "Camera Canon"
//           img = "https://cdn.shopify.com/s/files/1/0070/7032/files/camera_56f176e3-ad83-4ff8-82d8-d53d71b6e0fe.jpg?v=1527089512"
//           harga = "20"
//           desc = "Camera Canon MH370"
//         />
//         <Card 
//           produk = "Camera Canon"
//           img = "https://cdn.shopify.com/s/files/1/0070/7032/files/camera_56f176e3-ad83-4ff8-82d8-d53d71b6e0fe.jpg?v=1527089512"
//           harga = "15"
//           desc = "Camera Canon MH100"
//         />
//         <Card 
//           produk = "Camera Canon"
//           img = "https://cdn.shopify.com/s/files/1/0070/7032/files/camera_56f176e3-ad83-4ff8-82d8-d53d71b6e0fe.jpg?v=1527089512"
//           harga = "10"
//           desc = "Camera Canon MH300"
//         />
//       </div>
//     </div>
//   );
// }

export default App;
