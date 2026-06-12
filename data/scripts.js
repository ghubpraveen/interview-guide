const scripts = {

    title: "Scripts & Automation",

    icon: "💻",

    questions: [

        {
            question: "Shell Script: Check Disk Usage Above 80%",

            answer: `
#!/bin/bash

THRESHOLD=80

df -h | awk 'NR>1 {print $5,$6}' | while read output
do
  usage=$(echo $output | awk '{print $1}' | cut -d'%' -f1)
  mount=$(echo $output | awk '{print $2}')

  if [ $usage -gt $THRESHOLD ]
  then
     echo "WARNING: $mount usage is ${usage}%"
  fi
done
`
        },

        {
            question: "Shell Script: Find Top 10 Largest Files",

            answer: `
find / -type f -exec du -h {} + 2>/dev/null |
sort -rh |
head -10
`
        },

        {
            question: "Shell Script: Check Website Health",

            answer: `
#!/bin/bash

URL=https://example.com

STATUS=$(curl -s -o /dev/null \
-w "%{http_code}" $URL)

if [ "$STATUS" -eq 200 ]
then
   echo "Healthy"
else
   echo "Unhealthy"
fi
`
        },

        {
            question: "Shell Script: Monitor Kubernetes Pods",

            answer: `
#!/bin/bash

kubectl get pods --all-namespaces |
grep -E "CrashLoopBackOff|Error|Pending"
`
        },

        {
            question: "Shell Script: Delete Images Older Than 30 Days",

            answer: `
find /images \
-type f \
-mtime +30 \
-delete
`
        },

        {
            question: "Python Script: Read Log File and Count Errors",

            answer: `
from collections import Counter

counter = Counter()

with open("app.log") as f:
    for line in f:
        if "ERROR" in line:
            counter["ERROR"] += 1

print(counter)
`
        },

        {
            question: "Python Script: Parse JSON Response",

            answer: `
import json

with open("response.json") as f:
    data = json.load(f)

print(data["status"])
`
        },

        {
            question: "Python Script: Kubernetes Pod Health Check",

            answer: `
import subprocess

output = subprocess.check_output(
    ["kubectl","get","pods"]
)

print(output.decode())
`
        },

        {
            question: "Python Script: Check API Availability",

            answer: `
import requests

response = requests.get(
    "https://api.example.com/health"
)

if response.status_code == 200:
    print("Healthy")
else:
    print("Unhealthy")
`
        },

        {
            question: "Python Script: Find Slow Endpoints",

            answer: `
import pandas as pd

df = pd.read_csv("access.log")

slow = df[df["response_time"] > 1000]

print(slow)
`
        },

        {
            question: "Terraform: Create S3 Bucket",

            answer: `
resource "aws_s3_bucket" "logs" {

  bucket = "company-logs"

}
`
        },

        {
            question: "Terraform: Create EC2 Instance",

            answer: `
resource "aws_instance" "app" {

  ami           = "ami-xxxxx"

  instance_type = "t3.medium"

}
`
        },

        {
            question: "Terraform: Create Security Group",

            answer: `
resource "aws_security_group" "web" {

  ingress {

    from_port = 80

    to_port = 80

    protocol = "tcp"

    cidr_blocks = ["0.0.0.0/0"]

  }

}
`
        },

        {
            question: "Terraform: Remote State Backend",

            answer: `
terraform {

  backend "s3" {

    bucket = "terraform-state"

    key = "prod.tfstate"

    region = "us-east-1"

  }

}
`
        },

        {
            question: "Terraform: Module Usage",

            answer: `
module "eks" {

  source = "./modules/eks"

  cluster_name = "prod"

}
`
        },

        {
            question: "Jenkins Shared Library Function",

            answer: `
def call(Map data){

    sh '''

    docker build -t app .

    '''

}
`
        },

        {
            question: "Jenkins Pipeline Example",

            answer: `
pipeline {

  agent any

  stages {

    stage('Build') {

      steps {

        sh 'mvn clean package'

      }

    }

  }

}
`
        },

        {
            question: "Helm Install Command",

            answer: `
helm upgrade --install app ./chart \
-n production
`
        },

        {
            question: "kubectl Commands Every DevOps Engineer Should Know",

            answer: `
kubectl get pods

kubectl describe pod

kubectl logs

kubectl exec -it

kubectl rollout status

kubectl rollout undo

kubectl top pod

kubectl top node
`
        },

        {
            question: "Linux Troubleshooting Commands",

            answer: `
top

htop

free -m

df -h

du -sh

netstat -tulpn

ss -tulpn

journalctl

dmesg
`
        }

    ]

};

export default scripts;