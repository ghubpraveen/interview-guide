const kubernetes = {

title: “Kubernetes Fundamentals”,

icon: “☸️”,

questions: [

{
question: “Explain Kubernetes architecture.”,

answer: `Kubernetes consists of a Control Plane and Worker Nodes.

The Control Plane includes:

* API Server
* ETCD
* Scheduler
* Controller Manager

Worker Nodes run:

* Kubelet
* Container Runtime
* Kube Proxy

The API Server is the entry point for all cluster operations.`
},

{
question: “What is ETCD?”,

answer: ETCD is a distributed key-value store used by Kubernetes to store cluster state and configuration data. It is the source of truth for the cluster.
},

{
question: “What is a Pod?”,

answer: A Pod is the smallest deployable unit in Kubernetes. It can contain one or more containers that share storage and networking.
},

{
question: “What is a Deployment?”,

answer: A Deployment manages stateless applications and provides rolling updates, rollbacks and replica management.
},

{
question: “Deployment vs StatefulSet?”,

answer: `Deployments are used for stateless workloads.

StatefulSets are used when applications require stable hostnames, stable storage and ordered deployment.`
},

{
question: “What is a DaemonSet?”,

answer: `A DaemonSet ensures one pod runs on every node.

Examples:

* FluentBit
* Node Exporter
* Security Agents`
    },

{
question: “What is a ReplicaSet?”,

answer: ReplicaSets ensure the desired number of pod replicas are always running. Deployments manage ReplicaSets.
},

{
question: “What is a Service?”,

answer: `A Service provides stable networking and load balancing for pods.

Types:

* ClusterIP
* NodePort
* LoadBalancer
* ExternalName`
    },

{
question: “ClusterIP vs NodePort vs LoadBalancer?”,

answer: `ClusterIP exposes applications internally.

NodePort exposes applications through a node port.

LoadBalancer integrates with cloud load balancers and provides external access.`
},

{
question: “What is an Ingress?”,

answer: Ingress manages external HTTP and HTTPS routing into the cluster and provides path-based and host-based routing.
},

{
question: “What is an Ingress Controller?”,

answer: `The Ingress resource defines routing rules.

The Ingress Controller implements those rules and performs the actual traffic routing.`
},

{
question: “What is CoreDNS?”,

answer: CoreDNS provides DNS resolution within Kubernetes clusters and allows services to discover each other using DNS names.
},

{
question: “How does Service Discovery work?”,

answer: `Services are registered in CoreDNS and can be accessed using DNS names such as:

service-name.namespace.svc.cluster.local`
},

{
question: “What is Kubelet?”,

answer: Kubelet runs on every worker node and ensures containers are running according to pod specifications.
},

{
question: “What is Kube Proxy?”,

answer: Kube Proxy manages network rules and service traffic routing across nodes.
},

{
question: “What are Namespaces?”,

answer: Namespaces provide logical separation of workloads within a cluster and help organize resources.
},

{
question: “What are Labels and Selectors?”,

answer: `Labels identify resources.

Selectors allow Kubernetes resources to find matching pods and objects.`
},

{
question: “What are ConfigMaps?”,

answer: ConfigMaps store non-sensitive configuration data separately from application code.
},

{
question: “What are Secrets?”,

answer: Secrets store sensitive data such as passwords, tokens and certificates.
},

{
question: “How do Pods communicate?”,

answer: `Every pod receives its own IP address.

Pods can communicate directly using pod IPs or through Services.`
},

{
question: “What is a Readiness Probe?”,

answer: A Readiness Probe determines whether a pod is ready to receive traffic.
},

{
question: “What is a Liveness Probe?”,

answer: A Liveness Probe determines whether a container should be restarted.
},

{
question: “Readiness vs Liveness?”,

answer: `Readiness controls traffic routing.

Liveness controls container restart behavior.`
},

{
question: “What is HPA?”,

answer: Horizontal Pod Autoscaler scales pods automatically based on CPU, memory or custom metrics.
},

{
question: “What is Cluster Autoscaler?”,

answer: Cluster Autoscaler adds or removes worker nodes based on scheduling requirements.
},

{
question: “HPA vs Cluster Autoscaler?”,

answer: `HPA scales pods.

Cluster Autoscaler scales nodes.`
},

{
question: “What are Resource Requests and Limits?”,

answer: `Requests guarantee resources for scheduling.

Limits prevent workloads from consuming excessive resources.`
},

{
question: “What are Taints and Tolerations?”,

answer: `Taints prevent workloads from running on nodes.

Tolerations allow workloads to run on tainted nodes.`
},

{
question: “What are Node Selectors?”,

answer: Node Selectors force workloads onto nodes matching specific labels.
},

{
question: “What are Affinity Rules?”,

answer: Affinity rules influence pod scheduling based on node labels or pod relationships.
},

{
question: “What is a Persistent Volume?”,

answer: Persistent Volumes provide durable storage independent of pod lifecycle.
},

{
question: “What is a Persistent Volume Claim?”,

answer: A PVC requests storage from a Persistent Volume.
},

{
question: “What is a StorageClass?”,

answer: StorageClass defines how storage is dynamically provisioned in Kubernetes.
},

{
question: “What is a PodDisruptionBudget?”,

answer: A PodDisruptionBudget ensures a minimum number of replicas remain available during maintenance activities.
},

{
question: “What are Network Policies?”,

answer: Network Policies control traffic flow between pods and improve cluster security.
}

]

};

export default kubernetes;