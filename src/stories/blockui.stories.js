import React from 'react'
import UiBlocker from '../index'

export default {
  title: 'UiBlocker',
}

export const UiBlockerExample = () => {
  return (
    <UiBlocker block={true}>
      <div style={{ height: 1440 }}></div>
    </UiBlocker>
  )
}
