import BlogPost from "src/components/BlogPost/BlogPost";
import Spinner from '@chakra-ui/react';

export const QUERY = gql`
  query BlogPostQuery($id: Int!) {
    post(id: $id) {
      id
      title
      body
      createdAt
      imagePath
    }
  }
`

export const Loading = () => <Spinner />

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ post }) => {
  return <BlogPost post={post} />
}
