import datas from './data'
import { useState } from 'react'

const App = () => {
  const [birthdays, setBirthdays] = useState(datas)

  function handleClick() {
    setBirthdays((currentState) => {
      return []
    })
  }

  return (
    <main>
      <div className="container">
        <h3>{`${birthdays.length} Birthdays Today`}</h3>
        {birthdays.map((birthday) => {
          const { image, name, age, id } = birthday
          return (
            <article className="person" key={id}>
              <img src={image} alt={`Image of ${name}`} className="img" />
              <div>
                <h4>{name}</h4>
                <p>{age} years</p>
              </div>
            </article>
          )
        })}
        <button type="button" className="btn" onClick={handleClick}>
          Clear all
        </button>
      </div>
    </main>
  )
}
export default App
