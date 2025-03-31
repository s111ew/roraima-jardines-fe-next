function Button({ text }) {
  return(
    <button className='button-default'>
        <span className='button-text' >{ text } <img src='arrow_white.svg'></img></span>
    </button>
  )
}

export default Button