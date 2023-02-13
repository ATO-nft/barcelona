/* eslint-disable prettier/prettier */
import '../styles/globals.css'
import { PlasmicRootProvider } from '@plasmicapp/react-web'
import Head from 'next/head'
import { Web3Provider } from 'providers/Web3'
import { ChakraProvider } from 'providers/Chakra'
import { useIsMounted } from 'hooks/useIsMounted'
import { Seo } from 'components/layout/Seo'

function App({ Component, pageProps }) {
  const isMounted = useIsMounted()

  return (
    <ChakraProvider>
      <Seo />
      <Web3Provider>
        {isMounted && (
          <PlasmicRootProvider Head={Head}>
            <Component {...pageProps} />
          </PlasmicRootProvider>
        )}
      </Web3Provider>
    </ChakraProvider>
  )
}

export default App
