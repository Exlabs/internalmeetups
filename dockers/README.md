# Make Docker slim

## Motivation
Size matters
- your disk
- cloud disk storage
- network push time

## How to make it slimmer
You can make your image slimmer if
- use slim base image
- use not too much layers
- BONUS: use multistage build

Use volumes according to your needs:
- named
- bound
- `tmpfs`

Don't put everything into context
- `.dockerignore`

From time to time do maintainance
`docker volume prune`


## Links
- https://blog.codacy.com/five-ways-to-slim-your-docker-images/
- https://docs.docker.com/develop/develop-images/dockerfile_best-practices/