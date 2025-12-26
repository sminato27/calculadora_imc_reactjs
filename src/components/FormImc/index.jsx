import styles from './FormImc.module.css'

function FormImc({ altura, peso, onAlturaChange, onPesoChange }) {
  const handleAltura = (e) => {
    const v = e.target.value.replace(',', '.')
    onAlturaChange(v === '' ? '' : Number(v))
  }
  const handlePeso = (e) => {
    const v = e.target.value.replace(',', '.')
    onPesoChange(v === '' ? '' : Number(v))
  }

  return (
    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
      <div className={styles.fieldGroup}>
        <label htmlFor="altura">Altura (m)</label>
        <input
          id="altura"
          name="altura"
          inputMode="decimal"
          type="number"
          min="0"
          step="0.01"
          placeholder="1.75"
          value={altura}
          onChange={handleAltura}
        />
      </div>
      <div className={styles.fieldGroup}>
        <label htmlFor="peso">Peso (kg)</label>
        <input
          id="peso"
          name="peso"
          inputMode="decimal"
          type="number"
          min="0"
          step="0.1"
          placeholder="70.5"
          value={peso}
          onChange={handlePeso}
        />
      </div>
    </form>
  )
}

export default FormImc
