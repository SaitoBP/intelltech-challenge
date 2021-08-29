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

  link: {
    textDecoration: 'none',
    color: 'black',
    transition: '300ms border-color',
    borderBottom: '1px solid transparent',

    '&:hover': {
      borderColor: 'black',
    },
  },
})

export default useNavbarStyles
