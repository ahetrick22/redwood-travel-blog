import { Link, routes } from '@redwoodjs/router'
import Spinner from '@chakra-ui/react';
import Posts from 'src/components/Posts'

export const QUERY = gql`
  query POSTS {
    posts {
      id
      title
      body
      imagePath
      createdAt
    }
  }
`

export const Loading = () => <Spinner />

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No posts yet. '}
      <Link to={routes.newPost()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ posts }) => {
  return <Posts posts={posts} />
}
