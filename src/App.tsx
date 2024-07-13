import { ArrowBackOutline } from '@/assets'

import { Card, TextField, Typography } from './components/ui'
import { Button } from './components/ui/Button'

export function App() {
  return (
    <div>
      hello
      <div></div>
      <Button variant={'primary'}>
        <ArrowBackOutline fill={'#721cd3'} height={24} width={24} />
      </Button>
      <Card />
      <Typography variant={'error'}>some went wrong</Typography>
      <div style={{ width: '50%' }}>
        <TextField label={'input'} type={'search'} />
      </div>
    </div>
  )
}
