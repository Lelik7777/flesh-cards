import { useState } from 'react'

import { ArrowBackOutline } from '@/assets'

import { Card, Checkbox, TextField, Typography } from './components/ui'
import { Button } from './components/ui/Button'

export function App() {
  const [checked, setChecked] = useState(false)

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
      <div>
        {' '}
        <Checkbox checked={checked} label={'checkbox'} onChange={setChecked} />
      </div>
    </div>
  )
}
