import { createUseStyles } from 'react-jss'

const useButtonStyles = createUseStyles({
  root: {
    /* Remove default style */
    appearance: 'none',
    WebkitAppearance: 'none',

    /* Neww style */
    minHeight: '30px',
    minWidth: '100px',
    padding: '10px',
    margin: '0 5px',
    border: 'none',
    transition: '300ms background-color',

    '&:hover': {
      cursor: 'pointer',
      backgroundColor: '#dbdbdb',
    },
  },
})

export default useButtonStyles
