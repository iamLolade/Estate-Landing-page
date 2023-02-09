import { Flex, Heading, Image, Text } from "@chakra-ui/react"
import Link from "next/link"

export default function Navbar() {
  return (
    <Flex
        align={'center'}
        justify={'space-between'}
        py='1em'
        px={{base: '1em', lg: '4em'}}
        bg='transparent'
    >
        <Link href='#header'>
            <Flex align={'center'}>
                {/* <Image src='https://i.ibb.co/z4MwJYN/IMG-20230124-WA0002-removebg-preview.png' h='10' /> */}
                <Heading 
                    as='h1' 
                    fontSize={'1.2em'} 
                    fontWeight={900}
                    textTransform={'uppercase'}
                    color='#868686'
                >
                    Company <Text as='b' fontWeight={900} color='#CD0406'>Name</Text>
                </Heading>
            </Flex>
        </Link>

        <Flex 
            align={'center'} 
            color='#334155' 
            gap={{base: '1', md: '3', lg: '4'}}
            fontWeight={800}
            fontSize={{base: '.7em', md: '.9em', lg: '.9em'}}
        >
            <Link href='#services'>
                <Text 
                    px='.8em'
                    py='.5em' 
                    // _hover={{bg: '#CD0406', color: '#fff'}} 
                    _hover={{ color: '#CD0406', borderBottom: '2.5px solid #CD0406'}}
                    cursor='pointer'
                >
                    Services
                </Text>
            </Link>
            <Link href='#contact'>
                <Text
                    px='1em' 
                    py='.5em' 
                    // _hover={{bg: '#CD0406', color: '#fff'}} 
                    _hover={{ color: '#CD0406', borderBottom: '2.5px solid #CD0406'}}
                    cursor='pointer'
                >
                    Contact
                </Text>
            </Link>
        </Flex>
    </Flex>
  )
}
