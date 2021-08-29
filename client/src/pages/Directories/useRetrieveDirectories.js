import { useQuery } from 'react-query'

const useRetrieveDirectories = () => {
  const retrieveDirectories = async () => {
    const response = await fetch('http://localhost:5000/api/directories', { method: 'GET' })

    return response.json()
  }

  const { status, data } = useQuery('directories', retrieveDirectories)

  return { status, data }
}

export default useRetrieveDirectories
