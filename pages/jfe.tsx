/* eslint-disable prettier/prettier */
import * as React from 'react'
import * as ph from '@plasmicapp/host'
import GlobalContextsProvider from '../components/plasmic/copy_of_nft_deep_wire/PlasmicGlobalContextsProvider'
import { ScreenVariantProvider } from '../components/plasmic/copy_of_nft_deep_wire/PlasmicGlobalVariant__Screen'
import { PlasmicJfe } from '../components/plasmic/copy_of_nft_deep_wire/PlasmicJfe'
import { useRouter } from 'next/router'

function Jfe() {
  return (
    <GlobalContextsProvider>
      <ph.PageParamsProvider params={useRouter()?.query} query={useRouter()?.query}>
        <PlasmicJfe />
      </ph.PageParamsProvider>
    </GlobalContextsProvider>
  )
}

export default Jfe
