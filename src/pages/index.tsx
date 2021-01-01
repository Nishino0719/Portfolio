import { Layout } from '../components/layout'

const Home = () => {
  return (
    <Layout>
      <button
        className="btn-blue"
        onClick={() => {
          window.alert('Hello, World!')
        }}
      >
        Button
      </button>
      <h1>hello</h1>
      <i className="fas fa-bell"></i>
      <h1>he</h1>
    </Layout>
  )
}

// eslint-disable-next-line import/no-default-export
export default Home
