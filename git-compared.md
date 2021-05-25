---
title: Getting Git for Beginners | Git Compared
layout: tutorial
---

<figure class="top-photo">
  <img src="assets/images/cta-junction.jpg" alt="CTA train junction" />
  <figcaption><a href="https://commons.wikimedia.org/wiki/File:CTA_loop_junction.jpg">I, Daniel Schwen</a>, <a href="http://creativecommons.org/licenses/by-sa/3.0/">CC BY-SA 3.0</a>, via Wikimedia Commons</figcaption>
</figure>

## How Git Does It

Now that you have a better grasp of what goes into making a version
control/content management system, we’ll take a look at the Git equivalents.

### Snapshot folder = .git folder

Remember our snapshot folder? It was kind of distracting to see that folder in
your working directory. When you turn a directory into a Git repository, Git
creates a similar directory. Implementing a convention used by operating
systems, the folder is named <span class="terms">.git</span>. The period
preceding the folder name means that, by default, your file showing application
(File Explorer on Windows or the Finder app in MacOS) hides that folder from
view. (You can change this preference in the settings and thereby reveal a great
many hidden files and folders on your computer.)

### Staging folder = index file

Git does a lot more than what you learned in the previous pages. You had a
folder for staging your commits. Git abstracts out a lot of this process and
uses a series of files that point to the correct commit.

### Snapshot = commit

In Git speak, a snapshot is called a commit; you're committing the snapshot to
the snapshots folder, or as Git calls it, the repository. A repository acts as
the history of your project’s files. It is a record of the changes, as recorded
by you, every time you take a snapshot (or commit) of the working directory.

### Timestamp folders = SHA1 hashes

If you peeked into the .git folder, you’ll notice there are no folders with
dates for names representing your commits. Git stores all of the commits in a
folder named objects. Within the objects folder you won’t find a bunch of files,
either. Instead, Git creates a hash (a series of alphanumeric characters) of the
contents of the file, and stores that as a file known as a blob.

Git uses the SHA1 hashes to refer to the commits. To checkout, or view, a
certain commit, you reference the SHA1 hash for that commit.

There are a bunch of other files and folders in the .git folder, and a lot of
functionality not discussed.

### Alternative Timelines/railway tracks = branches

Git uses the analogy of branches for the ability to 

### Info.txt = commit message

A properly formed Git commit subject line should always be able to complete the
following sentence:

<code>If applied, this commit will <u>your subject line here</u></code>

Example subject lines:

<ul class="list">
  <li>Add two pages to chapter 1</li>
  <li>Update notes with inclusion of step 4</li>
  <li>Add the fluffy bunny picture</li>
</ul>

#### 7 “rules” of Git commit messages

<ul class="list">
  <li>Separate subject from body with a blank line</li>
  <li>Limit the subject line to 50 characters</li>
  <li>Capitalize the subject line</li>
  <li>Do not end the subject line with a period</li>
  <li>Use the imperative mood in the subject line</li>
  <li>Wrap the body at 72 characters</li>
  <li>Use the body to explain what and why vs. how</li>
</ul>

7 rules from [https://chris.beams.io/posts/git-commit/](https://chris.beams.io/posts/git-commit/)

### Share code with others = push and pull from a central repository (GitHub, GitLab, etc.)
coming soon...

### Merge lines = merge branches
coming soon...

### Reducing File Count = Git objects
coming soon...

<a class="button" href="git-programs.html">NEXT: Using Git in Real Life</a>
