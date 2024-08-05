import { exec } from 'child_process'
import fs from 'node:fs'
import fsPromises from 'node:fs/promises'

async function createComponent(name) {
  const capitalizedName = capitalizeFirstLetter(name)
  /**
   * there change path after /components for different types of components
   */
  const dirPath = `./src/components/ui/${capitalizedName}`
  const componentPath = `${dirPath}/${capitalizedName}.tsx`
  const componentContent = `
  import styles from './${capitalizedName}.module.scss'

  type Props = {}

  export const ${capitalizedName} = ({}:Props) => {
    return (<></>)
  }
  `

  const sassPath = `${dirPath}/${capitalizedName}.module.scss`
  const sassContent = ``

  const indexPath = `${dirPath}/index.ts`
  const indexContent = `export * from './${capitalizedName}'`

  const storyPath = `${dirPath}/${capitalizedName}.stories.tsx`
  const storyContent = `
import type { Meta, StoryObj } from '@storybook/react'

import { ${capitalizedName} } from './${capitalizedName}'

const meta = {
  component: ${capitalizedName},
  tags: ['autodocs'],
  title: 'Components/${capitalizedName}',
} satisfies Meta<typeof ${capitalizedName}>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
`

  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath)
  }
  fs.writeFileSync(componentPath, componentContent)
  fs.writeFileSync(sassPath, sassContent)
  fs.writeFileSync(indexPath, indexContent)
  fs.writeFileSync(storyPath, storyContent)

  exec(`pnpm run format:file ${dirPath}`, (err, stdout, stderr) => {
    if (err) {
      // node couldn't execute the command
      return
    }

    // the *entire* stdout and stderr (buffered)
    console.log(`stdout: ${stdout}`)
    console.log(`stderr: ${stderr}`)
  })
  exec(`pnpm run lint:dir ${dirPath}/**`, (err, stdout, stderr) => {
    if (err) {
      // node couldn't execute the command
      return
    }

    // the *entire* stdout and stderr (buffered)
    console.log(`stdout: ${stdout}`)
    console.log(`stderr: ${stderr}`)
  })
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const name = process.argv[2]

if (!name) {
  console.log('Please provide component name')
  process.exit(1)
}

async function updateMainIndex(name) {
  /**
   * there change path after /components for different types of components
   */
  const mainIndexPath = './src/components/ui/index.ts'
  const mainIndexContent = await fsPromises.readFile(mainIndexPath, 'utf-8')
  const lineToAdd = `export * from './${name}'`

  if (mainIndexContent.includes(lineToAdd)) {
    return
  }
  const mainIndexContentArray = mainIndexContent.split('\n')

  mainIndexContentArray.unshift(lineToAdd)

  fs.writeFileSync(mainIndexPath, mainIndexContentArray.join('\n'))
}

createComponent(name)
void updateMainIndex(capitalizeFirstLetter(name))
