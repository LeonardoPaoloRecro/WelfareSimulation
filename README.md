# Output, Welfare, and War Mobilization

This is a static site ready for GitHub Pages.

## Files to publish

- `index.html`
- `app.js`
- `data.js`
- `Welfare Simulation Macro Datapack USA 1929-2025.xlsx`
- `.nojekyll`

## GitHub Pages deployment

1. Create a GitHub repository.
2. Upload the files listed above to the repository root.
3. Go to `Settings` -> `Pages`.
4. Under `Build and deployment`, choose:
   - `Source`: `Deploy from a branch`
   - `Branch`: `main`
   - `Folder`: `/ (root)`
5. Save and wait for GitHub Pages to publish the site.

## Notes

- No build step is required.
- All assets are linked with relative paths, so the site works directly from the repository root.
- Plotly is loaded from its CDN.
- The dataset download button serves `Welfare Simulation Macro Datapack USA 1929-2025.xlsx`, so that file must stay in the repository root.
