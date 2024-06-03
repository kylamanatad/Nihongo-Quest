export const navLinks = [
  { href: '/', key: 'Home', text: 'Home' },
  { href: '/studysets', studySetId: 'nihongo-1', key: 'nihongo-1', text: 'Vol. 1' },
  { href: '/studysets', studySetId: 'nihongo-2', key: 'nihongo-2', text: 'Vol. 2' },
];

type Item = {
  name: string;
  slug: string;
  description?: string;
};

export const StudySets: { name: string; items: Item[] }[] = [
  {
    name: 'Study Sets',
    items: [
      {
        name: 'Volume I (Lesson 1-12)',
        slug: 'studysets/nihongo-1',
        description: 'A beginner course in elementary Japanese',
      },
      {
        name: 'Volume II (Lesson 13-23)',
        slug: 'studysets/nihongo-2',
        description: 'An intermediate course in elementary Japanese',
      },
    ],
  },
];
