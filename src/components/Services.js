import { 
    Box, Center, Flex, Icon, Stack, Text,
    Image
} from "@chakra-ui/react"
import { TiGroup } from 'react-icons/ti'
import { GiStumpRegrowth } from 'react-icons/gi'

export default function Services() {
    return (
        <Box my={'3em'} id='services'>
            <Center my={'6em'}>
                <Stack direction={['column', 'row']} spacing={35}>
                    <Flex 
                        direction='column' 
                        gap={6} 
                        bg='#E2E8F0'
                        borderRadius='lg'
                        p='2em'
                        px={'3em'}
                    >
                        <Box p={2} px={3} borderRadius='50%' bg='#fff' w='fit-content' boxShadow='lg'>
                            <Icon as={TiGroup} boxSize={8} color='#CD0406' />
                        </Box>
                        <Text 
                            fontSize={'1.5em'}
                            fontWeight={700}
                            color='#334155'
                        >
                            Working with us is a pleasure
                        </Text>
                        <Text w={400}>
                            Don't let your uses guess by attaching tooltips and popoves to any element. Just make sure you enable them first via JavaScript.
                        </Text>
                        <Text w={400}>
                            The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go. Just make sure you enable them first via JavaScript.
                        </Text>
                    </Flex>

                    <Flex 
                        direction='column'
                        borderRadius='lg'
                        w={500}   
                    >
                        <Image w='100%' h='400' src='https://i.ibb.co/2MBqvwS/pexels-rodnae-productions-8293778.jpg' borderRadius='lg' />
                    </Flex>
                </Stack>
            </Center>
            <Center my={'6em'}>
                <Stack direction={['column', 'row']} spacing={35}>
                    <Flex 
                        direction='column'
                        borderRadius='lg'
                        w={500}
                    >
                        <Image w='100%' h='400' src='https://i.ibb.co/2PJyFHH/pexels-graphicgumcom-1115804.jpg' borderRadius='lg' />
                    </Flex>

                    <Flex 
                        direction='column' 
                        gap={6} 
                        bg='#E2E8F0'
                        borderRadius='lg'
                        p='2em'
                        px={'3em'}
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
                        <Text w={400}>
                            Don't let your uses guess by attaching tooltips and popoves to any element. Just make sure you enable them first via JavaScript.
                        </Text>
                        <Text w={400}>
                            The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go. Just make sure you enable them first via JavaScript.
                        </Text>
                    </Flex>
                </Stack>
            </Center>
        </Box>
    )
}
