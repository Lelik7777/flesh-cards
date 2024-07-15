import { useState } from 'react'

import { ArrowBackOutline } from '@/assets'

import { Card, Checkbox, TabContent, Tabs, TextField, Typography } from './components/ui'
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
      <Tabs
        defaultValue={'one'}
        tabs={[
          { id: '0', title: 'one', value: 'one' },
          { id: '1', title: 'two', value: 'two' },
          { disabled: true, id: '2', title: 'three', value: 'three' },
        ]}
      >
        <TabContent value={'one'}>content one</TabContent>
        <TabContent value={'two'}>content two</TabContent>
        <TabContent value={'three'}>content three</TabContent>
      </Tabs>
    </div>
  )
}
