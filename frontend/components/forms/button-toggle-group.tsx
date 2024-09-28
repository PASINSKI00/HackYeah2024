import React from 'react'
import { ToggleGroup, ToggleGroupItem } from '../ui/toggle-group'

const ButtonToggleGroup = () => {
  return (
    <ToggleGroup type="single">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        raz
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        dwa
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        trzy
      </ToggleGroupItem>
    </ToggleGroup>
  )
}

export default ButtonToggleGroup