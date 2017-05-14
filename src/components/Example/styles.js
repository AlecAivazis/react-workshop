import { grey400, primaryFont, white } from 'styles'

export default {
    container: {
        marginBottom: 32,
        paddingBottom: 5,
    },
    title: {
        marginBottom: 24,
        color: grey400,
        ...primaryFont,
    },
    content: {
        marginLeft: 20,
        marginRight: 20,
    },
    source: {
        backgroundColor: white,
        padding: 12,
        marginTop: 16,
    }
}
