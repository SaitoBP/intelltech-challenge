import { createUseStyles } from 'react-jss'

const useShapesStyles = createUseStyles({
  form: {
    display: 'flex',
    flexDirection: 'column',
  },

  form_fields: {
    display: 'flex',
  },

  shape_color: {
    width: '15px',
    height: '15px',
    backgroundColor: color => color,
    borderRadius: '50%',
    margin: '0 5px',
  },

  color_container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'justify',
    textTransform: 'uppercase',

    '& span': {
      minWidth: '80px',
    },
  },
})

export default useShapesStyles
