// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: b9eDNiZEPvCSqD2WYWQrPJ
// Component: s5gea_spR-HZ-T
import * as React from 'react'

import Head from 'next/head'
import Link, { LinkProps } from 'next/link'

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
import Footer from '../../Footer' // plasmic-import: t3fhTTkD-uCWE6/component

import { useScreenVariants as useScreenVariantspMm3HmCzTEcO } from './PlasmicGlobalVariant__Screen' // plasmic-import: pMm3HmCz_TEcO_/globalVariant

import '@plasmicapp/react-web/lib/plasmic.css'

import projectcss from './plasmic_copy_of_nft_deep_wire.module.css' // plasmic-import: b9eDNiZEPvCSqD2WYWQrPJ/projectcss
import sty from './PlasmicAbout.module.css' // plasmic-import: s5gea_spR-HZ-T/css

export type PlasmicAbout__VariantMembers = {}
export type PlasmicAbout__VariantsArgs = {}
type VariantPropType = keyof PlasmicAbout__VariantsArgs
export const PlasmicAbout__VariantProps = new Array<VariantPropType>()

export type PlasmicAbout__ArgsType = {}
type ArgPropType = keyof PlasmicAbout__ArgsType
export const PlasmicAbout__ArgProps = new Array<ArgPropType>()

export type PlasmicAbout__OverridesType = {
  root?: p.Flex<'div'>
  header?: p.Flex<typeof Header>
  freeBox?: p.Flex<'div'>
  h5?: p.Flex<'h5'>
  footer?: p.Flex<typeof Footer>
}

export interface DefaultAboutProps {}

const __wrapUserFunction = globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn())
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise
  })

function PlasmicAbout__RenderFunc(props: {
  variants: PlasmicAbout__VariantsArgs
  args: PlasmicAbout__ArgsType
  overrides: PlasmicAbout__OverridesType

  forNode?: string
}) {
  const { variants, overrides, forNode } = props

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
      <Head></Head>

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

          {(hasVariant(globalVariants, 'screen', 'mobileOnly') ? true : false) ? (
            <h2 className={classNames(projectcss.all, projectcss.h2, projectcss.__wab_text, sty.h2__tp8Sd)}>
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
          {(hasVariant(globalVariants, 'screen', 'mobileOnly') ? true : true) ? (
            <div data-plasmic-name={'freeBox'} data-plasmic-override={overrides.freeBox} className={classNames(projectcss.all, sty.freeBox)}>
              {(hasVariant(globalVariants, 'screen', 'mobileOnly') ? true : true) ? (
                <h2 className={classNames(projectcss.all, projectcss.h2, projectcss.__wab_text, sty.h2__xuwrq)}>
                  {hasVariant(globalVariants, 'screen', 'mobileOnly') ? (
                    <React.Fragment>
                      <span className={'plasmic_default__all plasmic_default__span'} style={{ color: '#FFFFFF' }}>
                        {'Jesus Fernandez Escobar'}
                      </span>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <span className={'plasmic_default__all plasmic_default__span'} style={{ color: '#FFFFFF' }}>
                        {'About'}
                      </span>
                    </React.Fragment>
                  )}
                </h2>
              ) : null}

              <h5
                data-plasmic-name={'h5'}
                data-plasmic-override={overrides.h5}
                className={classNames(projectcss.all, projectcss.h5, projectcss.__wab_text, sty.h5)}>
                {
                  'About the NFT Deep Wire. About the NFT Deep Wire. About the NFT Deep Wire. About the NFT Deep Wire. About the NFT Deep Wire. About the NFT Deep Wire. About the NFT Deep Wire. About the NFT Deep Wire. About the NFT Deep Wire. About the NFT Deep Wire. About the NFT Deep Wire. About the NFT Deep Wire. About the NFT Deep Wire. About the NFT Deep Wire. About the NFT Deep Wire. About the NFT Deep Wire. About the NFT Deep Wire. About the NFT Deep Wire. About the NFT Deep Wire. About the NFT Deep Wire. About the NFT Deep Wire.\n\nAbout the NFT Deep Wire. About the NFT Deep Wire. About the NFT Deep Wire. About the NFT Deep Wire. About the NFT Deep Wire. About the NFT Deep Wire. About the NFT Deep Wire. About the NFT Deep Wire. About the NFT Deep Wire. About the NFT Deep Wire. About the NFT Deep Wire. About the NFT Deep Wire. About the NFT Deep Wire. About the NFT Deep Wire. About the NFT Deep Wire. About the NFT Deep Wire. About the NFT Deep Wire. About the NFT Deep Wire. About the NFT Deep Wire. About the NFT Deep Wire. About the NFT Deep Wire.\n\nAbout the NFT Deep Wire. About the NFT Deep Wire. About the NFT Deep Wire. About the NFT Deep Wire. About the NFT Deep Wire. About the NFT Deep Wire. About the NFT Deep Wire. About the NFT Deep Wire. About the NFT Deep Wire. About the NFT Deep Wire. About the NFT Deep Wire. About the NFT Deep Wire. About the NFT Deep Wire. About the NFT Deep Wire. About the NFT Deep Wire. About the NFT Deep Wire. About the NFT Deep Wire. About the NFT Deep Wire. About the NFT Deep Wire. About the NFT Deep Wire. About the NFT Deep Wire.\n\nAbout the NFT Deep Wire. About the NFT Deep Wire. About the NFT Deep Wire. About the NFT Deep Wire. About the NFT Deep Wire. About the NFT Deep Wire. About the NFT Deep Wire. About the NFT Deep Wire. About the NFT Deep Wire. About the NFT Deep Wire. About the NFT Deep Wire. About the NFT Deep Wire. About the NFT Deep Wire. About the NFT Deep Wire. About the NFT Deep Wire. About the NFT Deep Wire. About the NFT Deep Wire. About the NFT Deep Wire. About the NFT Deep Wire. About the NFT Deep Wire. About the NFT Deep Wire.'
                }
              </h5>

              {(hasVariant(globalVariants, 'screen', 'mobileOnly') ? true : false) ? (
                <h2 className={classNames(projectcss.all, projectcss.h2, projectcss.__wab_text, sty.h2__pP9Nf)}>
                  {hasVariant(globalVariants, 'screen', 'mobileOnly') ? (
                    <React.Fragment>
                      <span className={'plasmic_default__all plasmic_default__span'} style={{ color: '#FFFFFF' }}>
                        {'Jesus Fernandez Escobar'}
                      </span>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <span className={'plasmic_default__all plasmic_default__span'} style={{ color: '#FFFFFF' }}>
                        {'About'}
                      </span>
                    </React.Fragment>
                  )}
                </h2>
              ) : null}
            </div>
          ) : null}

          <Footer data-plasmic-name={'footer'} data-plasmic-override={overrides.footer} className={classNames('__wab_instance', sty.footer)} />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null
}

const PlasmicDescendants = {
  root: ['root', 'header', 'freeBox', 'h5', 'footer'],
  header: ['header'],
  freeBox: ['freeBox', 'h5'],
  h5: ['h5'],
  footer: ['footer'],
} as const
type NodeNameType = keyof typeof PlasmicDescendants
type DescendantsType<T extends NodeNameType> = (typeof PlasmicDescendants)[T][number]
type NodeDefaultElementType = {
  root: 'div'
  header: typeof Header
  freeBox: 'div'
  h5: 'h5'
  footer: typeof Footer
}

type ReservedPropsType = 'variants' | 'args' | 'overrides'
type NodeOverridesType<T extends NodeNameType> = Pick<PlasmicAbout__OverridesType, DescendantsType<T>>
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAbout__VariantsArgs
    args?: PlasmicAbout__ArgsType
    overrides?: NodeOverridesType<T>
  } & Omit<PlasmicAbout__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<PlasmicAbout__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicAbout__ArgProps,
          internalVariantPropNames: PlasmicAbout__VariantProps,
        }),
      [props, nodeName]
    )

    return PlasmicAbout__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    })
  }
  if (nodeName === 'root') {
    func.displayName = 'PlasmicAbout'
  } else {
    func.displayName = `PlasmicAbout.${nodeName}`
  }
  return func
}

export const PlasmicAbout = Object.assign(
  // Top-level PlasmicAbout renders the root element
  makeNodeComponent('root'),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent('header'),
    freeBox: makeNodeComponent('freeBox'),
    h5: makeNodeComponent('h5'),
    footer: makeNodeComponent('footer'),

    // Metadata about props expected for PlasmicAbout
    internalVariantProps: PlasmicAbout__VariantProps,
    internalArgProps: PlasmicAbout__ArgProps,

    // Page metadata
    pageMetadata: {
      title: '',
      description: '',
      ogImageSrc: '',
      canonical: '',
    },
  }
)

export default PlasmicAbout
/* prettier-ignore-end */
