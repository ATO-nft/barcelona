// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: b9eDNiZEPvCSqD2WYWQrPJ
// Component: gm2WwyNce5_
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
import sty from './PlasmicGuillaumeEtLaurie.module.css' // plasmic-import: gm2WwyNce5_/css

export type PlasmicGuillaumeEtLaurie__VariantMembers = {}
export type PlasmicGuillaumeEtLaurie__VariantsArgs = {}
type VariantPropType = keyof PlasmicGuillaumeEtLaurie__VariantsArgs
export const PlasmicGuillaumeEtLaurie__VariantProps = new Array<VariantPropType>()

export type PlasmicGuillaumeEtLaurie__ArgsType = {}
type ArgPropType = keyof PlasmicGuillaumeEtLaurie__ArgsType
export const PlasmicGuillaumeEtLaurie__ArgProps = new Array<ArgPropType>()

export type PlasmicGuillaumeEtLaurie__OverridesType = {
  root?: p.Flex<'div'>
  header?: p.Flex<typeof Header>
  h4?: p.Flex<'h4'>
  h5?: p.Flex<'h5'>
  footer?: p.Flex<'div'>
}

export interface DefaultGuillaumeEtLaurieProps {}

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

function PlasmicGuillaumeEtLaurie__RenderFunc(props: {
  variants: PlasmicGuillaumeEtLaurie__VariantsArgs
  args: PlasmicGuillaumeEtLaurie__ArgsType
  overrides: PlasmicGuillaumeEtLaurie__OverridesType

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
        <title key="title">{PlasmicGuillaumeEtLaurie.pageMetadata.title}</title>
        <meta key="og:title" property="og:title" content={PlasmicGuillaumeEtLaurie.pageMetadata.title} />
        <meta key="twitter:title" name="twitter:title" content={PlasmicGuillaumeEtLaurie.pageMetadata.title} />
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
            <div className={classNames(projectcss.all, sty.freeBox__rhgpU)}>
              {(hasVariant(globalVariants, 'screen', 'mobileOnly') ? true : false) ? (
                <h2 className={classNames(projectcss.all, projectcss.h2, projectcss.__wab_text, sty.h2__wdCKb)}>
                  {hasVariant(globalVariants, 'screen', 'mobileOnly') ? (
                    <React.Fragment>
                      <span className={'plasmic_default__all plasmic_default__span'} style={{ color: '#FFFFFF' }}>
                        {'Guillaume et Laurie'}
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
                className={classNames(projectcss.all, projectcss.a, sty.link__xgZFr)}
                component={Link}
                href={`/allegory-of-agoraphobia`}
                platform={'nextjs'}>
                {true ? (
                  <div className={classNames(projectcss.all, sty.freeBox__iVzEy)}>
                    {(hasVariant(globalVariants, 'screen', 'mobileOnly') ? true : true) ? (
                      <h2 className={classNames(projectcss.all, projectcss.h2, projectcss.__wab_text, sty.h2__irPg)}>
                        {hasVariant(globalVariants, 'screen', 'mobileOnly') ? (
                          <React.Fragment>
                            <span className={'plasmic_default__all plasmic_default__span'} style={{ color: '#FFFFFF' }}>
                              {'Jesus Fernandez Escobar'}
                            </span>
                          </React.Fragment>
                        ) : (
                          <React.Fragment>
                            <span className={'plasmic_default__all plasmic_default__span'} style={{ color: '#FFFFFF' }}>
                              {'Guillaume et Laurie'}
                            </span>
                          </React.Fragment>
                        )}
                      </h2>
                    ) : null}

                    <p.PlasmicLink
                      className={classNames(projectcss.all, projectcss.a, sty.link__o7Xva)}
                      component={Link}
                      href={`/yakamocolor-I`}
                      platform={'nextjs'}>
                      <p.PlasmicImg
                        alt={''}
                        className={classNames(sty.img__xuSOh)}
                        displayHeight={'auto' as const}
                        displayMaxHeight={'none' as const}
                        displayMaxWidth={'100%' as const}
                        displayMinHeight={'0' as const}
                        displayMinWidth={'0' as const}
                        displayWidth={'auto' as const}
                        loading={'lazy' as const}
                        src={{
                          src: '/plasmic/copy_of_nft_deep_wire/images/yakamocolorIByGuillaumeEtLaurieXMaPeinturePro2022V02Jpg.jpeg',
                          fullWidth: 3508,
                          fullHeight: 4961,
                          aspectRatio: undefined,
                        }}
                      />
                    </p.PlasmicLink>
                  </div>
                ) : null}
              </p.PlasmicLink>

              <h4
                data-plasmic-name={'h4'}
                data-plasmic-override={overrides.h4}
                className={classNames(projectcss.all, projectcss.h4, projectcss.__wab_text, sty.h4)}>
                {'by Guillaume et Laurie'}
              </h4>

              <h5
                data-plasmic-name={'h5'}
                data-plasmic-override={overrides.h5}
                className={classNames(projectcss.all, projectcss.h5, projectcss.__wab_text, sty.h5)}>
                <React.Fragment>
                  <React.Fragment>{'A collab between '}</React.Fragment>
                  {
                    <p.PlasmicLink
                      className={classNames(projectcss.all, projectcss.a, projectcss.__wab_text, projectcss.plasmic_default__inline, sty.link__mVqN0)}
                      component={Link}
                      href={'https://www.guillaumelaurie.com/' as const}
                      platform={'nextjs'}>
                      {'Guillaume & Laurie'}
                    </p.PlasmicLink>
                  }
                  <React.Fragment>{' and '}</React.Fragment>
                  {
                    <p.PlasmicLink
                      className={classNames(projectcss.all, projectcss.a, projectcss.__wab_text, projectcss.plasmic_default__inline, sty.link__lQymp)}
                      component={Link}
                      href={'https://mapeinturepro.com/' as const}
                      platform={'nextjs'}>
                      {'MaPeinturePro.com'}
                    </p.PlasmicLink>
                  }
                  <React.Fragment>{'.'}</React.Fragment>
                </React.Fragment>
              </h5>

              <div className={classNames(projectcss.all, sty.freeBox__xPUs)}>
                <p.PlasmicLink
                  className={classNames(projectcss.all, projectcss.a, sty.link__v58Em)}
                  component={Link}
                  href={`/yakamocolor-I`}
                  platform={'nextjs'}
                  target={undefined}>
                  <p.PlasmicImg
                    alt={'' as const}
                    className={classNames(sty.img__rOqJq)}
                    displayHeight={'180px' as const}
                    displayMaxHeight={'none' as const}
                    displayMaxWidth={'none' as const}
                    displayMinHeight={'0' as const}
                    displayMinWidth={'0' as const}
                    displayWidth={'100%' as const}
                    loading={'lazy' as const}
                    src={{
                      src: '/plasmic/copy_of_nft_deep_wire/images/yakamocolorIByGuillaumeEtLaurieXMaPeinturePro2022V02Jpg.jpeg',
                      fullWidth: 3508,
                      fullHeight: 4961,
                      aspectRatio: undefined,
                    }}
                  />
                </p.PlasmicLink>

                <p.PlasmicLink
                  className={classNames(projectcss.all, projectcss.a, sty.link__ttJNr)}
                  component={Link}
                  href={`/yakamo-I`}
                  platform={'nextjs'}
                  target={undefined}>
                  <p.PlasmicImg
                    alt={'' as const}
                    className={classNames(sty.img__dqmHh)}
                    displayHeight={'180px' as const}
                    displayMaxHeight={'none' as const}
                    displayMaxWidth={'none' as const}
                    displayMinHeight={'0' as const}
                    displayMinWidth={'0' as const}
                    displayWidth={'100%' as const}
                    loading={'lazy' as const}
                    src={{
                      src: '/plasmic/copy_of_nft_deep_wire/images/yakamoIByGuillaumeEtLaurieXMaPeinturePro2022V02Jpg.jpeg',
                      fullWidth: 3508,
                      fullHeight: 4961,
                      aspectRatio: undefined,
                    }}
                  />
                </p.PlasmicLink>
              </div>
            </div>
          ) : null}

          <div data-plasmic-name={'footer'} data-plasmic-override={overrides.footer} className={classNames(projectcss.all, sty.footer)}>
            <div className={classNames(projectcss.all, sty.freeBox__rz9Km)}>
              <p.PlasmicLink
                className={classNames(projectcss.all, projectcss.a, projectcss.__wab_text, sty.link__hf3Lg)}
                component={Link}
                platform={'nextjs'}>
                {hasVariant(globalVariants, 'screen', 'mobileOnly')
                  ? 'NFT Deep Wire\nAll rights reserved © 2022'
                  : 'NFT Deep Wire | All rights reserved © 2022'}
              </p.PlasmicLink>
            </div>

            {true ? (
              <div className={classNames(projectcss.all, sty.freeBox__qvl6L)}>
                <p.PlasmicLink
                  className={classNames(projectcss.all, projectcss.a, projectcss.__wab_text, sty.link__jzy0I)}
                  component={Link}
                  href={`/vision`}
                  platform={'nextjs'}>
                  {'Terms & conditions'}
                </p.PlasmicLink>

                {(hasVariant(globalVariants, 'screen', 'mobileOnly') ? true : false) ? (
                  <p.PlasmicLink
                    className={classNames(projectcss.all, projectcss.a, projectcss.__wab_text, sty.link__elEk9)}
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
type NodeOverridesType<T extends NodeNameType> = Pick<PlasmicGuillaumeEtLaurie__OverridesType, DescendantsType<T>>
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicGuillaumeEtLaurie__VariantsArgs
    args?: PlasmicGuillaumeEtLaurie__ArgsType
    overrides?: NodeOverridesType<T>
  } & Omit<PlasmicGuillaumeEtLaurie__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<PlasmicGuillaumeEtLaurie__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicGuillaumeEtLaurie__ArgProps,
          internalVariantPropNames: PlasmicGuillaumeEtLaurie__VariantProps,
        }),
      [props, nodeName]
    )

    return PlasmicGuillaumeEtLaurie__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    })
  }
  if (nodeName === 'root') {
    func.displayName = 'PlasmicGuillaumeEtLaurie'
  } else {
    func.displayName = `PlasmicGuillaumeEtLaurie.${nodeName}`
  }
  return func
}

export const PlasmicGuillaumeEtLaurie = Object.assign(
  // Top-level PlasmicGuillaumeEtLaurie renders the root element
  makeNodeComponent('root'),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent('header'),
    h4: makeNodeComponent('h4'),
    h5: makeNodeComponent('h5'),
    footer: makeNodeComponent('footer'),

    // Metadata about props expected for PlasmicGuillaumeEtLaurie
    internalVariantProps: PlasmicGuillaumeEtLaurie__VariantProps,
    internalArgProps: PlasmicGuillaumeEtLaurie__ArgProps,

    // Page metadata
    pageMetadata: {
      title: 'Guillaume et Laurie',
      description: '',
      ogImageSrc: '',
      canonical: '',
    },
  }
)

export default PlasmicGuillaumeEtLaurie
/* prettier-ignore-end */
