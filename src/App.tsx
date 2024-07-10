import { ArrowBackOutline } from '@/assets/icons/components'

import { Button } from './components/ui/Button'

export function App() {
  return (
    <div>
      hello
      <div></div>
      <Button as={'a'} variant={'link'}>
        <ArrowBackOutline fill={'#721cd3'} height={24} width={24} />
      </Button>
    </div>
  )
}
