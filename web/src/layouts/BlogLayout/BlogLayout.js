import { Link, routes } from "@redwoodjs/router";
import { useAuth } from '@redwoodjs/auth'
import {Flex, Box, Link as ChakraLink, Text} from '@chakra-ui/react';

const BlogLayout = ({ children }) => {
  const { logIn, logOut, isAuthenticated, currentUser } = useAuth()

  return (
    <Box>
    <Flex direction={'row'} mb={8} bg={'orange'} p={2} justify={'space-between'}>
      <Flex direction={'row'}>
        <ChakraLink mr={4} as={Link} to={routes.home()}>We Drive Our Cats</ChakraLink>
      <ChakraLink mr={4}  as={Link} to={routes.about()}>About</ChakraLink>
      </Flex>
      <Flex direction={'row'}>
      {isAuthenticated && <ChakraLink mr={4}  as={Link} to={routes.newPost()}>Add A Post</ChakraLink>}
      <Text mr={4}>{isAuthenticated && currentUser.email}</Text>
            <ChakraLink as={Text} mr={4} onClick={isAuthenticated ? logOut : logIn}>
              {isAuthenticated ? 'Log Out' : 'Log In'}
            </ChakraLink>
      </Flex>
    </Flex>
      <Box m={'0 auto'} width={'80%'}>
        {children}
      </Box>
    </Box>
  )
}

export default BlogLayout
