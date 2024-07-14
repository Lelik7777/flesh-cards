import { Ref, SVGProps, forwardRef, memo, useState } from 'react'

import { ArrowBackOutline, Checked } from '@/assets'

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

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={18}
    ref={ref}
    viewBox={'0 0 18 18'}
    width={18}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      d={
        'M16 0H2a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V2a2 2 0 00-2-2zM7 14L2 9l1.41-1.41L7 11.17l7.59-7.59L16 5l-9 9z'
      }
      fill={'currentColor'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

const Svg = memo(ForwardRef)
