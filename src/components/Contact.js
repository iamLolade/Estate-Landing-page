import { 
    Box, Button, Center, Flex, FormControl, FormLabel, Input, Text, Textarea
} from "@chakra-ui/react"

const center = {
    margin: '0 auto',
}

export default function Contact() {
    return (
        <Box py={'3em'} bg='#1E293B' id='contact'>
            <Flex
                bg='#E2E8F0'
                py={'2em'}
                px={'4em'}
                w='fit-content'
                direction={'column'}
                justify={'center'}
                style={center}
                borderRadius='lg'
            >
                <Text 
                    color='#334155'
                    fontSize={'1.5em'}
                    fontWeight={800}
                    textAlign={'left'}
                >
                    Want to work with us?
                </Text>
                <Text fontSize={'.9em'} color='#64748B'>Complete this form and we will get back to you in 24 hours.</Text>

                <Box mt={'2em'}>
                    <form>
                        <FormControl>
                            <FormLabel 
                                textTransform={'uppercase'}
                                fontWeight={700}
                                fontSize={'.9em'} 
                                color={'#475569'}        
                            >
                                Full name
                            </FormLabel>
                            <Input 
                                boxShadow={'lg'} 
                                bg='#fff' 
                                placeholder="Full Name"
                                color='#CBD5E1'
                            />
                        </FormControl>
                        <FormControl mt='1em'>
                            <FormLabel 
                                textTransform={'uppercase'}
                                fontWeight={700}
                                fontSize={'.9em'} 
                                color={'#475569'}        
                            >
                                Email
                            </FormLabel>
                            <Input 
                                type='email'
                                boxShadow={'lg'} 
                                bg='#fff' 
                                placeholder="@example.com"
                                color='#CBD5E1'
                            />
                        </FormControl>
                        <FormControl mt='1em'>
                            <FormLabel 
                                textTransform={'uppercase'}
                                fontWeight={700}
                                fontSize={'.9em'} 
                                color={'#475569'}        
                            >
                                Message
                            </FormLabel>
                            <Textarea 
                                boxShadow={'lg'} 
                                bg='#fff' 
                                placeholder="Type a message..."
                                color='#CBD5E1'
                            />
                        </FormControl>
                        <Button
                            mt={'1em'}
                            cursor='pointer'
                            w='full'
                            color='#fff'
                            bg='#CD0406'
                            _hover={{ bg: '#CD0600' }}
                        >
                            Submit
                        </Button>
                    </form>
                </Box>
            </Flex>
        </Box>
    )
}
