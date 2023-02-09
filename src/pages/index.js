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
     >
        <Meta />
        <Navbar />
        <Box h={'94vh'} overflowY={'scroll'}>
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
