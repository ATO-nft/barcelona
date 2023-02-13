// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: b9eDNiZEPvCSqD2WYWQrPJ
// Component: A76YuAnBPnNbw1
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

import { useScreenVariants as useScreenVariantspMm3HmCzTEcO } from './PlasmicGlobalVariant__Screen' // plasmic-import: pMm3HmCz_TEcO_/globalVariant

import '@plasmicapp/react-web/lib/plasmic.css'

import projectcss from './plasmic_copy_of_nft_deep_wire.module.css' // plasmic-import: b9eDNiZEPvCSqD2WYWQrPJ/projectcss
import sty from './PlasmicVision.module.css' // plasmic-import: A76YuAnBPnNbw1/css

export type PlasmicVision__VariantMembers = {}
export type PlasmicVision__VariantsArgs = {}
type VariantPropType = keyof PlasmicVision__VariantsArgs
export const PlasmicVision__VariantProps = new Array<VariantPropType>()

export type PlasmicVision__ArgsType = {}
type ArgPropType = keyof PlasmicVision__ArgsType
export const PlasmicVision__ArgProps = new Array<ArgPropType>()

export type PlasmicVision__OverridesType = {
  root?: p.Flex<'div'>
  header?: p.Flex<typeof Header>
  h5?: p.Flex<'h5'>
  footer?: p.Flex<'div'>
}

export interface DefaultVisionProps {}

const __wrapUserFunction = globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn())
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise
  })

function PlasmicVision__RenderFunc(props: {
  variants: PlasmicVision__VariantsArgs
  args: PlasmicVision__ArgsType
  overrides: PlasmicVision__OverridesType

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

          {(hasVariant(globalVariants, 'screen', 'mobileOnly') ? true : true) ? (
            <div className={classNames(projectcss.all, sty.freeBox__xeXNz)}>
              {(hasVariant(globalVariants, 'screen', 'mobileOnly') ? true : true) ? (
                <h2 className={classNames(projectcss.all, projectcss.h2, projectcss.__wab_text, sty.h2__io7Re)}>
                  {hasVariant(globalVariants, 'screen', 'mobileOnly') ? (
                    <React.Fragment>
                      <span className={'plasmic_default__all plasmic_default__span'} style={{ color: '#FFFFFF' }}>
                        {'Jesus Fernandez Escobar'}
                      </span>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <span className={'plasmic_default__all plasmic_default__span'} style={{ color: '#FFFFFF' }}>
                        {'Vision'}
                      </span>
                    </React.Fragment>
                  )}
                </h2>
              ) : null}
              {(hasVariant(globalVariants, 'screen', 'mobileOnly') ? true : false) ? (
                <h2 className={classNames(projectcss.all, projectcss.h2, projectcss.__wab_text, sty.h2__oo0Le)}>
                  {hasVariant(globalVariants, 'screen', 'mobileOnly') ? (
                    <React.Fragment>
                      <span className={'plasmic_default__all plasmic_default__span'} style={{ color: '#FFFFFF' }}>
                        {'Vision'}
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

              <h5
                data-plasmic-name={'h5'}
                data-plasmic-override={overrides.h5}
                className={classNames(projectcss.all, projectcss.h5, projectcss.__wab_text, sty.h5)}>
                {
                  'Our vision is clear and simple: art is life. Our vision is clear and simple: art is life. Our vision is clear and simple: art is life. Our vision is clear and simple: art is life. Our vision is clear and simple: art is life. Our vision is clear and simple: art is life. Our vision is clear and simple: art is life. Our vision is clear and simple: art is life. Our vision is clear and simple: art is life. Our vision is clear and simple: art is life. Our vision is clear and simple: art is life. Our vision is clear and simple: art is life. Our vision is clear and simple: art is life. Our vision is clear and simple: art is life. Our vision is clear and simple: art is life. \n\nOur vision is clear and simple: art is life. Our vision is clear and simple: art is life. Our vision is clear and simple: art is life. Our vision is clear and simple: art is life. Our vision is clear and simple: art is life. Our vision is clear and simple: art is life. Our vision is clear and simple: art is life. Our vision is clear and simple: art is life. Our vision is clear and simple: art is life. Our vision is clear and simple: art is life. Our vision is clear and simple: art is life. Our vision is clear and simple: art is life. Our vision is clear and simple: art is life. Our vision is clear and simple: art is life. Our vision is clear and simple: art is life. \n\nOur vision is clear and simple: art is life. Our vision is clear and simple: art is life. Our vision is clear and simple: art is life. Our vision is clear and simple: art is life. Our vision is clear and simple: art is life. Our vision is clear and simple: art is life. Our vision is clear and simple: art is life. Our vision is clear and simple: art is life. Our vision is clear and simple: art is life. Our vision is clear and simple: art is life. Our vision is clear and simple: art is life. Our vision is clear and simple: art is life. Our vision is clear and simple: art is life. Our vision is clear and simple: art is life. Our vision is clear and simple: art is life. \n\nOur vision is clear and simple: art is life. Our vision is clear and simple: art is life. Our vision is clear and simple: art is life. Our vision is clear and simple: art is life. Our vision is clear and simple: art is life. Our vision is clear and simple: art is life. Our vision is clear and simple: art is life. Our vision is clear and simple: art is life. Our vision is clear and simple: art is life. Our vision is clear and simple: art is life. Our vision is clear and simple: art is life. Our vision is clear and simple: art is life. Our vision is clear and simple: art is life. Our vision is clear and simple: art is life. Our vision is clear and simple: art is life. \n\nOur vision is clear and simple: art is life. Our vision is clear and simple: art is life. Our vision is clear and simple: art is life. Our vision is clear and simple: art is life. Our vision is clear and simple: art is life. Our vision is clear and simple: art is life. Our vision is clear and simple: art is life. Our vision is clear and simple: art is life. Our vision is clear and simple: art is life. Our vision is clear and simple: art is life. Our vision is clear and simple: art is life. Our vision is clear and simple: art is life. Our vision is clear and simple: art is life. Our vision is clear and simple: art is life. Our vision is clear and simple: art is life. \n\nOur vision is clear and simple: art is life. Our vision is clear and simple: art is life. Our vision is clear and simple: art is life. Our vision is clear and simple: art is life. Our vision is clear and simple: art is life. Our vision is clear and simple: art is life. Our vision is clear and simple: art is life. Our vision is clear and simple: art is life. Our vision is clear and simple: art is life. Our vision is clear and simple: art is life. Our vision is clear and simple: art is life. Our vision is clear and simple: art is life. Our vision is clear and simple: art is life. Our vision is clear and simple: art is life. Our vision is clear and simple: art is life. '
                }
              </h5>
            </div>
          ) : null}

          <div data-plasmic-name={'footer'} data-plasmic-override={overrides.footer} className={classNames(projectcss.all, sty.footer)}>
            <div className={classNames(projectcss.all, sty.freeBox__xf1B3)}>
              <p.PlasmicLink
                className={classNames(projectcss.all, projectcss.a, projectcss.__wab_text, sty.link__rRajY)}
                component={Link}
                platform={'nextjs'}>
                {hasVariant(globalVariants, 'screen', 'mobileOnly')
                  ? 'NFT Deep Wire\nAll rights reserved © 2022'
                  : 'NFT Deep Wire | All rights reserved © 2022'}
              </p.PlasmicLink>
            </div>

            {true ? (
              <div className={classNames(projectcss.all, sty.freeBox__ntAzW)}>
                <p.PlasmicLink
                  className={classNames(projectcss.all, projectcss.a, projectcss.__wab_text, sty.link__wyxYz)}
                  component={Link}
                  href={`/`}
                  platform={'nextjs'}>
                  {'Terms & conditions'}
                </p.PlasmicLink>

                {(hasVariant(globalVariants, 'screen', 'mobileOnly') ? true : false) ? (
                  <p.PlasmicLink
                    className={classNames(projectcss.all, projectcss.a, projectcss.__wab_text, sty.link__eL7Sb)}
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
type NodeOverridesType<T extends NodeNameType> = Pick<PlasmicVision__OverridesType, DescendantsType<T>>
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicVision__VariantsArgs
    args?: PlasmicVision__ArgsType
    overrides?: NodeOverridesType<T>
  } & Omit<PlasmicVision__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<PlasmicVision__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicVision__ArgProps,
          internalVariantPropNames: PlasmicVision__VariantProps,
        }),
      [props, nodeName]
    )

    return PlasmicVision__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    })
  }
  if (nodeName === 'root') {
    func.displayName = 'PlasmicVision'
  } else {
    func.displayName = `PlasmicVision.${nodeName}`
  }
  return func
}

export const PlasmicVision = Object.assign(
  // Top-level PlasmicVision renders the root element
  makeNodeComponent('root'),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent('header'),
    h5: makeNodeComponent('h5'),
    footer: makeNodeComponent('footer'),

    // Metadata about props expected for PlasmicVision
    internalVariantProps: PlasmicVision__VariantProps,
    internalArgProps: PlasmicVision__ArgProps,

    // Page metadata
    pageMetadata: {
      title: '',
      description: '',
      ogImageSrc: '',
      canonical: '',
    },
  }
)

export default PlasmicVision
/* prettier-ignore-end */
