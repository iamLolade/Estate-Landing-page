import { 
    Box, Center, Flex, Icon, Stack, Text,
    Image
} from "@chakra-ui/react"
import { TiGroup } from 'react-icons/ti'

export default function Services() {
    return (
        <Box my={'3em'}>
            <Center my={'2em'}>
                <Stack direction={['column', 'row']} spacing={80}>
                    <Flex 
                        direction='column' 
                        gap={6} 
                        bg='#E2E8F0'
                        borderRadius='lg'
                        p='2em'
                        px={'4em'}
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
                    >
                        <Image w='100%' />
                    </Flex>
                </Stack>
            </Center>
            <Center my={'2em'}>
                <Stack direction={['column', 'row']} spacing={80}>
                    <Flex 
                        direction='column'
                        borderRadius='lg'
                    >
                        <Image w='100%' />
                    </Flex>

                    <Flex 
                        direction='column' 
                        gap={6} 
                        bg='#E2E8F0'
                        borderRadius='lg'
                        p='2em'
                        px={'4em'}
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
                </Stack>
            </Center>
        </Box>
    )
}
