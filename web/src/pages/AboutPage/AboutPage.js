import BlogLayout from "src/layouts/BlogLayout/BlogLayout";
import {Image, Text} from '@chakra-ui/react';

const AboutPage = () => {
  return (
    <BlogLayout>
      <Image src={'src/assets/cats.jpg'} />
       <Text>
         {/* eslint-disable-next-line react/no-unescaped-entities */}
          Hi, we're Newton and Waldo, and our owners drive us around to visit all the US national parks in their RV.
        </Text>
    </BlogLayout>
  )
}

export default AboutPage
