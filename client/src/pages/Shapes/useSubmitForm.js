import { useMutation, useQueryClient } from 'react-query'

const useSubmitForm = () => {
  const queryClient = useQueryClient()

  const postShape = async data => {
    const response = await fetch('http://localhost:5000/api/shapes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

    if (!response.ok) throw new Error('Erro when creating new shape', response)
  }

  const { mutate } = useMutation(postShape, {
    onSuccess: () => queryClient.invalidateQueries('shapes'),
  })

  const submit = data => mutate(data)

  return submit
}

export default useSubmitForm
