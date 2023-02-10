import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react"

export default function Footer() {
  return (
    <Box py={'3em'} px={{base: '2em', lg: '6em'}} bg='#E2E8F0'>
        <Flex my={'2em'} textAlign={'center'} justify={'center'} spacing={{base: 35, md: 40, lg: 'auto'}}>
            <Box>
                <Text 
                    fontSize={'2em'}
                    fontWeight={800}
                    color='#334155'
                >
                    Let's keep in touch!
                </Text>
                <Text color='#334155' fontWeight={800}>Email: company@example.com</Text>
                <Text
                    fontSize={'.9em'} 
                    color='#64748B'
                    mt={'1.5em'}
                    fontWeight={700}
                >
                Find us on any of these platforms, we respond 1-2 business days.
                </Text>
                <Flex align={'center'} justify={'center'} gap={6} mt='1em'>
                    <Image src='https://i.ibb.co/THKFGVF/twitter-1.png' h='9' alt='twitter' />
                    <Image src='https://i.ibb.co/DLYBbFq/instagram-4.png' h='9' alt='instagram' />
                    <Image src='https://i.ibb.co/tB88fVz/facebook-1.png' h='9' alt='facebook'/>
                </Flex>
            </Box>

            <Box textAlign={{base: 'left', md: 'right', lg: 'right'}}>
                <Text color='#64748B' fontWeight={600}></Text>
            </Box>
        </Flex>
        <Box borderBottom='1px solid #CBD5E1' my='1em' />
        <Text
            textAlign={'center'}
            color='#65758C'
            fontSize={{base: '.7em', lg: '.9em'}}
            fontWeight={500}
            mb={-6}
        >
            Copyright © 2023 Company Name by Ololade Otemade.
        </Text>
    </Box>
  )
}
