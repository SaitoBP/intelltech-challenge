import { createUseStyles } from 'react-jss'

const useNavbarStyles = createUseStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    padding: '15px',
  },

  list: {
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
    listStyle: 'none',

    '& li': {
      margin: '0 10px',
      fontSize: '1.1rem',
    },
  },

  link: {},
})

export default useNavbarStyles
