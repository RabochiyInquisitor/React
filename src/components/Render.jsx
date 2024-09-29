import React from 'react';
import Tree from 'react-d3-tree';

function customEl()
{
    return <div></div>
}


let g_node = document.getElementsByClassName('rd3t-leaf-node')


const test = {
    name: "bro",
    children: [
        {
            name: "bro-2",
        }
    ]
}


const Render = () => {
    return(
       <div style={{height: "900px", width: "900px"}}>
        <Tree data={test} renderCustomNodeElement={customEl}/>
       </div>
    )
  
}

export default Render;