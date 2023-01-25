import React from 'react'
import { Box, Center, Flex, Heading, Icon, Text, Wrap, WrapItem } from '@chakra-ui/react'
import { FaAward } from 'react-icons/fa'
import { RiCommunityLine } from 'react-icons/ri'
import { MdVerified } from 'react-icons/md'

export default function Header() {
    return (
        <Box 
            bg='#E2E8F0'
            pb='.5em'
            id='header'
        >
            <Flex 
                align={'center'} 
                justify={'center'} 
                h={'60vh'}
                bg={`url('https://i.ibb.co/yqFg8Sv/pexels-evgeny-tchebotarev-2187605.jpg')`}
                bgRepeat='no-repeat'
                w='100vw'
                bgSize={'cover'}
                overlay='0.2'
                color='#fff'
            >
                <Heading as='h1' fontSize={'3em'}>
                    Your story starts with us.
                </Heading>
            </Flex>
            <Center my={'2em'} ml='1em'>
                <Wrap spacing={8}>
                    <WrapItem 
                        p='1em' 
                        w='350px'
                        boxShadow="lg"
                        borderRadius={6}
                        bg={'#fff'}
                        cursor='pointer'
                        _hover={{ transform: 'scale(1.03, 1.03)' }}
                    >
                        <Flex direction={'column'} align='center' justify={'center'} gap='5'>
                            <Box borderRadius={'50%'} py={1} px={2} bg={'#CD0406'}>
                                <Icon as={FaAward} boxSize={6} color='#fff' mb={0} />
                            </Box>
                            <Text fontSize='1.2em' fontWeight={700}>Awarded Agency</Text>
                            <Text fontSize='.9em' textAlign={'center'} color={'#64748B'}>
                                Divide details about your product or agency work into parts. A paragraph describing a feature will be enough.
                            </Text>
                        </Flex>
                    </WrapItem>
                    <WrapItem 
                        p='1em' 
                        w='350px'
                        boxShadow="lg"
                        borderRadius={6}
                        bg={'#fff'}
                        _hover={{ transform: 'scale(1.03, 1.03)' }}
                        cursor='pointer'
                    >
                        <Flex direction={'column'} align='center' justify={'center'} gap='6'>
                            <Box borderRadius={'50%'} p={1} px={2} bg={'#38BDF8'}>
                                <Icon as={RiCommunityLine} boxSize={6} color='#fff' />
                            </Box>
                            <Text fontSize='1.2em' fontWeight={700}>Management</Text>
                            <Text fontSize='.9em' textAlign={'center'} color={'#64748B'}>
                                Divide details about your product or agency work into parts. A paragraph describing a feature will be enough.
                            </Text>
                        </Flex>
                    </WrapItem>
                    <WrapItem 
                        p='1em' 
                        w='350px'
                        boxShadow="lg"
                        borderRadius={6}
                        cursor='pointer'
                        _hover={{ transform: 'scale(1.03, 1.03)' }}
                        bg={'#fff'}
                    >
                        <Flex direction={'column'} align='center' justify={'center'} gap='6'>
                            <Box borderRadius={'50%'} p={1} px={2} bg={'#34D399'}>
                                <Icon as={MdVerified} boxSize={6} color='#fff' />
                            </Box>
                            <Text fontSize='1.2em' fontWeight={700}>Best Locations</Text>
                            <Text fontSize='.9em' textAlign={'center'} color={'#64748B'}>
                                Divide details about your product or agency work into parts. A paragraph describing a feature will be enough.
                            </Text>
                        </Flex>
                    </WrapItem>
                </Wrap>
            </Center>
        </Box>
    )
}
