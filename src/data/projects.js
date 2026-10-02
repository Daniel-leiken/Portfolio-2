const projects = [
  {
    slug: 'bidbound',
    title: 'BidBound',
    course: 'Semester Project 2',
    teaser:
      'An auction site where users register, list items for sale and bid on auctions with credits, built on the Noroff Auction API.',
    image: '/images/bidbound.webp',
    imageAlt: 'BidBound home page showing a list of the latest auctions with images, end times and current bids',
    caption: 'The BidBound feed lists active auctions, sorted by those ending soonest.',
    liveUrl: 'https://bidbound-semester-project2.netlify.app',
    repoUrl: 'https://github.com/Daniel-leiken/Semester-Project-2#readme',
    stack: ['Tailwind CSS', 'SCSS', 'JavaScript (ES modules)', 'Noroff Auction API', 'Netlify'],
    body: [
      'BidBound is an online auction platform I built as my Semester Project 2 at Noroff. It runs on the Noroff Auction API: users register with an avatar, banner and bio, log in with token-based authentication and start with a balance of credits they can spend on bids.',
      'The main feed loads all active listings, sorts them so the auctions ending soonest come first and paginates the results. A detail view shows the item images, the time remaining, the full bid history and the seller. Logged-in users can place bids, create new listings and manage everything from their profile page, where they can edit their bio, delete their own listings and keep track of auctions they have bid on. Visitors can still browse listings and are prompted to sign up when they try to bid.',
      'The interface is styled with Tailwind CSS and a small SCSS layer, with a mobile header and layouts that adapt from phone to desktop.',
    ],
  },
  {
    slug: 'shophub',
    title: 'ShopHub',
    course: 'JavaScript Frameworks',
    teaser:
      'A Next.js and TypeScript web shop with live search, sorting, a persistent cart and a checkout flow, styled with Tailwind CSS.',
    image: '/images/shophub.webp',
    imageAlt: 'ShopHub product listing page with a search field, sort menu and a grid of product cards',
    caption: 'The ShopHub product listing with search, sorting and discount badges.',
    liveUrl: 'https://javascript-frameworks-ca-daniel.netlify.app',
    repoUrl: 'https://github.com/Daniel-leiken/javascript-frameworks-ca#readme',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Noroff Online Shop API'],
    body: [
      'ShopHub is an e-commerce storefront I built for the JavaScript Frameworks course at Noroff. It is a Next.js App Router project written in React and TypeScript, and it gets its product data from the Noroff Online Shop API.',
      'Visitors can search products by title, description or tag and sort them by name, price or rating. Each product has its own page with images, discount badges, ratings, reviews and tags, plus page-specific metadata for search engines. The cart is managed with Zustand and saved in localStorage, so it survives page reloads, and it has quantity controls, a live item count in the header and a checkout flow that ends on a confirmation page.',
      'A contact form validates every field before it can be submitted, and toast notifications confirm actions such as adding an item to the cart. The design uses Tailwind CSS v4 with a custom theme and colours chosen to meet WCAG contrast requirements.',
    ],
  },
  {
    slug: 'chatterhub',
    title: 'ChatterHub',
    course: 'CSS Frameworks',
    teaser:
      'A responsive social media front-end built with Bootstrap 5 and SCSS, with login, feed and profile pages in a custom theme.',
    image: '/images/chatterhub.webp',
    imageAlt: 'ChatterHub login page with the red smiling C logo, a login form and a register button',
    caption: 'The ChatterHub login page with the custom Bootstrap theme.',
    liveUrl: 'https://css-frameworks-danielleiken.netlify.app',
    repoUrl: 'https://github.com/Daniel-leiken/css-frameworks-ca-danielstrandheim#readme',
    stack: ['Bootstrap 5', 'SCSS', 'HTML', 'Netlify'],
    body: [
      'ChatterHub is a social media front-end I built for the CSS Frameworks course at Noroff. The brief was to design and build a responsive, multi-page interface using a modern CSS framework.',
      'I used Bootstrap 5 for the grid, navbar, cards and forms, and customised it with SCSS: brand colour variables, Montserrat typography and custom styles for buttons, cards and navigation. The site has a login page, a feed with search, sorting, a create-post form and a responsive grid of posts, and a profile page with editable account details, follower stats and a bio.',
      'The layout goes from a single column on mobile to multiple columns on desktop, with a collapsible menu on small screens. The project taught me how to work with a framework’s components and utility classes while still giving the site its own visual identity.',
    ],
  },
]

export default projects

export function getProject(slug) {
  return projects.find((project) => project.slug === slug)
}
