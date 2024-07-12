import Formulario from './styles'
import { FormEvent, useState } from 'react'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <Formulario onSubmit={aoEnviarForm}>
      <input
        placeholder="Front-end, fullstack, node, design"
        type="search"
        onChange={(e) => setTermo(e.target.value)}
      />
      <button>Pesquisar</button>
    </Formulario>
  )
}

export default FormVagas
