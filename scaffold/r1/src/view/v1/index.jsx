import React from 'react'
class v1 extends React.Component{
 render() {
   return (
     <button className="square" onClick={() => alert('click')}>
       v1
     </button>
   );
 }
}
export default v1