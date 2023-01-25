import { Avatar, Box, Center, Flex, Text, Wrap, WrapItem } from "@chakra-ui/react"

export default function Team() {
    return (
        <Box mt={'2em'} py={'3em'} bg='#1E293B'> 
            <Center
                p={'2em'}
                px={'4em'}
                borderRadius={'lg'}
                d='flex'
                flexDirection={'column'}
            >
                <Text
                    fontSize={'2em'}
                    fontWeight={900}
                    color='#fff'
                    mb={'2em'}
                >
                    Meet the Team
                </Text>
                <Wrap spacing={16}>
                    <WrapItem>
                        <Flex direction={'column'} gap={4} align={'center'}>
                            <Avatar size='xl' src='https://bit.ly/kent-c-dodds' name='John Doe' />
                            <Text
                                fontSize={'1.3em'}
                                fontWeight={800}
                                color='#fff'
                                mb={-3}
                            >
                                John Doe
                            </Text>
                            <Text 
                                color={'#94A3B8'} 
                                fontSize={'.9em'}
                                fontWeight={700}
                            >
                                Founder and CEO
                            </Text>
                        </Flex>
                    </WrapItem>
                    <WrapItem>
                        <Flex direction={'column'} gap={4} align={'center'} justify={'center'}>
                            <Avatar size='xl' src='https://bit.ly/sage-adebayo' name='Foluso Fayoade' />
                            <Text
                                fontSize={'1.3em'}
                                fontWeight={800}
                                color='#fff'
                                mb={-3}
                            >
                                Foluso Fayoade
                            </Text>
                            <Text 
                                color={'#94A3B8'} 
                                fontSize={'.9em'}
                                fontWeight={700}
                            >
                                Marketing Specialist
                            </Text>
                        </Flex>
                    </WrapItem>
                    <WrapItem>
                        <Flex direction={'column'} gap={4} align={'center'}>
                            <Avatar size='xl' src='https://bit.ly/prosper-baba' name='Adesina Asonibare' />
                            <Text
                                fontSize={'1.3em'}
                                fontWeight={800}
                                color='#fff'
                                mb={-3}
                            >
                                Adesina Asonibare
                            </Text>
                            <Text 
                                color={'#94A3B8'} 
                                fontSize={'.9em'}
                                fontWeight={700}
                            >
                                Lead Realtor
                            </Text>
                        </Flex>
                    </WrapItem>
                    <WrapItem>
                        <Flex direction={'column'} gap={4} align={'center'}>
                            <Avatar size='xl' src='https://bit.ly/code-beast' name='Otunba Badmus' />
                            <Text
                                fontSize={'1.3em'}
                                fontWeight={800}
                                color='#fff'
                                mb={-3}
                            >
                                Otunba Badmus
                            </Text>
                            <Text 
                                color={'#94A3B8'} 
                                fontSize={'.9em'}
                                fontWeight={700}
                            >
                                Field Engineer
                            </Text>
                        </Flex>
                    </WrapItem>
                </Wrap>
            </Center>
        </Box>
    )
}
