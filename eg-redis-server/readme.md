## useful commands

# list pods to try get the full name of it

kl get pods

# open a shell (can then do redis-cli)

kl exec redis-master-65c75d6757-6k6wq -it -- /bin/bash

# copy save file out for backup

(kl cp namespace/pod:/path /local/path)
kl cp default/redis-master-65c75d6757-6k6wq:/redis-master-data tmp
