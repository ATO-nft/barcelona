// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: b9eDNiZEPvCSqD2WYWQrPJ
// Component: _dWxgLopYCd
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
import { Reveal } from '@plasmicpkgs/react-awesome-reveal' // plasmic-import: R6s1FdhksG/codeComponent
import BidButton from '../../BidButton' // plasmic-import: Msgi2616lMUHq/component

import { useScreenVariants as useScreenVariantspMm3HmCzTEcO } from '../copy_of_nft_deep_wire/PlasmicGlobalVariant__Screen' // plasmic-import: pMm3HmCz_TEcO_/globalVariant

import '@plasmicapp/react-web/lib/plasmic.css'

import projectcss from '../copy_of_nft_deep_wire/plasmic_copy_of_nft_deep_wire.module.css' // plasmic-import: b9eDNiZEPvCSqD2WYWQrPJ/projectcss
import sty from './PlasmicYakamoI2.module.css' // plasmic-import: _dWxgLopYCd/css

import ChecksvgIcon from '../copy_of_nft_deep_wire/icons/PlasmicIcon__Checksvg' // plasmic-import: mVkzgIShYP1SI2/icon
import IconIcon from '../copy_of_nft_deep_wire/icons/PlasmicIcon__Icon' // plasmic-import: pJBbZv2T8YqeGM/icon

export type PlasmicYakamoI2__VariantMembers = {}
export type PlasmicYakamoI2__VariantsArgs = {}
type VariantPropType = keyof PlasmicYakamoI2__VariantsArgs
export const PlasmicYakamoI2__VariantProps = new Array<VariantPropType>()

export type PlasmicYakamoI2__ArgsType = {}
type ArgPropType = keyof PlasmicYakamoI2__ArgsType
export const PlasmicYakamoI2__ArgProps = new Array<ArgPropType>()

export type PlasmicYakamoI2__OverridesType = {
  root?: p.Flex<'div'>
  header?: p.Flex<typeof Header>
  h2?: p.Flex<'h2'>
  reveal?: p.Flex<typeof Reveal>
  buy?: p.Flex<typeof BidButton>
  price?: p.Flex<'div'>
  msgBox?: p.Flex<'div'>
  nextId?: p.Flex<'h5'>
  next?: p.Flex<'span'>
  bidButton?: p.Flex<typeof BidButton>
  loader?: p.Flex<'div'>
  footer?: p.Flex<'div'>
}

export interface DefaultYakamoI2Props {}

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

function PlasmicYakamoI2__RenderFunc(props: {
  variants: PlasmicYakamoI2__VariantsArgs
  args: PlasmicYakamoI2__ArgsType
  overrides: PlasmicYakamoI2__OverridesType

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
        <meta name="twitter:card" content="summary_large_image" />
        <title key="title">{PlasmicYakamoI2.pageMetadata.title}</title>
        <meta key="og:title" property="og:title" content={PlasmicYakamoI2.pageMetadata.title} />
        <meta key="twitter:title" name="twitter:title" content={PlasmicYakamoI2.pageMetadata.title} />
        <meta key="description" name="description" content={PlasmicYakamoI2.pageMetadata.description} />
        <meta key="og:description" property="og:description" content={PlasmicYakamoI2.pageMetadata.description} />
        <meta key="twitter:description" name="twitter:description" content={PlasmicYakamoI2.pageMetadata.description} />
        <meta key="og:image" property="og:image" content={PlasmicYakamoI2.pageMetadata.ogImageSrc} />
        <meta key="twitter:image" name="twitter:image" content={PlasmicYakamoI2.pageMetadata.ogImageSrc} />
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
            <div className={classNames(projectcss.all, sty.freeBox__xjL5)}>
              <h2
                data-plasmic-name={'h2'}
                data-plasmic-override={overrides.h2}
                className={classNames(projectcss.all, projectcss.h2, projectcss.__wab_text, sty.h2)}>
                {hasVariant(globalVariants, 'screen', 'mobileOnly') ? (
                  <React.Fragment>
                    <span className={'plasmic_default__all plasmic_default__span'} style={{ color: '#FFFFFF' }}>
                      {'YAKAMOCOLOR I'}
                    </span>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <span className={'plasmic_default__all plasmic_default__span'} style={{ color: '#FFFFFF' }}>
                      {'Viola Grappe'}
                    </span>
                  </React.Fragment>
                )}
              </h2>

              <p.PlasmicImg
                alt={''}
                className={classNames(sty.img___2AeV)}
                displayHeight={hasVariant(globalVariants, 'screen', 'mobileOnly') ? ('auto' as const) : ('auto' as const)}
                displayMaxHeight={'none' as const}
                displayMaxWidth={'100%' as const}
                displayMinHeight={'0' as const}
                displayMinWidth={'0' as const}
                displayWidth={'auto' as const}
                loading={'lazy' as const}
                src={{
                  src: '/plasmic/copy_of_nft_deep_wire/images/violaGrappeXMapeintureProcompng.png',
                  fullWidth: 1059,
                  fullHeight: 389,
                  aspectRatio: undefined,
                }}
              />

              <h4 className={classNames(projectcss.all, projectcss.h4, projectcss.__wab_text, sty.h4__y9VwJ)}>
                <React.Fragment>
                  <React.Fragment>{'by '}</React.Fragment>
                  {
                    <p.PlasmicLink
                      className={classNames(projectcss.all, projectcss.a, projectcss.__wab_text, projectcss.plasmic_default__inline, sty.link__fqhTi)}
                      component={Link}
                      href={'https://mapeinturepro.com/' as const}
                      platform={'nextjs'}>
                      {'Mapeinturepro.com'}
                    </p.PlasmicLink>
                  }
                  <React.Fragment>{''}</React.Fragment>
                </React.Fragment>
              </h4>

              <h5 className={classNames(projectcss.all, projectcss.h5, projectcss.__wab_text, sty.h5__luAV)}>
                {
                  'Code RGB : R123 G47 B97\n\n12 NFT num??rot??s ?? 3 600 euros pi??ce.\n\nNFT comprenant utilisation de cette teinte dans les METAVERSE , sur tous supports + 300 m2 de la peinture r??volutionnaire HYBRIDE #12 de la marque fran??aise THE BLACK TOWER COMPANY.'
                }
              </h5>

              {true ? (
                <div className={classNames(projectcss.all, sty.freeBox__up2Zh)}>
                  {true ? (
                    <div className={classNames(projectcss.all, sty.freeBox__t1Nji)}>
                      <div className={classNames(projectcss.all, projectcss.__wab_text, sty.text__sfxiJ)}>
                        <React.Fragment>
                          <span className={'plasmic_default__all plasmic_default__span'} style={{ fontWeight: 700 }}>
                            {'45 000 EUR'}
                          </span>
                        </React.Fragment>
                      </div>

                      <h4 className={classNames(projectcss.all, projectcss.h4, projectcss.__wab_text, sty.h4___0KMfQ)}>{'Physical artwork'}</h4>
                    </div>
                  ) : null}
                  {(hasVariant(globalVariants, 'screen', 'mobileOnly') ? true : true) ? (
                    <p.PlasmicImg
                      alt={''}
                      className={classNames(sty.img__rCgK6)}
                      displayHeight={'auto' as const}
                      displayMaxHeight={'none' as const}
                      displayMaxWidth={'38.79%' as const}
                      displayMinHeight={'0' as const}
                      displayMinWidth={'0' as const}
                      displayWidth={'100%' as const}
                      loading={'lazy' as const}
                      src={{
                        src: '/plasmic/copy_of_nft_deep_wire/images/allegoryOfAgoraphobiajpg.jpeg',
                        fullWidth: 6030,
                        fullHeight: 3930,
                        aspectRatio: undefined,
                      }}
                    />
                  ) : null}
                </div>
              ) : null}
              {true ? (
                <h5 className={classNames(projectcss.all, projectcss.h5, projectcss.__wab_text, sty.h5__kuzw)}>
                  <React.Fragment>
                    <span className={'plasmic_default__all plasmic_default__span'} style={{ color: '#8C1C84', fontWeight: 700 }}>
                      {'1'}
                    </span>
                    <React.Fragment>{''}</React.Fragment>
                    <span className={'plasmic_default__all plasmic_default__span'} style={{ color: '#FBF0F0' }}>
                      {' / 1 e'}
                    </span>
                    <React.Fragment>{''}</React.Fragment>
                    <span className={'plasmic_default__all plasmic_default__span'} style={{ color: '#FFFFFF' }}>
                      {'dition'}
                    </span>
                  </React.Fragment>
                </h5>
              ) : null}
              {true ? (
                <Reveal
                  data-plasmic-name={'reveal'}
                  data-plasmic-override={overrides.reveal}
                  className={classNames('__wab_instance', sty.reveal)}
                  duration={3000 as const}
                  effect={'fade' as const}
                  triggerOnce={true}>
                  <BidButton data-plasmic-name={'buy'} data-plasmic-override={overrides.buy} className={classNames('__wab_instance', sty.buy)}>
                    <div className={classNames(projectcss.all, projectcss.__wab_text, sty.text___0CDoD)}>{'Buy'}</div>
                  </BidButton>

                  <div className={classNames(projectcss.all, sty.freeBox___643Ma)} />

                  {true ? (
                    <div className={classNames(projectcss.all, sty.freeBox__sSgQr)}>
                      {(hasVariant(globalVariants, 'screen', 'mobileOnly') ? true : true) ? (
                        <p.PlasmicImg
                          alt={''}
                          className={classNames(sty.img__xXg1W)}
                          displayHeight={'auto' as const}
                          displayMaxHeight={'none' as const}
                          displayMaxWidth={'38.79%' as const}
                          displayMinHeight={'0' as const}
                          displayMinWidth={'0' as const}
                          displayWidth={'100%' as const}
                          loading={'lazy' as const}
                          src={{
                            src: '/plasmic/copy_of_nft_deep_wire/images/allegoryOfAgoraphobiajpg.jpeg',
                            fullWidth: 6030,
                            fullHeight: 3930,
                            aspectRatio: undefined,
                          }}
                        />
                      ) : null}
                      {true ? (
                        <div className={classNames(projectcss.all, sty.freeBox__gYEbY)}>
                          <div className={classNames(projectcss.all, projectcss.__wab_text, sty.text__ziRX)}>
                            <React.Fragment>
                              <span className={'plasmic_default__all plasmic_default__span'} style={{ fontWeight: 700 }}>
                                {'200 EUR'}
                              </span>
                            </React.Fragment>
                          </div>

                          <h4 className={classNames(projectcss.all, projectcss.h4, projectcss.__wab_text, sty.h4___13A1T)}>{'Digital'}</h4>
                        </div>
                      ) : null}
                    </div>
                  ) : null}
                </Reveal>
              ) : null}
            </div>
          ) : null}
          {true ? (
            <div data-plasmic-name={'price'} data-plasmic-override={overrides.price} className={classNames(projectcss.all, sty.price)}>
              <div className={classNames(projectcss.all, projectcss.__wab_text, sty.text__vc56F)}>{'3 600 ???'}</div>

              {true ? <div className={classNames(projectcss.all, projectcss.__wab_text, sty.text__t3Jco)}>{'(??? 53 ???)'}</div> : null}
            </div>
          ) : null}
          {(hasVariant(globalVariants, 'screen', 'mobileOnly') ? true : true) ? (
            <div className={classNames(projectcss.all, sty.freeBox___6COz1)}>
              {true ? (
                <div
                  data-plasmic-name={'msgBox'}
                  data-plasmic-override={overrides.msgBox}
                  className={classNames(projectcss.all, projectcss.__wab_text, sty.msgBox)}>
                  {'[msg]'}
                </div>
              ) : null}

              <h5
                data-plasmic-name={'nextId'}
                data-plasmic-override={overrides.nextId}
                className={classNames(projectcss.all, projectcss.h5, projectcss.__wab_text, sty.nextId)}>
                <React.Fragment>
                  <React.Fragment>{''}</React.Fragment>
                  {
                    <span
                      data-plasmic-name={'next'}
                      data-plasmic-override={overrides.next}
                      className={classNames(projectcss.all, projectcss.span, projectcss.__wab_text, projectcss.plasmic_default__inline, sty.next)}>
                      <React.Fragment>
                        <span className={'plasmic_default__all plasmic_default__span'} style={{ color: '#8C1C84', fontWeight: 700 }}>
                          {'1'}
                        </span>
                      </React.Fragment>
                    </span>
                  }
                  <React.Fragment>{''}</React.Fragment>
                  <span className={'plasmic_default__all plasmic_default__span'} style={{ color: '#FBF0F0' }}>
                    {' / 12'}
                  </span>
                </React.Fragment>
              </h5>

              <BidButton
                data-plasmic-name={'bidButton'}
                data-plasmic-override={overrides.bidButton}
                className={classNames('__wab_instance', sty.bidButton)}>
                <div className={classNames(projectcss.all, projectcss.__wab_text, sty.text__pyFeb)}>{'Buy'}</div>
              </BidButton>
            </div>
          ) : null}

          <div data-plasmic-name={'loader'} data-plasmic-override={overrides.loader} className={classNames(projectcss.all, sty.loader)} />

          <div data-plasmic-name={'footer'} data-plasmic-override={overrides.footer} className={classNames(projectcss.all, sty.footer)}>
            <div className={classNames(projectcss.all, sty.freeBox__yOx5)}>
              <p.PlasmicLink
                className={classNames(projectcss.all, projectcss.a, projectcss.__wab_text, sty.link__b9BFi)}
                component={Link}
                platform={'nextjs'}>
                {hasVariant(globalVariants, 'screen', 'mobileOnly')
                  ? 'NFT Deep Wire\nAll rights reserved ?? 2022'
                  : 'NFT Deep Wire | All rights reserved ?? 2022'}
              </p.PlasmicLink>
            </div>

            {true ? (
              <div className={classNames(projectcss.all, sty.freeBox__rcv2E)}>
                <p.PlasmicLink
                  className={classNames(projectcss.all, projectcss.a, projectcss.__wab_text, sty.link__mCwiq)}
                  component={Link}
                  href={`/`}
                  platform={'nextjs'}>
                  {'Terms & conditions'}
                </p.PlasmicLink>

                {(hasVariant(globalVariants, 'screen', 'mobileOnly') ? true : false) ? (
                  <p.PlasmicLink
                    className={classNames(projectcss.all, projectcss.a, projectcss.__wab_text, sty.link__rx0Hr)}
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
  root: ['root', 'header', 'h2', 'reveal', 'buy', 'price', 'msgBox', 'nextId', 'next', 'bidButton', 'loader', 'footer'],
  header: ['header'],
  h2: ['h2'],
  reveal: ['reveal', 'buy'],
  buy: ['buy'],
  price: ['price'],
  msgBox: ['msgBox'],
  nextId: ['nextId', 'next'],
  next: ['next'],
  bidButton: ['bidButton'],
  loader: ['loader'],
  footer: ['footer'],
} as const
type NodeNameType = keyof typeof PlasmicDescendants
type DescendantsType<T extends NodeNameType> = (typeof PlasmicDescendants)[T][number]
type NodeDefaultElementType = {
  root: 'div'
  header: typeof Header
  h2: 'h2'
  reveal: typeof Reveal
  buy: typeof BidButton
  price: 'div'
  msgBox: 'div'
  nextId: 'h5'
  next: 'span'
  bidButton: typeof BidButton
  loader: 'div'
  footer: 'div'
}

type ReservedPropsType = 'variants' | 'args' | 'overrides'
type NodeOverridesType<T extends NodeNameType> = Pick<PlasmicYakamoI2__OverridesType, DescendantsType<T>>
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicYakamoI2__VariantsArgs
    args?: PlasmicYakamoI2__ArgsType
    overrides?: NodeOverridesType<T>
  } & Omit<PlasmicYakamoI2__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<PlasmicYakamoI2__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicYakamoI2__ArgProps,
          internalVariantPropNames: PlasmicYakamoI2__VariantProps,
        }),
      [props, nodeName]
    )

    return PlasmicYakamoI2__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    })
  }
  if (nodeName === 'root') {
    func.displayName = 'PlasmicYakamoI2'
  } else {
    func.displayName = `PlasmicYakamoI2.${nodeName}`
  }
  return func
}

export const PlasmicYakamoI2 = Object.assign(
  // Top-level PlasmicYakamoI2 renders the root element
  makeNodeComponent('root'),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent('header'),
    h2: makeNodeComponent('h2'),
    reveal: makeNodeComponent('reveal'),
    buy: makeNodeComponent('buy'),
    price: makeNodeComponent('price'),
    msgBox: makeNodeComponent('msgBox'),
    nextId: makeNodeComponent('nextId'),
    next: makeNodeComponent('next'),
    bidButton: makeNodeComponent('bidButton'),
    loader: makeNodeComponent('loader'),
    footer: makeNodeComponent('footer'),

    // Metadata about props expected for PlasmicYakamoI2
    internalVariantProps: PlasmicYakamoI2__VariantProps,
    internalArgProps: PlasmicYakamoI2__ArgProps,

    // Page metadata
    pageMetadata: {
      title: 'Viola Grappe',
      description: 'Viola Grappe',
      ogImageSrc: 'https://site-assets.plasmic.app/77734c8f4a01dce8c338a6079ebf44d4.png',
      canonical: '',
    },
  }
)

export default PlasmicYakamoI2
/* prettier-ignore-end */
