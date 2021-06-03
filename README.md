# Introduction:

## What is this?
This is a repository that can build and deploy your code every time you push changes to github.
It is meant as a starting point for personal projects, and as a learning tool.
It uses docker, kubernetes, github packages and github actions.
The code involved is small and simple enough that you should be able to read it all to understand what is going on.
I have taken efforts to minimise the number of technologies involved, with a couple of exceptions:
1) `yq` is used to safely template the yaml files
2) `cert-manager` is used to provision ssl certificates from letsencrypt.


## What this is not
This is not a complete solution, and never will be. There are many things missing that could be considered vital for a proper production ready ci/cd setup.



# Instructions (v1)

0. In github: settings -> feature preview -> improved container support
1. Create a kubernetes cluster (linode/aws/gcloud/etc)
2. Point a wildcard subdomain at it (single node/round-robin dns/loadbalancer)
3. (Make a read-packages PAT and copy that into a github secret) 
  link: https://github.com/settings/tokens
4. Fork the repo
5. Copy the kubeconfig into a github secret
  link: https://github.com/username/repo/settings/secrets/actions

6. Set the domain (dsx edit repo or github secret?
7. Push and check
8. Switch to letsencrypt prod for real certs
9. Push and check



# Where to go from here
Once you have this working, these are some things that are missing that you should learn about and decide if you need to add.

1. A load balancer.
  These are unfortunately vendor specific so I left it out, but in reality you should almost always have a load balancer in front of kubernetes.
2. Autoscaling of pods
3. Autoscaling of nodes
4. Persistent volume claims
5. An actual database
6. Testing
7. Logging
8.






# Scripts for devops related tasks

# Tutorial notes:
- Make sure user has github packages turned on (https://github.com/<user>?tab=packages)

## K8s dashboard: https://github.com/kubernetes/dashboard
- kl proxy
- chrome: http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/.

## Redis
- kl port-forward service/redis-master 7000:6379
- redis-cli -p 7000

## Github packages container support beta
- https://docs.github.com/en/free-pro-team@latest/packages/guides/enabling-improved-container-support
- https://docs.github.com/en/free-pro-team@latest/packages/guides/using-github-packages-with-github-actions

## TODO list
- [x] Private packages (with/without PAT)
- [ ] Switch ingress controllers
- [x] Make domain name easier to change
- [ ] Change random sleep to a kubernetes wait command (cert-manager/deploy)
- [ ] Make sure no edits remain in downloaded yamls

- [x] create repository
- [x] github workflows
- [x] build docker images (for static nginx site)
- [-] docker registry k8s yaml (using github registry for now)
- [x] push docker image to private registry
- [ ] run a pod that pulls from private registry
- [x] nginx ingress controller
- [ ] linode load balancer?
- [ ] DNS for *.k8s.zk.io -> loadbalancer
- [x] ingress controller + ingress resources for static site
- [x] let's encrypt ACME controller thing for ssl
- [x] redis rest service as a poc
- [x] k8s dashboard

- [ ] terraform
- [ ] linode terraform provider
- [ ] linode k8s provider


## For later ("the slightly harder way")
- [ ] terraform to spin up empty instances
- [ ] ansible to call kubeadm on instances to create cluster
