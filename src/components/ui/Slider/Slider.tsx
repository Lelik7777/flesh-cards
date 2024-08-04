import React, { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as SliderRadix from '@radix-ui/react-slider'
import clsx from 'clsx'

import styles from './Slider.module.scss'

import { Typography } from '../Typography'

/**
 * Props for the Slider component.
 * @typedef {Object} SliderProps
 * @property {number} [step=1] - The step value of the slider.
 * @property {number[]} [value=[20, 80]] - The current value of the slider.
 * @property {function(number[]): void} [onValueChange] - Callback function when the slider value changes.
 */

export type SliderProps = {
  step?: number
  value?: number[]
} & ComponentPropsWithoutRef<typeof SliderRadix.Root>

/**
 * A custom Slider component using Radix UI Slider.
 * @param {SliderProps} props - The props for the Slider component.
 * @param {React.Ref<ElementRef<typeof SliderRadix.Root>>} ref - The ref for the slider root element.
 * @returns {JSX.Element} - The rendered Slider component.
 */

export const Slider = forwardRef<ElementRef<typeof SliderRadix.Root>, SliderProps>(
  ({ onValueChange, step = 1, value = [20, 80], ...rest }: SliderProps, ref) => {
    const classNames = {
      container: styles.container,
      range: styles.range,
      root: styles.root,
      thumb: styles.thumb,
      track: styles.track,
      value: styles.value,
    } as const
    const handleOnChangeValue = React.useCallback(
      (values: number[]) => {
        if (onValueChange) {
          onValueChange?.(values)
        }
      },
      [onValueChange]
    )

    return (
      <div className={clsx(classNames.container)}>
        <Typography as={'span'} className={clsx(classNames.value)} variant={'body1'}>
          {value?.[0]}
        </Typography>
        <SliderRadix.Root
          className={clsx(classNames.root)}
          onValueChange={handleOnChangeValue}
          ref={ref}
          step={step}
          value={value}
          {...rest}
        >
          <SliderRadix.Track className={clsx(classNames.track)}>
            <SliderRadix.Range className={clsx(classNames.range)} />
          </SliderRadix.Track>
          <SliderRadix.Thumb className={clsx(classNames.thumb)} />
          <SliderRadix.Thumb className={clsx(classNames.thumb)} />
        </SliderRadix.Root>
        <Typography as={'span'} className={clsx(classNames.value)} variant={'body1'}>
          {value?.[1]}
        </Typography>
      </div>
    )
  }
)
