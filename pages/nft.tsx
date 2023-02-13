/* eslint-disable prettier/prettier */
import * as ph from '@plasmicapp/host'
import GlobalContextsProvider from '../components/plasmic/copy_of_nft_deep_wire/PlasmicGlobalContextsProvider'
import { PlasmicNft } from '../components/plasmic/copy_of_nft_deep_wire/PlasmicNft'
import { useRouter } from 'next/router'

function Nft() {
  return (
    <GlobalContextsProvider>
      <ph.PageParamsProvider params={useRouter()?.query} query={useRouter()?.query}>
        <PlasmicNft />
      </ph.PageParamsProvider>
    </GlobalContextsProvider>
  )
}

export default Nft
