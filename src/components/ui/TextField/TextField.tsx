import { ChangeEvent, ComponentPropsWithoutRef, forwardRef, useId, useRef, useState } from 'react'

import { Close, Eye, EyeOff, Search } from '@/assets'
import { mergeRefs } from '@/utils'
import clsx from 'clsx'

import styles from './TextField.module.scss'

import { Typography } from '../Typography'

/**
 * Props for the TextField component.
 * @typedef {Object} Props
 * @property {string} [error] - Optional error message to display.
 * @property {string} [id] - Optional unique identifier for the input field.
 * @property {string} [label] - Optional label for the input field.
 * @property {(value: string) => void} [onChangeValue] - Optional callback function for handling input value changes.
 * @property {() => void} [onClearInput] - Optional callback function for clearing the input field.
 * @property {string} [placeholder] - Optional placeholder text for the input field.
 * @property {ComponentPropsWithoutRef<'input'>} [rest] - Additional props to be passed to the input element.
 */
export type PropsTextField = {
  error?: string
  id?: string
  label?: string
  onChangeValue?: (value: string) => void
  onClearInput?: () => void
  placeholder?: string
} & ComponentPropsWithoutRef<'input'>

/**
 * A custom TextField component that extends the functionality of a standard input element.
 * @param {PropsTextField} props - The props for the TextField component.
 * @param {Ref<HTMLInputElement>} ref - The ref for the input element.
 * @returns {JSX.Element} - The rendered TextField component.
 */

export const TextField = forwardRef<HTMLInputElement, PropsTextField>(
  (
    {
      className,
      disabled = false,
      error,
      id,
      label,
      onChange,
      onChangeValue,
      onClearInput,
      placeholder,
      type = 'text',
      ...rest
    },
    ref
  ) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const idInner = useId()
    const refButton = useRef(null)
    const innerRef = useRef(null)
    const finalRef = mergeRefs([innerRef, ref])
    const finalId = id ?? idInner
    const isSearch = type === 'search'
    const isPassword = type === 'password'
    const classNames = {
      button: styles.button,
      container: styles.container,
      error: styles.error,
      field: styles.field,
      hidden: styles.hidden,
      icon: styles.icon,
      iconEnd: styles.iconEnd,
      iconStart: styles.iconStart,
      label: styles.label,
      searchIcon: styles.searchIcon,
    }
    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e)
      onChangeValue?.(e.currentTarget.value)
    }
    const handleClearSearchInput = () => {
      if (onClearInput) {
        onClearInput()
      }

      if (innerRef.current) {
        ;(innerRef.current as HTMLInputElement).value = ''
      }
    }
    const handleClickIconSearch = () => {
      if (innerRef.current) {
        ;(innerRef.current as HTMLInputElement).focus()
      }
    }
    const handleClickIconPassword = () => {
      setIsPasswordVisible(!isPasswordVisible)
      if (isPasswordVisible && innerRef.current) {
        ;(innerRef.current as HTMLInputElement).type = 'text'
      } else {
        if (innerRef.current) {
          ;(innerRef.current as HTMLInputElement).type = 'password'
        }
      }
    }
    const handleInputFocus = () => {
      if (refButton.current) {
        ;(refButton.current as HTMLButtonElement).classList.remove(styles.hidden)
      }
    }
    const handleInputBlur = () => {
      // setIsButtonCloseVisible(state => !state)
      if (refButton.current) {
        ;(refButton.current as HTMLButtonElement).classList.add(styles.hidden)
      }
    }
    let containClassHidden

    if (refButton.current) {
      containClassHidden = (refButton.current as HTMLButtonElement).classList.contains(
        styles.hidden ? styles.hidden : ''
      )
    }

    return (
      <div>
        <Typography as={'label'} className={classNames.label} htmlFor={finalId}>
          {label}
        </Typography>
        <div className={classNames.container}>
          {isSearch && (
            <button
              aria-label={'search button'}
              className={clsx(classNames.button, classNames.icon, classNames.iconStart)}
              onClick={handleClickIconSearch}
              type={'button'}
            >
              <Search />
            </button>
          )}
          <input
            className={clsx(
              classNames.field,
              error && classNames.error,
              isSearch && classNames.searchIcon
            )}
            disabled={disabled}
            id={finalId}
            onBlur={handleInputBlur}
            onChange={handleChangeInput}
            onFocus={handleInputFocus}
            placeholder={placeholder}
            ref={finalRef}
            type={type}
          />
          {isPassword && (
            <button
              aria-label={'eye button'}
              className={clsx(classNames.button, classNames.iconEnd, classNames.icon)}
              onClick={handleClickIconPassword}
              type={'button'}
            >
              {isPasswordVisible ? <EyeOff /> : <Eye />}
            </button>
          )}

          {isSearch && (
            <button
              aria-label={'button close'}
              className={clsx(classNames.button, classNames.iconEnd, classNames.icon)}
              onClick={handleClearSearchInput}
              ref={refButton}
              type={'button'}
            >
              <Close />
            </button>
          )}
        </div>
        {error && (
          <Typography className={classNames.error} variant={'error'}>
            {error}
          </Typography>
        )}
      </div>
    )
  }
)
