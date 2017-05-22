import { grey100, grey800, white, primaryFont } from '../../styles'

export default {
    container: {
        display: 'flex',
        flexGrow: 1,
        backgroundColor: grey100
    },
    tabContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: 300,
        backgroundColor: grey800,
        padding: 16,
        boxSizing: 'border-box',
        color: white,
        ...primaryFont
    },
    workshop: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        overflowX: 'hidden',
        overflowY: 'scroll',
    }
}
