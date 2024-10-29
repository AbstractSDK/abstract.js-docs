import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'Docs',
  logoUrl: { dark: '/logo-dark.svg', light: '/logo-light.svg' },
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
      ]
    },
    {
      text: 'Core',
      items: [
        {
          text: 'Introduction',
          link: '/core/introduction',
        },
      ]
    },
    {
      text: 'React',
      items: [
        {
          text: 'Provider Examples',
          items: [{
            text: 'Graz',
            link: '/react/providers/graz',
          }, {
            text: 'Xion',
            link: '/react/providers/xion',
          }],
        },
      ]
    },
    {
      text: 'Hooks',
      items: [{
        text: 'Public',
        items: [
          {

            text: 'useAbstractModuleVersion',
            link: '/hooks/public/use-abstract-module-version',
          },
          {
            text: 'useAccountsBaseAddressesFromApi',
            link: '/hooks/public/use-accounts-base-addresses-from-api',
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
        ]
      },
      {
        text: 'Wallet',
        items: [{
          text: 'Utils',
            items: [
              {
                text: 'useSignAndBroadcast',
                link: '/hooks/wallet/utils/use-sign-and-broadcast',
              },
            ]
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
        ]
      },
      {
        text: 'Account',
        items: [
          {
            text: 'Public', items: [
              {
                text: 'useAccountAddressFromApi',
                link: '/hooks/account/public/use-account-address-from-api',
              },
              {
                text: 'useAccountInstantiate2Address',
                link: '/hooks/account/public/use-account-instantiate2-address',
              },
              {
                text: 'useAccountSettings',
                link: '/hooks/account/public/use-account-settings',
              },
              {
                text: 'useModuleInstantiate2Address',
                link: '/hooks/account/public/use-module-instantiate2-address',
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
            ]
          },
          {
            text: 'Wallet', items: [
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
                text: 'useUpgradeModule',
                link: '/hooks/account/wallet/use-upgrade-module',
              },
              {
                text: 'useWithdraw',
                link: '/hooks/account/wallet/use-withdraw',
              },
            ]
          }
        ]
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
      ]
    },

    {
      text: 'Miscellaneous',
      items: [
        {
          text: 'Running Abstract API',
          link: '/miscellaneous/running-abstract-api',
        }
      ]
    },
  ],
  twoslash: {
    compilerOptions: {
      jsx: 1
    }
  },
})
