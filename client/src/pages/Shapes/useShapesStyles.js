import { createUseStyles } from 'react-jss'

const useShapesStyles = createUseStyles({
  color_container: {
    display: 'flex',
    alignItems: 'center',

    '& span': {
      margin: '0 auto',
      justifySelf: 'center',
      textAlign: 'justify',
      textTransform: 'uppercase',
    },
  },

  table_col_color: {
    width: '100px',
  },

  shape_color: {
    height: '15px',
    width: '15px',
    backgroundColor: color => color,
    borderRadius: '50%',
    margin: '0 10px',
  },

  shape_box: {
    marginTop: '15vh',
  },

  shape_info: {
    margin: '50px 0',

    '& p': {
      padding: '10px',
    },

    '& .data': {
      display: 'flex',
      justifyContent: 'space-around',
    },
  },
})

export default useShapesStyles
