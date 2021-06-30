import React from 'react'
class c1 extends React.Component{
 render() {
   return (
     <button className="square" onClick={() => alert('click')}>
       c1
     </button>
   );
 }
}
export default c1