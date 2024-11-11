import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'Docs',
  logoUrl: {dark: '/logo-dark.svg', light: '/logo-light.svg'},
  titleTemplate: '%s · Abstract.js',
  description:
    'Build reliable Abstract apps with lightweight, composable, & type-safe modules from Abstract.js.',
  socials: [
    {
      icon: 'github',
      link: 'https://github.com/AbstractSDK/abstract.js',
    },
    {
      icon: 'discord',
      link: 'http://discord.gg/uch3Tq3aym',
    },
    {
      icon: 'x',
      link: 'https://x.com/AbstractSDK',
    },
  ],
  topNav: [
    {text: 'Docs', link: '/getting-started', match: '/docs'},
    {
      text: 'Examples',
      link: 'https://github.com/AbstractSDK/abstract.js/tree/mainline/examples',
    },
  ],
  sidebar: [
    {
      text: 'Introduction',
      link: '/introduction',
    },
    {
      text: 'Getting Started',
      link: '/getting-started',
    },
    {
      text: 'CLI',
      items: [
        {
          text: 'Introduction',
          link: '/cli/introduction',
        },
      ],
    },
    {
      text: 'Core',
      items: [
        {
          text: 'Introduction',
          link: '/core/introduction',
        },
      ],
    },
    {
      text: 'React',
      items: [
        {
          text: 'Provider Examples',
          items: [
            {
              text: 'Graz',
              link: '/react/providers/graz',
            },
            {
              text: 'Xion',
              link: '/react/providers/xion',
            },
          ],
        },
      ],
    },
    {
      text: 'Hooks',
      collapsed: true,
      items: [
        {
          text: 'Public',
          items: [
            {
              text: 'useAbstractModuleVersion',
              link: '/hooks/public/use-abstract-module-version',
            },
            {
              text: 'useAccountsAddressesFromApi',
              link: '/hooks/public/use-accounts-addresses-from-api',
            },
            {
              text: 'useCosmWasmClient',
              link: '/hooks/public/use-cosm-wasm-client',
            },
            {
              text: 'useRemoteHosts',
              link: '/hooks/public/use-remote-hosts',
            },
            {
              text: 'useSimulateRemoteMsg',
              link: '/hooks/public/use-simulate-remote-msg',
            },
            {
              text: 'useSmartQuery',
              link: '/hooks/public/use-smart-query',
            },
          ],
        },
        {
          text: 'Wallet',
          items: [
            {
              text: 'Utils',
              items: [
                {
                  text: 'useSignAndBroadcast',
                  link: '/hooks/wallet/utils/use-sign-and-broadcast',
                },
              ],
            },
            {
              text: 'useCreateAccountMonarchy',
              link: '/hooks/wallet/use-create-account-monarchy',
            },
            {
              text: 'useCreateAccount',
              link: '/hooks/wallet/use-create-account',
            },
            {
              text: 'useSenderAddress',
              link: '/hooks/wallet/use-sender-address',
            },
            {
              text: 'useSigningCosmWasmClient',
              link: '/hooks/wallet/use-signing-cosm-wasm-client',
            },
          ],
        },
        {
          text: 'Account',
          items: [
            {
              text: 'Public',
              items: [
                {
                  text: 'useAccountAddressFromApi',
                  link: '/hooks/account/public/use-account-address-from-api',
                },
                {
                  text: 'usePredictAccountAddress',
                  link: '/hooks/account/public/use-predict-account-address',
                },
                {
                  text: 'useAccountSettings',
                  link: '/hooks/account/public/use-account-settings',
                },
                {
                  text: 'usePredictModuleAddress',
                  link: '/hooks/account/public/use-predict-module-address',
                },
                {
                  text: 'useModules',
                  link: '/hooks/account/public/use-modules',
                },
                {
                  text: 'useRemoteAccountIds',
                  link: '/hooks/account/public/use-remote-account-ids',
                },
                {
                  text: 'useRemoteAccounts',
                  link: '/hooks/account/public/use-remote-accounts',
                },
                {
                  text: 'useSimulateExecuteRemoteAccount',
                  link: '/hooks/account/public/use-simulate-execute-remote-account',
                },
                {
                  text: 'useSubAccountIdsFromApi',
                  link: '/hooks/account/public/use-sub-account-ids-from-api',
                },
              ],
            },
            {
              text: 'Wallet',
              items: [
                {
                  text: 'useCreateRemoteAccount',
                  link: '/hooks/account/wallet/use-create-remote-account',
                },
                {
                  text: 'useCreateSubAccount',
                  link: '/hooks/account/wallet/use-create-sub-account',
                },
                {
                  text: 'useDeposit',
                  link: '/hooks/account/wallet/use-deposit',
                },
                {
                  text: 'useEnableIbc',
                  link: '/hooks/account/wallet/use-enable-ibc',
                },
                {
                  text: 'useExecuteOnRemoteModule',
                  link: '/hooks/account/wallet/use-execute-on-remote-module',
                },
                {
                  text: 'useExecuteOnRemote',
                  link: '/hooks/account/wallet/use-execute-on-remote',
                },
                {
                  text: 'useExecute',
                  link: '/hooks/account/wallet/use-execute',
                },
                {
                  text: 'useRequestRemoteFunds',
                  link: '/hooks/account/wallet/use-request-remote-funds',
                },
                {
                  text: 'useSendFundsToRemote',
                  link: '/hooks/account/wallet/use-send-funds-to-remote',
                },
                {
                  text: 'useUpdateInfo',
                  link: '/hooks/account/wallet/use-update-info',
                },
                {
                  text: 'useUpdateSettings',
                  link: '/hooks/account/wallet/use-update-settings',
                },
                {
                  text: 'useUpgradeModules',
                  link: '/hooks/account/wallet/use-upgrade-modules',
                },
                {
                  text: 'useWithdraw',
                  link: '/hooks/account/wallet/use-withdraw',
                },
                {
                  text: 'useSendFunds',
                  link: '/hooks/account/wallet/use-withdraw',
                },
              ],
            },
          ],
        },
        {
          text: 'useAccountBalancesFromApi',
          link: '/hooks/use-account-balances-from-api',
        },
        {
          text: 'useAccounts',
          link: '/hooks/use-accounts',
        },
        {
          text: 'useAnsTokenFromApi',
          link: '/hooks/use-ans-token-from-api',
        },
        {
          text: 'useModulesFromApi',
          link: '/hooks/use-modules-from-api',
        },
        {
          text: 'useSubAccountIdsByModuleIdFromApi',
          link: '/hooks/use-sub-account-ids-by-module-id-from-api',
        },
      ],
    },
    {
      text: 'Miscellaneous',
      items: [
        {
          text: 'Running Abstract API',
          link: '/miscellaneous/running-abstract-api',
        },
      ],
    },
  ],
  editLink: {
    pattern:
      'https://github.com/AbstractSDK/abstract.js-docs/blob/main/docs/pages/:path',
    text: 'Edit this page on GitHub',
  },
  twoslash: {
    compilerOptions: {
      jsx: 1,
    },
  },
})
