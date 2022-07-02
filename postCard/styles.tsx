import { StyleSheet } from 'react-native'
import type { marginProp } from '../cards'

export const createContainers = (marginstyle: marginProp) => StyleSheet.create({
    main: {
        // flexDirection: 'row',
        // alignItems: 'center',
        padding: 16,
        backgroundColor: 'white',
        marginTop: marginstyle.top,
        marginBottom: marginstyle.bottom,
        marginLeft: marginstyle.left,
        marginRight: marginstyle.right,
        borderRadius: 10
    },
    detailContainer: {
        marginHorizontal: 16,
    },
    topContainer: {
        flexDirection: 'row',
    },
    profilepicContainer: {

    },
    cardactionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 36,
    },
    actionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 10
    }
})

export const createStyles = () => StyleSheet.create({
    userPic: {
        height: 30,
        width: 30,
        borderRadius: 15,
        elevation: 2
    },
    userfollow: {

    },
    detail_title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
        color: 'black',
        fontFamily: 'sans-serif',
    },
    detail_description: {
        marginTop: 5,
        fontSize: 14,
        color: '#666',
        fontFamily: 'sans-serif'

    },
    icon: {
        height: 20,
        width: 20,
        borderRadius: 10,
        marginRight: 5
    },
    actionText: {
        fontSize: 14,
        color: '#666',
        fontFamily: 'sans-serif',
    }
})

export const createBottomSheet = () => StyleSheet.create({
    review: {
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    review_card: {
        marginVertical: 10,
        borderRadius: 10,
        backgroundColor: 'white',
        // elevation: 2,
        paddingHorizontal: 20,
        paddingVertical: 20,
        // borderWidth: 1,
        // borderStyle: 'solid',
    },
    card_header: {
        flexDirection: 'row',
        // alignItems: 'center',
        justifyContent: 'flex-start'
    },
    card_header_image: {
        height: 25,
        width: 25,
        borderRadius: 15,
    },
    verified_image: {
        position: 'absolute',
        zIndex: 5,
        bottom: 0,
        left: 28,
    },
    card_user: {
        marginHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    user_text: {
        fontSize: 16,
        color: 'black',
        fontFamily: 'Roboto-Regular',
        fontWeight: '600',
    },
    user_rating: {
        flexDirection: 'row',
    },
    card_footer: {
        marginTop: 10,
    },
    footer_text: {
        fontSize: 14,
        color: '#666',
        fontFamily: 'sans-serif',
        marginLeft: 5
    }
})
