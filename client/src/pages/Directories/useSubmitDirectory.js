import { useMutation, useQueryClient } from 'react-query'

const useSubmitDirectory = () => {
  const URL = 'http://localhost:5000/api/directories'
  const OPTIONS = { method: 'POST', headers: { 'Content-Type': 'application/json' } }

  const queryClient = useQueryClient()

  const post = async data => {
    const response = await fetch(URL, { ...OPTIONS, body: JSON.stringify(data) })

    if (!response.ok) throw new Error('Erro when creating new directory', response)
  }

  const { mutate } = useMutation(post, {
    onSuccess: () => queryClient.invalidateQueries('directories'),
  })

  const submit = data => mutate(data)
  return submit
}

export default useSubmitDirectory
