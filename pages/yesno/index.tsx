import React from 'react'
import fetch from 'isomorphic-unfetch'
import Layout from '@components/Layout/Layout'
import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader'
import ProductList from '@components/ProductList/ProductList'

/**
 * This code is being executed in the server
 * @param params
 */
// export const getServerSideProps = async () => {
//   // Random between 0 - 1
//   const randomAnswer =  Math.floor(Math.random() * Math.floor(2));
//
//
//   return {
//     props: {
//       randomAnswer,
//     },
//   }
// }

/**
 * Esto solo se puede usar en las paginas
 */
export const getStaticProps = async () => {
  // Random between 0 - 1
  const randomAnswer = Math.floor(Math.random() * Math.floor(2))

  return {
    props: {
      randomAnswer,
    },
  }
}

const YesNo = ({ randomAnswer }: { randomAnswer: boolean }) => {
  return (
    <Layout>
      <KawaiiHeader />
      <h1>Should I eat an avocado?</h1>
      <div>{randomAnswer ? 'YES' : 'NO'}</div>
    </Layout>
  )
}

export default YesNo
