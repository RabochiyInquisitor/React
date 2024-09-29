import React, {useEffect} from 'react';
import '../styles/main.scss';
import Tree from 'react-d3-tree';
//import '../images/рисунок.svg'

const customElement = (id) => {
    return  <foreignObject width="100" height="100">
              <html>
                <div>
                  <div className="node" style={{width: 80, height: 80, backgroundColor: "black", borderColor: "red", borderStyle: "solid", borderWidth: 5, borderRadius: 100}}></div>
                </div>
              </html>
      </foreignObject>
  
}

const Form = () => {

   const list_of_links = document.getElementsByClassName('rd3t-link')
   for(let i = 0; i < list_of_links.length; i++)
   {
     list_of_links[i].id = "link" + i
   }
   const list_of_nodes = document.getElementsByClassName('node')
   for(let i = 0; i < list_of_nodes.length; i++)
   {
     list_of_nodes[i].id = "node" + i;
   }
  const data = {
    type: "problem",
      title: "my first problem",
      description: "so it begins",
      is_optimal: true,
      children: [
        {
          name: "decision",
          type: "decision",
          title: "decision 1.1",
          description: "so it begins",
          is_optimal: false,
          values: {
            "Time": 100,
            "Money": 9,
            "Reputation": -8
          },
          children: [
            {
              type: "outcome",
              title: "outcome 1.1.1",
              description: "so it begins",
              is_optimal: true,
              probability: 0.7,
              values: {
                "Time": 100,
                "Money": 9,
                "Reputation": -8
              },
              children: []
            },
            {
              type: "outcome",
              title: "outcome 1.1.2",
              description: "so it begins",
              probability: 0.2,
              is_optimal: true,
              values: {
                "Time": 100,
                "Money": 9,
                "Reputation": -8
              },
              children: []
            },
            {
              type: "outcome",
              title: "outcome 1.1.3",
              description: "so it begins",
              probability: 0.1,
              is_optimal: true,
              values: {
                "Time": 100,
                "Money": 9,
                "Reputation": -8
              },
              children: []
            }
          ]
        },
        {
          type: "decision",
          title: "decision 1.2",
          description: "so it begins",
          is_optimal: false,
          values: {
            "Time": 100,
            "Money": 9,
            "Reputation": -8
          },
          children: [
            {
              type: "outcome",
              title: "outcome 1.2.1",
              description: "so it begins",
              is_optimal: true,
              probability: 0.7,
              values: {
                "Time": 100,
                "Money": 9,
                "Reputation": -8
              },
              children: []
            },
            {
              type: "outcome",
              title: "outcome 1.2.2",
              description: "so it begins",
              probability: 0.2,
              is_optimal: true,
              values: {
                "Time": 100,
                "Money": 9,
                "Reputation": -8
              },
              children: []
            },
            {
              type: "outcome",
              title: "outcome 1.2.3",
              description: "so it begins",
              probability: 0.1,
              is_optimal: true,
              values: {
                "Time": 100,
                "Money": 9,
                "Reputation": -8
              },
              children: []
            }
          ]
        },
        {
          type: "decision",
          title: "decision 1.3",
          description: "so it begins",
          is_optimal: true,
          values: {
            "Time": 100,
            "Money": 9,
            "Reputation": -8
          },
          children: [
            {
              type: "outcome",
              title: "outcome 1.3.1",
              description: "so it begins",
              is_optimal: true,
              probability: 0.7,
              values: {
                "Time": 100,
                "Money": 900,
                "Reputation": -8
              },
              children: []
            },
            {
              type: "outcome",
              title: "outcome 1.3.2",
              description: "so it begins",
              probability: 0.2,
              is_optimal: true,
              values: {
                "Time": 100,
                "Money": 9,
                "Reputation": -8
              },
              children: []
            },
            {
              type: "outcome",
              title: "outcome 1.3.3",
              description: "so it begins",
              probability: 0.1,
              is_optimal: true,
              values: {
                "Time": 100,
                "Money": 9,
                "Reputation": -8
              },
              children: [
                {
                  type: "problem",
                  title: "my first problem",
                  description: "so it begins",
                  is_optimal: true,
                  children: [
                    {
                      type: "decision",
                      title: "decision 1.1",
                      description: "so it begins",
                      is_optimal: false,
                      values: {
                        "Time": 100,
                        "Money": 9,
                        "Reputation": -8
                      },
                      children: [
                        {
                          type: "outcome",
                          title: "outcome 1.1.1",
                          description: "so it begins",
                          is_optimal: true,
                          probability: 0.7,
                          values: {
                            "Time": 100,
                            "Money": 9,
                            "Reputation": -8
                          },
                          children: []
                        }
                      ],
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
  }
  
  /*useEffect(function Title(data)
  {
    
    console.log(data.title)
    if(data.children && Object.keys(data.children).length > 0)
    {
      let counter = 0
      
      for(const id in data.children)
      {
        counter++
        let object = document.getElementById('node' + counter)
        if(data.title == "problem")
        {
          object.style.background = "green"
        }
        if(data.title == "decision")
        {
          object.style.background = "red"
        }
        Title(data.children[id])

      }
    }
  }, [])*/
  return(
    <div id='tree'>
      <Tree 
          data={data}
          renderCustomNodeElement={customElement}
          rootNodeClassName='root_node'
          branchNodeClassName='branch_node'
          leafNodeClassName='leaf_node'
          translate={{x: 100, y: 100}}
      />
    </div>
  );
 
};

export default Form;


