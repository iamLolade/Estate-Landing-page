import { 
    Box, Center, Flex, Icon, Stack, Text,
    Image
} from "@chakra-ui/react"
import { TiGroup } from 'react-icons/ti'
import { GiStumpRegrowth } from 'react-icons/gi'

export default function Services() {
    return (
        <Box my={'3em'} mx={'1em'} id='services'>
            <Center my={'6em'}>
                <Stack direction={['column', 'row']} spacing={35}>
                    <Flex 
                        direction='column' 
                        gap={6} 
                        bg='#E2E8F0'
                        borderRadius='lg'
                        p='2em'
                        px={{base: '1em', lg: '3em'}}
                    >
                        <Box p={2} px={3} borderRadius='50%' bg='#fff' w='fit-content' boxShadow='lg'>
                            <Icon as={TiGroup} boxSize={8} color='#CD0406' />
                        </Box>
                        <Text 
                            fontSize={{base: '1.2em', lg: '1.5em'}}
                            fontWeight={700}
                            color='#334155'
                        >
                            Working with us is a pleasure
                        </Text>
                        <Text w={{base: '100%', md: 340, lg: 400}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                            <br /> <br />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        </Text>
                        
                    </Flex>

                    <Flex 
                        direction='column'
                        borderRadius='lg'
                        w={{ base: '100%', lg: 500}}   
                    >
                        <Image w='100%' h='400' src='https://i.ibb.co/2MBqvwS/pexels-rodnae-productions-8293778.jpg' borderRadius='lg' alt='service1'/>
                    </Flex>
                </Stack>
            </Center>
            <Center my={'6em'}>
                <Stack direction={['column', 'row']} spacing={35}>
                    <Flex 
                        direction='column'
                        borderRadius='lg'
                        w={{ base: '100%', lg: 500}}   
                    >
                        <Image w='100%' h='400' src='https://i.ibb.co/2PJyFHH/pexels-graphicgumcom-1115804.jpg' borderRadius='lg' alt='service2' />
                    </Flex>

                    <Flex 
                        direction='column' 
                        gap={6} 
                        bg='#E2E8F0'
                        borderRadius='lg'
                        p='2em'
                        px={{base: '1em', lg: '3em'}}
                    >
                        <Box p={2} px={3} borderRadius='50%' bg='#fff' w='fit-content' boxShadow='lg'>
                            <Icon as={GiStumpRegrowth} boxSize={8} color='#CD0406' />
                        </Box>
                        <Text 
                            fontSize={'1.5em'}
                            fontWeight={700}
                            color='#334155'
                        >
                            We are a growing company
                        </Text>
                        <Text w={{base: '100%', md: 340, lg: 400}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                            <br /> <br />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        </Text>
                    </Flex>
                </Stack>
            </Center>
        </Box>
    )
}
