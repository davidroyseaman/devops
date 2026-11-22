# Datastores.

Project for databases.
Currently just redis + postgres.
Both share the same PVC and so run in the same pod.
Uses a StatefulSet rather than a Deployment.

- [todo: why? a deployment was working before so what benefit does a stateful set provide?]

Not covered/supported yet:
[ ] Scaling. Haven't even begun to explore how multiple replicas would work.
[ ] Backups.
