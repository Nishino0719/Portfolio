import { Layout } from '../components/layout'
import Image from 'next/image'
import { Meta } from '../components/meta'

const languages = [
  { src: '/ts.png', alt: 'Typescript' },
  { src: '/js.png', alt: 'Javascript' },
  { src: '/html.svg', alt: 'HTML' },
  { src: '/css.svg', alt: 'CSS' },
  { src: '/nodejs.svg', alt: 'Node.js' },
  { src: '/c.svg', alt: 'C' },
  { src: '/dart.svg', alt: 'Dart' },
  { src: '/solidity.png', alt: 'Solidity' },
  { src: '/java.svg', alt: 'Java' }
]

const frameworks = [
  { src: '/nextjs.svg', alt: 'Next.js' },
  { src: '/nuxtjs.svg', alt: 'Nuxt.js' },
  { src: '/angular.svg', alt: 'Angular' },
  { src: '/tailwindcss.svg', alt: 'Tailwind CSS' },
  { src: '/express.svg', alt: 'Express' },
  { src: '/elementui.svg', alt: 'Element UI' },
  { src: '/flutter.svg', alt: 'Flutter' },
  { src: '/truffle.svg', alt: 'truffle' }
]

const others = [
  { src: '/slack.svg', alt: 'Slack' },
  { src: '/github.svg', alt: 'Github' },
  { src: '/notion.svg', alt: 'Notion' },
  { src: '/vscode.svg', alt: 'Visual Studio Code' },
  { src: '/studio.png', alt: 'Android Studio' },
  { src: '/firebase.svg', alt: 'Firebase' }
]

const About = () => {
  return (
    <>
      <Meta
        title="Nishino0719 -About"
        description="Nishinoは何者なのか"
        image="https://avatars0.githubusercontent.com/u/55534054?s=460&u=402783902455ae84995129488dd3a12d0699fd84&v=4"
      />
      <Layout>
        <main className="profile-page">
          <section className="relative block" style={{ height: '230px' }}>
            <div
              className="absolute top-0 w-full h-full bg-center bg-cover"
              style={{
                backgroundImage: `url('./island.webp')`
              }}
            >
              <span
                id="blackOverlay"
                className="w-full h-full absolute opacity-50 bg-black"
              ></span>
            </div>
          </section>
          <section className="relative py-16 ">
            <div className="container mx-auto px-4">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-3 shadow-xl rounded-lg -mt-40">
                <div className="px-6">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                      <div className="relative">
                        <img
                          alt="..."
                          src="https://avatars0.githubusercontent.com/u/55534054?s=460&u=402783902455ae84995129488dd3a12d0699fd84&v=4"
                          className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                          style={{ maxWidth: '150px' }}
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                      <div className="py-2 lg:py-6 px-3 mt-14"></div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center"></div>
                    <div className="w-full lg:w-4/12 px-4 lg:order-1">
                      <div className="flex justify-center py-4">
                        <div className="mr-2 p-3">
                          <a
                            href="https://github.com/Nishino0719"
                            className="cursor-pointer"
                            target="_brank"
                            title="Github"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="30"
                              height="30"
                              viewBox="0 0 24 24"
                              className=" fill-current text-gray-400 hover:text-green-500"
                            >
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                          </a>
                        </div>
                        <div className="mr-2 p-3">
                          <a
                            href="https://zenn.dev/nishino"
                            className="cursor-pointer"
                            target="_brank"
                            title="Zenn"
                          >
                            <div className="fill-current text-gray-400 hover:text-green-500">
                              <svg
                                width="30"
                                height="30"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                className=" fill-current text-gray-400 hover:text-green-500"
                              >
                                <path d="M.264 23.771h4.984c.264 0 .498-.147.645-.352L19.614.874c.176-.293-.029-.645-.381-.645h-4.72c-.235 0-.44.117-.557.323L.03 23.361c-.088.176.029.41.234.41zM17.445 23.419l6.479-10.408c.205-.323-.029-.733-.41-.733h-4.691c-.176 0-.352.088-.44.235l-6.655 10.643c-.176.264.029.616.352.616h4.779c.234-.001.468-.118.586-.353z" />
                              </svg>
                            </div>
                          </a>
                        </div>
                        <div className="mr-2 p-3">
                          <a
                            href="mailto:nattokusaikusai@gmail.com"
                            className="cursor-pointer"
                            target="_brank"
                            title="email"
                          >
                            <div className="fill-current text-gray-400 hover:text-green-500">
                              <svg
                                width="40"
                                height="40"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="white"
                                className=" fill-current text-gray-400 hover:text-green-500"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                              </svg>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-0">
                    <h3 className="text-3xl font-semibold leading-normal text-gray-800 mb-2">
                      Nishino
                    </h3>
                    <div className="text-xs leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                      Japan Fukuoka
                    </div>
                    <div className="mb-5 text-gray-700 mt-5 font-semibold text-sm">
                      Front Engineer | Mobile Engineer | Blockchain Engineer
                    </div>
                  </div>
                  {/* <!-- component --> */}
                  <div className="container mx-auto w-full h-full border-t">
                    <div className="w-full lg:w-9/12 p-4  lg:ml-40">
                      <p className="text-2xl  font-semibold">Timeline</p>
                    </div>
                    <div className="relative wrap overflow-hidden p-5 md:p-10 h-full lg:ml-40 lg:mr-40">
                      <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border md:left-1/2"></div>
                      {/* <!-- left timeline --> */}
                      <div className="mb-8 flex md:justify-between flex-row-reverse items-center w-full left-timeline">
                        <div className="order-1 md:w-5/12"></div>
                        <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full absolute md:static left-1">
                          <h1 className="mx-auto text-white font-semibold text-xs">
                            2019
                          </h1>
                        </div>
                        <div className="order-1 bg-gray-100 rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4 ml-12 md:ml-0">
                          <h3 className="mb-3 font-bold text-gray-800 md:text-lg text-base">
                            Hello World
                          </h3>
                          <p className="text-sm font-nomal leading-snug tracking-wide text-gray-900 text-opacity-100">
                            大学に入学。アプリを使う側から作る側になりたい！と思いクラウドソーシングなどでWeb製作案件を受注。
                          </p>
                        </div>
                      </div>

                      {/* <!-- right timeline --> */}
                      <div className="mb-8 flex md:justify-between flex-row-reverse md:flex-row items-center w-full right-timeline">
                        <div className="order-1 md:w-5/12"></div>
                        <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full absolute md:static left-1">
                          <h1 className="mx-auto font-semibold text-xs text-white">
                            2020
                          </h1>
                        </div>
                        <div className="order-1 bg-gray-100 rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4 ml-12 md:ml-0">
                          <h3 className="mb-3 font-bold text-gray-800 md:text-lg text-base">
                            first commit
                          </h3>
                          <p className="text-sm font-nomal leading-snug tracking-wide text-gray-900 text-opacity-100">
                            自ら積極的にハッカソンやイベントに参加し、独学ではたどり着かなかったチーム開発を経験する。
                            <a
                              href="https://challecara.org/"
                              className="text-blue-600"
                              target="_brank"
                            >
                              チャレキャラ
                            </a>
                            で作ったアプリが企業賞受賞。
                          </p>
                        </div>
                      </div>

                      {/* <!-- left timeline --> */}
                      <div className="mb-8 flex md:justify-between flex-row-reverse items-center w-full left-timeline">
                        <div className="order-1 md:w-5/12"></div>
                        <div className="z-20 flex items-center order-1 bg-blue-400 shadow-xl w-8 h-8 rounded-full absolute md:static left-1">
                          <h1 className="mx-auto text-white font-semibold text-xs">
                            2021
                          </h1>
                        </div>
                        <div className="order-1 bg-gray-100 rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4 ml-12 md:ml-0">
                          <h3 className="mb-3 font-bold text-gray-800 md:text-lg text-base">
                            Coming soon...
                          </h3>
                          <p className="text-sm font-nomal leading-snug tracking-wide text-gray-900 text-opacity-100">
                            実際にアプリをリリースして運営したい！
                            <br />
                            ハードウェアも触りたい！
                            <br />
                            興味あること全部する！
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 py-10 border-t border-gray-300 text-left">
                    <div className="flex flex-wrap lg:ml-40">
                      <div className="w-full lg:w-9/12 px-4">
                        <p className="text-2xl  font-semibold">Skills</p>
                        <p className="text-lg text-gray-500">Languages</p>
                        <div className="flex flex-wrap">
                          {languages.map(({ src, alt }) => {
                            return (
                              <div className="m-3" key={src}>
                                <div className="lg:block hidden">
                                  <Image
                                    src={src}
                                    alt={alt}
                                    width="50"
                                    height="50"
                                  ></Image>
                                </div>
                                <div className="lg:hidden block">
                                  <Image
                                    src={src}
                                    alt={alt}
                                    width="35"
                                    height="35"
                                  ></Image>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                        <p className="text-lg text-gray-500">Frameworks</p>
                        <div className="flex flex-wrap">
                          {frameworks.map(({ src, alt }) => {
                            return (
                              <div className="m-3" key={src}>
                                <div className="lg:block hidden">
                                  <Image
                                    src={src}
                                    alt={alt}
                                    width="50"
                                    height="50"
                                  ></Image>
                                </div>
                                <div className="lg:hidden block">
                                  <Image
                                    src={src}
                                    alt={alt}
                                    width="35"
                                    height="35"
                                  ></Image>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                        <p className="text-lg text-gray-500">Others</p>
                        <div className="flex flex-wrap">
                          {others.map(({ src, alt }) => {
                            return (
                              <div className="m-3" key={src}>
                                <div className="lg:block hidden">
                                  <Image
                                    src={src}
                                    alt={alt}
                                    width="50"
                                    height="50"
                                  ></Image>
                                </div>
                                <div className="lg:hidden block">
                                  <Image
                                    src={src}
                                    alt={alt}
                                    width="35"
                                    height="35"
                                  ></Image>
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
export default About
