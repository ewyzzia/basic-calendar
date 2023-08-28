import * as React from 'react'
import { Scene, Storyboard } from 'utopia-api'
import { App } from '/src/app.js'
import { Card } from '/src/card.js'

export var storyboard = (
  <Storyboard>
    <Scene
      style={{
        position: 'absolute',
        left: -150,
        top: -50,
        width: 728,
        height: 685,
        display: 'flex',
        flexDirection: 'column',
      }}
      data-label='Beaches'
    >
      <App style={{}} />
    </Scene>
  </Storyboard>
)
