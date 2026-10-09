export interface Article {
  title: string
  author: string
  href: string
  note: string
}

export const reading: Article[] = [
  {
    title: 'Don’t Sync State. Derive It!',
    author: 'Kent C. Dodds',
    href: 'https://kentcdodds.com/blog/dont-sync-state-derive-it',
    note: 'Why auth state at APMC ended up in one cookie instead of two stores that kept drifting apart.',
  },
  {
    title: 'Build vs Buy: Component Libraries edition',
    author: 'Kent C. Dodds',
    href: 'https://kentcdodds.com/blog/build-vs-buy-component-libraries-edition',
    note: 'How I think about building on a headless library like Reka UI instead of starting from zero.',
  },
  {
    title: 'Designing robust and predictable APIs with idempotency',
    author: 'Brandur Leach, Stripe',
    href: 'https://stripe.com/blog/idempotency',
    note: 'Worth rereading before touching any checkout where a request can be retried.',
  },
  {
    title: 'Choose Boring Technology',
    author: 'Dan McKinley',
    href: 'https://mcfunley.com/choose-boring-technology',
    note: 'The filter I use before adding anything new to a codebase other people will maintain.',
  },
  {
    title: 'On Being A Senior Engineer',
    author: 'John Allspaw',
    href: 'https://www.kitchensoap.com/2012/10/25/on-being-a-senior-engineer/',
    note: 'The best description I’ve found of what “senior” should actually mean.',
  },
]
