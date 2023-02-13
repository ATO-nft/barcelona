/* eslint-disable prettier/prettier */
import * as React from 'react'
import { PlasmicHeader, DefaultHeaderProps } from './plasmic/copy_of_nft_deep_wire/PlasmicHeader'
import { HTMLElementRefOf } from '@plasmicapp/react-web'
import { ConnectKitButton } from 'connectkit'

export interface HeaderProps extends DefaultHeaderProps {}

function Header_(props: HeaderProps, ref: HTMLElementRefOf<'div'>) {
  return (
    <PlasmicHeader
      root={{ ref }}
      {...props}
      connect={{
        render: () => <ConnectKitButton />,
      }}
    />
  )
}

const Header = React.forwardRef(Header_)
export default Header
