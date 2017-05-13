import { grey100, grey800, white, primaryFont } from 'styles'

export default {
    container: {
        display: 'flex',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
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
    workbench: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1
    }
}
