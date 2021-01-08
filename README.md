# Scripts for devops related tasks

## K8s dashboard: https://github.com/kubernetes/dashboard
- kl proxy
- chrome: http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/.

## Redis
- kl port-forward service/redis-master 7000:6379
- redis-cli -p 7000



## TODO list
- [x] create repository
- [x] github workflows
- [ ] build docker images (for static nginx site)
- [ ] docker registry k8s yaml
- [ ] push docker image to private registry
- [ ] run a pod that pulls from private registry
- [ ] linode load balancer?
- [ ] DNS for *.k8s.zk.io -> loadbalancer
- [ ] ingress controller + ingress resources for static site
- [ ] let's encrypt ACME controller thing for ssl
- [ ] redis rest service as a poc

- [ ] terraform
- [ ] linode terraform provider
- [ ] linode k8s provider


## For later ("the slightly harder way")
- [ ] terraform to spin up empty instances
- [ ] ansible to call kubeadm on instances to create cluster
