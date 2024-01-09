import React from 'react'
import { ListItem } from '../components/DynamicListItem/ListItem'

interface str {
  name: string;
}

const dynamicTestPage = () => {

  const listItems: str[] = [{name:"name"}, {name:"test"}, {name:"test name"}]
  return (
    <div className="bg-slate-800 w-full min-h-screen flex flex-col justify-center items-center">
        <div className="bg-slate-500 rounded-md p-10 flex flex-col items-center max-w-lg ">
          <ul>
            {listItems.map(item =>
              <li key={item.name}>
                <ListItem {...item} />
              </li>
              )}
          </ul>
        </div>
    </div>
  )
}

export default dynamicTestPage;