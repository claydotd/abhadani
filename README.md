# Simple steps to update the portfolio site

This site is built with React and hosted on GitHub Pages. To edit/add to the portfolio, just edit the JSON files in the `content/` folder on the gh-pages branch. The site will update automatically.

## Updating site information

Edit **`content/site.json`** to change:

- **name** 
- **tagline** 
- **bio** (this is different than the "About" page)
- **about** (This is the "About" page: use `\n\n` between paragraphs)
- **email** 
- **twitter** 
- **linkedin** 

## Adding or removing portfolio work

Each category of writing has its own file in the `content/` folder in .json format:

| `reportage.json` | Reportage |
| `features.json` | Features |
| `investigations.json` | Investigations |
| `opinion-analysis.json` | Opinion / Analysis |
| `reviews.json` | Reviews |

What is .json?
"Java Script Object Notation" is just the code format that contains all the information the website needs to show things.
To add a new piece of work, just add another entry to the .json file. An entry is everything within and including the curly braces. { }

### Format for each piece of work

```json
{
  "title": "Article headline",
  "date": "2024-03-12",
  "publisher": "The Guardian",
  "quote": "Optional pull quote or review excerpt",
  "imageUrl": "https://example.com/image.jpg",
  "url": "https://example.com/link-to-article",
  "featured": true
}
```


| `title` | Required  |
| `date` | Required. Publication date in YYYY-MM-DD format |
| `publisher` | Required  |
| `quote` | Optional quote to be displayed |
| `imageUrl` | Optional URL for an image. |
| `url` | Optional link to the published article |
| `featured` | Required. `true` to show on the homepage, `false` to not show on the homepage |

### Adding a new piece

Copy an existing entry inside the JSON file, paste it below, and update the fields. Make sure entries are separated by commas like:
`{ ...  `
`  ...  `
`  ... },`
`{ ...  `
`  ...  `
`  ... },`

### Removing a piece

Delete the entire `{ ... }` block for that entry. Be careful to remove the comma correctly so the JSON stays valid.

### Showing work on the homepage

Set `"featured": true` on any items you want highlighted on the homepage.

## How to publish changes

1. Open the project on GitHub (in the browser)
2. Navigate to the `content/` folder
3. Click the file you want to edit, then the pencil icon
4. Make your changes and click **Commit changes**
5. Wait a minute or two — GitHub Actions will rebuild the site automatically

Your changes will appear at your GitHub Pages URL shortly after.

## Something looks funky, pls help?

If something looks wrong after editing, check that your JSON is valid: every entry needs commas between them (but not after the last one), and all text must be in double quotes.


## Project structure

```
content/           ← Edit these JSON files to update the site
  site.json        ← Name, bio, contact info
  reportage.json
  features.json
  investigations.json
  opinion-analysis.json
  reviews.json
src/
  components/      ← Layout, navigation, work cards
  pages/           ← Home, About, Selected Work, Contact
  data/content.ts  ← Loads JSON into the app
```
