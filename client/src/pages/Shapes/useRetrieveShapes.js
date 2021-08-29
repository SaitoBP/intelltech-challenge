import { useQuery } from 'react-query'
import { useParams } from 'react-router'

const useRetrieveShapes = () => {
  const URL = 'http://localhost:5000/api/shapes'
  const OPTIONS = { method: 'GET' }

  const useAll = () => {
    const get = async () => {
      const response = await fetch(URL, OPTIONS)
      return response.json()
    }

    const { status, data } = useQuery('shapes', get)
    return { status, data }
  }

  const useById = () => {
    const { shapeId } = useParams()

    const get = async () => {
      const response = await fetch(`${URL}/${shapeId}`)
      return response.json()
    }
    const { status, data } = useQuery('shape', get)
    return { status, data }
  }

  return { useAll, useById }
}

export default useRetrieveShapes
