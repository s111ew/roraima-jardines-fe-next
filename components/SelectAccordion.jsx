import styles from "../styles/SelectAccordion.module.css"

export default function SelectAccordion({ name, options, setCurrentSeason }) {
  function handleChange(value) {
    setCurrentSeason(value)
  }

  const optionElements = options.map(option => 
    <option key={option.key} value={option.value}>{option.text}</option>
  )
  return(
    <div className={styles.selectWrapper}>
      <select onChange={e => handleChange(e.target.value)} className={styles.select} name={name}>
        {optionElements}
      </select>
      <img className={styles.arrow} src="/arrow_black.svg" alt="arrow icon" />
    </div>
  )
}