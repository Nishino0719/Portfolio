import { Layout } from '../components/layout'

const Error = () => {
  return (
    <Layout>
      <div className="h-screen w-screen bg-gray-100 flex items-center">
        <span
          id="blackOverlay"
          className="w-full h-full absolute opacity-50 bg-black"
        ></span>
        <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
          <div className="max-w-md">
            <img
              src="https://loosedrawing.com/wp/wp-content/uploads/2020/08/g0512.png"
              alt=""
              className=""
            />
            <div className="text-5xl font-dark font-bold">404エラー</div>
            <p className="text-2xl md:text-3xl font-light leading-normal">
              お探しのページは見つかりませんでした。
            </p>
            <p className="text-base md:text-xl font-light">
              もう一度URLを確かめてみてください
            </p>
          </div>
          <div className="max-w-lg"></div>
        </div>
      </div>
    </Layout>
  )
}

// eslint-disable-next-line import/no-default-export
export default Error
