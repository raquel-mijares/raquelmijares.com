export interface Recommendation {
  name: string
  title: string
  relation: string
  quote: string
}

export const recommendations: Recommendation[] = [
  {
    name: 'Monique Plourde',
    title: 'Director of Product, OTT Streaming',
    relation: 'APMC',
    quote:
      'She’s proactive to the point of finding things to work on before anyone asks, she’s the first to pick up an urgent ticket, and she can run with projects and lead them on her own without needing much direction. She’s fast, efficient, and thorough all at once, which is a rare combination.',
  },
  {
    name: 'Tomasz Szewczyk',
    title: 'Senior Software Engineer, managed Raquel',
    relation: 'APMC',
    quote:
      'As a developer, she was never afraid of challenges, new technologies, or communicating with other teams. She was always responsive, proactive, and willing to take ownership.',
  },
  {
    name: 'Pierre Chamberlain',
    title: 'Fullstack Developer',
    relation: 'APMC',
    quote:
      'Raquel has a knack for writing clean, comprehensible code that reads almost like a well-told story.',
  },
  {
    name: 'Ivan Kohut',
    title: 'Frontend Video Streaming Engineer',
    relation: 'APMC',
    quote:
      'She genuinely had my back. She was always willing to help, step in when needed, and make things easier for the people around her.',
  },
  {
    name: 'Luis Marcano',
    title: 'Staff Software Engineer',
    relation: 'Tugboat Logic',
    quote:
      'An outstanding and creative professional capable of working out complex problems with little to no guidance and delivering stellar results in the process.',
  },
]
