import React from 'react'

import { graphqlClient } from './_app'
import { fn } from '../src/graphql/queries'

export default function FuncPage (): React.JSX.Element {
  const callFn = (): void => {
    graphqlClient.graphql({ query: fn })
      .then((result): void => {
        console.log(result.data.fn)
      })
      .catch((err): void => {
        console.log(err)
      })
  }
  return (
    <>
      <h1>Func Page</h1>
      <button onClick={callFn}>Call Func</button>
    </>
  )
}
