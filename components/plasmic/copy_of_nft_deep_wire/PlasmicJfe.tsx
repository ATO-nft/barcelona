// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: b9eDNiZEPvCSqD2WYWQrPJ
// Component: U8q8zPNQ6Cqsk
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

import { useScreenVariants as useScreenVariantspMm3HmCzTEcO } from './PlasmicGlobalVariant__Screen' // plasmic-import: pMm3HmCz_TEcO_/globalVariant

import '@plasmicapp/react-web/lib/plasmic.css'

import projectcss from './plasmic_copy_of_nft_deep_wire.module.css' // plasmic-import: b9eDNiZEPvCSqD2WYWQrPJ/projectcss
import sty from './PlasmicJfe.module.css' // plasmic-import: U8q8zPNQ6Cqsk/css

export type PlasmicJfe__VariantMembers = {}
export type PlasmicJfe__VariantsArgs = {}
type VariantPropType = keyof PlasmicJfe__VariantsArgs
export const PlasmicJfe__VariantProps = new Array<VariantPropType>()

export type PlasmicJfe__ArgsType = {}
type ArgPropType = keyof PlasmicJfe__ArgsType
export const PlasmicJfe__ArgProps = new Array<ArgPropType>()

export type PlasmicJfe__OverridesType = {
  root?: p.Flex<'div'>
  header?: p.Flex<typeof Header>
  h4?: p.Flex<'h4'>
  h5?: p.Flex<'h5'>
  footer?: p.Flex<'div'>
}

export interface DefaultJfeProps {}

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

function PlasmicJfe__RenderFunc(props: {
  variants: PlasmicJfe__VariantsArgs
  args: PlasmicJfe__ArgsType
  overrides: PlasmicJfe__OverridesType

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
        <title key="title">{PlasmicJfe.pageMetadata.title}</title>
        <meta key="og:title" property="og:title" content={PlasmicJfe.pageMetadata.title} />
        <meta key="twitter:title" name="twitter:title" content={PlasmicJfe.pageMetadata.title} />
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
            <div className={classNames(projectcss.all, sty.freeBox__pXKia)}>
              {(hasVariant(globalVariants, 'screen', 'mobileOnly') ? true : false) ? (
                <h2 className={classNames(projectcss.all, projectcss.h2, projectcss.__wab_text, sty.h2__cXt1)}>
                  {hasVariant(globalVariants, 'screen', 'mobileOnly') ? (
                    <React.Fragment>
                      <span className={'plasmic_default__all plasmic_default__span'} style={{ color: '#FFFFFF' }}>
                        {'Jesus Fernandez Escobar'}
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
                className={classNames(projectcss.all, projectcss.a, sty.link__gYg87)}
                component={Link}
                href={`/allegory-of-agoraphobia`}
                platform={'nextjs'}>
                {true ? (
                  <div className={classNames(projectcss.all, sty.freeBox__lVxVu)}>
                    {(hasVariant(globalVariants, 'screen', 'mobileOnly') ? true : true) ? (
                      <h2 className={classNames(projectcss.all, projectcss.h2, projectcss.__wab_text, sty.h2___1PRbs)}>
                        {hasVariant(globalVariants, 'screen', 'mobileOnly') ? (
                          <React.Fragment>
                            <span className={'plasmic_default__all plasmic_default__span'} style={{ color: '#FFFFFF' }}>
                              {'Jesus Fernandez Escobar'}
                            </span>
                          </React.Fragment>
                        ) : (
                          <React.Fragment>
                            <span className={'plasmic_default__all plasmic_default__span'} style={{ color: '#FFFFFF' }}>
                              {'Jesus Fernandez Escobar'}
                            </span>
                          </React.Fragment>
                        )}
                      </h2>
                    ) : null}

                    <p.PlasmicImg
                      alt={''}
                      className={classNames(sty.img__q4KGe)}
                      displayHeight={'auto' as const}
                      displayMaxHeight={'none' as const}
                      displayMaxWidth={'100%' as const}
                      displayMinHeight={'0' as const}
                      displayMinWidth={'0' as const}
                      displayWidth={'auto' as const}
                      loading={'lazy' as const}
                      src={{
                        src: '/plasmic/copy_of_nft_deep_wire/images/allegoryOfAgoraphobiajpg.jpeg',
                        fullWidth: 6030,
                        fullHeight: 3930,
                        aspectRatio: undefined,
                      }}
                    />
                  </div>
                ) : null}
              </p.PlasmicLink>

              <h4
                data-plasmic-name={'h4'}
                data-plasmic-override={overrides.h4}
                className={classNames(projectcss.all, projectcss.h4, projectcss.__wab_text, sty.h4)}>
                <React.Fragment>
                  <React.Fragment>{'by '}</React.Fragment>
                  <span className={'plasmic_default__all plasmic_default__span'} style={{ color: '#FFFFFF' }}>
                    {'Jesus Fernandez Escobar'}
                  </span>
                </React.Fragment>
              </h4>

              <h5
                data-plasmic-name={'h5'}
                data-plasmic-override={overrides.h5}
                className={classNames(projectcss.all, projectcss.h5, projectcss.__wab_text, sty.h5)}>
                {
                  'The Allegory of Agoraphobia NFT page is a digital art collection created by the talented artist Jesus Fernandez Escobar. This unique collection features a range of neo-impressionist artworks that are sure to captivate and inspire art enthusiasts and collectors alike.\n\nJesus Fernandez Escobar\'s Allegory of Agoraphobia collection is a testament to his artistic talent and his ability to create beautiful and thought-provoking works of art. \nThis particular piece is a commentary on the psychosis caused by the virus in social relations, and the resulting agoraphobia that people experience when attempting to return to a "normal" life. \n\nThrough the use of irony, the artist expresses how society\'s behavior has drastically changed during this crisis, with people going to extreme lengths to protect themselves while facing an uncertain future. This work highlights the difference between how individuals and the masses react to these issues, and invites viewers to contemplate the impact of the pandemic on society as a whole.'
                }
              </h5>

              <div className={classNames(projectcss.all, sty.freeBox__b593I)}>
                <p.PlasmicLink
                  className={classNames(projectcss.all, projectcss.a, sty.link__rzNd)}
                  component={Link}
                  href={`/allegory-of-agoraphobia`}
                  platform={'nextjs'}>
                  <p.PlasmicImg
                    alt={'' as const}
                    className={classNames(sty.img__lnp2)}
                    displayHeight={'180px' as const}
                    displayMaxHeight={'none' as const}
                    displayMaxWidth={'none' as const}
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
                </p.PlasmicLink>

                <p.PlasmicLink
                  className={classNames(projectcss.all, projectcss.a, sty.link__znTwJ)}
                  component={Link}
                  href={`/counting-the-days`}
                  platform={'nextjs'}>
                  <p.PlasmicImg
                    alt={'' as const}
                    className={classNames(sty.img__gGWrV)}
                    displayHeight={'180px' as const}
                    displayMaxHeight={'none' as const}
                    displayMaxWidth={'none' as const}
                    displayMinHeight={'0' as const}
                    displayMinWidth={'0' as const}
                    displayWidth={'100%' as const}
                    loading={'lazy' as const}
                    src={{
                      src: '/plasmic/copy_of_nft_deep_wire/images/countingTheDaysjpg.jpeg',
                      fullWidth: 3641,
                      fullHeight: 5446,
                      aspectRatio: undefined,
                    }}
                  />
                </p.PlasmicLink>

                <p.PlasmicLink
                  className={classNames(projectcss.all, projectcss.a, sty.link__j0SDo)}
                  component={Link}
                  href={`/under-the-watchful-eye`}
                  platform={'nextjs'}>
                  <p.PlasmicImg
                    alt={'' as const}
                    className={classNames(sty.img___6Btlk)}
                    displayHeight={'180px' as const}
                    displayMaxHeight={'none' as const}
                    displayMaxWidth={'none' as const}
                    displayMinHeight={'0' as const}
                    displayMinWidth={'0' as const}
                    displayWidth={'100%' as const}
                    loading={'lazy' as const}
                    src={{
                      src: '/plasmic/copy_of_nft_deep_wire/images/underTheWatchfulEyejpg.jpeg',
                      fullWidth: 5080,
                      fullHeight: 3798,
                      aspectRatio: undefined,
                    }}
                  />
                </p.PlasmicLink>
              </div>
            </div>
          ) : null}

          <div data-plasmic-name={'footer'} data-plasmic-override={overrides.footer} className={classNames(projectcss.all, sty.footer)}>
            <div className={classNames(projectcss.all, sty.freeBox__cevN)}>
              <p.PlasmicLink
                className={classNames(projectcss.all, projectcss.a, projectcss.__wab_text, sty.link__z7192)}
                component={Link}
                platform={'nextjs'}>
                {hasVariant(globalVariants, 'screen', 'mobileOnly')
                  ? 'NFT Deep Wire\nAll rights reserved © 2022'
                  : 'NFT Deep Wire | All rights reserved © 2022'}
              </p.PlasmicLink>
            </div>

            {true ? (
              <div className={classNames(projectcss.all, sty.freeBox___1IzHr)}>
                <p.PlasmicLink
                  className={classNames(projectcss.all, projectcss.a, projectcss.__wab_text, sty.link__qTZsb)}
                  component={Link}
                  href={`/`}
                  platform={'nextjs'}>
                  {'Terms & conditions'}
                </p.PlasmicLink>

                {(hasVariant(globalVariants, 'screen', 'mobileOnly') ? true : false) ? (
                  <p.PlasmicLink
                    className={classNames(projectcss.all, projectcss.a, projectcss.__wab_text, sty.link__ys42F)}
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
  root: ['root', 'header', 'h4', 'h5', 'footer'],
  header: ['header'],
  h4: ['h4'],
  h5: ['h5'],
  footer: ['footer'],
} as const
type NodeNameType = keyof typeof PlasmicDescendants
type DescendantsType<T extends NodeNameType> = (typeof PlasmicDescendants)[T][number]
type NodeDefaultElementType = {
  root: 'div'
  header: typeof Header
  h4: 'h4'
  h5: 'h5'
  footer: 'div'
}

type ReservedPropsType = 'variants' | 'args' | 'overrides'
type NodeOverridesType<T extends NodeNameType> = Pick<PlasmicJfe__OverridesType, DescendantsType<T>>
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicJfe__VariantsArgs
    args?: PlasmicJfe__ArgsType
    overrides?: NodeOverridesType<T>
  } & Omit<PlasmicJfe__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<PlasmicJfe__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicJfe__ArgProps,
          internalVariantPropNames: PlasmicJfe__VariantProps,
        }),
      [props, nodeName]
    )

    return PlasmicJfe__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    })
  }
  if (nodeName === 'root') {
    func.displayName = 'PlasmicJfe'
  } else {
    func.displayName = `PlasmicJfe.${nodeName}`
  }
  return func
}

export const PlasmicJfe = Object.assign(
  // Top-level PlasmicJfe renders the root element
  makeNodeComponent('root'),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent('header'),
    h4: makeNodeComponent('h4'),
    h5: makeNodeComponent('h5'),
    footer: makeNodeComponent('footer'),

    // Metadata about props expected for PlasmicJfe
    internalVariantProps: PlasmicJfe__VariantProps,
    internalArgProps: PlasmicJfe__ArgProps,

    // Page metadata
    pageMetadata: {
      title: 'Jesus Fernandez Escobar',
      description: '',
      ogImageSrc: '',
      canonical: '',
    },
  }
)

export default PlasmicJfe
/* prettier-ignore-end */
