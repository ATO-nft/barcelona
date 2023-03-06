// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: b9eDNiZEPvCSqD2WYWQrPJ
// Component: h206VdLoFLpU1T
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
import sty from './PlasmicArtist.module.css' // plasmic-import: h206VdLoFLpU1T/css

export type PlasmicArtist__VariantMembers = {}
export type PlasmicArtist__VariantsArgs = {}
type VariantPropType = keyof PlasmicArtist__VariantsArgs
export const PlasmicArtist__VariantProps = new Array<VariantPropType>()

export type PlasmicArtist__ArgsType = {}
type ArgPropType = keyof PlasmicArtist__ArgsType
export const PlasmicArtist__ArgProps = new Array<ArgPropType>()

export type PlasmicArtist__OverridesType = {
  root?: p.Flex<'div'>
  header?: p.Flex<typeof Header>
  h2?: p.Flex<'h2'>
  img?: p.Flex<typeof p.PlasmicImg>
  h4?: p.Flex<'h4'>
  footer?: p.Flex<'div'>
}

export interface DefaultArtistProps {}

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

function PlasmicArtist__RenderFunc(props: {
  variants: PlasmicArtist__VariantsArgs
  args: PlasmicArtist__ArgsType
  overrides: PlasmicArtist__OverridesType

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
            <div className={classNames(projectcss.all, sty.freeBox__lmdJ3)}>
              <h2
                data-plasmic-name={'h2'}
                data-plasmic-override={overrides.h2}
                className={classNames(projectcss.all, projectcss.h2, projectcss.__wab_text, sty.h2)}>
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

              <p.PlasmicLink
                className={classNames(projectcss.all, projectcss.a, sty.link__z4ALi)}
                component={Link}
                href={`/allegory-of-agoraphobia`}
                platform={'nextjs'}>
                <p.PlasmicImg
                  data-plasmic-name={'img'}
                  data-plasmic-override={overrides.img}
                  alt={''}
                  className={classNames(sty.img)}
                  displayHeight={'auto' as const}
                  displayMaxHeight={'none' as const}
                  displayMaxWidth={'100%' as const}
                  displayMinHeight={'0' as const}
                  displayMinWidth={'0' as const}
                  displayWidth={'100%' as const}
                  loading={'lazy' as const}
                  src={{ src: '/plasmic/copy_of_nft_deep_wire/images/image.png', fullWidth: 500, fullHeight: 700, aspectRatio: undefined }}
                />
              </p.PlasmicLink>

              <h4
                data-plasmic-name={'h4'}
                data-plasmic-override={overrides.h4}
                className={classNames(projectcss.all, projectcss.h4, projectcss.__wab_text, sty.h4)}>
                <React.Fragment>
                  <span className={'plasmic_default__all plasmic_default__span'} style={{ color: '#FFFFFF' }}>
                    {'Jesus at work.'}
                  </span>
                </React.Fragment>
              </h4>

              <h5 className={classNames(projectcss.all, projectcss.h5, projectcss.__wab_text, sty.h5___86SfW)}>
                {
                  "A mantle of olive trees covers the mountains of one of the most emblematic Natural Park of Andalusia. Between its hills, emerges La Puerta de Segura (Jaén), where Jesús Fernández Escobar borns in 1988. He spends his childhood in this natural enclave, which helps him to develop his creativity. He cultivates his gift from the cradle, by absorbing his family influences. Drawing and painting contests for kids will soon help to discover an artist.\nIn 2006, his studies will take him to Madrid, where he begins to study Industrial Technical Engineering at the Polytechnic University. His duties will never take him away from his greatest passion: painting.\n\nAfter completing his technical studies in 2011, he moves to one of the most inspiring Andalusian cities: Granada. Through its alleys, at the foot of the Alhambra, our painter formalises his art studies at the University, starting a Degree in Fine Arts.\n\nHowever, the city of Granada does not manage to keep him. That's the reason why he goes back, in 2013, to where he always belonged: Sierra de Segura. The artist settles in his hometown and turns painting into his main professional and economic activity, fully dedicating himself to his art.\n\nIn this enclave, the young painter begins to evolve towards a realistic painting. He mainly uses oil paint and projects himself in each of his works. We can appreciate typical elements of linear technical drawing. \n\nHis art captures countless themes, that adapt themselves to each technique and format of his works. He represents in small-format watercolours his closest environment. In large format acrylics and mixed media paintings, we can observe more gesture in each of his lines and brushstrokes. Urban landscapes, portraits, animalistic scenes or even classical sculpture... They all have a place in the wide range of the covered themes and add colours and forms to the work of this promising Jaen painter."
                }
              </h5>

              <div className={classNames(projectcss.all, projectcss.__wab_text, sty.text__cej38)}>{'EDUCATION AND TRAINING'}</div>

              <h5 className={classNames(projectcss.all, projectcss.h5, projectcss.__wab_text, sty.h5__vheI)}>
                <React.Fragment>
                  <span className={'plasmic_default__all plasmic_default__span'} style={{ fontWeight: 700 }}>
                    {'2020-now. \t'}
                  </span>
                  <React.Fragment>{'\n\nDoctorate student in Art and Heritage.\nUniversity of Seville.\n\n'}</React.Fragment>
                  <span className={'plasmic_default__all plasmic_default__span'} style={{ fontWeight: 700 }}>
                    {'2019-2020 \t'}
                  </span>
                  <React.Fragment>{"\n\nMaster's Degree in Art, Idea and Production.\nUniversity of Seville.\n\n"}</React.Fragment>
                  <span className={'plasmic_default__all plasmic_default__span'} style={{ fontWeight: 700 }}>
                    {'2019'}
                  </span>
                  <React.Fragment>{' \n\nDegree in Mechanical Engineering.\nAlfonso X University.\n\n'}</React.Fragment>
                  <span className={'plasmic_default__all plasmic_default__span'} style={{ fontWeight: 700 }}>
                    {'2018'}
                  </span>
                  <React.Fragment>{" \n\nMaster's Degree in Art and Painting valuation.\nEuropean School of Arts.\n\n"}</React.Fragment>
                  <span className={'plasmic_default__all plasmic_default__span'} style={{ fontWeight: 700 }}>
                    {'2011'}
                  </span>
                  <React.Fragment>{'\t\n\nDegree in Fine Arts (unfinished).\nUniversity of Granada.\n\n'}</React.Fragment>
                  <span className={'plasmic_default__all plasmic_default__span'} style={{ fontWeight: 700 }}>
                    {'2006 - 2011 \t'}
                  </span>
                  <React.Fragment>
                    {'\n\nIndustrial Technical Engineering. Specialty: Mechanics.\nPolytechnic University of Madrid.\n'}
                  </React.Fragment>
                </React.Fragment>
              </h5>

              <div className={classNames(projectcss.all, projectcss.__wab_text, sty.text__bcKbb)}>{'AWARDS / COMPETITIONS'}</div>

              <div className={classNames(projectcss.all, projectcss.__wab_text, sty.text__hb7Zc)}>{''}</div>

              <h5 className={classNames(projectcss.all, projectcss.h5, projectcss.__wab_text, sty.h5___9Npvn)}>
                <React.Fragment>
                  <span className={'plasmic_default__all plasmic_default__span'} style={{ fontWeight: 700 }}>
                    {'2017'}
                  </span>
                  <React.Fragment>{'\tWork awarded at the 2017 "Mercedes Fernández" Painting Contest 2017, Jaén.\n'}</React.Fragment>
                  <span className={'plasmic_default__all plasmic_default__span'} style={{ fontWeight: 700 }}>
                    {'2016'}
                  </span>
                  <React.Fragment>{'\tFinalist of the Emilio Ollero Painting Contest 2016, Jaén.\n'}</React.Fragment>
                  <span className={'plasmic_default__all plasmic_default__span'} style={{ fontWeight: 700 }}>
                    {'2015'}
                  </span>
                  <React.Fragment>{'\tFinalist of the Emilio Ollero Painting Contest 2015, Jaén.\n'}</React.Fragment>
                  <span className={'plasmic_default__all plasmic_default__span'} style={{ fontWeight: 700 }}>
                    {'2015'}
                  </span>
                  <React.Fragment>{'\tFinalist of the 2015 Ibercaja Prize for Young Painters. Zaragoza.\n'}</React.Fragment>
                  <span className={'plasmic_default__all plasmic_default__span'} style={{ fontWeight: 700 }}>
                    {'2014'}
                  </span>
                  <React.Fragment>{'\t1st Prize for Painting in Fiestas Virgen del Carmen, La Puerta de Segura, Jaén.\n'}</React.Fragment>
                  <span className={'plasmic_default__all plasmic_default__span'} style={{ fontWeight: 700 }}>
                    {'2012'}
                  </span>
                  <React.Fragment>{'\t2nd Award for Photography for From, To, For Women, Sierra de Segura, Jaen.'}</React.Fragment>
                </React.Fragment>
              </h5>

              <div className={classNames(projectcss.all, projectcss.__wab_text, sty.text__pYfHi)}>{'EXHIBITION SELECTION'}</div>

              <h5 className={classNames(projectcss.all, projectcss.h5, projectcss.__wab_text, sty.h5__os6Mf)}>
                <React.Fragment>
                  <span className={'plasmic_default__all plasmic_default__span'} style={{ fontWeight: 700 }}>
                    {'2020'}
                  </span>
                  <React.Fragment>{'\tIndividual. Opening exhibition of Arte Mejor Gallery. Barcelona.\n'}</React.Fragment>
                  <span className={'plasmic_default__all plasmic_default__span'} style={{ fontWeight: 700 }}>
                    {'2020'}
                  </span>
                  <React.Fragment>{'\tVandelvira in Úbeda. Collective. Hospital of Santiago. Úbeda.\n'}</React.Fragment>
                  <span className={'plasmic_default__all plasmic_default__span'} style={{ fontWeight: 700 }}>
                    {'2020'}
                  </span>
                  <React.Fragment>
                    {' \tAround Utopia and other Realities. Collective. Fernando Villalón Foundation. Morón de la Frontera.\n'}
                  </React.Fragment>
                  <span className={'plasmic_default__all plasmic_default__span'} style={{ fontWeight: 700 }}>
                    {'2020'}
                  </span>
                  <React.Fragment>{'\tLeaders. Collective project. Torreblanca neighbourhood (Seville).\n'}</React.Fragment>
                  <span className={'plasmic_default__all plasmic_default__span'} style={{ fontWeight: 700 }}>
                    {'2019'}
                  </span>
                  <React.Fragment>{'\tThe Model and The Artists. Collective. Hospital of Santiago. Úbeda.\n'}</React.Fragment>
                  <span className={'plasmic_default__all plasmic_default__span'} style={{ fontWeight: 700 }}>
                    {'2018'}
                  </span>
                  <React.Fragment>{'\tCollective. Christmas Special. Art Cuestion Gallery. Madrid.\n\n'}</React.Fragment>
                  <span className={'plasmic_default__all plasmic_default__span'} style={{ fontWeight: 700 }}>
                    {'2018'}
                  </span>
                  <React.Fragment>{'\tLine. Olea Art Cycle. Individual exhibition in Azur Art Space. Jaén.\n'}</React.Fragment>
                  <span className={'plasmic_default__all plasmic_default__span'} style={{ fontWeight: 700 }}>
                    {'2017'}
                  </span>
                  <React.Fragment>{'\tART FAIR MÁLAGA 17. Participation in the contemporary art fair. Málaga.\n'}</React.Fragment>
                  <span className={'plasmic_default__all plasmic_default__span'} style={{ fontWeight: 700 }}>
                    {'2017'}
                  </span>
                  <React.Fragment>{'\tFinding the beautiful. Santiago Ydáñez Exhibition Hall. Puente de Génave. Jaén\n'}</React.Fragment>
                  <span className={'plasmic_default__all plasmic_default__span'} style={{ fontWeight: 700 }}>
                    {'2016'}
                  </span>
                  <React.Fragment>{'\tAdunanza. International collective exhibition. M.A.D Gallery, Milan, Italy.\n'}</React.Fragment>
                  <span className={'plasmic_default__all plasmic_default__span'} style={{ fontWeight: 700 }}>
                    {'2015'}
                  </span>
                  <React.Fragment>{'\tWatercolor exhibition at the Segura de la Sierra Castle, Jaen\n'}</React.Fragment>
                  <span className={'plasmic_default__all plasmic_default__span'} style={{ fontWeight: 700 }}>
                    {'2015'}
                  </span>
                  <React.Fragment>{'\t« Orange Tent » piece selected for the 1st Muestra Artelista Offline\n'}</React.Fragment>
                  <span className={'plasmic_default__all plasmic_default__span'} style={{ fontWeight: 700 }}>
                    {'2014'}
                  </span>
                  <React.Fragment>{" \tExhibition of Puente de Génave's local painters, Jaen.\n"}</React.Fragment>
                  <span className={'plasmic_default__all plasmic_default__span'} style={{ fontWeight: 700 }}>
                    {'2013 – 2014'}
                  </span>
                  <React.Fragment>{"\tSierra de Segura's painters exhibition in Génave, Jaen.\n"}</React.Fragment>
                  <span className={'plasmic_default__all plasmic_default__span'} style={{ fontWeight: 700 }}>
                    {'2012 – 2013'}
                  </span>
                  <React.Fragment>{'\tExhibition in Gloria Bendita, Jaén.\n'}</React.Fragment>
                  <span className={'plasmic_default__all plasmic_default__span'} style={{ fontWeight: 700 }}>
                    {'2012 - now.'}
                  </span>
                  <React.Fragment>
                    {'   \tAnamorfosis of Santa Clara, permanent exhibition at the Museum of Santa Clara in Zafra. Badajoz.\n\n'}
                  </React.Fragment>
                </React.Fragment>
              </h5>
            </div>
          ) : null}

          <div data-plasmic-name={'footer'} data-plasmic-override={overrides.footer} className={classNames(projectcss.all, sty.footer)}>
            <div className={classNames(projectcss.all, sty.freeBox__mfn5O)}>
              <p.PlasmicLink
                className={classNames(projectcss.all, projectcss.a, projectcss.__wab_text, sty.link__eET5)}
                component={Link}
                platform={'nextjs'}>
                {hasVariant(globalVariants, 'screen', 'mobileOnly')
                  ? 'NFT Deep Wire\nAll rights reserved © 2022'
                  : 'NFT Deep Wire | All rights reserved © 2022'}
              </p.PlasmicLink>
            </div>

            {true ? (
              <div className={classNames(projectcss.all, sty.freeBox___3L5Ea)}>
                <p.PlasmicLink
                  className={classNames(projectcss.all, projectcss.a, projectcss.__wab_text, sty.link__nm56P)}
                  component={Link}
                  href={`/`}
                  platform={'nextjs'}>
                  {'Terms & conditions'}
                </p.PlasmicLink>

                {(hasVariant(globalVariants, 'screen', 'mobileOnly') ? true : false) ? (
                  <p.PlasmicLink
                    className={classNames(projectcss.all, projectcss.a, projectcss.__wab_text, sty.link__efocT)}
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
  root: ['root', 'header', 'h2', 'img', 'h4', 'footer'],
  header: ['header'],
  h2: ['h2'],
  img: ['img'],
  h4: ['h4'],
  footer: ['footer'],
} as const
type NodeNameType = keyof typeof PlasmicDescendants
type DescendantsType<T extends NodeNameType> = (typeof PlasmicDescendants)[T][number]
type NodeDefaultElementType = {
  root: 'div'
  header: typeof Header
  h2: 'h2'
  img: typeof p.PlasmicImg
  h4: 'h4'
  footer: 'div'
}

type ReservedPropsType = 'variants' | 'args' | 'overrides'
type NodeOverridesType<T extends NodeNameType> = Pick<PlasmicArtist__OverridesType, DescendantsType<T>>
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicArtist__VariantsArgs
    args?: PlasmicArtist__ArgsType
    overrides?: NodeOverridesType<T>
  } & Omit<PlasmicArtist__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<PlasmicArtist__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicArtist__ArgProps,
          internalVariantPropNames: PlasmicArtist__VariantProps,
        }),
      [props, nodeName]
    )

    return PlasmicArtist__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    })
  }
  if (nodeName === 'root') {
    func.displayName = 'PlasmicArtist'
  } else {
    func.displayName = `PlasmicArtist.${nodeName}`
  }
  return func
}

export const PlasmicArtist = Object.assign(
  // Top-level PlasmicArtist renders the root element
  makeNodeComponent('root'),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent('header'),
    h2: makeNodeComponent('h2'),
    img: makeNodeComponent('img'),
    h4: makeNodeComponent('h4'),
    footer: makeNodeComponent('footer'),

    // Metadata about props expected for PlasmicArtist
    internalVariantProps: PlasmicArtist__VariantProps,
    internalArgProps: PlasmicArtist__ArgProps,

    // Page metadata
    pageMetadata: {
      title: '',
      description: '',
      ogImageSrc: '',
      canonical: '',
    },
  }
)

export default PlasmicArtist
/* prettier-ignore-end */
