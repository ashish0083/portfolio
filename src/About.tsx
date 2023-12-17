import { Container, Heading, List, ListItem, UnorderedList, Text } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ ease: [0.17, 0.67, 0.83, 0.67], duration: 3 }}
    >
      <Container maxW='3xl'>
        <Heading
          fontWeight={600}
          fontFamily="Open sans"
          
          fontSize={{ base: '3xl', sm: '4xl', md: '4xl' }}
          lineHeight={'150%'}>
          Web Developer For You <br />
        </Heading>

        <List 
          fontWeight={400}
          spacing={3}
          my="10"
          fontFamily="Open sans"
          fontSize={{ base: '3xl', sm: '2xl', md: '2xl' }}
          lineHeight={'130%'}
        >
          <ListItem>Proven track record in web development in multiple industries:</ListItem>
          <UnorderedList>
          <ListItem>Construction</ListItem>
          <ListItem>Sound</ListItem>
          <ListItem>Tech Development</ListItem>
          </UnorderedList>
        </List>
        <Text
         fontWeight={400}
         my="10"
         fontFamily="Open sans"
         fontSize={{ base: '2xl', sm: '2xl', md: '2xl' }}
         lineHeight={'130%'}>Postgrad and undergrad degrees in Information Technology</Text>
         <Text
         fontWeight={400}
         my="10"
         fontFamily="Open sans"
         fontSize={{ base: '2xl', sm: '2xl', md: '2xl' }}
         lineHeight={'130%'}>Based in Melbourne, serving all Australian web needs</Text>
      </Container>
    </motion.div>
  )
}

export default About;