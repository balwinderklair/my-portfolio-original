module.exports = {
  plugins: [
    {
      resolve: `@christiandavid/gatsby-theme-byfolio`,
      options: {
        basePath: ``,
        path: `src/`,
        imagesPath: `src/images/`,
        iconFile: `src/images/icon.png`,
        siteTitle: `Portfolio`,
        siteUrl: `https://www.christianibarguen.com`,
        siteName: `I am graphic designer and
        this is my portfolio`,
        siteShortName: `CD`,
        siteDescription: `This cool App contains information about my work experience as a software developer.`,
        siteKeywords: `UI designer, website designer, app designer, logos designer.`,
        useMozJpeg: true,
        menuLinks: [
          // title = Link text
          // color = Animation background color on click
          { name: `home`, title: `Home`, color: `#000`, link: `` },
          {
            name: `experience`,
            title: `Experience`,
            color: `#3a3d98`,
            link: ``,
          },
          { name: `skills`, title: `Skills`, color: `#d52d43`, link: `` },
          { name: `aboutMe`, title: `About Me`, color: `#fff`, link: `` },
        ],
        email: `bklair16@gmail.com`,
        social: {
          // Usernames
          twitter: `ichristiandavid`,
          gitHub: `christiandavid`,
          stackOverflow: `967956/christian-david`,
          linkedIn: `in/christianibarguen/`,
          resumeInPdf: `/CV-19.pdf`, // url or local link
        },
        homePage: {
          availableToHire: true,
          dotColors: ['#0e3e1e', '#6CC551'],
          h1Text: `Hi!, I'm Balwinder Klair`,
          h2Text: `I am graphic designer and
          this is my portfolio.`,
          typewriter: [
            `Designing is my passion 😎`,
            `I'm a 🍕 lover`,
            `I'm a GRAPHIC DESIGN🤓`,
            `I'm a WEB DESIGN😎`,
            `I think one of my values is the <strong>ability to resolve problems<strong>`,
            `I like to share what I know 👨‍🏫`,
            `In my non-designing hours, I'm at the 🏋‍`,
          ],
        },
        // Color for menu background
        shapeColor: {
          link: { color: '#171616', hover: '#fff' },
          shape1: {
            color: `#413f46`,
            opacity: `0.7`,
          },
          shape2: {
            color: `#e6e5ea`,
            opacity: `0.7`,
          },
          shape3: {
            color: `#fff`,
            opacity: `0.7`,
          },
        },
        footer: `heart`,
      },
    },
  ],
};
