import { Controller, SubmitHandler, useForm } from 'react-hook-form'

import { Card, Checkbox, TextField, Typography } from '@/components/ui'
import { Button } from '@/components/ui/Button'
import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'
import { z } from 'zod'

import styles from './SignIn.module.scss'

const signInSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  rememberMe: z.boolean().default(false),
})

export type FormInputs = z.infer<typeof signInSchema>
type SignInProps = {
  onSubmit: (data: FormInputs) => void
}

export const SignIn = ({ onSubmit }: SignInProps) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormInputs>({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    resolver: zodResolver(signInSchema),
  })
  const onSubmitForm: SubmitHandler<FormInputs> = data => {
    onSubmit(data)
  }

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
