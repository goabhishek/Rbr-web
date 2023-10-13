import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { FiHome, FiFile, FiShoppingCart, FiStar, FiSettings, FiMenu } from 'react-icons/fi';
import { FaRocket } from 'react-icons/fa';
import { RiInformationFill } from 'react-icons/ri';

const LinkItems = [
  //   { icon: FiHome },
  { name: 'My Wall', icon: FiFile },
  { name: 'My Contracts', icon: FiStar },
  { name: 'My Connections', icon: FiFile },
  { name: 'My Wallet', icon: FiShoppingCart },
  { name: 'Basic', icon: FaRocket },
  { name: 'Settings', icon: FiSettings },
  { name: 'About Us', icon: RiInformationFill },
];
export default function HeroSidebar({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box mt={20} minH='100vh' backgroundColor={'#eceaf0'}>
      <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size='full'
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p='4'>
        {children}
      </Box>
    </Box>
  );
}

// interface SidebarProps extends BoxProps {
//   onClose: () => void;
// }

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      border={'2px solid #773FC6'}
      borderRadius={10}
      backgroundColor={'#F4F4F4B2'}
      //   borderRight='1px'
      //   borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: '70%', md: '300px' }}
      pos='relative'
      h='120vh'
      ml={10}
      //   p={1}
      {...rest}
    >
      <NavItem
        fontWeight={700}
        fontFamily={'Ubuntu'}
        fontSize={24}
        w={'90%'}
        backgroundColor={'#fff'}
        color={'#2D3748'}
        key={'name'}
        m={4}
        height={16}
        icon={FiHome}
      >
        Dashboard
      </NavItem>
      <Flex>
        <Text display={{ base: 'none', md: 'flex' }} ml={8} fontSize='24px' fontFamily='Ubuntu' fontWeight='bold'>
          My Tabs
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem
          fontWeight={400}
          fontFamily={'Ubuntu'}
          fontSize={'18px'}
          w={'90%'}
          backgroundColor={'#fff'}
          color={'#A0AEC0'}
          m={4}
          height={14}
          key={link.name}
          icon={link.icon}
        >
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Link href='#' style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align='center'
        p='18px'
        mx='5'
        borderRadius='lg'
        role='group'
        cursor='pointer'
        _hover={{
          bg: '#8146C8',
          color: 'white',
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr='4'
            fontSize='16'
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={4}
      //   px={{ base: 4, md: 24 }}
      _hover={{
        bg: '#8146C8',
        color: 'white',
      }}
      height='20px'
      w={'35px'}
      alignItems='center'
      borderBottomWidth='1px'
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent='flex-start'
      {...rest}
    >
      <IconButton bg={'#773FC633'} variant='outline' onClick={onOpen} aria-label='open menu' icon={<FiMenu />} />

      {/* <Text fontSize='2xl' ml='8' fontFamily='monospace' fontWeight='bold'>
        MY TABS
      </Text> */}
    </Flex>
  );
};
