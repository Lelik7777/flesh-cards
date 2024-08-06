import { Card, Checkbox, TextField, Typography } from '@/components/ui'
import { Button } from '@/components/ui/Button'
import clsx from 'clsx'

import styles from './SignIn.module.scss'

type SignInProps = {}

export const SignIn = ({}: SignInProps) => {
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
        <div className={clsx(classes.container)}>
          <TextField label={'Email'} />
          <TextField label={'Password'} type={'password'} />
        </div>
        <Checkbox label={'Remember me'} />
        <Typography className={clsx(classes.forgot)} variant={'body2'}>
          Forgot password?
        </Typography>
        <Button fullWidth>Sign In</Button>
      </div>
      <div className={clsx(classes.signUp)}>
        <Typography variant={'body2'}>Don't have an account?</Typography>
        <Button variant={'link'}>Sign Up</Button>
      </div>
    </Card>
  )
}
