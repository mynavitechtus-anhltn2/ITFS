---
title: Level flow
sidebar_position: 2
---

# Level flow

## Flowchart

```mermaid
flowchart LR
  junior[Junior] --> middle[Middle]
  middle --> senior[Senior]
  junior -.->|"evidence + review"| middle
```

## Sequence

```mermaid
sequenceDiagram
  participant Learner
  participant Buddy
  Learner->>Buddy: Gửi evidence
  Buddy-->>Learner: Feedback
  Learner->>Learner: Cập nhật planning
```
