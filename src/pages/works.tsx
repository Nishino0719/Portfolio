import Image from 'next/image'
import { useState } from 'react'
import { Layout } from '../components/layout'
import { Meta } from '../components/meta'
import { Work } from '../components/Work'

export type stackInfo = {
  src: string
  alt: string
}

const watchWithYou: stackInfo[] = [
  { src: '/nextjs.svg', alt: 'Next.js' },
  { src: '/tailwindcss.svg', alt: 'Tailwind CSS' },
  { src: '/vercel.svg', alt: 'Vercel' },
  { src: '/firebase.svg', alt: 'Firebase' }
]
const stackGenerator: stackInfo[] = [
  { src: '/nextjs.svg', alt: 'Next.js' },
  { src: '/tailwindcss.svg', alt: 'Tailwind CSS' },
  { src: '/vercel.svg', alt: 'Vercel' }
]

const mokumoku: stackInfo[] = [
  { src: '/nextjs.svg', alt: 'Next.js' },
  { src: '/tailwindcss.svg', alt: 'Tailwind CSS' },
  { src: '/vercel.svg', alt: 'Vercel' },
  { src: '/firebase.svg', alt: 'Firebase' },
  { src: '/agora.svg', alt: 'Agora' }
]
const portfolio: stackInfo[] = [
  { src: '/nextjs.svg', alt: 'Next.js' },
  { src: '/tailwindcss.svg', alt: 'Tailwind CSS' },
  { src: '/vercel.svg', alt: 'Vercel' }
]
const taskinit: stackInfo[] = [
  { src: '/nuxtjs.svg', alt: 'Nuxt.js' },
  { src: '/elementui.svg', alt: 'Element UI' },
  { src: '/firebase.svg', alt: 'Firebase' }
]

const hunterhider: stackInfo[] = [
  { src: '/firebase.svg', alt: 'Firebase' },
  { src: '/flutter.svg', alt: 'Flutter' }
]

const reportoken: stackInfo[] = [
  { src: '/nuxtjs.svg', alt: 'Nuxt.js' },
  { src: '/firebase.svg', alt: 'Firebase' },
  { src: '/solidity.png', alt: 'Solidity' },
  { src: '/truffle.svg', alt: 'Truffle' },
  { src: '/metamask.svg', alt: 'Metamask' },
  { src: '/ipfs.svg', alt: 'IPFS' }
]
const Works = () => {
  return (
    <>
      <Meta
        title="Nishino0719 -works"
        description="作ったものたち"
        image="https://avatars0.githubusercontent.com/u/55534054?s=460&u=402783902455ae84995129488dd3a12d0699fd84&v=4"
      />
      <Layout>
        <main className="profile-page">
          <section className="relative block" style={{ height: '230px' }}>
            <div
              className="absolute top-0 w-full h-full bg-center bg-cover"
              style={{
                backgroundImage: `url('./ice.webp')`
              }}
            >
              <span
                id="blackOverlay"
                className="absolute w-full h-full bg-black opacity-50"
              ></span>
            </div>
          </section>
          <section className="relative py-16">
            <div className="container px-4 mx-auto">
              <div className="relative flex flex-col w-full min-w-0 p-4 mb-3 -mt-40 break-words bg-white rounded-lg shadow-xl">
                <div className="px-6">
                  <div className="mt-0 text-center">
                    <h3 className="mb-2 text-4xl font-semibold leading-normal text-gray-800">
                      Works
                    </h3>
                    <div className="mt-0 mb-2 text-xs font-bold leading-normal text-gray-500 uppercase">
                      制作物
                    </div>
                    <div className="mt-5 mb-10 text-sm font-semibold text-gray-700"></div>
                  </div>
                </div>
                <div className="h-auto">
                  <div className="w-full p-4 lg:w-9/12 lg:ml-40">
                    <p className="text-2xl font-semibold lg:text-3xl">
                      Web App
                    </p>
                    <p className="text-sm text-gray-600">Webアプリ</p>
                    <Work
                      title={'Watch with You'}
                      thumbnailURL={'/watchwithyou.png'}
                      thumbnailHeight={1840}
                      thumbnailWidth={2980}
                      stack={watchWithYou}
                      productionPeriod={'2021/6/18 ~ 2021/6/20'}
                      date={'2日'}
                      details={'同じ空間でYouTube動画を楽しめるアプリ'}
                      role={'デザイン、設計、フロントエンド、同期機能'}
                      githubUrl={'https://github.com/Nishino0719/stego-cup'}
                      producers={2}
                      setOrder={true}
                      isMobile={false}
                      apeal={
                        'ハッカソンで開発しました。カーソルやエフェクト、再生時間を同期することができ、まるで同じ空間でYouTubeの動画をみることができるアプリです。グループの作成から、リンクを共有することで友達と同じ空間で動画を楽しむことができます。'
                      }
                    />
                    <Work
                      title={'技術スタックジェネレーター'}
                      thumbnailURL={'/techstackgenerator.png'}
                      thumbnailHeight={1840}
                      thumbnailWidth={2980}
                      stack={stackGenerator}
                      productionPeriod={'2021/3/18 ~ 2021/3/24'}
                      date={'1週間'}
                      details={'技術スタックを簡単に作成するアプリ'}
                      role={'デザイン、設計、フロントエンド'}
                      githubUrl={
                        'https://github.com/Nishino0719/tech-stack-generator'
                      }
                      producers={1}
                      setOrder={false}
                      isMobile={false}
                      apeal={
                        'アプリを作る前やプレゼンの時に技術スタックを簡単に作ることができれば時間短縮になると思い作成しました。html2canvasで画像にしてダウンロードすることができます。また初めてPWA対応、ダークモード対応をしました。アプリを使いやすくするためにドラッグ$ドロップができ、デバック機能なども追加しています。'
                      }
                    />
                    <Work
                      title={'もくもく'}
                      thumbnailURL={'/mokumoku.png'}
                      thumbnailHeight={1840}
                      thumbnailWidth={2980}
                      stack={mokumoku}
                      productionPeriod={'2021/3/15 ~ 2021/3/17'}
                      date={'3日'}
                      details={'もくもく会専用の通話アプリ'}
                      role={'デザイン、設計、フロントエンド'}
                      githubUrl={'https://github.com/Nishino0719/mokumoku'}
                      producers={2}
                      setOrder={true}
                      isMobile={false}
                      apeal={
                        'Clubhouseでも使用されている通信基盤技術Agoraを用いて音声通話部分を実装しました。自動音声ミュート機能など、もくもくするために必要な機能を詰め込みました。'
                      }
                    />
                  </div>
                </div>
                <div className="h-auto border-t">
                  <div className="w-full p-4 lg:w-9/12 lg:ml-40">
                    <p className="text-2xl font-semibold lg:text-3xl">
                      Mobile App
                    </p>
                    <p className="text-sm text-gray-600">モバイルアプリ</p>
                    <Work
                      title={'HUNTER HIDER'}
                      thumbnailURL={'/hunterhider.jpg'}
                      thumbnailWidth={364}
                      thumbnailHeight={528}
                      stack={hunterhider}
                      productionPeriod={'2020/9/24 ~ 2020/9/26'}
                      date={'2日'}
                      details={
                        '画像認識をして特定の場所にカメラをかざすとARオブジェクトが現れるAR宝探し'
                      }
                      role={'デザイン、設計、ページ遷移、AR,'}
                      githubUrl={'https://github.com/shoukitsuda/Mixture_app'}
                      producers={4}
                      setOrder={false}
                      isMobile={true}
                      apeal={
                        'Flutterを用いた初めてのモバイルアプリ開発でした。初めてハッカソンに出て初めてチーム開発というものを経験しました。'
                      }
                    />
                  </div>
                </div>
                <div className="h-auto border-t">
                  <div className="w-full p-4 lg:w-9/12 lg:ml-40">
                    <p className="text-2xl font-semibold lg:text-3xl">
                      Decentralized Apps
                    </p>
                    <p className="text-sm text-gray-600">
                      ブロックチェーンアプリ
                    </p>
                    <Work
                      title={'ReporToken'}
                      thumbnailURL={'/reportoken.png'}
                      thumbnailWidth={2980}
                      thumbnailHeight={1842}
                      stack={reportoken}
                      productionPeriod={'2020/8/7 ~ 2020/12/19'}
                      date={'半年'}
                      details={
                        'ERC20トークンを用いた分散型レポート共有ブロックチェーンアプリ'
                      }
                      role={
                        'デザイン、設計、フロントエンド、スマートコントラクト'
                      }
                      githubUrl={'https://github.com/Nishino0719/ReportToken'}
                      producers={4}
                      setOrder={true}
                      isMobile={false}
                      apeal={
                        'Ethereumというブロックチェーンを学習し、ブロックチェーンアプリを設計から携わりました。非中央集権型アプリを意識し、性悪説を前提としたインセンティブデザインを集約することができ、チャレンジキャラバン(九州の学生アプリコンテスト)で企業賞を受賞しました。'
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </>
  )
}

// eslint-disable-next-line import/no-default-export
export default Works
