---
layout: page
permalink: /publications/
title: Publications
description: Peer-reviewed papers, preprints, conference contributions, and technical reports.
nav: true
nav_order: 1
---
<p class="publication-profile-link">
  Complete citation record on
  <a href="https://scholar.google.com/citations?user=usWh1HEAAAAJ&hl=en" aria-label="View Chenguang Wang's Google Scholar profile">
    Google Scholar <span aria-hidden="true">↗</span>
  </a>
</p>

<div class="publications publication-groups">
  <section class="publication-group" aria-labelledby="journal-publications">
    <header class="publication-group-heading">
      <div>
        <span class="publication-group-kicker">Peer-reviewed</span>
        <h2 id="journal-publications">Journal Articles</h2>
      </div>
      <span class="publication-count">{% bibliography_count -f {{ site.scholar.bibliography }} --query @*[category=journal] %}</span>
    </header>
    {% bibliography -f {{ site.scholar.bibliography }} --query @*[category=journal] %}
  </section>

  <section class="publication-group" aria-labelledby="conference-publications">
    <header class="publication-group-heading">
      <div>
        <span class="publication-group-kicker">Published or accepted</span>
        <h2 id="conference-publications">Conference Papers</h2>
      </div>
      <span class="publication-count">{% bibliography_count -f {{ site.scholar.bibliography }} --query @*[category=conference] %}</span>
    </header>
    {% bibliography -f {{ site.scholar.bibliography }} --query @*[category=conference] %}
  </section>

  <section class="publication-group" aria-labelledby="preprint-publications">
    <header class="publication-group-heading">
      <div>
        <span class="publication-group-kicker">Under review or in preparation</span>
        <h2 id="preprint-publications">Preprints</h2>
      </div>
      <span class="publication-count">{% bibliography_count -f {{ site.scholar.bibliography }} --query @*[category=preprint] %}</span>
    </header>
    {% bibliography -f {{ site.scholar.bibliography }} --query @*[category=preprint] %}
  </section>

  <section class="publication-group" aria-labelledby="report-publications">
    <header class="publication-group-heading">
      <div>
        <span class="publication-group-kicker">Field reconnaissance and data</span>
        <h2 id="report-publications">Technical Reports</h2>
      </div>
      <span class="publication-count">{% bibliography_count -f {{ site.scholar.bibliography }} --query @*[category=report] %}</span>
    </header>
    {% bibliography -f {{ site.scholar.bibliography }} --query @*[category=report] %}
  </section>
</div>
