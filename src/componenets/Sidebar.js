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
  { icon: FiHome },
  { icon: FiFile },
  { icon: FiStar },
  { icon: FiFile },
  { icon: FiShoppingCart },
  { icon: FaRocket },
  { icon: RiInformationFill },

  //   { icon: faBuild },
  { icon: FiSettings },
];
export default function Sidebar({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box mt={10} minH='100vh' backgroundColor={'#eceaf0'}>
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
      backgroundColor={'#F4F4F4B2'}
      //   borderRight='1px'
      //   borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: '80px' }}
      pos='relative'
      h='full'
      {...rest}
    >
      <Flex h='20' alignItems='center' mx='6' justifyContent='space-between'>
        <Text fontSize='2xl' fontFamily='monospace' fontWeight='bold'>
          My Tabs
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
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
        p='4'
        mx='4'
        borderRadius='lg'
        role='group'
        cursor='pointer'
        _hover={{
          bg: 'cyan.400',
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
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height='20'
      alignItems='center'
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth='1px'
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent='flex-start'
      {...rest}
    >
      <IconButton variant='outline' onClick={onOpen} aria-label='open menu' icon={<FiMenu />} />

      <Text fontSize='2xl' ml='8' fontFamily='monospace' fontWeight='bold'>
        MY TABS
      </Text>
    </Flex>
  );
};
