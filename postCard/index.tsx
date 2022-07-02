import { View, Text, Image, TouchableOpacity, Dimensions, TextInput, ScrollView, Pressable } from 'react-native'
import React, { useMemo, useRef, useState } from 'react'
import { createStyles, createContainers, createBottomSheet } from './styles'
import { colors } from '../colors'
import { font } from '../font'
import RBSheet from 'react-native-raw-bottom-sheet'

export type marginProp = { top: number, bottom: number, left: number, right: number }

export type AuthorPostPropType = {
    authorId: number,
    authorImage: string,
    authorPostId: number,
    authorPostTitle: string,
    authorPostDescription: string,
    authorPostLikeCount: number,
    authorPostCommentCount: number,
    authorPostRepostCount: number,
    authorFollowCount: string,
    authorPostComment: {
        CommentId: number,
        CommentLikeCount: number,
        CommentDescription: string,
        CommentDate: string,
        CommentUserImage: string,
        CommenterUserName: string,
    }[],
}
export type UserPropType = {
    currentUserId: number,
    currentUserName: string,
    currentUserImage: string,
}

export type PostCardPropType = {
    CardmarginStyle: marginProp,
    AuthorData: AuthorPostPropType,
    UserData: UserPropType,
    onLikeClicked: (
        currentuserId: number,
        postId: number,
        authorId: number) => void,
    onRepostClicked: (
        currentuserId: number,
        postId: number,
        authorId: number) => void,
    onCommentLikeClicked: (
        currentuserId: number,
        postId: number,
        commentId: number,
        authorId: number) => void,
    onNewCommentDone: (
        comment: string,
        currentuserId: number,
        postId: number,
        authorId: number) => void,
}

export default function PostCard({
    CardmarginStyle,
    AuthorData,
    UserData,
    onLikeClicked,
    onRepostClicked,
    onCommentLikeClicked,
    onNewCommentDone
}: PostCardPropType) {

    const styles = useMemo(() => createStyles(), [])
    const containers = useMemo(() => createContainers(CardmarginStyle), [CardmarginStyle])
    const bottomsheet = useMemo(() => createBottomSheet(), [])
    const commentRef = useRef();
    const { height, width } = Dimensions.get('window')
    const [comment, setComment] = useState('')
    // const reversecommentList = useMemo(() => AuthorData.authorPostComment.reverse(), [AuthorData.authorPostComment.length])
    return (
        <View style={containers.main}>
            <View style={containers.topContainer}>
                <View style={containers.profilepicContainer}>
                    <Image source={{ uri: AuthorData.authorImage }} style={styles.userPic} />
                    <Text style={styles.userfollow}>{AuthorData.authorFollowCount}</Text>
                </View>
                <View style={containers.detailContainer}>
                    <Text style={styles.detail_title}>{AuthorData.authorPostTitle}</Text>
                    <Text style={styles.detail_description}>{AuthorData.authorPostDescription}</Text>
                </View>
            </View>
            <View style={containers.cardactionContainer}>
                <TouchableOpacity style={containers.actionContainer}
                    onPress={() => {
                        onLikeClicked(
                            UserData.currentUserId,
                            AuthorData.authorPostId,
                            AuthorData.authorId
                        )
                    }}>
                    <Image source={{ uri: 'https://icones.pro/wp-content/uploads/2021/04/icone-noire-noir.png' }} style={styles.icon} />
                    <Text style={styles.actionText}>{AuthorData.authorPostLikeCount}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={containers.actionContainer}
                    onPress={() => {
                        onRepostClicked(
                            UserData.currentUserId,
                            AuthorData.authorPostId,
                            AuthorData.authorId
                        )
                    }
                    }>
                    <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1388/1388895.png' }} style={styles.icon} />
                    <Text style={styles.actionText}>{AuthorData.authorPostRepostCount}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={containers.actionContainer} onPress={() => commentRef.current?.open()}>
                    <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1380/1380338.png' }} style={styles.icon} />
                    <Text style={styles.actionText}>{AuthorData.authorPostComment.length}</Text>
                </TouchableOpacity>
            </View>
            <RBSheet
                ref={commentRef}
                dragFromTopOnly={true}
                height={height / 1.5}
            >
                <View style={bottomsheet.review}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 8, alignItems: 'center' }}>
                        <Text style={{ color: colors.OnBackground, fontSize: 18, fontWeight: '800' }}>Comments</Text>
                        <TouchableOpacity onPress={() => { commentRef.current?.close() }}>
                            {/* <AntDesign name="close" color={colors.OnBackground} size={24} /> */}
                            <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/59/59836.png' }} style={{ width: 15, height: 15 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', borderBottomColor: colors.Border, borderStyle: 'solid', borderBottomWidth: 1 }}>
                        <Image source={{ uri: UserData.currentUserImage }} style={{ height: 30, width: 30, borderRadius: 30 }} />
                        <TextInput
                            placeholder='Add a comments...'
                            placeholderTextColor={'rgba(51,51,51,.5)'}
                            style={{ width: '100%', color: colors.OnBackground, marginLeft: 5, fontSize: font.TitleFont.Small.fontSize, fontWeight: '400' }}
                            value={comment}
                            onChangeText={(newComment) => setComment(newComment)}
                            onSubmitEditing={() => {
                                onNewCommentDone(
                                    comment,
                                    UserData.currentUserId,
                                    AuthorData.authorPostId,
                                    AuthorData.authorId
                                );
                                setComment('')
                                // commentRef.current?.close();
                            }}
                        />
                    </View>
                    <ScrollView style={{ marginBottom: 50 }}>
                        <View >
                            {AuthorData.authorPostComment.map((comment, index) => {
                                return (
                                    <View style={[bottomsheet.review_card, { backgroundColor: 'white', borderBottomColor: (colors.modeCode == 'light' ? 'rgba(51,51,51,.3)' : 'rgba(243,243,243,.3)'), borderStyle: 'solid', borderBottomWidth: 1 }]} key={index}>
                                        <View style={[bottomsheet.card_header]}>
                                            <Image style={bottomsheet.card_header_image} source={{ uri: comment.CommentUserImage }} />
                                            <View style={bottomsheet.card_user}>
                                                <Text style={[bottomsheet.user_text, { color: colors.Text }]}>{comment.CommenterUserName}</Text>
                                                <View>
                                                    <Text style={{ color: colors.Text, marginLeft: 8, fontSize: 12 }}>{comment.CommentDate}</Text>

                                                </View>

                                            </View>
                                        </View>
                                        <View style={[bottomsheet.card_footer]}>
                                            <Text style={[bottomsheet.footer_text, { color: colors.Text }]}>{comment.CommentDescription}</Text>
                                        </View>
                                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 8, marginHorizontal: 4 }}>
                                            <Image source={{ uri: 'https://icones.pro/wp-content/uploads/2021/04/icone-noire-noir.png' }} style={styles.icon} />

                                            <Text style={{ color: colors.OnBackground, marginLeft: 2 }}>{comment.CommentLikeCount}</Text>
                                        </TouchableOpacity>
                                    </View>
                                )
                            })}
                        </View>
                    </ScrollView>
                </View>
            </RBSheet>
        </View>
    )
}