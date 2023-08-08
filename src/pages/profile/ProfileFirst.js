import React, { useState, useRef } from 'react';
import Sidebar from '../../componenets/Sidebar';
import convertToBase64 from '../../componenets/convert';
import {
  Box,
  Center,
  Container,
  Flex,
  FormHelperText,
  GridItem,
  Heading,
  InputGroup,
  Radio,
  RadioGroup,
  Select,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
} from '@chakra-ui/react';
import {
  Step,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  Stepper,
  FormLabel,
  Button,
  FormControl,
  Input,
} from '@chakra-ui/react';

import '../../global.css';
import { colorOptions } from '../../componenets/Data';

const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad', 'Create an ad', 'Create an ad'];

const ProfileFirst = () => {
  const Form1 = () => {
    return (
      <Container maxW={'850px'}>
        <Text
          m={'20px'}
          mb={20}
          color={'#BA0000'}
          justifyContent={'center'}
          align={'center'}
          fontSize={{ base: 'sm', sm: 'md' }}
        >
          All fields marked “*” are mandatory
        </Text>
        <Flex>
          <FormControl mr='5%'>
            <FormLabel color={'#808184'} htmlFor='first-name' fontWeight={'normal'}>
              First name
            </FormLabel>
            <Input id='first-name' color={'#808184'} />
          </FormControl>

          <FormControl>
            <FormLabel color={'#808184'} htmlFor='last-name' fontWeight={'normal'}>
              Last name
            </FormLabel>
            <Input id='last-name' color={'#808184'} />
          </FormControl>
        </Flex>
        <FormControl>
          <FormLabel htmlFor='Name' color={'#808184'} fontWeight={'normal'} mt='2%'>
            Profile Display Name
          </FormLabel>
          <InputGroup size='md'>
            <Input pr='4.5rem' type='text' />
          </InputGroup>
        </FormControl>
        <FormControl mt='2%'>
          <FormLabel color={'#808184'} htmlFor='number' fontWeight={'normal'}>
            Mobile Number
          </FormLabel>
          <Input id='email' type='number' />
        </FormControl>
        <FormControl mt='2%'>
          <FormLabel color={'#808184'} htmlFor='email' fontWeight={'normal'}>
            Email
          </FormLabel>
          <Input id='email' type='email' />
        </FormControl>

        <FormControl as={GridItem} colSpan={[6, 3]}>
          <FormLabel
            htmlFor='country'
            fontSize='sm'
            fontWeight='md'
            color={'#808184'}
            _dark={{
              color: 'gray.50',
            }}
          >
            Country
          </FormLabel>
          <Select
            id='country'
            name='country'
            autoComplete='country'
            // placeholder='Select option'
            color={'#808184'}
            shadow='sm'
            size='sm'
            w='full'
            rounded='md'
          >
            {/* <option>United States</option>
            <option>Canada</option>
            <option>Mexico</option> */}
          </Select>
        </FormControl>
        <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
          <FormLabel
            htmlFor='city'
            fontSize='sm'
            fontWeight='md'
            color={'#808184'}
            _dark={{
              color: 'gray.50',
            }}
            mt='2%'
          >
            City
          </FormLabel>
          <Input
            type='text'
            name='city'
            id='city'
            autoComplete='city'
            focusBorderColor='brand.400'
            shadow='sm'
            size='sm'
            w='full'
            rounded='md'
          />
        </FormControl>
      </Container>
    );
  };

  const Form2 = () => {
    return (
      <Container maxW={'850px'}>
        <Text
          m={'20px'}
          mb={20}
          color={'#BA0000'}
          justifyContent={'center'}
          align={'center'}
          fontSize={{ base: 'sm', sm: 'md' }}
        >
          All fields marked “*” are mandatory
        </Text>

        <FormControl as={GridItem} colSpan={[6, 3]}>
          <FormLabel
            htmlFor='retirement'
            fontSize='20px'
            lineHeight={'30px'}
            fontWeight='500'
            color='#808184'
            _dark={{
              color: 'gray.50',
            }}
            mt='2%'
          >
            What is the cause of your retirement?
          </FormLabel>
          <Input
            type='text'
            name='retirement'
            id='retirement'
            focusBorderColor='#808184'
            shadow='sm'
            size='sm'
            w='full'
            rounded='md'
          />
        </FormControl>

        <FormControl as={GridItem} colSpan={6}>
          <FormLabel
            htmlFor='retirement'
            fontSize='20px'
            lineHeight={'30px'}
            fontWeight='500'
            color='#808184'
            _dark={{
              color: 'gray.50',
            }}
            mt='2%'
          >
            What do you want to do on this platform?
          </FormLabel>
          <Select
            isMulti
            type='text'
            name='retirement'
            id='retirement'
            focusBorderColor='#808184'
            shadow='sm'
            size='sm'
            w='full'
            rounded='md'
            closeMenuOnSelect={false}
          >
            <option>Work as a freelancer</option>
            <option>Work full-time</option>
            <option>Mentoring</option>
            <option>Work short term</option>
            <option>Work as a consultant</option>
            <option>Build connections</option>
            <option>Match-making</option>
          </Select>
        </FormControl>
        {/* <Dropdown
          placeholder='Select Multiple'
          fluid
          multiple
          selection
          options={interestedOptions}
          onChange={(e, { value }) => setForm({ ...form, interested: value })}
          style={{ maxWidth: 350 }}
        /> */}
        <Heading mt={10} lineHeight={'24px'} fontWeight={500} fontSize={'24px'} color={'#000000'}>
          Link your Accounts
        </Heading>
        <Text lineHeight={'24px'} fontWeight={500} fontSize={'16px'} color={'#9CA3AF'}>
          (provide links to your linkedin, facebook, google and other social media accounts that are relevant with your
          profile and work experience)
        </Text>
        <FormControl as={GridItem} colSpan={6}>
          <FormLabel
            htmlFor='retirement'
            fontSize='20px'
            lineHeight={'30px'}
            fontWeight='500'
            color='#808184'
            _dark={{
              color: 'gray.50',
            }}
            mt='2%'
          >
            Facebook*
          </FormLabel>
          <Input
            type='text'
            name='retirement'
            id='retirement'
            focusBorderColor='#808184'
            shadow='sm'
            size='sm'
            w='full'
            rounded='md'
          />
        </FormControl>
        <FormControl as={GridItem} colSpan={6}>
          <FormLabel
            htmlFor='retirement'
            fontSize='20px'
            lineHeight={'30px'}
            fontWeight='500'
            color='#808184'
            _dark={{
              color: 'gray.50',
            }}
            mt='2%'
          >
            Twitter*
          </FormLabel>
          <Input
            type='text'
            name='retirement'
            id='retirement'
            focusBorderColor='#808184'
            shadow='sm'
            size='sm'
            w='full'
            rounded='md'
          />
        </FormControl>
        <FormControl as={GridItem} colSpan={6}>
          <FormLabel
            htmlFor='retirement'
            fontSize='20px'
            lineHeight={'30px'}
            fontWeight='500'
            color='#808184'
            _dark={{
              color: 'gray.50',
            }}
            mt='2%'
          >
            LinkedIn*
          </FormLabel>
          <Input
            type='text'
            name='retirement'
            id='retirement'
            focusBorderColor='#808184'
            shadow='sm'
            size='sm'
            w='full'
            rounded='md'
          />
        </FormControl>
        <FormControl as={GridItem} colSpan={6}>
          <FormLabel
            htmlFor='retirement'
            fontSize='20px'
            lineHeight={'30px'}
            fontWeight='500'
            color='#808184'
            _dark={{
              color: 'gray.50',
            }}
            mt='2%'
          >
            Google*
          </FormLabel>
          <Input
            type='text'
            name='retirement'
            id='retirement'
            focusBorderColor='#808184'
            shadow='sm'
            size='sm'
            w='full'
            rounded='md'
          />
        </FormControl>
        <FormControl as={GridItem} colSpan={6}>
          <FormLabel
            htmlFor='retirement'
            fontSize='20px'
            lineHeight={'30px'}
            fontWeight='500'
            color='#808184'
            _dark={{
              color: 'gray.50',
            }}
            mt='2%'
          >
            Instagram
          </FormLabel>
          <Input
            type='text'
            name='retirement'
            id='retirement'
            focusBorderColor='#808184'
            shadow='sm'
            size='sm'
            w='full'
            rounded='md'
          />
        </FormControl>
        <FormControl as={GridItem} colSpan={6}>
          <FormLabel
            htmlFor='retirement'
            fontSize='20px'
            lineHeight={'30px'}
            fontWeight='500'
            color='#808184'
            _dark={{
              color: 'gray.50',
            }}
            mt='2%'
          >
            Behance
          </FormLabel>
          <Input
            type='text'
            name='retirement'
            id='retirement'
            focusBorderColor='#808184'
            shadow='sm'
            size='sm'
            w='full'
            rounded='md'
          />
        </FormControl>
        <FormControl as={GridItem} colSpan={6}>
          <FormLabel
            htmlFor='retirement'
            fontSize='20px'
            lineHeight={'30px'}
            fontWeight='500'
            color='#808184'
            _dark={{
              color: 'gray.50',
            }}
            mt='2%'
          >
            Others
          </FormLabel>
          <Input
            type='text'
            name='retirement'
            id='retirement'
            focusBorderColor='#808184'
            shadow='sm'
            size='sm'
            w='full'
            rounded='md'
          />
        </FormControl>
      </Container>
    );
  };

  const Form3 = () => {
    return (
      <Container maxW={'850px'}>
        <Text
          m={'20px'}
          mb={20}
          color={'#BA0000'}
          justifyContent={'center'}
          align={'center'}
          fontSize={{ base: 'sm', sm: 'md' }}
        >
          All fields marked “*” are mandatory
        </Text>
        <FormControl as={GridItem} colSpan={[6, 3]}>
          <FormLabel
            htmlFor='retirement'
            fontSize='20px'
            lineHeight={'30px'}
            fontWeight='500'
            color='#808184'
            _dark={{
              color: 'gray.50',
            }}
            mt='2%'
          >
            Most recent Designation{' '}
            <span lineHeight={'24px'} fontWeight={500} fontSize={'16px'} color={'#9CA3AF'}>
              ( Before Retirement )
            </span>
          </FormLabel>
          <Input
            type='text'
            name='retirement'
            id='retirement'
            focusBorderColor='#808184'
            shadow='sm'
            size='sm'
            w='full'
            rounded='md'
          />
        </FormControl>
        <FormControl as={GridItem} colSpan={[6, 3]}>
          <FormLabel
            htmlFor='retirement'
            fontSize='20px'
            lineHeight={'30px'}
            fontWeight='500'
            color='#808184'
            _dark={{
              color: 'gray.50',
            }}
            mt='2%'
          >
            Total Work Experience
            <span>( Before Retirement )</span>
          </FormLabel>
          <Input
            type='text'
            name='retirement'
            id='retirement'
            focusBorderColor='#808184'
            shadow='sm'
            size='sm'
            w='full'
            rounded='md'
          />
        </FormControl>
        <FormControl as={GridItem} colSpan={6}>
          <FormLabel
            htmlFor='retirement'
            fontSize='20px'
            lineHeight={'30px'}
            fontWeight='500'
            color='#808184'
            _dark={{
              color: 'gray.50',
            }}
            mt='2%'
          >
            Professional field
          </FormLabel>
          <Select
            type='text'
            name='retirement'
            id='retirement'
            placeholder=''
            focusBorderColor='#808184'
            shadow='sm'
            size='sm'
            w='full'
            rounded='md'
          >
            <option>Work as a freelancer</option>
            <option>Work full-time</option>
            <option>Mentoring</option>
          </Select>
        </FormControl>
        <FormControl as={GridItem} colSpan={6}>
          <FormLabel
            htmlFor='retirement'
            fontSize='20px'
            lineHeight={'30px'}
            fontWeight='500'
            color='#808184'
            _dark={{
              color: 'gray.50',
            }}
            mt='2%'
          >
            Area of expertise
          </FormLabel>
          <Select
            type='text'
            name='retirement'
            id='retirement'
            placeholder=''
            focusBorderColor='#808184'
            shadow='sm'
            size='sm'
            w='full'
            rounded='md'
          >
            <option>Work as a freelancer</option>
            <option>Work full-time</option>
            <option>Mentoring</option>
          </Select>
        </FormControl>
        <FormControl as={GridItem} colSpan={6}>
          <FormLabel
            htmlFor='retirement'
            fontSize='20px'
            lineHeight={'30px'}
            fontWeight='500'
            color='#808184'
            _dark={{
              color: 'gray.50',
            }}
            mt='2%'
          >
            Work Type
          </FormLabel>
          <Select
            type='text'
            name='retirement'
            id='retirement'
            placeholder=''
            focusBorderColor='#808184'
            shadow='sm'
            size='sm'
            w='full'
            rounded='md'
          >
            <option>Work as a freelancer</option>
            <option>Work full-time</option>
            <option>Mentoring</option>
          </Select>
        </FormControl>
        <Heading mt={10} lineHeight={'24px'} fontWeight={500} fontSize={'24px'} color={'#000000'}>
          Personal Skills
        </Heading>
        <SimpleGrid columns={1} spacing={6}>
          <Text lineHeight={'24px'} fontWeight={500} fontSize={'16px'} color={'#9CA3AF'}>
            Add 3 to 5 personal skills that you are proud of
          </Text>
          <Input
            type='text'
            name='retirement'
            id='retirement'
            focusBorderColor='#808184'
            shadow='sm'
            size='sm'
            w='full'
            rounded='md'
          />{' '}
          <Input
            type='text'
            name='retirement'
            id='retirement'
            focusBorderColor='#808184'
            shadow='sm'
            size='sm'
            w='full'
            rounded='md'
          />{' '}
          <Input
            type='text'
            name='retirement'
            id='retirement'
            focusBorderColor='#808184'
            shadow='sm'
            size='sm'
            w='full'
            rounded='md'
          />{' '}
          <Input
            type='text'
            name='retirement'
            id='retirement'
            focusBorderColor='#808184'
            shadow='sm'
            size='sm'
            w='full'
            rounded='md'
          />{' '}
          <Input
            type='text'
            name='retirement'
            id='retirement'
            focusBorderColor='#808184'
            shadow='sm'
            size='sm'
            w='full'
            rounded='md'
          />
        </SimpleGrid>
        <Heading mt={10} lineHeight={'24px'} fontWeight={500} fontSize={'24px'} color={'#000000'}>
          Professional Skills
        </Heading>
        <SimpleGrid columns={1} spacing={6}>
          <Text lineHeight={'24px'} fontWeight={500} fontSize={'16px'} color={'#9CA3AF'}>
            Add 3 to 5 personal skills that you are proud of
          </Text>
          <Input
            type='text'
            name='retirement'
            id='retirement'
            focusBorderColor='#808184'
            shadow='sm'
            size='sm'
            w='full'
            rounded='md'
          />{' '}
          <Input
            type='text'
            name='retirement'
            id='retirement'
            focusBorderColor='#808184'
            shadow='sm'
            size='sm'
            w='full'
            rounded='md'
          />{' '}
          <Input
            type='text'
            name='retirement'
            id='retirement'
            focusBorderColor='#808184'
            shadow='sm'
            size='sm'
            w='full'
            rounded='md'
          />{' '}
          <Input
            type='text'
            name='retirement'
            id='retirement'
            focusBorderColor='#808184'
            shadow='sm'
            size='sm'
            w='full'
            rounded='md'
          />{' '}
          <Input
            type='text'
            name='retirement'
            id='retirement'
            focusBorderColor='#808184'
            shadow='sm'
            size='sm'
            w='full'
            rounded='md'
          />
        </SimpleGrid>
      </Container>
    );
  };
  const Form4 = () => {
    return (
      <Container maxW={'850px'}>
        <Text
          m={'20px'}
          mb={20}
          color={'#BA0000'}
          justifyContent={'center'}
          align={'center'}
          fontSize={{ base: 'sm', sm: 'md' }}
        >
          All fields marked “*” are mandatory
        </Text>
        <Heading mt={10} lineHeight={'24px'} fontWeight={500} fontSize={'24px'} color={'#000000'}>
          English Proficiency
        </Heading>
        <SimpleGrid columns={1} spacing={6}>
          <Text lineHeight={'24px'} fontWeight={500} fontSize={'16px'} color={'#9CA3AF'}>
            Retired But Ready is an ideal platform for Intermediate/Native English speakers. Please indicate your
            english language proficiency with honesty.
          </Text>
          <Select
            type='text'
            name='english'
            id='english'
            placeholder=''
            focusBorderColor='#808184'
            shadow='sm'
            size='sm'
            w='full'
            rounded='md'
          >
            <option>Yes</option>
            <option>No</option>
          </Select>
        </SimpleGrid>

        <Heading mt={10} lineHeight={'24px'} fontWeight={500} fontSize={'24px'} color={'#000000'}>
          Other Languages you know
        </Heading>
        <SimpleGrid columns={1} spacing={6}>
          <Text lineHeight={'24px'} fontWeight={500} fontSize={'16px'} color={'#9CA3AF'}>
            Being multilingual is always a bonus.
          </Text>
          <Input
            type='text'
            name='retirement'
            id='retirement'
            focusBorderColor='#808184'
            shadow='sm'
            size='sm'
            w='full'
            rounded='md'
          />{' '}
          <Input
            type='text'
            name='retirement'
            id='retirement'
            focusBorderColor='#808184'
            shadow='sm'
            size='sm'
            w='full'
            rounded='md'
          />{' '}
          <Input
            type='text'
            name='retirement'
            id='retirement'
            focusBorderColor='#808184'
            shadow='sm'
            size='sm'
            w='full'
            rounded='md'
          />{' '}
          <Input
            type='text'
            name='retirement'
            id='retirement'
            focusBorderColor='#808184'
            shadow='sm'
            size='sm'
            w='full'
            rounded='md'
          />{' '}
          <Input
            type='text'
            name='retirement'
            id='retirement'
            focusBorderColor='#808184'
            shadow='sm'
            size='sm'
            w='full'
            rounded='md'
          />{' '}
          <Input
            type='text'
            name='retirement'
            id='retirement'
            focusBorderColor='#808184'
            shadow='sm'
            size='sm'
            w='full'
            rounded='md'
          />{' '}
        </SimpleGrid>
        <Heading mt={10} lineHeight={'24px'} fontWeight={500} fontSize={'24px'} color={'#773FC6'}>
          Work History
        </Heading>
        <Text lineHeight={'24px'} fontWeight={500} fontSize={'16px'} color={'#9CA3AF'}>
          This lets others know where you have worked and your wealth of expertise.
        </Text>
        <SimpleGrid columns={1} spacing={6}>
          <Heading mt={10} lineHeight={'24px'} fontWeight={500} fontSize={'24px'} color={'#000000'}>
            Add experience
          </Heading>
          <FormControl as={GridItem} colSpan={[6, 3]}>
            <FormLabel
              htmlFor='retirement'
              fontSize='20px'
              lineHeight={'30px'}
              fontWeight='500'
              color='#808184'
              _dark={{
                color: 'gray.50',
              }}
              mt='2%'
            >
              Company Name*
            </FormLabel>
            <Input
              type='text'
              name='retirement'
              id='retirement'
              focusBorderColor='#808184'
              shadow='sm'
              size='sm'
              w='full'
              rounded='md'
            />
          </FormControl>
          <FormControl as={GridItem} colSpan={[6, 3]}>
            <FormLabel
              htmlFor='retirement'
              fontSize='20px'
              lineHeight={'30px'}
              fontWeight='500'
              color='#808184'
              _dark={{
                color: 'gray.50',
              }}
              mt='2%'
            >
              Title*
            </FormLabel>
            <Input
              type='text'
              name='retirement'
              id='retirement'
              focusBorderColor='#808184'
              shadow='sm'
              size='sm'
              w='full'
              rounded='md'
            />
          </FormControl>
          <Flex>
            <FormControl m={5} as={GridItem} colSpan={[6, 3]}>
              <FormLabel
                htmlFor='retirement'
                fontSize='20px'
                lineHeight={'30px'}
                fontWeight='500'
                color='#808184'
                _dark={{
                  color: 'gray.50',
                }}
                mt='2%'
              >
                Start date
              </FormLabel>
              <Input
                type='date'
                name='retirement'
                id='retirement'
                focusBorderColor='#808184'
                shadow='sm'
                size='sm'
                w='full'
                rounded='md'
              />
            </FormControl>
            <FormControl m={5} as={GridItem} colSpan={[6, 3]}>
              <FormLabel
                htmlFor='retirement'
                fontSize='20px'
                lineHeight={'30px'}
                fontWeight='500'
                color='#808184'
                _dark={{
                  color: 'gray.50',
                }}
                mt='2%'
              >
                End date
              </FormLabel>
              <Input
                type='date'
                name='retirement'
                id='retirement'
                focusBorderColor='#808184'
                shadow='sm'
                size='sm'
                w='full'
                rounded='md'
              />
            </FormControl>
          </Flex>
        </SimpleGrid>
        <Center>
          <Heading mt={10} lineHeight={'24px'} fontWeight={500} fontSize={'24px'} color={'#773FC6'}>
            + Add more positions
          </Heading>
        </Center>
      </Container>
    );
  };
  const Form5 = () => {
    const [value, setValue] = React.useState(0);

    return (
      <Container maxW={'850px'}>
        <Text
          m={'20px'}
          mb={20}
          color={'#BA0000'}
          justifyContent={'center'}
          align={'center'}
          fontSize={{ base: 'sm', sm: 'md' }}
        >
          All fields marked “*” are mandatory
        </Text>
        <Heading mt={10} lineHeight={'24px'} fontWeight={500} fontSize={'24px'} color={'#000000'}>
          Certifications
        </Heading>
        <SimpleGrid columns={1} spacing={6}>
          <Text lineHeight={'24px'} fontWeight={500} fontSize={'16px'} color={'#9CA3AF'}>
            [Example : Microsoft Certified Solutions Associate (MCSA)]
          </Text>
          <Input
            type='text'
            name='retirement'
            id='retirement'
            focusBorderColor='#808184'
            shadow='sm'
            size='sm'
            w='full'
            rounded='md'
          />{' '}
          <Input
            type='text'
            name='retirement'
            id='retirement'
            focusBorderColor='#808184'
            shadow='sm'
            size='sm'
            w='full'
            rounded='md'
          />{' '}
          <Input
            type='text'
            name='retirement'
            id='retirement'
            focusBorderColor='#808184'
            shadow='sm'
            size='sm'
            w='full'
            rounded='md'
          />{' '}
          <Input
            type='text'
            name='retirement'
            id='retirement'
            focusBorderColor='#808184'
            shadow='sm'
            size='sm'
            w='full'
            rounded='md'
          />{' '}
          <Input
            type='text'
            name='retirement'
            id='retirement'
            focusBorderColor='#808184'
            shadow='sm'
            size='sm'
            w='full'
            rounded='md'
          />{' '}
          <Input
            type='text'
            name='retirement'
            id='retirement'
            focusBorderColor='#808184'
            shadow='sm'
            size='sm'
            w='full'
            rounded='md'
          />{' '}
        </SimpleGrid>
        <FormControl as={GridItem} colSpan={[6, 3]}>
          <FormLabel
            htmlFor='retirement'
            fontSize='20px'
            lineHeight={'30px'}
            fontWeight='500'
            color='#808184'
            _dark={{
              color: 'gray.50',
            }}
            mt='2%'
          >
            Would you like to charge for your services?
          </FormLabel>
          <RadioGroup onChange={setValue} value={value}>
            <Stack direction='row'>
              <Radio value='1'>yes</Radio>
              <Radio value='2'>No</Radio>
            </Stack>
          </RadioGroup>
        </FormControl>

        <FormControl as={GridItem} colSpan={[6, 3]}>
          <FormLabel
            htmlFor='retirement'
            fontSize='20px'
            lineHeight={'30px'}
            fontWeight='500'
            color='#808184'
            _dark={{
              color: 'gray.50',
            }}
            mt='2%'
          >
            Currency you accept
          </FormLabel>
          <Input
            type='text'
            name='retirement'
            id='retirement'
            focusBorderColor='#808184'
            shadow='sm'
            size='sm'
            w='full'
            rounded='md'
          />
        </FormControl>

        <FormControl id='about' mt={1}>
          <FormLabel
            htmlFor='about'
            fontSize='20px'
            lineHeight={'30px'}
            fontWeight='500'
            color='#808184'
            _dark={{
              color: 'gray.50',
            }}
            mt='2%'
          >
            About you
          </FormLabel>
          <Textarea
            placeholder='(this will be visible to others along with your
				photo, so make it crisp and classy) I am Steve Jacob, an ex-banker with over 30  years of experience in Retail Banking. I have spent good amount of years with  JPMorgan Chase and Bank of America in the US.I am on RBR to network, mentor, and find some freelance work. I am also an excellent violinist as my hobby.'
            rows={6}
            shadow='sm'
            focusBorderColor='brand.400'
            fontSize={{
              sm: 'sm',
            }}
          />
          <FormHelperText>Max character limit - 1000</FormHelperText>
        </FormControl>
        <Center>
          <Heading mt={10} lineHeight={'24px'} fontWeight={500} fontSize={'24px'} color={'#773FC6'}>
            Preview as visitor
          </Heading>
        </Center>
      </Container>
    );
  };

  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };
  const [formData, setFormData] = useState({
    name: '',
  });
  const onSubmit = (e) => {
    e.preventDefault();
    //   Validate the form data.
    if (formData.name === '') {
      setFormData({
        ...formData,
        name: {
          validationState: 'error',
          validationMessage: 'Please enter your name.',
        },
      });
    } else if (formData.email === '') {
      setFormData({
        ...formData,
        email: {
          validationState: 'error',
          validationMessage: 'Please enter your email address.',
        },
      });
    } else {
      // The form data is valid, so submit it.
      console.log(formData);
    }
  };

  const [step, setStep] = useState(1);
  //   const [image, setImage] = useState('');

  const [file, setFile] = useState();

  //   const inputRef = useRef(null);
  //   const handleImage = () => {
  //     inputRef.current.click();
  //   };
  // const handleImageChange = (event) => {
  //   const file = event.target.files[0];
  //   console.log(file);
  //   setImage('event.target.files[0]');
  // };

  const onUpload = async (e) => {
    const base64 = await convertToBase64();
    setFile(base64);
  };
  return (
    <div className='Profile-main'>
      <div className='sidebar-profile'>
        {' '}
        <Sidebar />
      </div>

      <Box backgroundColor={'#F2F1F3'} background={'#F2F1F3'} width={'100%'} position={'relative'}>
        <Center mt={40} display={'flex'} flexDirection={'column'}>
          <Box align={'center'} border={'2px solid red'} width={'900px'}>
            <Heading color={'#000000'} lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
              Profile
            </Heading>
            <Flex float={'right'} boxSize={'130px'} cursor={'pointer'}>
              {/* <Image
                  is='input'
                  borderRadius='full'
                  boxSize='150px'
                  src='https://bit.ly/dan-abramov'
                  alt='Dan Abramov'
                /> */}

              <img
                style={{
                  borderRadius: '50%',
                }}
                src='https://bit.ly/dan-abramov'
                alt='Dan Abramov'
              />

              {/* <input
                onChange={handleImageChange}
                style={{
                  display: 'none',
                }}
                type='file'
                ref={inputRef}
              /> */}
            </Flex>
          </Box>
          <Stack spacing={120}>
            <Text
              justifySelf={'center'}
              maxW={'650px'}
              color={'#576D8C'}
              lineHeight={'20px'}
              fontWeight={700}
              fontSize={'14px'}
            >
              A photo that shows your face clearly is ideal. You know what else makes for a great profile picture? Your
              smile.
            </Text>
          </Stack>
          {/* <LinaerStepper /> */}
          <Stepper height={120} minW={'800px'} activeStep={activeStep} index={activeStep}>
            {steps.map((label, index) => (
              <div
                className='stapper-login'
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Step completed={completed}>
                  {/* <Step> */}
                  <StepIndicator width={46} height={46}>
                    <StepStatus
                      onClick={handleStep}
                      complete={<StepIcon />}
                      incomplete={<StepNumber />}
                      active={<StepNumber />}
                    />
                  </StepIndicator>
                  <StepSeparator />
                  {/* <Box flexShrink='40'> </Box> */}
                </Step>
              </div>
            ))}
          </Stepper>

          {step === 1 ? (
            <Form1 />
          ) : step === 2 ? (
            <Form2 />
          ) : step === 3 ? (
            <Form3 />
          ) : step === 4 ? (
            <Form4 />
          ) : (
            <Form5 />
          )}

          {/* <Flex>
            {activeStep !== 0 && <Button onClick={prevStep}>Previous</Button>}
            {activeStep !== 0 && <Button onClick={prevStep}></Button>}
            {activeStep !== 4 && <Button onClick={handleNext}>Next</Button>}
          </Flex> */}
        </Center>

        {/* <Text sx={{ mt: 2, mb: 1, py: 1 }}>Step {activeStep + 1}</Text> */}
        <center>
          <Box m={30}>
            <Button
              mr={10}
              width={'30%'}
              color='#773FC6'
              border={'1px solid #773FC6'}
              isDisabled={step === 1}
              onClick={() => {
                setStep(step - 1);

                handleBack();
              }}
            >
              Go back
            </Button>
            <Button
              width={'30%'}
              color={'#fff'}
              backgroundColor={'#773FC6'}
              isDisabled={step === 5}
              onClick={() => {
                setStep(step + 1);
                handleNext();
              }}
            >
              Next
            </Button>
          </Box>
        </center>
      </Box>
    </div>
  );
};

export default ProfileFirst;
