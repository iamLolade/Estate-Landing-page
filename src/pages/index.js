import { Box } from '@chakra-ui/react'

// components
import Meta from '@/components/Meta'
import Navbar from '@/components/Navbar'
import Header from '@/components/Header'
import Services from '@/components/Services'
import Team from '@/components/Team'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
     <Box 
      h={'100vh'}
      // bg={`url('https://i.ibb.co/k2T4D0D/gram-stones-banner-removebg-preview.png')`}
      bgRepeat='no-repeat'
      bgSize={'contain'}
      // blur='2xl'
     >
        <Meta />
        <Navbar />
        <Box h={'91.5vh'} overflowY={'scroll'}>
          <main>
            <Header />
            <Services />
            <Team />
            <Contact />
          </main>
          <Footer />
        </Box>
     </Box>
    </>
  )
}
