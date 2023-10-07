// gitprofile.config.js

const config = {
  github: {
    username: 'iygoktas', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    instagram: 'ibrahimtelligence',
    stackoverflow: '17109746/ibrahimyg', // format: userid/username
    website: 'iygoktas.vercel.app',
    phone: '+90 531 356 32 23',
    email: 'ibrahimyasing@gmail.com',
  },
  resume: {
    fileUrl:
      'https://flowcv.com/resume/fsfog21poo', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'CSS',
    'JavaScript',
    'Flutter/Dart',
    'Python / AI',
    'Python / Machine Learning',
    'C#',
    'MySQL',
    'Git',
  ],
  experiences: [
    {
      company: 'Webomax',
      position: 'Python AI Dev.',
      from: '1 July 2023',
      to: 'Present',
      companyLink: 'https://webomax.net/',
    },
    
    
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'Borusan Asım Kocabıyık Vocational and Technical Anatolian High School',
      degree: 'High School License',
      from: '2019',
      to: '2024',
    },
    
  ],

  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
    ],

  },

};

export default config;
