import React from 'react';
import { Container, Image, Stack, Text, chakra, shouldForwardProp } from '@chakra-ui/react';
import { isValidMotionProp, motion } from 'framer-motion';
const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

const Accesbility = () => {
  return (
    <Stack
      bgSize='cover'
      bgAttachment='fixed'
      //   bgPos='50% 100%'
      pos='relative'
      bgRepeat='no-repeat'
      backgroundImage={'Images/website-3374825_1280.jpg'}
      align={'Left'}
    >
      <Image m={4} width={'150px'} src={'Images/pngegg.png'} />
      <Text
        m={4}
        w={{ base: '250px', sm: '250px', md: '560px' }}
        align={'left'}
        fontSize={{ base: '18px', sm: '18px', md: '22px' }}
        fontFamily={'Ubuntu'}
        color={'#606176'}
        fontWeight={400}
        backgroundColor={'Background'}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta saepe vel aut minus reiciendis nam aliquid
        asperiores. Numquam, dolorem cupiditate!
      </Text>

      <Container h='60vh' display='flex' alignItems='center' justifyContent='center'>
        <ChakraBox
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ['20%', '20%', '50%', '50%', '20%'],
          }}
          // @ts-ignore no problem in operation, although type error appears.
          transition={{
            duration: 3,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'loop',
          }}
          padding='2'
          bgGradient='linear(to-l, #7928CA, #FF0080)'
          display='flex'
          // justifyContent='center'
          alignItems='center'
          width='150px'
          height='150px'
        >
          This page is under the construct
        </ChakraBox>
      </Container>
    </Stack>
  );
};

export default Accesbility;
