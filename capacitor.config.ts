import { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'com.reactionicalex.com',
  appName: 'psychologists-app',
  webDir: 'build',
  bundledWebRuntime: false,
  ios: {
    scheme: 'My App',
  },
}

export default config
