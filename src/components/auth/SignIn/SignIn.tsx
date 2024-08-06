/* eslint-disable react/no-unescaped-entities */
import { Controller } from 'react-hook-form'

import { Card, Checkbox, TextField, Typography } from '@/components/ui'
import { Button } from '@/components/ui/Button'
import clsx from 'clsx'

import styles from './SignIn.module.scss'

import { FormInputs, useSignInForm } from './useSignInForm'

/**
 * Props for SignIn component
 * Callback function to handle form submission
 * @param {FormInputs} data - The form data
 */

type SignInProps = {
  onSubmit: (data: FormInputs) => void
}

/**
 * SignIn component
 *
 * This component renders a sign-in form with email, password, and remember me fields.
 * It uses react-hook-form for form handling and Zod for validation.
 *
 * @param {SignInProps} props - The component props
 * @returns {JSX.Element} The rendered SignIn component
 */

export const SignIn = ({ onSubmit }: SignInProps) => {
  const { control, errors, handleSubmit, onSubmitForm, register } = useSignInForm(onSubmit)
  const classes = {
    card: styles.card,
    container: styles.container,
    forgot: styles.forgot,
    form: styles.form,
    signUp: styles.signUp,
  } as const

  return (
    <Card className={clsx(classes.card)}>
      <Typography variant={'h1'}>Sign In</Typography>
      <div className={clsx(classes.form)}>
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <div className={clsx(classes.container)}>
            <TextField label={'Email'} {...register('email')} error={errors?.email?.message} />
            <TextField
              label={'Password'}
              type={'password'}
              {...register('password')}
              error={errors.password?.message}
            />
          </div>
          <Controller
            control={control}
            name={'rememberMe'}
            render={({ field }) => (
              <Checkbox label={'Remember me'} {...field} checked={field.value} />
            )}
          />
          <Typography className={clsx(classes.forgot)} variant={'body2'}>
            Forgot password?
          </Typography>
          <Button fullWidth type={'submit'}>
            Sign In
          </Button>
        </form>
      </div>
      <div className={clsx(classes.signUp)}>
        <Typography variant={'body2'}>Don't have an account?</Typography>
        <Button variant={'link'}>Sign Up</Button>
      </div>
    </Card>
  )
}
