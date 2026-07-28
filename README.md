# Updating your site's content

This site is built with React and hosted on GitHub Pages. To edit/add to the portfolio, just edit the JSON files in the `content/` folder. The site will update automatically when you commit the changes. (it may take a few minutes for the changes to go live)

## Updating basic site information

Edit **`content/site.json`** to change:

- **name** 
- **tagline** 
- **bio** (this is different than the "About" page)
- **email** 
- **twitter** 
- **linkedin** 

## Editing the About, Communications, Editorial, and Etc pages

These are now in Markdown format. Here's a quick bit of help. Edit this document to view how I made these things happen:
**Hello!**

This is some Markdown Text.
Quick guide:
# H1
## H2
### H3
> blockquote\
*italicized text*\
**bold text**

use a backslash (\) at the end of a line to create\
a new line\
within a paragraph

> it works in blockquotes too\
look at this blockquoted *italicized text* and **bold text**\
markdown is pretty cool I guess.

[This is a link.](https://www.markdownguide.org/cheat-sheet/) Click on it for a helpful cheat sheet.

Below is an image.
![This is an image](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.telegraph.co.uk%2Fcontent%2Fdam%2FTravel%2FDestinations%2FEurope%2FUnited%2520Kingdom%2FScotland%2Fdundee-scotland.jpg%3Fimwidth%3D450&f=1&nofb=1&ipt=87d4975e79a76646f4d918400ac08a4c41464297b6cf595b64640c71a0e6ce67)



## Adding or removing portfolio work

Each category of writing has its own file in the `content/` folder in .json format:

| `reportage.json` | Reportage |
| `features.json` | Features |
| `investigations.json` | Investigations |
| `opinion-analysis.json` | Opinion / Analysis |
| `reviews.json` | Reviews |

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
| `featured` | Required. `true` to show on the Selected Work page, `false` for it only to show up on More Work |

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
5. Wait a minute or two, then GitHub will rebuild the site automatically

Your changes will appear at your GitHub Pages URL shortly after.

## Something looks funky, pls help?

If something looks wrong after editing, check that your JSON is valid: every entry needs commas between them (but not after the last one), and all text must be in double quotes.


## Project structure

```
content/           ← Edit these files to update the site
  site.json        ← Name, short bio, contact info
  about.md        ← About page content
  communications.md
  editorial.md
  etc.md
  reportage.json  ← Work portfolio examples
  features.json
  investigations.json
  opinion-analysis.json

src/
  components/      ← Stuff that makes the website work
  pages/           ← For Clay to edit
  data/content.ts  ← Loads JSON content into the app
```
