export type Token = [cls: string, text: string]

export const accountPageCode: Token[][] = [
  [['tg', '<script'], ['', ' '], ['p', 'setup'], ['', ' '], ['p', 'lang'], ['', '='], ['s', '"ts"'], ['tg', '>']],
  [['f', 'definePageMeta'], ['', '({']],
  [['', '  '], ['p', 'auth'], ['', ': '], ['s', '\'registered\''], ['', ',']],
  [['', '  '], ['p', 'layout'], ['', ': '], ['s', '\'account\''], ['', ',']],
  [['', '})']],
  [],
  [['k', 'const'], ['', ' { '], ['p', 'user'], ['', ' } = '], ['f', 'useAuth'], ['', '()']],
  [['tg', '</script>']],
  [],
  [['tg', '<template>']],
  [['', '  '], ['tg', '<AccountLayout>']],
  [['', '    '], ['tg', '<ProfileCard'], ['', ' '], ['p', ':user'], ['', '='], ['s', '"user"'], ['', ' '], ['tg', '/>']],
  [['', '    '], ['tg', '<SubscriptionCard'], ['', ' '], ['tg', '/>']],
  [['', '    '], ['tg', '<DevicesList'], ['', ' '], ['tg', '/>']],
  [['', '  '], ['tg', '</AccountLayout>']],
  [['tg', '</template>']],
]
