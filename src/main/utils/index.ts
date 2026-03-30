import { app } from 'electron'
import { arch, cpus } from 'os'
import {
  appendFile,
  chmod,
  copyFile,
  createWriteStream,
  existsSync,
  mkdirp,
  readFile,
  remove,
  stat,
  unlinkSync,
  writeFile
} from '@shared/fs-extra'
import { isLinux, isMacOS, pathFixedToUnix } from '@shared/utils'
import Helper from '../../fork/Helper'
import logger from '../core/Logger'

export {
  createWriteStream,
  unlinkSync,
  stat,
  existsSync,
  copyFile,
  appendFile,
  chmod,
  remove,
  mkdirp,
  readFile,
  writeFile,
  logger
}

export function uuid(length = 32) {
  const num = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
  let str = ''
  for (let i = 0; i < length; i++) {
    str += num.charAt(Math.floor(Math.random() * num.length))
  }
  return str
}

export function getLanguage(locale?: string) {
  if (locale) {
    return locale
  }
  return app?.getLocale()?.split('-')?.[0] ?? 'zh'
}

/**
 * Normalize locale code to full format for PostgreSQL and other services
 * Converts short locale codes (e.g., "vi") to full locale format (e.g., "vi_VN.UTF-8")
 */
export function getLocale(): string {
  const locale = app?.getLocale() ?? ''
  if (locale.trim() === '') {
    return 'zh_CN.UTF-8'
  }

  const localeMap: Record<string, string> = {
    zh: 'zh_CN'
  }

  if (localeMap[locale]) {
    return `${localeMap[locale]}.UTF-8`
  }

  const normalized = locale.split('-').join('_')

  if (normalized.includes('_')) {
    if (!Object.values(localeMap).includes(normalized)) {
      logger.warn(`Using unvalidated locale code: ${locale}`)
    }
    return `${normalized}.UTF-8`
  }

  logger.warn(`Unknown locale code: ${locale}, falling back to zh_CN.UTF-8`)
  return 'zh_CN.UTF-8'
}

export const wait = (time = 2000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, time)
  })
}

export function isArmArch() {
  if (isMacOS()) {
    const cpuCore = cpus()
    return cpuCore[0].model.includes('Apple')
  }
  if (isLinux()) {
    return arch() !== 'x64'
  }
  return false
}

export async function readFileFixed(file: string): Promise<string> {
  const path = pathFixedToUnix(file)
  try {
    return await readFile(path, 'utf-8')
  } catch {}
  try {
    return (await Helper.send('tools', 'readFileByRoot', path)) as any
  } catch {}
  throw new Error(`readFileFixed Failed: ${file}`)
}

export const writeFileByRoot = async (file: string, content: string) => {
  try {
    await writeFile(file, content)
    return true
  } catch (e) {
    console.error('writeFileByRoot writeFile error: ', e)
  }
  await Helper.send('tools', 'writeFileByRoot', file, content)
  return true
}
