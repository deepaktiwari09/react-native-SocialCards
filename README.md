
# React Native Post Card

A brief description of what this project does and who it's for


## Demo

![Alt Text](https://im4.ezgif.com/tmp/ezgif-4-616dccb75b.gif)


## Usage/Examples

```javascript
import { PostCard, UserData, AuthorData } from '@deepaktiwari09/Postcard'

export default function App() {
  const [authorData, setauthorData] = useState<AuthorPostPropType[]>(AuthorData);
  return (
    <ScrollView>
      {authorData.map((authorData, index) => {
        return (
          <PostCard
            key={index}
            CardmarginStyle={{ top: 10, bottom: 10, left: 10, right: 10 }}
            AuthorData={authorData}
            UserData={UserData}
            onLikeClicked={(currentuserId, postId, authorId) => {
              setauthorData(AuthorData.map((item, index) => {
                if (item.authorId === authorId && item.authorPostId === postId) {
                  item.authorPostLikeCount += 1;
                  return item;
                }
                else {
                  return item;
                }

              }))
            }}
            onRepostClicked={(currentuserId, postId, authorId) => {
              setauthorData(AuthorData.map((item, index) => {
                if (item.authorId === authorId && item.authorPostId === postId) {
                  item.authorPostRepostCount += 1;
                  return item;
                }
                else {
                  return item;
                }

              }))
            }}
            onCommentLikeClicked={() => { }}
            onNewCommentDone={(comment, currentuserId, postId, autherId) => {
              setauthorData(AuthorData.map((item, index) => {
                if (item.authorId === autherId && item.authorPostId === postId) {
                  item.authorPostComment.unshift({
                    CommentId: item.authorPostComment.length,
                    CommentLikeCount: 0,
                    CommentDescription: comment,
                    CommentDate: new Date().toLocaleString(),
                    CommentUserImage: UserData.currentUserImage,
                    CommenterUserName: UserData.currentUserName,
                  })
                  return item;
                }
                else {
                  return item;
                }

              }))
            }}

          />
        )
      }
      )}
    </ScrollView>
  );
}
```

