import styles from './ResultTable.module.css'

const RANGES = [
  { label: 'Magreza', min: 0, max: 18.49 },
  { label: 'Normal', min: 18.5, max: 24.99 },
  { label: 'Sobrepeso', min: 25, max: 29.99 },
  { label: 'Obesidade I', min: 30, max: 34.99 },
  { label: 'Obesidade II', min: 35, max: 39.99 },
  { label: 'Obesidade III', min: 40, max: Infinity },
]

function ResultTable({ imc, classificacao }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.resultBox}>
        <div>
          <span className={styles.resultLabel}>IMC:</span>
          <span className={styles.resultValue}>{imc !== '' ? imc : '--'}</span>
        </div>
        <div>
          <span className={styles.resultLabel}>Classificação:</span>
          <span className={styles.resultBadge} data-empty={classificacao === ''}>
            {classificacao || '—'}
          </span>
        </div>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Classificação</th>
            <th>IMC</th>
          </tr>
        </thead>
        <tbody>
          {RANGES.map((r) => {
            const isActive = classificacao === r.label && imc !== ''
            return (
              <tr key={r.label} className={isActive ? styles.active : undefined}>
                <td>{r.label}</td>
                <td>
                  {r.max === Infinity
                    ? `${r.min.toFixed(1)} ou mais`
                    : `${r.min.toFixed(1)} – ${r.max.toFixed(1)}`}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ResultTable
