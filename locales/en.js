export default {
  head: {
    home: {
      title: 'Ali Afsahnoudeh portfolio website',
    },
    project: {
      title: 'Created by Ali Afsahnoudeh',
    },
  },
  header: {
    links: {
      about: 'About',
      skills: 'Skills',
      fields: 'Fields',
      portfolio: 'Portfolio',
      home: 'Home',
    },
  },
  home: {
    banner: {
      title: 'Ali Afsahnoudeh',
      description: 'Software Engineer',
    },
    about: {
      title: 'About Me',
      description: "I'm an experienced full stack web engineer.",
    },
    skills: {
      title: 'Skills',
    },
    portfolio: {
      title: 'Portfolio',
    },
  },
  projects: {
    badgusan: {
      title: 'Bad Gusan Website',
      content: `Badgusan is our music band. I made our offical website with Vue.js, Vue-Router, Vuex and Bootstrap.
      <br />
      It's a multilingual website with responsive deisign for mobiles and tablest.
      <br />
      You can visit this website in:
      <br />
      http://badgusan.com`,
    },
    govesta: {
      title: 'govesta.co',
      content: 'A real estate website for finding a house in europe',
    },
    govesta_dashboard: {
      title: 'Govesta Dashboard',
      content: `The govesta dashboard was a separated monolith project written in <a href="https://nextjs.org/" target="_blank">Next.js</a> where agencies and property owners could manage their properties. They could a new place, edit its information and images and start or stop advertising it on the main website. So every place that users were seeing on the main website was added here firstly.
      <br />
      It wasn’t needed to be server-side-rendered since there was no need to SEO, but we used Next.js for the features it offered to create a React.js applications easily.
      It was communicating with our back-end through a RESTful Api and we used JWT to handle user authentications.
      <br />
      As the main website it was depended to our two other projects. Ui-library which we kept all of our UI components in it and it had a nice little storybook to make them visible to the whole team and another project we called govesta-global to keep our shared information and translations.
      <br />
      <br />
      When I was working on this project, I managed to upgrade it form next.js 7 to next.js 10 (the latest stable version on that time) to use its many brand new features such automatic sub-routing which made our multi-lingual implementation much easier.
      <br />
      After the upgrading the whole project, we deployed it as serverless on <a href="https://vercel.com/" target="_blank">vercel</a>.
      `,
    },
    shooka_client: {
      title: 'Bad Gusan Website',
      content: 'Official website of Bad Gusan music band',
    },
    shooka_admin: {
      title: 'Bad Gusan Website',
      content: 'Official website of Bad Gusan music band',
    },
    reconcile_desktop: {
      title: 'Desktop application for reconciling',
      content: `This cross paltform application was made with Electron.js and Vue.js.

Users can open two excel files in it (with drag & drop or browsing from hard drives) and after clicking on calculate button, it will comparing two files and showing a table as a result.

This result can be filterd or searched throught. And users can print it or export it to Excel file.`,
    },
    portfolio: {
      title: 'Bad Gusan Website',
      content: 'Official website of Bad Gusan music band',
    },
  },
  'work-experience': {},
  footer: {
    language: {
      en: 'English',
      fa: 'Persian',
      de: 'German',
    },
    copyright: '© Ali Afsahnoudeh',
  },
}
