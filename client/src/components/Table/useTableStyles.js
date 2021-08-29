import { createUseStyles } from 'react-jss'

const useTableStyles = createUseStyles({
  root: {
    width: '100%',
    marginTop: '15px',
    borderCollapse: 'collapse',

    '& thead': {
      height: '40px',
    },

    '& tbody': {
      '& tr': {
        transition: '300ms background-color',

        '&:hover': {
          backgroundColor: '#dbdbdb',
          cursor: 'pointer',
        },
      },
    },

    '& tr': {
      borderBottom: '1px solid #eeeeee',
      height: '100%',

      fontSize: '0.9rem',
    },

    '& td': {
      padding: '15px',
    },
  },

  actions: {
    width: '10%',
  },

  actions_icon: {
    fontSize: '1.5rem',
  },
})

export default useTableStyles
