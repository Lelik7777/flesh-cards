import React, { useId, useRef, useState } from 'react'

export const useTextField = (props: {
  id?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onChangeValue?: (value: string) => void
  onClearInput?: () => void
  type?: string
}) => {
  const { id, onChange, onChangeValue, onClearInput, type = 'text' } = props
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const idInner = useId()
  const refButton = useRef<HTMLButtonElement>(null)
  const innerRef = useRef<HTMLInputElement>(null)

  const finalId = id ?? idInner
  const isSearch = type === 'search'
  const isPassword = type === 'password'

  const handleChangeInput = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e)
      onChangeValue?.(e.currentTarget.value)
    },
    [onChange, onChangeValue]
  )

  const handleClearSearchInput = () => {
    onClearInput?.()
    if (innerRef?.current) {
      innerRef.current.value = ''
    }
  }

  const handleClickIconSearch = () => {
    innerRef.current?.focus()
  }

  const handleClickIconPassword = () => {
    setIsPasswordVisible(!isPasswordVisible)
    if (innerRef.current) {
      innerRef.current.type = isPasswordVisible ? 'password' : 'text'
    }
  }

  const handleInputFocus = () => {
    refButton.current?.classList.remove('hidden')
  }

  const handleInputBlur = () => {
    refButton.current?.classList.add('hidden')
  }

  return {
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
  }
}
