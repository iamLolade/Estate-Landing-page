import { Box, Center, Flex, Stack, Text } from "@chakra-ui/react"

export default function Services() {
    return (
        <Box my={'2em'}>
            <Center>
                <Stack direction={['column', 'row']} spacing={80}>
                    <Flex direction='column'>
                        <Text>Working with us is a pleasure</Text>
                    </Flex>
                    <Flex direction='column'>
                        <Text>Working with us is a pleasure</Text>
                    </Flex>
                </Stack>
            </Center>
        </Box>
    )
}
