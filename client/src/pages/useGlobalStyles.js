import { createUseStyles } from 'react-jss'

const useGlobalStyles = createUseStyles({
  '@global': {
    '*': {
      fontFamily: 'Montserrat, sans-serif',
      margin: '0',
      padding: '0',
      boxSizing: 'border-box',
    },
  },
})

export default useGlobalStyles
