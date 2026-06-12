const bash = {

    title: "Bash Scripting",

    icon: "🐚",

    questions: [

        {
            question: "Write a script to monitor disk usage above 80%.",

            answer: `
#!/bin/bash

THRESHOLD=80

df -h | awk 'NR>1 {print $5,$6}' | while read output
do
    usage=$(echo $output | awk '{print $1}' | cut -d'%' -f1)
    mount=$(echo $output | awk '{print $2}')

    if [ $usage -gt $THRESHOLD ]
    then
        echo "ALERT: $mount usage is \${usage}%"
    fi
done
`
        },

        {
            question: "Write a script to check website availability.",

            answer: `
#!/bin/bash

URL=https://google.com

STATUS=$(curl -s -o /dev/null -w "%{http_code}" $URL)

if [ "$STATUS" == "200" ]
then
    echo "Website is UP"
else
    echo "Website is DOWN"
fi
`
        },

        {
            question: "Write a script to find top 10 largest files.",

            answer: `
find / -type f -exec du -h {} + 2>/dev/null |
sort -rh |
head -10
`
        },

        {
            question: "Write a script to monitor memory utilization.",

            answer: `
#!/bin/bash

free -m

MEM=$(free | awk '/Mem/{printf("%.0f"), $3/$2 * 100}')

echo "Memory Usage: \${MEM}%"
`
        },

        {
            question: "Write a script to monitor CPU utilization.",

            answer: `
#!/bin/bash

top -bn1 | grep "Cpu(s)"
`
        },

        {
            question: "Write a script to delete files older than 30 days.",

            answer: `
find /backup \
-type f \
-mtime +30 \
-delete
`
        },

        {
            question: "Write a script to check if a process is running.",

            answer: `
#!/bin/bash

PROCESS=jenkins

if pgrep $PROCESS > /dev/null
then
    echo "Running"
else
    echo "Not Running"
fi
`
        },

        {
            question: "Write a script to count ERROR entries in logs.",

            answer: `
grep -c ERROR app.log
`
        },

        {
            question: "Write a script to monitor Kubernetes pod health.",

            answer: `
kubectl get pods -A |
grep -E "CrashLoopBackOff|Pending|Error"
`
        },

        {
            question: "Write a script to check SSL certificate expiry.",

            answer: `
echo | openssl s_client \
-connect google.com:443 2>/dev/null |
openssl x509 -noout -dates
`
        }

    ]

};

export default bash;