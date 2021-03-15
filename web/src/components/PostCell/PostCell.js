import Post from 'src/components/Post'
import Spinner from '@chakra-ui/react';

export const QUERY = gql`
  query FIND_POST_BY_ID($id: Int!) {
    post: post(id: $id) {
      id
      title
      body
      imagePath
      createdAt
    }
  }
`

export const Loading = () => <Spinner />

export const Empty = () => <div>Post not found</div>

export const Success = ({ post }) => {
  return <Post post={post} />
}
