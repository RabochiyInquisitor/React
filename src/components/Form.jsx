import React, {useEffect} from 'react';
import '../styles/main.scss';
import Tree from 'react-d3-tree';


const customElement = (id) => {                   //Задаём начальный шаблон для ВСЕХ узлов дерева
    return  <foreignObject width="100" height="100">
                  <div>
                    <div className="node" style={{width: 120, height: 80, backgroundColor: "black"}}></div>
                  </div>
      </foreignObject>
  
}


const Form = () => {

   
  const data = {                                  //Объект для отрисовки
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







  /*function findTitle(node)
  {
    let counter = 0
    console.log(node.type)
    if(node.children && Object.keys(node.children).length > 0)
    {
      for(let id in node.children)
      {
        if(node.type == "problem")
        {
          node.id.style.backgroundColor == "red"
        }
        findTitle(node.children[id])
        counter++
      }
    }
  }*/



  useEffect(() => {
   const list_of_links = document.getElementsByClassName('rd3t-link')          // С 247 по 275 присваиваем элементам уникальный id
   for(let i = 0; i < list_of_links.length; i++)
   {
     list_of_links[i].id = "link" + i;
   }
   const root_node = document.getElementsByClassName('rd3t-node root_node')
   for(let i = 0; i < root_node.length; i++)
    {
      root_node[i].id = "root-node" + i;
    }
    const branch_node = document.getElementsByClassName('rd3t-node branch_node')
   for(let i = 0; i < branch_node.length; i++)
    {
      branch_node[i].id = "branch-node" + i;
    }
    const leaf_node = document.getElementsByClassName('rd3t-leaf-node branch_node')
   for(let i = 0; i < leaf_node.length; i++)
    {
      leaf_node[i].id = "leaf-node" + i;
    }
    for(let i = 0; i < leaf_node.length; i++)
    {
      leaf_node[i].id = "leaf-node" + i;
    }
    const all_nodes = document.getElementsByClassName('node')
   for(let i = 0; i < all_nodes.length; i++)
    {
      all_nodes[i].id = "unique-node" + i;
    }
    
  }, [])
   /*useEffect(() => {
    findTitle(data)
   }, [])*/
  return(

    <div id='tree'>
      <Tree                                            //отрисовываем дерево
          data={data}
          renderCustomNodeElement={customElement}
          rootNodeClassName='root_node'
          branchNodeClassName='branch_node'
          leafNodeClassName='leaf_node'
      />
    </div>
  );
 
};

export default Form;


