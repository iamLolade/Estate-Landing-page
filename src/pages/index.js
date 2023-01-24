import { Box } from '@chakra-ui/react'

// components
import Meta from '@/components/Meta'
import Navbar from '@/components/Navbar'
import Header from '@/components/Header'
import Services from '@/components/Services'

export default function Home() {
  return (
    <>
     <Box 
      h={'100vh'}
      bg={`url('https://i.ibb.co/k2T4D0D/gram-stones-banner-removebg-preview.png')`}
      bgRepeat='no-repeat'
      bgSize={'cover'}
     >
        <Meta />
        <Navbar />
        <Box h={'91.5vh'} overflowY={'scroll'}>
          <main>
            <Header />
            <Services />
          </main>
        </Box>
     </Box>
    </>
  )
}
