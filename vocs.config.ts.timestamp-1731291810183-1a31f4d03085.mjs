// vocs.config.ts
import { defineConfig } from "file:///Users/adair/Development/Abstract/abstract.js-docs/node_modules/vocs/_lib/index.js";
var vocs_config_default = defineConfig({
  title: "Docs",
  logoUrl: { dark: "/logo-dark.svg", light: "/logo-light.svg" },
  titleTemplate: "%s \xB7 Abstract.js",
  description: "Build reliable Abstract apps with lightweight, composable, & type-safe modules from Abstract.js.",
  socials: [
    {
      icon: "github",
      link: "https://github.com/AbstractSDK/abstract.js"
    },
    {
      icon: "discord",
      link: "http://discord.gg/uch3Tq3aym"
    },
    {
      icon: "x",
      link: "https://x.com/AbstractSDK"
    }
  ],
  topNav: [
    { text: "Docs", link: "/getting-started", match: "/docs" },
    {
      text: "Examples",
      link: "https://github.com/AbstractSDK/abstract.js/tree/mainline/examples"
    }
  ],
  sidebar: [
    {
      text: "Introduction",
      link: "/introduction"
    },
    {
      text: "Getting Started",
      link: "/getting-started"
    },
    {
      text: "CLI",
      items: [
        {
          text: "Introduction",
          link: "/cli/introduction"
        }
      ]
    },
    {
      text: "Core",
      items: [
        {
          text: "Introduction",
          link: "/core/introduction"
        }
      ]
    },
    {
      text: "React",
      items: [
        {
          text: "Provider Examples",
          items: [
            {
              text: "Graz",
              link: "/react/providers/graz"
            },
            {
              text: "Xion",
              link: "/react/providers/xion"
            }
          ]
        }
      ]
    },
    {
      text: "Hooks",
      collapsed: true,
      items: [
        {
          text: "Public",
          items: [
            {
              text: "useAbstractModuleVersion",
              link: "/hooks/public/use-abstract-module-version"
            },
            {
              text: "useAccountsAddressesFromApi",
              link: "/hooks/public/use-accounts-addresses-from-api"
            },
            {
              text: "useCosmWasmClient",
              link: "/hooks/public/use-cosm-wasm-client"
            },
            {
              text: "useRemoteHosts",
              link: "/hooks/public/use-remote-hosts"
            },
            {
              text: "useSimulateRemoteMsg",
              link: "/hooks/public/use-simulate-remote-msg"
            },
            {
              text: "useSmartQuery",
              link: "/hooks/public/use-smart-query"
            }
          ]
        },
        {
          text: "Wallet",
          items: [
            {
              text: "Utils",
              items: [
                {
                  text: "useSignAndBroadcast",
                  link: "/hooks/wallet/utils/use-sign-and-broadcast"
                }
              ]
            },
            {
              text: "useCreateAccountMonarchy",
              link: "/hooks/wallet/use-create-account-monarchy"
            },
            {
              text: "useCreateAccount",
              link: "/hooks/wallet/use-create-account"
            },
            {
              text: "useSenderAddress",
              link: "/hooks/wallet/use-sender-address"
            },
            {
              text: "useSigningCosmWasmClient",
              link: "/hooks/wallet/use-signing-cosm-wasm-client"
            }
          ]
        },
        {
          text: "Account",
          items: [
            {
              text: "Public",
              items: [
                {
                  text: "useAccountAddressFromApi",
                  link: "/hooks/account/public/use-account-address-from-api"
                },
                {
                  text: "usePredictAccountAddress",
                  link: "/hooks/account/public/use-predict-account-address"
                },
                {
                  text: "useAccountSettings",
                  link: "/hooks/account/public/use-account-settings"
                },
                {
                  text: "usePredictModuleAddress",
                  link: "/hooks/account/public/use-predict-module-address"
                },
                {
                  text: "useModules",
                  link: "/hooks/account/public/use-modules"
                },
                {
                  text: "useRemoteAccountIds",
                  link: "/hooks/account/public/use-remote-account-ids"
                },
                {
                  text: "useRemoteAccounts",
                  link: "/hooks/account/public/use-remote-accounts"
                },
                {
                  text: "useSimulateExecuteRemoteAccount",
                  link: "/hooks/account/public/use-simulate-execute-remote-account"
                },
                {
                  text: "useSubAccountIdsFromApi",
                  link: "/hooks/account/public/use-sub-account-ids-from-api"
                }
              ]
            },
            {
              text: "Wallet",
              items: [
                {
                  text: "useCreateRemoteAccount",
                  link: "/hooks/account/wallet/use-create-remote-account"
                },
                {
                  text: "useCreateSubAccount",
                  link: "/hooks/account/wallet/use-create-sub-account"
                },
                {
                  text: "useDeposit",
                  link: "/hooks/account/wallet/use-deposit"
                },
                {
                  text: "useEnableIbc",
                  link: "/hooks/account/wallet/use-enable-ibc"
                },
                {
                  text: "useExecuteOnRemoteModule",
                  link: "/hooks/account/wallet/use-execute-on-remote-module"
                },
                {
                  text: "useExecuteOnRemote",
                  link: "/hooks/account/wallet/use-execute-on-remote"
                },
                {
                  text: "useExecute",
                  link: "/hooks/account/wallet/use-execute"
                },
                {
                  text: "useRequestRemoteFunds",
                  link: "/hooks/account/wallet/use-request-remote-funds"
                },
                {
                  text: "useSendFundsToRemote",
                  link: "/hooks/account/wallet/use-send-funds-to-remote"
                },
                {
                  text: "useUpdateInfo",
                  link: "/hooks/account/wallet/use-update-info"
                },
                {
                  text: "useUpdateSettings",
                  link: "/hooks/account/wallet/use-update-settings"
                },
                {
                  text: "useUpgradeModules",
                  link: "/hooks/account/wallet/use-upgrade-modules"
                },
                {
                  text: "useWithdraw",
                  link: "/hooks/account/wallet/use-withdraw"
                },
                {
                  text: "useSendFunds",
                  link: "/hooks/account/wallet/use-withdraw"
                }
              ]
            }
          ]
        },
        {
          text: "useAccountBalancesFromApi",
          link: "/hooks/use-account-balances-from-api"
        },
        {
          text: "useAccounts",
          link: "/hooks/use-accounts"
        },
        {
          text: "useAnsTokenFromApi",
          link: "/hooks/use-ans-token-from-api"
        },
        {
          text: "useModulesFromApi",
          link: "/hooks/use-modules-from-api"
        },
        {
          text: "useSubAccountIdsByModuleIdFromApi",
          link: "/hooks/use-sub-account-ids-by-module-id-from-api"
        }
      ]
    },
    {
      text: "Miscellaneous",
      items: [
        {
          text: "Running Abstract API",
          link: "/miscellaneous/running-abstract-api"
        }
      ]
    }
  ],
  editLink: {
    pattern: "https://github.com/AbstractSDK/abstract.js-docs/blob/main/docs/pages/:path",
    text: "Edit this page on GitHub"
  },
  twoslash: {
    compilerOptions: {
      jsx: 1
    }
  }
});
export {
  vocs_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidm9jcy5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvYWRhaXIvRGV2ZWxvcG1lbnQvQWJzdHJhY3QvYWJzdHJhY3QuanMtZG9jc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2FkYWlyL0RldmVsb3BtZW50L0Fic3RyYWN0L2Fic3RyYWN0LmpzLWRvY3Mvdm9jcy5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2FkYWlyL0RldmVsb3BtZW50L0Fic3RyYWN0L2Fic3RyYWN0LmpzLWRvY3Mvdm9jcy5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2b2NzJ1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICB0aXRsZTogJ0RvY3MnLFxuICBsb2dvVXJsOiB7ZGFyazogJy9sb2dvLWRhcmsuc3ZnJywgbGlnaHQ6ICcvbG9nby1saWdodC5zdmcnfSxcbiAgdGl0bGVUZW1wbGF0ZTogJyVzIFx1MDBCNyBBYnN0cmFjdC5qcycsXG4gIGRlc2NyaXB0aW9uOlxuICAgICdCdWlsZCByZWxpYWJsZSBBYnN0cmFjdCBhcHBzIHdpdGggbGlnaHR3ZWlnaHQsIGNvbXBvc2FibGUsICYgdHlwZS1zYWZlIG1vZHVsZXMgZnJvbSBBYnN0cmFjdC5qcy4nLFxuICBzb2NpYWxzOiBbXG4gICAge1xuICAgICAgaWNvbjogJ2dpdGh1YicsXG4gICAgICBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL0Fic3RyYWN0U0RLL2Fic3RyYWN0LmpzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGljb246ICdkaXNjb3JkJyxcbiAgICAgIGxpbms6ICdodHRwOi8vZGlzY29yZC5nZy91Y2gzVHEzYXltJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGljb246ICd4JyxcbiAgICAgIGxpbms6ICdodHRwczovL3guY29tL0Fic3RyYWN0U0RLJyxcbiAgICB9LFxuICBdLFxuICB0b3BOYXY6IFtcbiAgICB7dGV4dDogJ0RvY3MnLCBsaW5rOiAnL2dldHRpbmctc3RhcnRlZCcsIG1hdGNoOiAnL2RvY3MnfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnRXhhbXBsZXMnLFxuICAgICAgbGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS9BYnN0cmFjdFNESy9hYnN0cmFjdC5qcy90cmVlL21haW5saW5lL2V4YW1wbGVzJyxcbiAgICB9LFxuICBdLFxuICBzaWRlYmFyOiBbXG4gICAge1xuICAgICAgdGV4dDogJ0ludHJvZHVjdGlvbicsXG4gICAgICBsaW5rOiAnL2ludHJvZHVjdGlvbicsXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnR2V0dGluZyBTdGFydGVkJyxcbiAgICAgIGxpbms6ICcvZ2V0dGluZy1zdGFydGVkJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdDTEknLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdJbnRyb2R1Y3Rpb24nLFxuICAgICAgICAgIGxpbms6ICcvY2xpL2ludHJvZHVjdGlvbicsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ0NvcmUnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdJbnRyb2R1Y3Rpb24nLFxuICAgICAgICAgIGxpbms6ICcvY29yZS9pbnRyb2R1Y3Rpb24nLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdSZWFjdCcsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ1Byb3ZpZGVyIEV4YW1wbGVzJyxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnR3JheicsXG4gICAgICAgICAgICAgIGxpbms6ICcvcmVhY3QvcHJvdmlkZXJzL2dyYXonLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ1hpb24nLFxuICAgICAgICAgICAgICBsaW5rOiAnL3JlYWN0L3Byb3ZpZGVycy94aW9uJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnSG9va3MnLFxuICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdQdWJsaWMnLFxuICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICd1c2VBYnN0cmFjdE1vZHVsZVZlcnNpb24nLFxuICAgICAgICAgICAgICBsaW5rOiAnL2hvb2tzL3B1YmxpYy91c2UtYWJzdHJhY3QtbW9kdWxlLXZlcnNpb24nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ3VzZUFjY291bnRzQWRkcmVzc2VzRnJvbUFwaScsXG4gICAgICAgICAgICAgIGxpbms6ICcvaG9va3MvcHVibGljL3VzZS1hY2NvdW50cy1hZGRyZXNzZXMtZnJvbS1hcGknLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ3VzZUNvc21XYXNtQ2xpZW50JyxcbiAgICAgICAgICAgICAgbGluazogJy9ob29rcy9wdWJsaWMvdXNlLWNvc20td2FzbS1jbGllbnQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ3VzZVJlbW90ZUhvc3RzJyxcbiAgICAgICAgICAgICAgbGluazogJy9ob29rcy9wdWJsaWMvdXNlLXJlbW90ZS1ob3N0cycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAndXNlU2ltdWxhdGVSZW1vdGVNc2cnLFxuICAgICAgICAgICAgICBsaW5rOiAnL2hvb2tzL3B1YmxpYy91c2Utc2ltdWxhdGUtcmVtb3RlLW1zZycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAndXNlU21hcnRRdWVyeScsXG4gICAgICAgICAgICAgIGxpbms6ICcvaG9va3MvcHVibGljL3VzZS1zbWFydC1xdWVyeScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnV2FsbGV0JyxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnVXRpbHMnLFxuICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICd1c2VTaWduQW5kQnJvYWRjYXN0JyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvaG9va3Mvd2FsbGV0L3V0aWxzL3VzZS1zaWduLWFuZC1icm9hZGNhc3QnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAndXNlQ3JlYXRlQWNjb3VudE1vbmFyY2h5JyxcbiAgICAgICAgICAgICAgbGluazogJy9ob29rcy93YWxsZXQvdXNlLWNyZWF0ZS1hY2NvdW50LW1vbmFyY2h5JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICd1c2VDcmVhdGVBY2NvdW50JyxcbiAgICAgICAgICAgICAgbGluazogJy9ob29rcy93YWxsZXQvdXNlLWNyZWF0ZS1hY2NvdW50JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICd1c2VTZW5kZXJBZGRyZXNzJyxcbiAgICAgICAgICAgICAgbGluazogJy9ob29rcy93YWxsZXQvdXNlLXNlbmRlci1hZGRyZXNzJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICd1c2VTaWduaW5nQ29zbVdhc21DbGllbnQnLFxuICAgICAgICAgICAgICBsaW5rOiAnL2hvb2tzL3dhbGxldC91c2Utc2lnbmluZy1jb3NtLXdhc20tY2xpZW50JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdBY2NvdW50JyxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiAnUHVibGljJyxcbiAgICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAndXNlQWNjb3VudEFkZHJlc3NGcm9tQXBpJyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvaG9va3MvYWNjb3VudC9wdWJsaWMvdXNlLWFjY291bnQtYWRkcmVzcy1mcm9tLWFwaScsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAndXNlUHJlZGljdEFjY291bnRBZGRyZXNzJyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvaG9va3MvYWNjb3VudC9wdWJsaWMvdXNlLXByZWRpY3QtYWNjb3VudC1hZGRyZXNzJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICd1c2VBY2NvdW50U2V0dGluZ3MnLFxuICAgICAgICAgICAgICAgICAgbGluazogJy9ob29rcy9hY2NvdW50L3B1YmxpYy91c2UtYWNjb3VudC1zZXR0aW5ncycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAndXNlUHJlZGljdE1vZHVsZUFkZHJlc3MnLFxuICAgICAgICAgICAgICAgICAgbGluazogJy9ob29rcy9hY2NvdW50L3B1YmxpYy91c2UtcHJlZGljdC1tb2R1bGUtYWRkcmVzcycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAndXNlTW9kdWxlcycsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL2hvb2tzL2FjY291bnQvcHVibGljL3VzZS1tb2R1bGVzJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICd1c2VSZW1vdGVBY2NvdW50SWRzJyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvaG9va3MvYWNjb3VudC9wdWJsaWMvdXNlLXJlbW90ZS1hY2NvdW50LWlkcycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAndXNlUmVtb3RlQWNjb3VudHMnLFxuICAgICAgICAgICAgICAgICAgbGluazogJy9ob29rcy9hY2NvdW50L3B1YmxpYy91c2UtcmVtb3RlLWFjY291bnRzJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICd1c2VTaW11bGF0ZUV4ZWN1dGVSZW1vdGVBY2NvdW50JyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvaG9va3MvYWNjb3VudC9wdWJsaWMvdXNlLXNpbXVsYXRlLWV4ZWN1dGUtcmVtb3RlLWFjY291bnQnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ3VzZVN1YkFjY291bnRJZHNGcm9tQXBpJyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvaG9va3MvYWNjb3VudC9wdWJsaWMvdXNlLXN1Yi1hY2NvdW50LWlkcy1mcm9tLWFwaScsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdXYWxsZXQnLFxuICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICd1c2VDcmVhdGVSZW1vdGVBY2NvdW50JyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvaG9va3MvYWNjb3VudC93YWxsZXQvdXNlLWNyZWF0ZS1yZW1vdGUtYWNjb3VudCcsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAndXNlQ3JlYXRlU3ViQWNjb3VudCcsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL2hvb2tzL2FjY291bnQvd2FsbGV0L3VzZS1jcmVhdGUtc3ViLWFjY291bnQnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ3VzZURlcG9zaXQnLFxuICAgICAgICAgICAgICAgICAgbGluazogJy9ob29rcy9hY2NvdW50L3dhbGxldC91c2UtZGVwb3NpdCcsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAndXNlRW5hYmxlSWJjJyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvaG9va3MvYWNjb3VudC93YWxsZXQvdXNlLWVuYWJsZS1pYmMnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ3VzZUV4ZWN1dGVPblJlbW90ZU1vZHVsZScsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL2hvb2tzL2FjY291bnQvd2FsbGV0L3VzZS1leGVjdXRlLW9uLXJlbW90ZS1tb2R1bGUnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ3VzZUV4ZWN1dGVPblJlbW90ZScsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL2hvb2tzL2FjY291bnQvd2FsbGV0L3VzZS1leGVjdXRlLW9uLXJlbW90ZScsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAndXNlRXhlY3V0ZScsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL2hvb2tzL2FjY291bnQvd2FsbGV0L3VzZS1leGVjdXRlJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICd1c2VSZXF1ZXN0UmVtb3RlRnVuZHMnLFxuICAgICAgICAgICAgICAgICAgbGluazogJy9ob29rcy9hY2NvdW50L3dhbGxldC91c2UtcmVxdWVzdC1yZW1vdGUtZnVuZHMnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ3VzZVNlbmRGdW5kc1RvUmVtb3RlJyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvaG9va3MvYWNjb3VudC93YWxsZXQvdXNlLXNlbmQtZnVuZHMtdG8tcmVtb3RlJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICd1c2VVcGRhdGVJbmZvJyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvaG9va3MvYWNjb3VudC93YWxsZXQvdXNlLXVwZGF0ZS1pbmZvJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICd1c2VVcGRhdGVTZXR0aW5ncycsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL2hvb2tzL2FjY291bnQvd2FsbGV0L3VzZS11cGRhdGUtc2V0dGluZ3MnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ3VzZVVwZ3JhZGVNb2R1bGVzJyxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvaG9va3MvYWNjb3VudC93YWxsZXQvdXNlLXVwZ3JhZGUtbW9kdWxlcycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAndXNlV2l0aGRyYXcnLFxuICAgICAgICAgICAgICAgICAgbGluazogJy9ob29rcy9hY2NvdW50L3dhbGxldC91c2Utd2l0aGRyYXcnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ3VzZVNlbmRGdW5kcycsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL2hvb2tzL2FjY291bnQvd2FsbGV0L3VzZS13aXRoZHJhdycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICd1c2VBY2NvdW50QmFsYW5jZXNGcm9tQXBpJyxcbiAgICAgICAgICBsaW5rOiAnL2hvb2tzL3VzZS1hY2NvdW50LWJhbGFuY2VzLWZyb20tYXBpJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICd1c2VBY2NvdW50cycsXG4gICAgICAgICAgbGluazogJy9ob29rcy91c2UtYWNjb3VudHMnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ3VzZUFuc1Rva2VuRnJvbUFwaScsXG4gICAgICAgICAgbGluazogJy9ob29rcy91c2UtYW5zLXRva2VuLWZyb20tYXBpJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICd1c2VNb2R1bGVzRnJvbUFwaScsXG4gICAgICAgICAgbGluazogJy9ob29rcy91c2UtbW9kdWxlcy1mcm9tLWFwaScsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAndXNlU3ViQWNjb3VudElkc0J5TW9kdWxlSWRGcm9tQXBpJyxcbiAgICAgICAgICBsaW5rOiAnL2hvb2tzL3VzZS1zdWItYWNjb3VudC1pZHMtYnktbW9kdWxlLWlkLWZyb20tYXBpJyxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnTWlzY2VsbGFuZW91cycsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ1J1bm5pbmcgQWJzdHJhY3QgQVBJJyxcbiAgICAgICAgICBsaW5rOiAnL21pc2NlbGxhbmVvdXMvcnVubmluZy1hYnN0cmFjdC1hcGknLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICBdLFxuICBlZGl0TGluazoge1xuICAgIHBhdHRlcm46XG4gICAgICAnaHR0cHM6Ly9naXRodWIuY29tL0Fic3RyYWN0U0RLL2Fic3RyYWN0LmpzLWRvY3MvYmxvYi9tYWluL2RvY3MvcGFnZXMvOnBhdGgnLFxuICAgIHRleHQ6ICdFZGl0IHRoaXMgcGFnZSBvbiBHaXRIdWInLFxuICB9LFxuICB0d29zbGFzaDoge1xuICAgIGNvbXBpbGVyT3B0aW9uczoge1xuICAgICAganN4OiAxLFxuICAgIH0sXG4gIH0sXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF3VSxTQUFTLG9CQUFvQjtBQUVyVyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixPQUFPO0FBQUEsRUFDUCxTQUFTLEVBQUMsTUFBTSxrQkFBa0IsT0FBTyxrQkFBaUI7QUFBQSxFQUMx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QUEsZ0JBQ0E7QUFBQSxrQkFDRSxNQUFNO0FBQUEsa0JBQ04sTUFBTTtBQUFBLGdCQUNSO0FBQUEsZ0JBQ0E7QUFBQSxrQkFDRSxNQUFNO0FBQUEsa0JBQ04sTUFBTTtBQUFBLGdCQUNSO0FBQUEsZ0JBQ0E7QUFBQSxrQkFDRSxNQUFNO0FBQUEsa0JBQ04sTUFBTTtBQUFBLGdCQUNSO0FBQUEsZ0JBQ0E7QUFBQSxrQkFDRSxNQUFNO0FBQUEsa0JBQ04sTUFBTTtBQUFBLGdCQUNSO0FBQUEsZ0JBQ0E7QUFBQSxrQkFDRSxNQUFNO0FBQUEsa0JBQ04sTUFBTTtBQUFBLGdCQUNSO0FBQUEsZ0JBQ0E7QUFBQSxrQkFDRSxNQUFNO0FBQUEsa0JBQ04sTUFBTTtBQUFBLGdCQUNSO0FBQUEsZ0JBQ0E7QUFBQSxrQkFDRSxNQUFNO0FBQUEsa0JBQ04sTUFBTTtBQUFBLGdCQUNSO0FBQUEsZ0JBQ0E7QUFBQSxrQkFDRSxNQUFNO0FBQUEsa0JBQ04sTUFBTTtBQUFBLGdCQUNSO0FBQUEsY0FDRjtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixPQUFPO0FBQUEsZ0JBQ0w7QUFBQSxrQkFDRSxNQUFNO0FBQUEsa0JBQ04sTUFBTTtBQUFBLGdCQUNSO0FBQUEsZ0JBQ0E7QUFBQSxrQkFDRSxNQUFNO0FBQUEsa0JBQ04sTUFBTTtBQUFBLGdCQUNSO0FBQUEsZ0JBQ0E7QUFBQSxrQkFDRSxNQUFNO0FBQUEsa0JBQ04sTUFBTTtBQUFBLGdCQUNSO0FBQUEsZ0JBQ0E7QUFBQSxrQkFDRSxNQUFNO0FBQUEsa0JBQ04sTUFBTTtBQUFBLGdCQUNSO0FBQUEsZ0JBQ0E7QUFBQSxrQkFDRSxNQUFNO0FBQUEsa0JBQ04sTUFBTTtBQUFBLGdCQUNSO0FBQUEsZ0JBQ0E7QUFBQSxrQkFDRSxNQUFNO0FBQUEsa0JBQ04sTUFBTTtBQUFBLGdCQUNSO0FBQUEsZ0JBQ0E7QUFBQSxrQkFDRSxNQUFNO0FBQUEsa0JBQ04sTUFBTTtBQUFBLGdCQUNSO0FBQUEsZ0JBQ0E7QUFBQSxrQkFDRSxNQUFNO0FBQUEsa0JBQ04sTUFBTTtBQUFBLGdCQUNSO0FBQUEsZ0JBQ0E7QUFBQSxrQkFDRSxNQUFNO0FBQUEsa0JBQ04sTUFBTTtBQUFBLGdCQUNSO0FBQUEsZ0JBQ0E7QUFBQSxrQkFDRSxNQUFNO0FBQUEsa0JBQ04sTUFBTTtBQUFBLGdCQUNSO0FBQUEsZ0JBQ0E7QUFBQSxrQkFDRSxNQUFNO0FBQUEsa0JBQ04sTUFBTTtBQUFBLGdCQUNSO0FBQUEsZ0JBQ0E7QUFBQSxrQkFDRSxNQUFNO0FBQUEsa0JBQ04sTUFBTTtBQUFBLGdCQUNSO0FBQUEsZ0JBQ0E7QUFBQSxrQkFDRSxNQUFNO0FBQUEsa0JBQ04sTUFBTTtBQUFBLGdCQUNSO0FBQUEsZ0JBQ0E7QUFBQSxrQkFDRSxNQUFNO0FBQUEsa0JBQ04sTUFBTTtBQUFBLGdCQUNSO0FBQUEsY0FDRjtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1I7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxRQUNMO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDUjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsVUFBVTtBQUFBLElBQ1IsU0FDRTtBQUFBLElBQ0YsTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLFVBQVU7QUFBQSxJQUNSLGlCQUFpQjtBQUFBLE1BQ2YsS0FBSztBQUFBLElBQ1A7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
