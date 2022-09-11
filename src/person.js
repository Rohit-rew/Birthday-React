import react from 'react'
// import image from "../src/image.png"


export default function Person(props){
    return (
        <div className="personcontainer">
        <img src={require(`../src/images/${props.img}`)} className='proimage' />
              <div>
                <p className="name">{props.name}</p>
                <p className="age">{props.age} Years</p>
              </div>
        </div>
    )
}