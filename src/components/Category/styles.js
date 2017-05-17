import { blue400 } from '../../styles'

const blueprint = {
    marginBottom: 12,
    textTransform: 'capitalize',
    cursor: 'pointer',
}

export default {
    container: {
        marginBottom: 4
    },
    title: {
        textTransform: 'capitalize',
        marginBottom: 16,
        marginTop: 0,
        fontSize: 22,
    },
    content: {
        marginLeft: 28,
    },
    blueprint: {
        ...blueprint,
    },
    selectedBlueprint: {
        ...blueprint,
        color: blue400,
    },
}
