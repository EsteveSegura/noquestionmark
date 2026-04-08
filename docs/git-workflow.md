# How to use Git in this project

Guide for the Git workflow we follow to contribute to the project.

---

## 1. Create a branch

Whenever we are going to create a new page, we must start by creating a branch from `main`. The branch name **must** follow this format:

```
feature/<page-name>
```

For example, if we are going to create the "about" page:

```bash
git checkout main
git pull origin main
git checkout -b feature/about
```

> **Important:** never work directly on `main`. Always create a new branch.

---

## 2. Make commits with Conventional Commits

All commits must follow the [Conventional Commits](https://www.conventionalcommits.org/) convention. The format is:

```
<type>(optional scope): short description
```

### Most common types

| Type       | Usage                                    |
| ---------- | ---------------------------------------- |
| `feat`     | New feature or page                      |
| `fix`      | Bug fix                                  |
| `docs`     | Documentation changes                    |
| `style`    | Formatting changes (no logic affected)   |
| `refactor` | Code refactoring                         |
| `chore`    | Maintenance tasks                        |

### Examples

```bash
git add .
git commit -m "feat(about): add about page with team section"
git commit -m "fix(about): fix broken image on mobile"
git commit -m "docs: add git workflow guide"
```

---

## 3. Push the branch and create a Pull Request

Once the changes are ready, we push the branch and create the PR using the **GitHub CLI** (`gh`):

```bash
git push origin feature/<page-name>
gh pr create
```

---

## 4. Pull Request format

The PR description **must** have three Markdown sections: **What**, **Why** and **Test**.

### Template

```markdown
## What

<!-- What has been implemented -->

## Why

<!-- Why it has been done -->

## Test

<!-- How it has been tested -->
```

### What

Explain **what** has been implemented. Describe the new page or feature, what it includes and any relevant details.

> Example:
>
> The "About" page (`/about`) has been created. It includes a team presentation section with photos and links to social media.

### Why

Explain **why** it has been done. Usually it will be to add more content to the site, but if there is any additional reason (client request, SEO improvement, etc.) it should be mentioned here.

> Example:
>
> This page is added to give more visibility to the team and build trust with visitors.

### Test

Explain **how** it has been tested. For now, testing is done **manually using the browser**. If tools like Jest or Playwright are implemented in the future, this section will be updated.

> Example:
>
> Manually tested in the browser (Chrome and Firefox). Verified that the page loads correctly, images display properly and the layout is responsive.

---

## Full workflow example

```bash
# 1. Create branch
git checkout main
git pull origin main
git checkout -b feature/about

# 2. Develop and commit
git add .
git commit -m "feat(about): add about page with team section"

# 3. Push and create PR
git push origin feature/about
gh pr create --title "feat(about): add about page" --body "## What

The About page has been created with the team presentation.

## Why

An about page is needed to introduce the team and build trust with visitors.

## Test

Manually tested in the browser. Verified that the page loads correctly and is responsive."
```
