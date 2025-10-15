import React from 'react'

const User = ({name,department,skills,games})=>{
  return (
    <div>
         <h1>I am {name} from {department}</h1>
         <ol>
            <h1>Skills</h1>
            {skills.map((skill)=>(
                <li>{skill}</li>
            ))}
         </ol>
         <ol>
            <h1>My favourite games</h1>
            {games.map((game)=>(
                <li>{game}</li>
            ))}
         </ol>
    </div>
  )
}

export default User
