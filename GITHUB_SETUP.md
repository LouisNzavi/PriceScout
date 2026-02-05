# Connect this project to GitHub

Git is already initialized. To connect to GitHub:

1. **Create a new repository** on [github.com/new](https://github.com/new):
   - Name: `PriceScout` (or any name you prefer)
   - Leave "Add a README" unchecked (this project already has one)

2. **Add the remote** (replace `YOUR_USERNAME` with your GitHub username):
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/PriceScout.git
   ```
   Or with SSH:
   ```bash
   git remote add origin git@github.com:YOUR_USERNAME/PriceScout.git
   ```

3. **Commit and push** (when you're ready):
   ```bash
   git add .
   git commit -m "Initial PriceScout MVP - Next.js, design system, Home/Compare/Product/Basket"
   git push -u origin main
   ```
   If your default branch is `master`, use `git push -u origin master` instead.

Optional: install [GitHub CLI](https://cli.github.com/) (`gh`) and run:
```bash
gh repo create PriceScout --private --source=. --remote=origin --push
```
