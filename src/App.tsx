import { ArrowBackOutline } from '@/assets/icons/components'

import { Card } from './components/ui'
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
    </div>
  )
}
