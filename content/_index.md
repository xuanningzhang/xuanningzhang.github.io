---
# Leave the homepage title empty to use the site title
title: ''
summary: ''
date: 2026-09-06
type: landing

sections:

  # =========================================================
  # 1. BIOGRAPHY
  # =========================================================
  - block: resume-biography-3
    content:
      # This corresponds to data/authors/me.yaml
      username: me
      text: ''

      # CV button
      button:
        text: Download CV
        url: /uploads/resume.pdf

      headings:
        about: About
        education: Education
        interests: Research Interests

    design:
      # I recommend turning off the gradient for a cleaner academic style
      background:
        gradient_mesh:
          enable: false

      # Name size
      name:
        size: md

      # Profile photo
      avatar:
        size: medium
        shape: circle


  # =========================================================
  # 2. RESEARCH
  # =========================================================
  - block: markdown
    id: research
    content:
      title: Research
      subtitle: ''
      text: |-
        My research interests lie in **empirical industrial organization** and **applied econometrics**, with particular interests in **healthcare markets** and **digital markets**.

        ### Work in Progress

        **Market Entry and Competition in Home Health Care**

        This project studies firm entry and market structure in the U.S. home health care industry using structural entry models.

    design:
      columns: '1'

---