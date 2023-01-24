import { Box } from '@chakra-ui/react'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Meta from '@/components/Meta'
import Navbar from '@/components/Navbar'
import Header from '@/components/Header'

export default function Home() {
  return (
    <>
     <Box h={'100vh'}>
        <Meta />
        <Navbar />
        <Box h={'91.5vh'} overflowY={'scroll'}>
          <main>
            <Header />
          </main>
        </Box>
     </Box>
    </>
  )
}
