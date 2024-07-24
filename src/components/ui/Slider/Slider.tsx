import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as SliderRadix from '@radix-ui/react-slider'
import clsx from 'clsx'

import styles from './Slider.module.scss'

import { Typography } from '../Typography'

type SliderProps = {
  max?: number
  step?: number
  value?: number[]
} & ComponentPropsWithoutRef<typeof SliderRadix.Root>

export const Slider = forwardRef<ElementRef<typeof SliderRadix.Root>, SliderProps>(
  ({ onValueChange, step = 1, value = [20, 80] }: SliderProps, ref) => {
    const classNames = {
      container: styles.container,
      range: styles.range,
      root: styles.root,
      thumb: styles.thumb,
      track: styles.track,
      value: styles.value,
    }
    const handleOnChangeValue = (values: number[]) => {
      if (onValueChange) {
        onValueChange(values)
      }
    }

    return (
      <div className={clsx(classNames.container)}>
        <Typography as={'span'} className={clsx(classNames.value)} variant={'body1'}>
          {value[0]}
        </Typography>
        <SliderRadix.Root
          className={clsx(classNames.root)}
          onValueChange={handleOnChangeValue}
          ref={ref}
          step={step}
          value={value}
        >
          <SliderRadix.Track className={clsx(classNames.track)}>
            <SliderRadix.Range className={clsx(classNames.range)} />
          </SliderRadix.Track>
          <SliderRadix.Thumb className={clsx(classNames.thumb)} />
          <SliderRadix.Thumb className={clsx(classNames.thumb)} />
        </SliderRadix.Root>
        <Typography as={'span'} className={clsx(classNames.value)} variant={'body1'}>
          {value[1]}
        </Typography>
      </div>
    )
  }
)
