import BlogPost from "src/components/BlogPost/BlogPost";
import {Spinner} from '@chakra-ui/react';

export const QUERY = gql`
  query BlogPostsQuery {
    posts {
      id
      title
      body
      createdAt
      imagePath
    }
  }
`

export const Loading = () => <Spinner />

export const Empty = () => <div>No content to display</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ posts }) => {
  return posts.map((post) => (
    <BlogPost key={post.id} post={post} />
  ))
}
