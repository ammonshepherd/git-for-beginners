---
title: Getting Git for Beginners | Git Compared
layout: tutorial
---

<h2>How Git Does It</h2>

<p>Now that you have a better grasp of what goes into making a version
  control/content management system, we’ll take a look at the Git
  equivalents.</p>

<h3>Snapshot folder = .git folder</h3>

<p>Remember our snapshot folder? It was kind of distracting to see that
  folder in your working directory. When you turn a directory into a Git
  repository, Git creates a similar directory. Implementing a convention
  used by operating systems, the folder is named <span class="terms">.git</span>. The period
  preceding the folder name means that, by default, your file showing
  application (File Explorer on Windows or the Finder app in MacOS) hides
  that folder from view. (You can change this preference in the settings
  and thereby reveal a great many hidden files and folders on your
  computer.)</p>

<h3>Staging folder = index file</h3>

<p>Git does a lot more than what you learned in the previous pages. You had a
  folder for staging your commits. Git abstracts out a lot of this process and
  uses a series of files that point to the correct commit.</p>

<h3>Snapshot = commit</h3>

<p>In Git speak, a snapshot is called a commit; you're committing the
  snapshot to the snapshots folder, or as Git calls it, the repository. A
  repository acts as the history of your project’s files. It is a record of
  the changes, as recorded by you, every time you take a snapshot (or
  commit) of the working directory.</p>

<h3>Timestamp folders = SHA1 hashes</h3>

<p>If you peeked into the .git folder, you’ll notice there are no folders
  with dates for names representing your commits. Git stores all of the
  commits in a folder named objects. Within the objects folder you won’t
  find a bunch of files, either. Instead, Git creates a hash (a series of
  alphanumeric characters) of the contents of the file, and stores that as
  a file known as a blob.</p>

<p>Git uses the SHA1 hashes to refer to the commits. To checkout, or
  view, a certain commit, you reference the SHA1 hash for that commit.</p>

<p>There are a bunch of other files and folders in the .git folder, and a
  lot of functionality not discussed.</p>

<h3>Alternative Timelines = branches</h3>

<h3>Info.txt = commit message</h3>

<p>A properly formed Git commit subject line should always be able to
  complete the following sentence:</p>

<pre><code>
      If applied, this commit will <u>your subject line here</u>
      </code></pre>

<p>Example subject lines:</p>

<ul class="list">
  <li>Add two pages to chapter 1</li>
  <li>Update notes with inclusion of step 4</li>
  <li>Add the fluffy bunny picture</li>
</ul>

<h4>7 “rules” of Git commit messages</h4>

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

<h3>Share code with others = push and pull from a central repository (GitHub, GitLab, etc.)</h3>
<p>coming soon...</p>

<h3>Merge lines = merge branches</h3>
<p>coming soon...</p>

<h3>Reducing File Count = Git objects</h3>
<p>coming soon...</p>

<a class="button" href="git-programs.html">NEXT: Using Git in Real Life</a>
