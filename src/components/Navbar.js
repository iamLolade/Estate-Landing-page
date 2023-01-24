import { Flex, Heading, Text } from "@chakra-ui/react"
import Link from "next/link"

export default function Navbar() {
  return (
    <Flex
        align={'center'}
        justify={'space-between'}
        py='1em'
        px='2em'
        bg='transparent'
    >
        <Heading 
            as='h1' 
            fontSize={'1.2em'} 
            fontWeight={900}
            textTransform={'uppercase'}
            color='#868686'
        >
            Gram <Text as='b' fontWeight={900} color='#CD0406'>Stones</Text>
        </Heading>

        <Flex 
            align={'center'} 
            color='#CD0406' 
            gap='6'
            fontWeight={800}
            fontSize={'.9em'}
        >
            <Link href='#services'>
                <Text 
                    px='1em'
                    py='.5em' 
                    _hover={{bg: '#CD0406', color: '#fff'}} 
                    borderRadius={'md'}
                    cursor='pointer'
                >
                    Services
                </Text>
            </Link>
            <Link href='#contact'>
                <Text
                    px='1em' 
                    py='.5em' 
                    _hover={{bg: '#CD0406', color: '#fff'}} 
                    borderRadius={'md'}
                    cursor='pointer'
                >
                    Contact
                </Text>
            </Link>
        </Flex>
    </Flex>
  )
}
