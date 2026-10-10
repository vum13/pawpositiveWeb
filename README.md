# pawpositiveWeb
website for pawpositive Business
# Pawsitive Pet Academy Website

A multi-page website for **Pawsitive Pet Academy**, a pet care and training academy based in Durban, South Africa. Since 2023 the academy has offered short practical courses and longer professional programmes for pet owners, aspiring pet-care professionals and future pet entrepreneurs.

This repository contains the front-end of the site, built as plain static HTML.

## Features

- **Home page** introducing the academy
- **About Us**: history, vision, mission and goals
- **Courses**: seven courses split into 6-week and 6-month programmes, each with its own detail page
- **Pricing**: a course selector with a quote section (layout only for now)
- **Reviews**: customer testimonials
- **Our Team**: trainers, staff and volunteers
- **Blog**: dog-care articles and tips
- **Shop / Gallery**: photo and video gallery
- **Cart**: cart and payment page layout
- **Contact**: phone, email, WhatsApp, Facebook and address

## Courses offered

| Programme | Course | Fee |
|-----------|--------|-----|
| 6 weeks | Basic Dog Walk | R750 |
| 6 weeks | Puppy Care | R750 |
| 6 weeks | Pet First Aid | R750 |
| 6 months | Pet Grooming | R1500 |
| 6 months | Animal Behaviour | R1500 |
| 6 months | Canine Obedience Training | R1500 |
| 6 months | Pet Business Management | R1500 |

## Tech stack

- HTML5 (tables and inline attributes for layout)
- No CSS files, JavaScript, frameworks, build tools or backend

## Project structure

```
pawpositiveWeb/
├── index.html                    # Home
├── about us.html                 # History, vision, mission, goals
├── courses.html                  # Course listing
├── basicDogWalk.html             # Course detail pages
├── puppyCare.html
├── petFirstAid.html
├── petGrooming.html
├── animalBehaviour.html
├── canineObidienceTraining.html
├── petBusinessManagement.html
├── price.html                    # Course selector / quote
├── Reviews.html                  # Testimonials
├── OurTeam.html                  # Team
├── blog.html                     # Blog
├── shop.html                     # Gallery (photos and video)
├── cart.html                     # Cart and payment form layout
├── Contact.html                  # Contact details
├── Logo.jpeg                     # Main logo
├── Whatsapp icon.jfif
├── Facebook logo.jfif
└── images/                       # Photos, logos, course and team images
```

## Known issues and to-do

The site is still in development. Items below are worth fixing next:

**Broken images**
- `index.html`, `about us.html`, `OurTeam.html`, `shop.html`, `price.html`, `cart.html` reference files such as `Bg Image.jpeg`, `history.jpeg`, `Sarah.jpeg` and `second_paw_logo-removebg-preview.png` at the project root, but they live in `images/`. Update the paths to `images/...`.
- `puppyCare.html` uses an absolute path from a local machine (`C:\Users\...`). Change it to `images/pottyTraing.webp`.
- Several pages use Windows backslashes (`images\dogWalk.jpeg`). Use forward slashes so they work on Linux-based hosting.
- `OurTeam.html` has a malformed `background` attribute and references a non-existent `paw.png`.

**Broken links**
- `price.html`, `shop.html` and `cart.html` link to `about.html`, `pricing.html`, `gallery.html` and `team.html`, which don't exist. The actual files are `about us.html`, `price.html`, `shop.html` and `OurTeam.html`.
- Links to `contact.html` and `reviews.html` don't match the file names `Contact.html` and `Reviews.html`. These work on Windows but fail on case-sensitive servers.
- `blog.html`, `shop.html` and `cart.html` aren't linked from the main navigation on most pages.
- Many footer and header links on other pages point to `#`.
- Consider renaming `about us.html` (contains a space) to `about.html`.

**Content and markup**
- Course detail pages show a duration of "2h" but the courses are described as 6 weeks or 6 months. Clarify what the duration means.
- `blog.html` has stray table rows outside a `<table>` and leftover closing tags. Cards 4 to 6 are missing author and date lines.
- Most pages have the placeholder title `Document`. Give each page a proper `<title>`.
- Typos in several places, for example "eduvate", "Obidience", "Gromming", "safly".
- `price.html` has an empty quote table and no logic yet; `cart.html` shows hard-coded items.
- The brand name varies between "Pawsitive Pet Academy" and "Pet Pawsitive Academy".

**Security and functionality**
- `cart.html` contains a card number, expiry and CVV form. Don't collect card details on a static page. Use a hosted payment provider (e.g. PayFast, Yoco or Stripe) when adding checkout.
- Forms don't submit anywhere yet. Pricing, cart and checkout would need JavaScript and/or a backend.

**Suggested improvements**
- Add a shared stylesheet (`styles.css`) and replace table-based layouts with CSS (flexbox/grid)
- Make the site responsive for mobile
- Add `alt` text to all images and compress the large photos and video
- Add a favicon and meta descriptions for SEO
- Deploy via GitHub Pages, Netlify or similar

## Contributing

1. Fork the repository and create a feature branch: `git checkout -b feature/your-feature`
2. Commit your changes: `git commit -m "Add your feature"`
3. Push the branch and open a pull request

## Contact

Details for the academy are on the site's Contact page. For project questions, open an issue on the [GitHub repository](https://github.com/vum13/pawpositiveWeb).

## Contributors

Built by the Pawsitive Pet Academy web team (Git authors: ladon, tiddy, Thandani Ntuli).

## License

No license has been specified yet. Add a `LICENSE` file to state how others may use this code.
