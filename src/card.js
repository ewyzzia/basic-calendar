import * as React from 'react'
import { StarIcon } from '@heroicons/react/solid'
import { FlexCol, FlexRow } from './utils'

export function Ratings(props) {
  return (
    <FlexRow style={{ justifyContent: 'flex-start' }}>
      {Array.from({ length: props.rating ?? 1 }).map((_, i) => {
        return <StarIcon style={{ width: 20, color: 'orange' }} />
      })}
    </FlexRow>
  )
}

export var Card = (props) => {
  return (
    <FlexCol
      style={{
        backgroundColor: 'white',
        borderRadius: 10,
        flex: 1,
        boxShadow: '0px 2px 4px rgb(0, 0, 0, 0.12)',
        paddingBottom: 5,
        overflow: 'hidden',
        height: 326,
        ...props.style,
      }}
    >
      <div
        style={{
          flex: 1,
          backgroundImage: `url(${props.image})`,
          backgroundSize: 'cover',
          flexBasis: 150,
          marginBottom: 8,
        }}
      />
      <div
        style={{
          position: 'relative',
          paddingLeft: 5,
          fontSize: '18px',
          fontWeight: 700,
          fontStyle: 'normal',
        }}
      >
        {props.name}
      </div>
      <div style={{ position: 'relative', paddingLeft: 5, color: 'rgb(0, 0, 0, 0.5)' }}>
        {props.country}
      </div>
      <Ratings rating={props.rating} />
    </FlexCol>
  )
}
