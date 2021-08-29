import { createUseStyles } from 'react-jss'

const useInputStyles = createUseStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 5px',
    fontSize: '0.95rem',
    minWidth: '75px',
  },

  input: {
    height: '100%',
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    border: '1px solid #eeeeee',
    transition: '300ms border-color',

    '&:hover': {
      borderColor: '#dbdbdb',
    },

    '&:focus': {
      outline: 'none',
      borderColor: '#dbdbdb',
    },

    '&[type=color]': {
      transition: '300ms background-color',

      '&:hover': {
        backgroundColor: '#dbdbdb',
      },
    },
  },
})

export default useInputStyles
