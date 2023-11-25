import React, { useState } from 'react'

import { Button } from 'react-bootstrap'
import { toast } from 'react-toastify'

import { graphqlClient } from './_app'
import { fn } from '../src/graphql/queries'

export default function FuncPage (): React.JSX.Element {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const callFn = (): void => {
    setIsLoading(true)
    graphqlClient.graphql({ query: fn })
      .then((result): void => {
        toast.success(result.data.fn)
      })
      .catch((err): void => {
        toast.error(err.message)
      })
      .finally((): void => {
        setIsLoading(false)
      })
  }
  return (
    <>
      <h1>Func Page</h1>
      <Button variant='primary' onClick={callFn} disabled={isLoading}>Call Fn</Button>
    </>
  )
}
