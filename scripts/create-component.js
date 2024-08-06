import { exec } from 'child_process'
import fs from 'node:fs'
import fsPromises from 'node:fs/promises'
import path from 'path'

/* eslint-disable no-console */

/**
 * Creates a new component with associated files.
 * @param {string} folderName - The name of the folder to create the component in.
 * @param {string} componentName - The name of the component to create.
 */

async function createComponent(folderName, componentName) {
  const capitalizedName = capitalizeFirstLetter(componentName)

  const dirPath = `./src/components/${folderName}/${capitalizedName}`
  const componentPath = path.join(dirPath, `${capitalizedName}.tsx`)
  const componentContent = `
  import styles from './${capitalizedName}.module.scss'

  export type Props${capitalizedName} = {}

  export const ${capitalizedName} = ({}:Props${capitalizedName}) => {
    return (<></>)
  }
  `

  const sassPath = path.join(dirPath, `${capitalizedName}.module.scss`)
  const sassContent = ``

  const indexPath = path.join(dirPath, `index.ts`)
  const indexContent = `export * from './${capitalizedName}'`

  const storyPath = path.join(dirPath, `${capitalizedName}.stories.tsx`)
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

  fs.mkdirSync(dirPath, { recursive: true })
  fs.writeFileSync(componentPath, componentContent)
  fs.writeFileSync(sassPath, sassContent)
  fs.writeFileSync(indexPath, indexContent)
  fs.writeFileSync(storyPath, storyContent)

  /**
   * Executes formatting command on the created files.
   */

  exec(`pnpm run format:file ${dirPath}`, (err, stdout, stderr) => {
    if (err) {
      console.log(`Error formatting files:${err}`)

      return
    }

    // the *entire* stdout and stderr (buffered)

    console.log(`stdout: ${stdout}`)
    console.log(`stderr: ${stderr}`)
  })

  /**
   * Executes linting command on the created files.
   */

  exec(`pnpm run lint:dir ${dirPath}/**`, (err, stdout, stderr) => {
    if (err) {
      console.error(`Error linting files: ${err}`)

      return
    }

    // the *entire* stdout and stderr (buffered)

    console.log(`stdout: ${stdout}`)
    console.log(`stderr: ${stderr}`)
  })
}

/**
 * Updates the main index file with an export for the new component.
 * @param {string} folderName - The name of the folder containing the component.
 * @param {string} componentName - The name of the component to add to the index.
 */

async function updateMainIndex(folderName, componentName) {
  const mainIndexPath = `./src/components/${folderName}/index.ts`
  let mainIndexContent = ''

  try {
    mainIndexContent = await fsPromises.readFile(mainIndexPath, 'utf-8')
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.log(`Creating new index file for ${folderName}`)
    } else {
      console.error(`Error reading index file: ${error}`)

      return
    }
  }

  const lineToAdd = `export * from './${componentName}'`

  if (mainIndexContent.includes(lineToAdd)) {
    return
  }

  const mainIndexContentArray = mainIndexContent.split('\n')

  mainIndexContentArray.unshift(lineToAdd)

  await fsPromises.writeFile(mainIndexPath, mainIndexContentArray.join('\n'))
}

/**
 * Capitalizes the first letter of a string.
 * @param {string} string - The string to capitalize.
 * @returns {string} The string with its first letter capitalized.
 */

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

// Get command line arguments

const folderName = process.argv[2]
const componentName = process.argv[3]

// Check if both folder name and component name are provided

if (!folderName || !componentName) {
  console.log('Please provide both folder name and component name')
  process.exit(1)
}

createComponent(folderName, componentName)
void updateMainIndex(folderName, capitalizeFirstLetter(componentName))
