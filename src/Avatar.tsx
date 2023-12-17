// 'use client'
// import React from "react"
// import { Avatar, Box, Flex, keyframes } from '@chakra-ui/react'
// // import Sri from "../src/srivatsa.jpg";
// import { Link } from "react-router-dom";
// import { motion } from 'framer-motion';

// function AvatarWithRipple() {
//   const size = '96px'
//   const color = 'white'

//   const pulseRing = keyframes`
// 	0% {
//     transform: scale(0.33);
//   }
//   40%,
//   50% {
//     opacity: 0;
//   }
//   100% {
//     opacity: 0;
//   }
// 	`

//   return (
//     <Flex
//       justifyContent="start"
//       alignItems="start"
//       h="150px"
//       w="150px"
//       my="1.5"
//       overflow="hidden">
//         {/* Ideally, only the box should be used. The <Flex /> is used to style the preview. */}
//       <Box
//         as="div"
//         position="relative"
//         w={size}
//         h={size}
//         _before={{
//           content: "''",
//           position: 'relative',
//           display: 'block',
//           width: '300%',
//           height: '300%',
//           boxSizing: 'border-box',
//           marginLeft: '-100%',
//           marginTop: '-100%',
//           // borderRadius: '100%',
//           bgColor: color,
//           animation: `2.25s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
//         }}>
//         {/* <Avatar src={Sri} size="full" position="absolute" top={0} borderRadius={0} /> */}
//       </Box>
//     </Flex>

//   )
// }

// export default AvatarWithRipple;