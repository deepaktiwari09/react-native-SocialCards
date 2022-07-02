
## Badges

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)


# react-native-socialcard

Advanced Social-Card for React Native Community. It is a React Native component that allows you to create a card for User Post with a Posttitle, description, image, and interaction buttons such as like, repost, retwitte and comment. It also comes with built-in Comment Section for per User post. Fully Dynamic and Responsive.

## Features

- Advanced Post Card
- Built-in Comment Section
- Built-in Fetch and Post Hooks for connection between cards and server
- Have Data-Points for Data Analysis of User Engagement
- Typescript Support 
- Cross platform



## Demo

![Alt Text](https://raw.githubusercontent.com/deepaktiwari09/react-native-SocialCards/master/assets/Demo.gif)


## Installation

```bash
  npm install @tiwariux/rn-socialcard
```
    
## Usage/Examples

```javascript
import { SocialPostCard } from '@tiwariux/rn-socialcard'

export default function App() {
  return (
      <SocialPostCard
            CardmarginStyle={}
            AuthorData={}
            UserData={}
            onLikeClicked={}
            onRepostClicked={}
            onCommentLikeClicked={}
            onNewCommentDone={}

          />
    )
}
```
### Import dummyData and Props

```javascript
import { UserData, AuthorData } from "@tiwariux/rn-socialcard/socialpostCard/dummyData";
import { marginProp, AuthorPostPropType, UserPropType, PostCardPropType } from '@tiwariux/rn-socialcard/socialpostCard';
```
#### marginProp

```typescript
type marginProp = { 
    top: number, 
    bottom: number, 
    left: number, 
    right: number 
}
```
#### AuthorPostPropType

```typescript
type AuthorPostPropType = {
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
```
#### UserPropType

```typescript
type UserPropType = {
    currentUserId: number,
    currentUserName: string,
    currentUserImage: string,
}
```

#### PostCardPropTypes

```typescript
type PostCardPropType = {
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
```






## Roadmap

Release 0.1.0

* [ ] Adding React Hooks for fetching data and posting data to backend server.

* [ ] Adding Redux-toolkit support for local state-management

* [ ] Adding Animations.

Release 0.2.0

* [ ]  Adding Datapoints to Post for Backend Server to run Data Analysis of Post engagement and User Experience Analysis.
## Issue and Feedback

have Any Issue Report is Here https://github.com/deepaktiwari09/react-native-SocialCards/issues

If you have any feedback, please reach out to us at deepaktiwari3020@gmail.com


## Authors

[Github](https://github.com/deepaktiwari09)  [Linkdin](https://www.linkedin.com/in/deepak-tiwari-431470205/)


