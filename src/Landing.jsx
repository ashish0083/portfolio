'use client'

import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
  background,
} from '@chakra-ui/react'
import Navbar from "./Navbar";
import Typical from "react-typical";
import { motion } from 'framer-motion'

function Landing() {
  return (
    <>
      <Container maxW={'2xl'} spacing={{ base: 8, md: 14 }}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
        >
          <motion.div
            animate={{
              scale: [1, 2, 2, 1, 1],
              // rotate: [0, 0, 270, 270, 360],
              borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }}
            transition={{
              ease: "linear",
              duration: 2,
              x: { duration: 1 }
            }}
          >
          <Heading
            fontWeight={500}
            fontFamily="Open sans"
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            textColor="#dddfd4"
            lineHeight={'120%'}>
            Hi, I am Ash <br />
          </Heading>
          </motion.div>
          <div
            style={{ display: "flex", fontFamily: "monospace", fontSize: "1.9rem", justifyContent: "center" }}
          >
            <Typical
              steps={['Web Developer', 3000, 'MERN Stack', 3000, 'Certified Data Analyst', 3000]}
              loop={Infinity}
            />
          </div>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            <Box>
              {/* <Icon
                as={Arrow}
                color={useColorModeValue('gray.800', 'gray.300')}
                w={71}
                position={'absolute'}
                right={-71}
                top={'10px'}
              /> */}
              {/* <Text
                fontSize={'lg'}
                fontFamily={'monospace'}
                position={'absolute'}
                right={'-125px'}
                top={'-15px'}
                transform={'rotate(10deg)'}>
                Starting at $15/mo
              </Text> */}
              <Text fontSize="1.6rem">
                Specialized in developing MERN Stack applications<br /> and maintaining secure APIs and Databases
              </Text>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </>
  )
}


export default Landing;
