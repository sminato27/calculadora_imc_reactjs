import { useEffect, useMemo, useState } from 'react'
import './App.css'
import FormImc from './components/FormImc/index.jsx'
import ResultTable from './components/ResultTable/index.jsx'

function App() {
  const [altura, setAltura] = useState(() => {
    const saved = localStorage.getItem('altura')
    return saved ? parseFloat(saved) : ''
  })
  const [peso, setPeso] = useState(() => {
    const saved = localStorage.getItem('peso')
    return saved ? parseFloat(saved) : ''
  })
  const [imc, setImc] = useState('')
  const [classificacao, setClassificacao] = useState('')

  // Persist inputs
  useEffect(() => {
    if (altura !== '') localStorage.setItem('altura', String(altura))
    if (peso !== '') localStorage.setItem('peso', String(peso))
  }, [altura, peso])

  const calcularClassificacao = (valor) => {
    if (!isFinite(valor)) return ''
    if (valor < 18.5) return 'Magreza'
    if (valor < 25) return 'Normal'
    if (valor < 30) return 'Sobrepeso'
    if (valor < 35) return 'Obesidade I'
    if (valor < 40) return 'Obesidade II'
    return 'Obesidade III'
  }

  const imcCalculado = useMemo(() => {
    const a = parseFloat(altura)
    const p = parseFloat(peso)
    if (!a || !p || a <= 0 || p <= 0) return ''
    const valor = p / (a * a)
    return Number(valor.toFixed(2))
  }, [altura, peso])

  useEffect(() => {
    if (imcCalculado === '') {
      setImc('')
      setClassificacao('')
    } else {
      setImc(imcCalculado)
      setClassificacao(calcularClassificacao(imcCalculado))
    }
  }, [imcCalculado])

  return (
    <div className="app">
      <h1>Calculadora de IMC</h1>
      <FormImc
        altura={altura}
        peso={peso}
        onAlturaChange={setAltura}
        onPesoChange={setPeso}
      />
      <ResultTable imc={imc} classificacao={classificacao} />
    </div>
  )
}

export default App
