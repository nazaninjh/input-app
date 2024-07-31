import { useState, useEffect } from "react"
import './App.css'
function App() {
  const [ heightOne, setHeightOne ] = useState(10);
  const [ heightTwo, setHeightTwo ] = useState(12.5);
  const [ width, setWidth ] = useState(10);
  // const scopeValue = ;
  const [ scope, setScope ] = useState((heightTwo - heightOne) / width);
  const plusFn = () => {
    setHeightOne(heightOne => heightOne + 5);
    setHeightTwo(heightTwo => heightTwo + 5);
    
  }
  const minusFn = () => {
    setHeightOne(heightOne => heightOne - 5);
    setHeightTwo(heightTwo => heightTwo - 5);
    
  }
  useEffect(() => {
    setScope((heightTwo - heightOne) / width)
  }, [heightOne, heightTwo, width]);
  return (
    <section className="form-container">
      <p className="construct-dimentions">ابعاد سازه</p>
      <form>
        <section className="height-container">
          <div className="btn-cont">
            <div className="btns">
              <button onClick={()=>plusFn()} type="button">+</button>
              <button onClick={()=>minusFn()} type="button">-</button>
            </div>
            <legend>ارتفاع</legend>
          </div>
          <div className="input-cont">
            <input type="text" value={`${heightOne * 100} سانتی متر`} disabled/>
            <span>{`متر ${heightOne}`} </span>
            <p id="scope">{`${scope * 100}%`}</p>
            <input type="text" value={`${heightTwo * 100} سانتی متر`} disabled/>
            <span>{`متر ${heightTwo}`}</span>
          </div>
          <div className="width-container">
            <legend>طول نیم قاب 1</legend>
            <div className="input-cont">
              <input type="text" value={`شروع در ردیف `} disabled/>
              <input type="text" value={`پایان در ردیف `} disabled/>
            </div>
          </div>
        </section>
        <div className="submit-btns">
          <button>پاک کردن همه</button>
          <button>ثبت و ادامه</button>
        </div>
      </form>
    </section>
  )
}

export default App
