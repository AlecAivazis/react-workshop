import { primaryFont, grey800 } from 'styles'

export default {
    container: {
        padding: 28,
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
    },
    title: {
       ...primaryFont,
       margin: 0,
       marginBottom: 20,
       color: grey800,
    },
}
