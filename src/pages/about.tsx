import { Layout } from '../components/layout'
import Image from 'next/image'

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
const About = () => {
  return (
    <Layout>
      <main className="profile-page">
        <section className="relative block" style={{ height: '300px' }}>
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: `url('./green.jpg')`
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
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center lg:block hidden">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                      <button
                        className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                        type="button"
                        style={{ transition: 'all .15s ease' }}
                      >
                        お問い合わせ
                      </button>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1 ">
                    <div className="justify-center py-4 lg:pt-4 pt-8"></div>
                  </div>
                </div>
                <div className="text-center mt-9 lg:mt-5">
                  <h3 className="text-3xl font-semibold leading-normal text-gray-800 mb-2">
                    Nishino
                  </h3>
                  <div className="text-xs leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                    Japan Fukuoka
                  </div>
                  <div className="mb-2 text-gray-700 mt-5 font-semibold text-sm">
                    Front Engineer | Mobile Engineer | Blockchain Engineer
                  </div>
                </div>
                <div className="mt-5 pt-10 pb-5 border-t border-gray-300 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-xs lg:text-sm leading-relaxed text-gray-800">
                        物を作ることが好きな学生エンジニア
                        <br />
                        普段はフロントエンド、ブロックチェーンを使ったアプリを作っています
                      </p>
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
                            <div className="m-2" key={src}>
                              <div className="lg:block hidden">
                                <Image
                                  src={src}
                                  alt={alt}
                                  width="60"
                                  height="60"
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
                            <div className="m-2" key={src}>
                              <div className="lg:block hidden">
                                <Image
                                  src={src}
                                  alt={alt}
                                  width="60"
                                  height="60"
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
  )
}

// eslint-disable-next-line import/no-default-export
export default About
