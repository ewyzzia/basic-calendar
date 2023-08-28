import * as React from 'react'
import '../public/globals.css'
import { Card } from './card.js'
import { FlexRow, FlexCol, TwoColumnGrid } from './utils'
import { SearchIcon } from '@heroicons/react/solid'
import { Ratings } from '/src/card.js'

function CalendarEvent({ text, time }) {
  return (
    <div className='event-on-calendar'>
      <div
        style={{
          width: '60%',
          height: '100%',
          backgroundColor: 'black',
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
        }}
      >
        {text || 'Lorem ipsum'}
      </div>
      {time && (
        <div
          style={{
            width: '40%',
            height: '100%',
            position: 'absolute',
            right: '0px',
          }}
        >
          {'07:00 AM'}
        </div>
      )}
    </div>
  )
}

function GridCell() {
  return (
    <div className='calendar-grid-cell'>
      <p>1st</p>
      <div className='cell-todo'>
        {Array.from({ length: 3 }, (_, i) => (
          <CalendarEvent
            key={i}
            text='Testing, testing, 123'
          />
        ))}
      </div>
    </div>
  )
}

function map(number, inMin, inMax, outMin, outMax) {
  return (
    ((number - inMin) * (outMax - outMin)) /
      (inMax - inMin) +
    outMin
  )
}

export function App(props) {
  return (
    <div className='App'>
      <div className='calendar-container'>
        <div className='calendar-topbar'>
          <div className='topbar-buttons-container'>
            <button>previous month</button>
            <div className='calendar-text'>JUNE 2023</div>
            <button>next month</button>
          </div>
        </div>
        <div className='horizontal-line'></div>
        <div className='calendar-grid'>
          {Array.from({ length: 7 * 6 }, (_, i) => (
            <GridCell key={i}></GridCell>
          ))}
          <div className='calendar-grid-column-lines'>
            {Array.from({ length: 6 }, (_, i) => (
              <div
                className='vertical-line calendar-grid-line'
                style={{
                  position: 'absolute',
                  left: `${
                    map(i, 0, 5, 1 / 7, 6 / 7) * 100
                  }%`,
                }}
              />
            ))}
          </div>
          <div className='calendar-grid-row-lines'></div>
          {Array.from({ length: 5 }, (_, i) => (
            <div
              className='horizontal-line calendar-grid-line'
              style={{
                position: 'absolute',
                top: `${map(i, 0, 4, 1 / 6, 5 / 6) * 100}%`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
