// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: b9eDNiZEPvCSqD2WYWQrPJ
// Component: _CFEjPTng4w
import * as React from 'react'

import Head from 'next/head'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'

import * as p from '@plasmicapp/react-web'
import * as ph from '@plasmicapp/host'

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants,
} from '@plasmicapp/react-web'
import Header from '../../Header' // plasmic-import: TDk-aeZzGqhn4i/component

import { useScreenVariants as useScreenVariantspMm3HmCzTEcO } from '../copy_of_nft_deep_wire/PlasmicGlobalVariant__Screen' // plasmic-import: pMm3HmCz_TEcO_/globalVariant

import '@plasmicapp/react-web/lib/plasmic.css'

import projectcss from '../copy_of_nft_deep_wire/plasmic_copy_of_nft_deep_wire.module.css' // plasmic-import: b9eDNiZEPvCSqD2WYWQrPJ/projectcss
import sty from './PlasmicPressRelease.module.css' // plasmic-import: _CFEjPTng4w/css

export type PlasmicPressRelease__VariantMembers = {}
export type PlasmicPressRelease__VariantsArgs = {}
type VariantPropType = keyof PlasmicPressRelease__VariantsArgs
export const PlasmicPressRelease__VariantProps = new Array<VariantPropType>()

export type PlasmicPressRelease__ArgsType = {}
type ArgPropType = keyof PlasmicPressRelease__ArgsType
export const PlasmicPressRelease__ArgProps = new Array<ArgPropType>()

export type PlasmicPressRelease__OverridesType = {
  root?: p.Flex<'div'>
  header?: p.Flex<typeof Header>
  h5?: p.Flex<'h5'>
  footer?: p.Flex<'div'>
}

export interface DefaultPressReleaseProps {}

const __wrapUserFunction = globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn())
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise
  })

function useNextRouter() {
  try {
    return useRouter()
  } catch {}
  return undefined
}

function PlasmicPressRelease__RenderFunc(props: {
  variants: PlasmicPressRelease__VariantsArgs
  args: PlasmicPressRelease__ArgsType
  overrides: PlasmicPressRelease__OverridesType

  forNode?: string
}) {
  const { variants, overrides, forNode } = props
  const __nextRouter = useNextRouter()

  const $ctx = ph.useDataEnv?.() || {}
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args])

  const $props = {
    ...args,
    ...variants,
  }
  const refsRef = React.useRef({})
  const $refs = refsRef.current

  const currentUser = p.useCurrentUser?.() || {}
  const [$queries, setDollarQueries] = React.useState({})

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantspMm3HmCzTEcO(),
  })

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicPressRelease.pageMetadata.title}</title>
        <meta key="og:title" property="og:title" content={PlasmicPressRelease.pageMetadata.title} />
        <meta key="twitter:title" name="twitter:title" content={PlasmicPressRelease.pageMetadata.title} />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={'root'}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}>
          <Header data-plasmic-name={'header'} data-plasmic-override={overrides.header} className={classNames('__wab_instance', sty.header)} />

          {(hasVariant(globalVariants, 'screen', 'mobileOnly') ? true : true) ? (
            <div className={classNames(projectcss.all, sty.freeBox___1ICh)}>
              {(hasVariant(globalVariants, 'screen', 'mobileOnly') ? true : false) ? (
                <h2 className={classNames(projectcss.all, projectcss.h2, projectcss.__wab_text, sty.h2__xan56)}>
                  {hasVariant(globalVariants, 'screen', 'mobileOnly') ? (
                    <React.Fragment>
                      <span className={'plasmic_default__all plasmic_default__span'} style={{ color: '#FFFFFF' }}>
                        {'Press Release'}
                      </span>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <span className={'plasmic_default__all plasmic_default__span'} style={{ color: '#FFFFFF' }}>
                        {'NFT Deep Wire'}
                      </span>
                    </React.Fragment>
                  )}
                </h2>
              ) : null}

              <p.PlasmicLink
                className={classNames(projectcss.all, projectcss.a, sty.link__cqPXn)}
                component={Link}
                href={`/allegory-of-agoraphobia`}
                platform={'nextjs'}>
                {true ? (
                  <div className={classNames(projectcss.all, sty.freeBox__nxwJ4)}>
                    {(hasVariant(globalVariants, 'screen', 'mobileOnly') ? true : true) ? (
                      <h2 className={classNames(projectcss.all, projectcss.h2, projectcss.__wab_text, sty.h2__bfmwh)}>
                        {hasVariant(globalVariants, 'screen', 'mobileOnly') ? (
                          <React.Fragment>
                            <span className={'plasmic_default__all plasmic_default__span'} style={{ color: '#FFFFFF' }}>
                              {'Jesus Fernandez Escobar'}
                            </span>
                          </React.Fragment>
                        ) : (
                          <React.Fragment>
                            <span className={'plasmic_default__all plasmic_default__span'} style={{ color: '#FFFFFF' }}>
                              {'Press Release'}
                            </span>
                          </React.Fragment>
                        )}
                      </h2>
                    ) : null}
                  </div>
                ) : null}
              </p.PlasmicLink>

              <h5
                data-plasmic-name={'h5'}
                data-plasmic-override={overrides.h5}
                className={classNames(projectcss.all, projectcss.h5, projectcss.__wab_text, sty.h5)}>
                {
                  'FOR IMMEDIATE RELEASE\n\nNFTDeepWire Launches a Curated Marketplace for Digital Art during Paris Blockchain Week 2023.\n\nParis, France - NFTDeepWire, a curated marketplace for digital art, is proud to announce its official launch during Paris Blockchain Week, taking place from March 20th to 24th. NFTDeepWire is committed to providing a transparent, accessible platform for artists to showcase and sell their digital creations.\n\nThe NFTDeepWire team is comprised of experts from the traditional art world, who have brought their wealth of experience to the digital realm. The marketplace is dedicated to featuring only the highest quality artists and artwork, ensuring that collectors can purchase with confidence.\n\nAt NFTDeepWire, protecting the intellectual property of artists is of utmost importance. That\'s why the platform uses smart contracts with the best IP protection, ensuring that artists can showcase and sell their work without worrying about piracy or unauthorized use.\n\n"Our team is thrilled to launch NFTDeepWire during Paris Blockchain Week," said the company\'s spokesperson. "We believe that the digital art market has the potential to revolutionize the way we think about art, and we are dedicated to being at the forefront of this exciting new movement. Our curated marketplace is more than just a platform for buying and selling digital art - it\'s a community of artists, collectors, and enthusiasts who share a passion for creativity and innovation."\n\nNFTDeepWire is excited to be a part of Paris Blockchain Week, which brings together some of the most innovative minds in the industry. The team looks forward to connecting with attendees and showcasing the potential of digital art.\n\nAbout NFTDeepWire\n\nNFTDeepWire is a curated marketplace for digital art, dedicated to providing a transparent, accessible platform for artists to showcase and sell their creations. The marketplace uses smart contracts with the best IP protection, ensuring that artists can confidently showcase and sell their work without worrying about piracy or unauthorized use. NFTDeepWire is committed to excellence in the selection of artists and artwork, fostering a community that encourages collaboration, exploration, and growth.\n\nContact:\n\nEmail: info@nftdeepwire.com\nWebsite: https://nftdeepwire.com/'
                }
              </h5>
            </div>
          ) : null}

          <div data-plasmic-name={'footer'} data-plasmic-override={overrides.footer} className={classNames(projectcss.all, sty.footer)}>
            <div className={classNames(projectcss.all, sty.freeBox__bAvmm)}>
              <p.PlasmicLink
                className={classNames(projectcss.all, projectcss.a, projectcss.__wab_text, sty.link__o73By)}
                component={Link}
                platform={'nextjs'}>
                {hasVariant(globalVariants, 'screen', 'mobileOnly')
                  ? 'NFT Deep Wire\nAll rights reserved ?? 2022'
                  : 'NFT Deep Wire | All rights reserved ?? 2022'}
              </p.PlasmicLink>
            </div>

            {true ? (
              <div className={classNames(projectcss.all, sty.freeBox__w2M)}>
                <p.PlasmicLink
                  className={classNames(projectcss.all, projectcss.a, projectcss.__wab_text, sty.link__aVoJ)}
                  component={Link}
                  href={`/`}
                  platform={'nextjs'}>
                  {'Terms & conditions'}
                </p.PlasmicLink>

                {(hasVariant(globalVariants, 'screen', 'mobileOnly') ? true : false) ? (
                  <p.PlasmicLink
                    className={classNames(projectcss.all, projectcss.a, projectcss.__wab_text, sty.link__mQAwn)}
                    component={Link}
                    platform={'nextjs'}>
                    {'Contact us'}
                  </p.PlasmicLink>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null
}

const PlasmicDescendants = {
  root: ['root', 'header', 'h5', 'footer'],
  header: ['header'],
  h5: ['h5'],
  footer: ['footer'],
} as const
type NodeNameType = keyof typeof PlasmicDescendants
type DescendantsType<T extends NodeNameType> = (typeof PlasmicDescendants)[T][number]
type NodeDefaultElementType = {
  root: 'div'
  header: typeof Header
  h5: 'h5'
  footer: 'div'
}

type ReservedPropsType = 'variants' | 'args' | 'overrides'
type NodeOverridesType<T extends NodeNameType> = Pick<PlasmicPressRelease__OverridesType, DescendantsType<T>>
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPressRelease__VariantsArgs
    args?: PlasmicPressRelease__ArgsType
    overrides?: NodeOverridesType<T>
  } & Omit<PlasmicPressRelease__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<PlasmicPressRelease__ArgsType, ReservedPropsType> &
    /* Specify overrides for each element directly as props*/ Omit<NodeOverridesType<T>, ReservedPropsType | VariantPropType | ArgPropType> &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key }
  const func = function <T extends PropsType>(props: T & StrictProps<T, PropsType>) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicPressRelease__ArgProps,
          internalVariantPropNames: PlasmicPressRelease__VariantProps,
        }),
      [props, nodeName]
    )

    return PlasmicPressRelease__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    })
  }
  if (nodeName === 'root') {
    func.displayName = 'PlasmicPressRelease'
  } else {
    func.displayName = `PlasmicPressRelease.${nodeName}`
  }
  return func
}

export const PlasmicPressRelease = Object.assign(
  // Top-level PlasmicPressRelease renders the root element
  makeNodeComponent('root'),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent('header'),
    h5: makeNodeComponent('h5'),
    footer: makeNodeComponent('footer'),

    // Metadata about props expected for PlasmicPressRelease
    internalVariantProps: PlasmicPressRelease__VariantProps,
    internalArgProps: PlasmicPressRelease__ArgProps,

    // Page metadata
    pageMetadata: {
      title: 'Press Release',
      description: '',
      ogImageSrc: '',
      canonical: '',
    },
  }
)

export default PlasmicPressRelease
/* prettier-ignore-end */
