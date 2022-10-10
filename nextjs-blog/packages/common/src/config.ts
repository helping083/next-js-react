const urlsConfigs = {}

const dotenvConfigs = {
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
}
const config = Object.assign(
    {},
    urlsConfigs, dotenvConfigs
  )
export const configs = Object.freeze(config);