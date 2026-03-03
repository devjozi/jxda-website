# BRANCHING STRATEGY — JX Distribution

**Version:** 1.0.0  
**Last Updated:** 2026-02-15

---

## 🌳 **BRANCH STRUCTURE**

```
main (production)
├── develop (staging)
│   ├── feature/enable-server-routes
│   ├── feature/whatsapp-integration
│   ├── feature/product-catalog
│   ├── feature/shopping-cart
│   ├── feature/checkout-flow
│   ├── fix/mobile-navigation
│   └── ... (see PROJECT_PLAN.md for full list)
```

---

## 📋 **BRANCH NAMING CONVENTIONS**

### **Feature Branches**
Format: `feature/<descriptive-name>`

**Examples:**
- `feature/whatsapp-integration`
- `feature/product-catalog`
- `feature/shopping-cart`
- `feature/payment-integration`

**Use when:**
- Adding new functionality
- Building new pages/components
- Implementing new features

---

### **Fix Branches**
Format: `fix/<descriptive-name>`

**Examples:**
- `fix/mobile-navigation`
- `fix/responsive-images`
- `fix/contact-form-validation`

**Use when:**
- Fixing bugs
- Correcting visual issues
- Resolving broken functionality

---

### **Refactor Branches**
Format: `refactor/<descriptive-name>`

**Examples:**
- `refactor/product-data-structure`
- `refactor/cart-state-management`

**Use when:**
- Improving code quality without changing behavior
- Restructuring components
- Performance optimizations

---

### **Documentation Branches**
Format: `docs/<descriptive-name>`

**Examples:**
- `docs/update-readme`
- `docs/add-deployment-guide`

**Use when:**
- Updating documentation only
- Adding guides or tutorials
- Fixing typos in docs

---

### **Release Branches**
Format: `release/v<version>`

**Examples:**
- `release/v1.0.0`
- `release/v1.1.0`

**Use when:**
- Preparing for production release
- Final QA and testing
- Version bumping

---

## 🔄 **WORKFLOW RULES**

## 🔒 **BRANCH PROTECTION POLICY (ENFORCED)**

Apply these settings to `main` in GitHub:

### Required settings
- ✅ **Require a pull request before merging**
- ✅ **Require approvals**: minimum 1
- ✅ **Dismiss stale approvals when new commits are pushed**
- ✅ **Require conversation resolution before merging**
- ✅ **Require status checks to pass before merging**
- ✅ **Require branches to be up to date before merging**
- ✅ **Restrict who can push to matching branches**
- ✅ **Do not allow bypassing the above settings**

### Required status checks (must be selected in branch protection)
- `Quality Gate / quality`
- `Security Scan / npm-audit`
- `Security Scan / codeql`

### Direct push policy
- ❌ **No direct pushes to `main`**
- ✅ Merge to `main` only via PR from `develop` (or release/hotfix PR)

### Optional strict settings (recommended)
- ✅ Require linear history
- ✅ Include administrators in enforcement

### Setup steps (GitHub UI)
1. Repo → **Settings** → **Branches**
2. Under **Branch protection rules**, add/edit rule for `main`
3. Enable the required settings above
4. Select required checks listed above
5. Save rule

> Note: Branch protection is enforced server-side by GitHub and cannot be guaranteed by local git settings alone.

### **Rule 1: One Branch = One Task**

✅ **CORRECT:**
```
feature/whatsapp-integration
- Add WhatsApp config to site.ts
- Update homepage CTAs to WhatsApp
- Update header "Request Quote" button
```

❌ **INCORRECT:**
```
feature/homepage-updates
- Add WhatsApp integration
- Update testimonials
- Fix FAQ dropdown
- Add new carousel slide
(Too many unrelated changes)
```

---

### **Rule 2: Atomic Commits with Conventional Format**

**⚡ CRITICAL: Every commit must be atomic and follow Conventional Commits**

**Atomic means:**
- **One logical change per commit** (feature, fix, refactor, or docs — never mixed)
- **Only stage relevant files** (no `git add .` unless all files are part of same change)
- **Self-contained** (commit can be reverted without breaking other features)

**Conventional Commits format:**
```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

**Types:**
- `feat`: New feature (e.g., add shopping cart)
- `fix`: Bug fix (e.g., fix mobile navigation)
- `docs`: Documentation only (e.g., update README)
- `style`: Formatting, whitespace (no code logic change)
- `refactor`: Code restructure, no functionality change
- `test`: Adding or updating tests
- `chore`: Maintenance (e.g., update dependencies)
- `perf`: Performance improvements

**Scopes** (optional, but recommended):
- `cart`, `checkout`, `products`, `homepage`, `nav`, `footer`, etc.

**Examples of ATOMIC commits:**

✅ **CORRECT** (separate commits):
```bash
# Commit 1: Add feature
git add lib/whatsapp.ts
git commit -m "feat(config): add WhatsApp utility functions"

# Commit 2: Use feature in homepage
git add app/page.tsx
git commit -m "feat(homepage): wire carousel CTAs to WhatsApp"

# Commit 3: Use feature in header
git add app/components/Header.tsx
git commit -m "feat(header): update quote button to use WhatsApp"

# Commit 4: Document changes
git add README.md
git commit -m "docs(readme): add WhatsApp integration notes"
```

❌ **INCORRECT** (mixing types):
```bash
# DON'T DO THIS - mixes feature + docs + fix
git add .
git commit -m "feat: add whatsapp and update docs and fix nav"
```

**Why atomic commits matter:**
- **Bisect-friendly:** Easy to find which commit introduced a bug
- **Revert-safe:** Can undo one change without affecting others
- **Review-friendly:** Reviewers understand exactly what changed
- **CI/CD-friendly:** Each commit can trigger appropriate workflows

---

### **Rule 3: Clean Staging Area**

**NEVER use `git add .` blindly.**

**Instead, stage intentionally:**

```bash
# Good: Stage only related files
git add lib/site.ts app/page.tsx
git commit -m "feat(whatsapp): add WhatsApp config and wire homepage CTAs"

# Good: Stage by pattern
git add app/components/*.tsx
git commit -m "refactor(components): extract common CTA button"

# Bad: Stage everything
git add .  # ❌ Likely includes unrelated changes
```

**Check before committing:**
```bash
# See what will be committed
git diff --staged

# Review staged files
git status --short
```

**If you accidentally stage wrong files:**
```bash
# Unstage specific file
git restore --staged filename.ts

# Unstage everything
git reset HEAD
```

---

### **Rule 4: Branch from `main` (until `develop` is created)**

**Always create feature branches from `main` for now:**
```bash
git checkout main
git pull origin main
git checkout -b feature/your-feature-name
```

**Once `develop` branch is created, branch from there instead:**
```bash
git checkout develop
git pull origin develop
git checkout -b feature/your-feature-name
```

**Never branch from:**
- Another feature branch (creates dependencies)
- Local branches out of sync with remote

---

### **Rule 5: Keep Branches Short-Lived**

**Target:** Complete and merge within 1-3 days

**Benefits:**
- Reduces merge conflicts
- Faster feedback cycles
- Easier code review

**If a branch takes > 3 days:**
- Break it 6: Commit Early, Commit Often (Atomically)**

**Good commit frequency:** Every 30-60 minutes of work, but **only commit complete logical units**

---

### **Rule 4: Commit Early, Commit Often**

**Good commit frequency:** Every 30-60 minutes of work

**Commit message format:**
```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation only
- `style`: Formatting, no code change
- `refactor`: Code restructure, no functionality change
- `test`: Adding tests
- `chore`: Maintenance tasks

**Examples:**
```bash
feat(cart): add localStorage persistence
fix(nav): mobile dropdown not closing
docs(readme): update deployment instructions
style(footer): adjust logo spacing
refactor(products): migrate to Supabase
test(checkout): add form validation tests
chore(deps): update Next.js to 16.1.7
```

---

## 🔀 **MERGE PROCESS**

### **Step 1: Update Your Branch**

Before opening a PR, sync with `develop`:

```bash
git checkout develop
git pull origin develop
git checkout your-feature-branch
git merge develop
```

Resolve any conflicts locally.

---

### **Step 2: Run Tests**

Ensure everything works:

```bash
npm run build      # Must succeed
npm run lint       # Must pass (or fix warnings)
npm run dev        # Visual check
```

---

### **Step 3: Create Pull Request**

**PR Title Format:**
```
[Feature] Add WhatsApp integration to homepage CTAs
[Fix] Mobile navigation dropdown not working
[Refactor] Migrate product data to Supabase
```

**PR Description Template:**
```markdown
## What does this PR do?
Brief description of changes

## Related Issue/Task
Closes #123 or "Task 1.2 from PROJECT_PLAN.md"

## Changes Made
- Added WhatsApp config to lib/site.ts
- Updated all CTA buttons to use WhatsApp links
- Added utility function getWhatsAppLink()

## Testing
- [ ] Tested on desktop Chrome
- [ ] Tested on mobile Safari
- [ ] WhatsApp opens correctly with pre-filled message
- [ ] All links work

## Screenshots (if applicable)
[Add screenshots showing before/after]

## Learning Notes
Brief explanation of key concepts used (for future reference)
```

---

### **Step 4: Code Review Checklist**

**Reviewer checks:**
- [ ] Code follows existing patterns
- [ ] No console.log or debug code
- [ ] Variables/functions have clear names
- [ ] Comments explain "why", not "what"
- [ ] No hardcoded values (use config files)
- [ ] Responsive design works
- [ ] No TypeScript errors
- [ ] Performance is acceptable

---

### **Step 5: Merge to `develop`**

**After approval:**
1. Squash commits if branch has many small commits
2. Use merge commit with descriptive message
3. Delete the feature branch after merge

```bash
git checkout develop
git merge --no-ff feature/your-feature-name
git push origin develop
git branch -d feature/your-feature-name
git push origin --delete feature/your-feature-name
```

---

## 🚀 **DEPLOYMENT WORKFLOW**

### **Preview Deployments (Automatic)**

**Triggered by:** Push to any `feature/*` branch

**Result:**
- CI/CD builds the site
- Deploys to `https://preview.example.com/<branch-name>`
- Preview link available for testing

**Use for:**
- Internal testing
- Client reviews
- QA validation

---

### **Staging Deployment (Automatic)**

**Triggered by:** Merge to `develop` branch

**Result:**
- CI/CD builds the site
- Deploys to `https://staging.example.com`
- Staging environment for final testing

**Use for:**
- Pre-production testing
- Integration testing
- Final stakeholder approval

---

### **Production Deployment (Manual)**

**Triggered by:** Merge `develop` → `main`

**Process:**
1. Create release branch: `release/v1.0.0`
2. Run final QA on staging
3. Bump version in `package.json`
4. Update `CHANGELOG.md`
5. Create PR: `release/v1.0.0` → `main`
6. After approval, merge to `main`
7. CI/CD deploys to production
8. Create Git tag: `v1.0.0`

---

## 🛡️ **BRANCH PROTECTION RULES**

### **`main` Branch**
- ✅ Require PR reviews (1+ approvers)
- ✅ Require status checks pass
- ✅ No direct commits
- ✅ Require linear history
- ✅ Require branches to be up to date

### **`develop` Branch**
- ✅ Require PR reviews (optional for solo dev)
- ✅ Require status checks pass
- ✅ No direct commits
- ✅ Allow force push (if needed)

### **`feature/*` Branches**
- ✅ No restrictions
- ✅ Can be force-pushed
- ✅ Deleted after merge

---

## 📊 **EXAMPLE WORKFLOW**

### **Scenario: Add WhatsApp Integration**

**1. Create branch from develop:**
```bash
git checkout develop
git pull origin develop
git checkout -b feature/whatsapp-integration
```

**2. Make changes:**
- Edit `lib/site.ts` (add WhatsApp config)
- Edit `app/page.tsx` (update CTAs)
- Edit `app/components/Header.tsx` (update button)

**3. Commit frequently:**
```bash
git add lib/site.ts
git commit -m "feat(config): add WhatsApp number and message templates"

git add app/page.tsx
git commit -m "feat(homepage): wire CTAs to WhatsApp links"

git add app/components/Header.tsx
git commit -m "feat(header): update quote button to use WhatsApp"
```

**4. Test locally:**
```bash
npm run build   # Ensure no errors
npm run dev     # Test in browser
```

**5. Push to GitHub:**
```bash
git push origin feature/whatsapp-integration
```

**6. CI/CD runs automatically:**
- Builds the site
- Runs lint checks
- Deploys to preview URL

**7. Create Pull Request:**
- Go to GitHub
- Click "New Pull Request"
- Base: `develop`, Compare: `feature/whatsapp-integration`
- Fill out PR template
- Request review (or self-review if solo)

**8. After approval, merge:**
- Click "Merge Pull Request"
- Choose "Squash and merge" (if many commits)
- Delete branch after merge

**9. Verify on staging:**
- Visit staging URL
- Test WhatsApp links
- Confirm everything works

**10. Update PROJECT_PLAN.md:**
- Mark task as complete
- Update progress percentage
- Commit directly to `develop`:

```bash
git checkout develop
git pull origin develop
# Edit PROJECT_PLAN.md (mark task complete)
git add PROJECT_PLAN.md
git commit -m "docs(plan): mark WhatsApp integration complete"
git push origin develop
```

---

## 🎓 **LEARNING: WHY THIS WORKFLOW?**

### **Why separate branches?**
- **Isolation:** Changes don't affect others' work
- **Rollback:** Easy to undo if something breaks
- **Review:** Each feature gets focused attention
- **History:** Clear record of what changed and why

### **Why `develop` before `main`?**
- **Safety net:** Catch issues before production
- **Staging:** Real-world testing environment
- **Confidence:** Know changes work before going live

### **Why small, frequent commits?**
- **Granularity:** Easy to find when bugs were introduced
- **Collaboration:** Others can see progress
- **Safety:** Less work lost if something goes wrong

### **Why PR reviews?**
- **Quality:** Catch bugs before they merge
- **Knowledge sharing:** Team learns from each other
- **Documentation:** Discussion is preserved

---

## 🚨 **COMMON MISTAKES TO AVOID**

❌ **Don't commit directly to `main` or `develop`**
✅ Always use feature branches

❌ **Don't create massive PRs with 20+ files**
✅ Break into smaller, logical chunks

❌ **Don't merge without testing**
✅ Always run build and test locally first

❌ **Don't leave branches open for weeks**
✅ Merge or close within 3 days

❌ **Don't use vague commit messages**
```
git commit -m "updates" ❌
git commit -m "fix stuff" ❌
```
✅ Use descriptive messages:
```
git commit -m "feat(cart): add quantity selector to product page" ✅
git commit -m "fix(checkout): validate email format before submit" ✅
```

---

## 📝 **QUICK REFERENCE**

**Create feature branch:**
```bash
git checkout develop && git pull && git checkout -b feature/my-feature
```

**Commit changes:**
```bash
git add . && git commit -m "feat(scope): description"
```

**Push to GitHub:**
```bash
git push origin feature/my-feature
```

**Update from develop:**
```bash
git checkout develop && git pull && git checkout - && git merge develop
```

**Delete merged branch:**
```bash
git branch -d feature/my-feature
git push origin --delete feature/my-feature
```

---

**Next Action:** Follow this workflow for every task in PROJECT_PLAN.md
