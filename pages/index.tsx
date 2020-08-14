import dynamic from 'next/dynamic'

// we don't want any code to be pre-rendered on server because it will bypass trusted types
const DynamicIndex = dynamic(() => import('../components/index.tsx'))

const IndexPage = () => {
  return <DynamicIndex />
}

export default IndexPage
