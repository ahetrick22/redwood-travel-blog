import { Link, routes } from "@redwoodjs/router";
import {Heading, Image, Skeleton } from '@chakra-ui/react';
import dateFNSFormat from 'date-fns/format';
import { useQuery } from "@redwoodjs/web";

const BlogPost = ({post }) => {

  return (
    <article key={post.id}>
      <Heading>
          <Link to={routes.blogPost({ id: post.id })}>{post.title}</Link>
      </Heading>
      <Image w={'100%'} src={`http://dev-travel-app.s3-website-us-east-1.amazonaws.com/${post.imagePath}`} />
      <p>{post.body}</p>
      <div>Posted on: {dateFNSFormat(new Date(post.createdAt), 'MM-dd-yyyy')}</div>
    </article>
  )
}

export default BlogPost
