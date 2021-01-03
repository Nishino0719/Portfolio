import Head from 'next/head'

type Props = {
  children?: React.ReactNode
  title?: string
  description?: string
  image?: string
  type?: string
}

export const Meta: React.FC<Props> = (props) => {
  const { title, description, image, type, children } = props
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content={description ? `${description}` : `Nishinoのポートフォリオ`}
      />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:card" content="photo" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image} />
      {children}
    </Head>
  )
}
