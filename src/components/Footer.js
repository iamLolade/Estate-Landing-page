import { Box, Flex, Image, Text } from "@chakra-ui/react"

export default function Footer() {
  return (
    <Box py={'3em'} px={'6em'} bg='#E2E8F0'>
        <Flex align={'center'} justify={'space-between'} my={'2em'}>
            <Box>
                <Text 
                    fontSize={'2em'}
                    fontWeight={800}
                    color='#334155'
                >
                    Let's keep in touch!
                </Text>
                <Text
                    fontSize={'.9em'} 
                    color='#64748B'
                >
                Find us on any of these platforms, we respond 1-2 business days.
                </Text>
                <Flex align={'center'} gap={6} mt='1em'>
                    <Image src='https://i.ibb.co/THKFGVF/twitter-1.png' h='9' />
                    <Image src='https://i.ibb.co/DLYBbFq/instagram-4.png' h='9' />
                    <Image src='https://i.ibb.co/tB88fVz/facebook-1.png' h='9' />
                </Flex>
            </Box>

            <Box>
                <Text color='#334155' fontWeight={800}>Email</Text>
                <Text color='#64748B' fontWeight={600}>gramstones@example.com</Text>
            </Box>
        </Flex>
        <Box borderBottom='.5px solid #CBD5E1' mb='1em' />
        <Text
            textAlign={'center'}
            color='#65758C'
            fontSize={'.9em'}
            fontWeight={800}
            mb={-6}
        >
            Copyright © 2023 Gram Stones by Ololade Otemade.
        </Text>
    </Box>
  )
}
