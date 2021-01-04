import Image from 'next/image'
import { Layout } from '../components/layout'
import { Meta } from '../components/meta'
const portfolio = [
  { src: '/nextjs.svg', alt: 'Next.js' },
  { src: '/tailwindcss.svg', alt: 'Tailwind CSS' },
  { src: '/vercel.svg', alt: 'Vercel' }
]
const taskinit = [
  { src: '/nuxtjs.svg', alt: 'Nuxt.js' },
  { src: '/elementui.svg', alt: 'Element UI' },
  { src: '/firebase.svg', alt: 'Firebase' }
]

const hunterhider = [
  { src: '/firebase.svg', alt: 'Firebase' },
  { src: '/flutter.svg', alt: 'Flutter' }
]

const reportoken = [
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
                className="w-full h-full absolute opacity-50 bg-black"
              ></span>
            </div>
          </section>
          <section className="relative py-16">
            <div className="container mx-auto px-4">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-3 shadow-xl rounded-lg -mt-40 p-4">
                <div className="px-6">
                  <div className="text-center mt-0">
                    <h3 className="text-4xl font-semibold leading-normal text-gray-800 mb-2">
                      Works
                    </h3>
                    <div className="text-xs leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                      制作物
                    </div>
                    <div className="mb-10 text-gray-700 mt-5 font-semibold text-sm"></div>
                  </div>
                </div>
                <div className="h-auto">
                  <div className="w-full lg:w-9/12 p-4  lg:ml-40">
                    <p className="text-2xl lg:text-3xl  font-semibold">
                      Web App
                    </p>
                    <p className="text-sm text-gray-600">Webアプリ</p>
                    {/*  */}
                    <div className=" flex flex-wrap my-10">
                      <div className="lg:w-3/4">
                        <p className="text-gray-500 font-semibold ml-3">
                          2020/12/31 ~ 2020/1/3
                        </p>
                        <Image
                          src="/portfolio.png"
                          width={2982}
                          height={1844}
                          alt="ポートフォリオ"
                        />
                      </div>
                      <div className="lg:w-1/4">
                        <h3 className="text-xl font-bold lg:ml-10 text-green-600 my-4">
                          ポートフォリオ
                        </h3>
                        <div className="flex my-2">
                          <p className="text-base lg:ml-10 font-bold">
                            制作期間:
                          </p>
                          <p className="text-base font-bold">4日</p>
                        </div>

                        <p className="text-sm my-2 lg:ml-10">
                          Next.jsの簡単なアウトプットをしてみたかった。
                        </p>
                        <div className="flex lg:ml-10 ">
                          <p className="text-base font-bold">リポジトリ</p>
                          <a
                            href="https://github.com/Nishino0719/Portfolio"
                            className="cursor-pointer"
                            target="_brank"
                            title="Github"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="25"
                              height="25"
                              viewBox="0 0 24 24"
                              className=" fill-current text-gray-400 hover:text-green-500 ml-2"
                            >
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                          </a>
                        </div>
                        <p className="font-bold text-base my-2 lg:ml-10">
                          技術スタック
                        </p>
                        <div className="flex flex-wrap lg:ml-10">
                          {portfolio.map(({ src, alt }) => {
                            return (
                              <div className="m-1" key={src}>
                                <div className="lg:block hidden">
                                  <Image
                                    src={src}
                                    alt={alt}
                                    width="50"
                                    height="50"
                                  />
                                </div>
                                <div className="lg:hidden block">
                                  <Image
                                    src={src}
                                    alt={alt}
                                    width="35"
                                    height="35"
                                  />
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                    {/*  */}
                    <div className="flex flex-wrap my-10 border-t py-10">
                      <div className="lg:w-3/4 lg:order-2">
                        <p className="text-gray-500 font-semibold ml-3">
                          2020/6/13 ~ 2020/7/13
                        </p>
                        <Image
                          src="/taskinit.png"
                          width={2980}
                          height={1840}
                          alt="Task init"
                        />
                      </div>
                      <div className="lg:w-1/4 lg:order-1">
                        <h3 className="text-xl font-bold lg:mr-10 text-green-600 my-4">
                          Task init
                        </h3>
                        <div className="flex my-2">
                          <p className="text-base font-bold">制作期間:</p>
                          <p className="text-base font-bold lg:mr-10">一ヶ月</p>
                        </div>

                        <p className="text-sm my-2 lg:mr-10">
                          Googleアカウントと連携し、今あるタスクを管理するアプリ。
                          <br />
                          学校のタスク管理アプリが使いづらすぎて作った。
                        </p>
                        <div className="flex lg:mr-10 ">
                          <p className="text-base font-bold">リポジトリ</p>
                          <a
                            href="https://github.com/Nishino0719/Task-todo"
                            className="cursor-pointer"
                            target="_brank"
                            title="Github"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="25"
                              height="25"
                              viewBox="0 0 24 24"
                              className=" fill-current text-gray-400 hover:text-green-500 ml-2"
                            >
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                          </a>
                        </div>
                        <p className="font-bold text-base my-2 lg:mr-10">
                          技術スタック
                        </p>
                        <div className="flex flex-wrap lg:mr-10">
                          {taskinit.map(({ src, alt }) => {
                            return (
                              <div className="m-1" key={src}>
                                <div className="lg:block hidden">
                                  <Image
                                    src={src}
                                    alt={alt}
                                    width="50"
                                    height="50"
                                  />
                                </div>
                                <div className="lg:hidden block">
                                  <Image
                                    src={src}
                                    alt={alt}
                                    width="35"
                                    height="35"
                                  />
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                    {/*  */}
                  </div>
                </div>
                <div className="h-auto border-t">
                  <div className="w-full lg:w-9/12 p-4  lg:ml-40">
                    <p className="text-2xl lg:text-3xl   font-semibold">
                      Mobile App
                    </p>
                    <p className="text-sm text-gray-600">モバイルアプリ</p>
                    <div className="flex flex-wrap my-10">
                      <div className="lg:w-1/2">
                        <p className="text-gray-500 font-semibold ml-3">
                          2020/9/24 ~ 2020/9/26
                        </p>
                        <Image
                          src="/hunterhider.jpg"
                          width={413}
                          height={544}
                          alt="HUNTER HIDER"
                        />
                      </div>
                      <div className="lg:w-1/2">
                        <h3 className="text-xl font-bold lg:ml-10 text-green-600 my-4">
                          HUNTER HIDER
                        </h3>
                        <div className="flex my-2">
                          <p className="text-base lg:ml-10 font-bold">
                            制作期間:
                          </p>
                          <p className="text-base font-bold">2日</p>
                        </div>

                        <p className="text-sm my-2 lg:ml-10">
                          画像を認識して、宝の場所にカメラをかざすと宝(ARオブジェクト)が出現するARの宝探しアプリ。
                          <br />
                          初めてのハッカソン、初めてのFlutter、初めてのAR。
                        </p>
                        <div className="flex lg:ml-10 ">
                          <p className="text-base font-bold">リポジトリ</p>
                          <a
                            href="https://github.com/shoukitsuda/Mixture_app"
                            className="cursor-pointer"
                            target="_brank"
                            title="Github"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="25"
                              height="25"
                              viewBox="0 0 24 24"
                              className=" fill-current text-gray-400 hover:text-green-500 ml-2"
                            >
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                          </a>
                        </div>
                        <p className="font-bold text-base my-2 lg:ml-10">
                          技術スタック
                        </p>
                        <div className="flex flex-wrap lg:ml-10">
                          {hunterhider.map(({ src, alt }) => {
                            return (
                              <div className="m-1" key={src}>
                                <div className="lg:block hidden">
                                  <Image
                                    src={src}
                                    alt={alt}
                                    width="50"
                                    height="50"
                                  />
                                </div>
                                <div className="lg:hidden block">
                                  <Image
                                    src={src}
                                    alt={alt}
                                    width="35"
                                    height="35"
                                  />
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-auto border-t">
                  <div className="w-full lg:w-9/12 p-4  lg:ml-40">
                    <p className="text-2xl lg:text-3xl font-semibold">DApps</p>
                    <p className="text-sm text-gray-600">
                      ブロックチェーンアプリ
                    </p>
                    <div className="flex flex-wrap my-10 py-10">
                      <div className="lg:w-3/4 lg:order-2">
                        <p className="text-gray-500 font-semibold ml-3">
                          2020/8/7 ~ 2020/12/19
                        </p>
                        <Image
                          src="/reportoken.png"
                          width={2980}
                          height={1842}
                          alt="ReporToken"
                        />
                      </div>
                      <div className="lg:w-1/4 lg:order-1">
                        <h3 className="text-xl font-bold lg:mr-10 text-green-600 my-4">
                          ReporToken
                        </h3>
                        <div className="flex my-2">
                          <p className="text-base font-bold">制作期間:</p>
                          <p className="text-base font-bold lg:mr-10">半年</p>
                        </div>

                        <p className="text-sm my-2 lg:mr-10">
                          ERC20トークンを用いた分散型レポート共有ブロックチェーンアプリ。
                          <br />
                          <a
                            href="https://challecara.org/"
                            className="text-blue-600"
                            target="_brank"
                          >
                            チャレキャラ
                          </a>
                          で企業賞受賞。
                        </p>
                        <div className="flex lg:mr-10 ">
                          <p className="text-base font-bold">リポジトリ</p>
                          <a
                            href="https://github.com/Nishino0719/ReportToken"
                            className="cursor-pointer"
                            target="_brank"
                            title="Github"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="25"
                              height="25"
                              viewBox="0 0 24 24"
                              className=" fill-current text-gray-400 hover:text-green-500 ml-2"
                            >
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                          </a>
                        </div>
                        <p className="font-bold text-base my-2 lg:mr-10">
                          技術スタック
                        </p>
                        <div className="flex flex-wrap lg:mr-10">
                          {reportoken.map(({ src, alt }) => {
                            return (
                              <div className="m-1" key={src}>
                                <div className="lg:block hidden">
                                  <Image
                                    src={src}
                                    alt={alt}
                                    width="50"
                                    height="50"
                                  />
                                </div>
                                <div className="lg:hidden block">
                                  <Image
                                    src={src}
                                    alt={alt}
                                    width="35"
                                    height="35"
                                  />
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    </div>
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
