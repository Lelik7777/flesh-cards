import * as React from 'react'

import { Close, Eye, EyeOff, Search } from '@/assets'
import { mergeRefs } from '@/utils'
import clsx from 'clsx'

import styles from './TextField.module.scss'

import { Typography } from '../Typography'
import { useTextField } from './useTextField'

export type PropsTextField = {
  error?: string
  id?: string
  label?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onChangeValue?: (value: string) => void
  onClearInput?: () => void
  placeholder?: string
} & Omit<React.ComponentPropsWithoutRef<'input'>, 'onChange'>

export const TextField = React.memo(
  React.forwardRef<HTMLInputElement, PropsTextField>(
    (
      {
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
      const {
        finalId,
        handleChangeInput,
        handleClearSearchInput,
        handleClickIconPassword,
        handleClickIconSearch,
        handleInputBlur,
        handleInputFocus,
        innerRef,
        isPassword,
        isPasswordVisible,
        isSearch,
        refButton,
      } = useTextField({ id, onChange, onChangeValue, onClearInput, type })

      const finalRef = mergeRefs([innerRef, ref])

      const classNames: Record<string, string> = {
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
      } as const

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
              {...rest}
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
          {error && error.length > 0 && (
            <Typography className={classNames.error} variant={'error'}>
              {error}
            </Typography>
          )}
        </div>
      )
    }
  )
)
