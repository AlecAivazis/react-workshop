import { grey400, primaryFont, white } from 'styles'

export default {
    container: {
        marginBottom: 10,
        paddingBottom: 5,
    },
    title: {
        marginBottom: 20,
        color: grey400,
        ...primaryFont,
    },
    content: {
        marginLeft: 20,
        marginRight: 20,
    },
    example: {
        backgroundColor: white,
        padding: 12,
        marginTop: 20,
    }
}
