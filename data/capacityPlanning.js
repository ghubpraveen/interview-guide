const capacityPlanning = {

    title: "Capacity Planning & Performance Engineering",

    icon: "📈",

    questions: [

        {
            question: "How do you calculate the number of servers required during holiday season traffic?",

            answer: `
• At Cavisson we approached this through capacity planning and load testing rather than assumptions.

• First, we collected production metrics such as TPS, concurrent users, response times and infrastructure utilization.

• We then worked with business teams to understand expected traffic growth.

• Using NetStorm, we created a workload model representing projected holiday traffic.

• Scalability tests were executed by gradually increasing load until SLA thresholds were reached.

• Based on the maximum sustainable throughput per server, we estimated required capacity.

• Finally, we recommended an additional safety buffer of around 20% to handle unexpected spikes.

• Capacity recommendations were always based on test results rather than theoretical calculations.
`
        },

        {
            question: "How do you determine maximum sustainable TPS for an application?",

            answer: `
• Execute step-load testing.

• Gradually increase workload.

• Monitor response time, throughput and error rates.

• Identify the point where SLA degradation begins.

• Determine maximum throughput before saturation.

• Use this as the basis for capacity planning.
`
        },

        {
            question: "Business expects 3x traffic growth. What is your approach?",

            answer: `
• Review current peak load.

• Understand expected growth pattern.

• Build realistic workload model.

• Execute scalability tests.

• Identify infrastructure bottlenecks.

• Estimate required server count.

• Add safety margin.

• Present scaling recommendations with supporting data.
`
        },

        {
            question: "What metrics are important for capacity planning?",

            answer: `
• Transactions per second (TPS)

• Concurrent users

• Response time

• Error rate

• CPU utilization

• Memory utilization

• Disk I/O

• Network throughput

• Database performance
`
        },

        {
            question: "How do you identify infrastructure bottlenecks during load testing?",

            answer: `
• Monitor CPU utilization.

• Monitor memory consumption.

• Review disk I/O statistics.

• Review network utilization.

• Analyze database performance.

• Correlate infrastructure metrics with application response times.
`
        },

        {
            question: "How do you identify application bottlenecks?",

            answer: `
• Analyze transaction traces.

• Review APM tools such as Dynatrace.

• Identify slow SQL queries.

• Review thread pools.

• Analyze external service dependencies.

• Correlate findings with workload patterns.
`
        },

        {
            question: "How would you answer if management asks whether the application can handle Black Friday traffic?",

            answer: `
• Determine expected peak traffic.

• Create workload model based on production patterns.

• Execute capacity and scalability tests.

• Validate infrastructure readiness.

• Identify bottlenecks.

• Recommend scaling requirements.

• Present risk analysis and capacity headroom.
`
        },

        {
            question: "How do you estimate infrastructure requirements for a new application?",

            answer: `
• Understand business transactions.

• Estimate expected user volume.

• Build workload assumptions.

• Execute baseline testing.

• Measure resource utilization.

• Forecast growth.

• Recommend initial infrastructure sizing.
`
        },

        {
            question: "What is workload modelling?",

            answer: `
• Process of simulating realistic user behavior.

• Based on production traffic analysis.

• Includes transaction mix.

• Includes think times.

• Includes concurrency levels.

• Used to create realistic performance tests.
`
        },

        {
            question: "How do you create a workload model?",

            answer: `
• Analyze production traffic.

• Identify critical business transactions.

• Calculate transaction distribution.

• Determine concurrency levels.

• Include realistic think times.

• Validate model against production behavior.
`
        },

        {
            question: "How do you perform capacity planning for Kubernetes?",

            answer: `
• Analyze resource utilization.

• Review pod resource requests and limits.

• Evaluate cluster headroom.

• Analyze node utilization.

• Forecast growth.

• Validate scaling through load testing.
`
        },

        {
            question: "How do you calculate node requirements for Kubernetes clusters?",

            answer: `
• Determine workload resource requirements.

• Analyze CPU and memory consumption.

• Calculate total cluster demand.

• Account for node failures.

• Maintain spare capacity.

• Validate using load testing.
`
        },

        {
            question: "What is the difference between capacity planning and performance testing?",

            answer: `
• Performance testing validates behavior under load.

• Capacity planning determines future infrastructure needs.

• Performance testing identifies bottlenecks.

• Capacity planning forecasts growth and scaling requirements.
`
        },

        {
            question: "How did Dynatrace help in capacity planning?",

            answer: `
• Historical performance analysis.

• Resource utilization trends.

• Application bottleneck identification.

• Capacity forecasting.

• Root cause analysis.

• Business transaction monitoring.
`
        },

        {
            question: "Describe a capacity planning exercise you performed at Cavisson.",

            answer: `
• Business expected significantly higher traffic during a seasonal event.

• Production workload patterns were analyzed.

• A workload model was created using NetStorm.

• Scalability tests were executed under increasing load.

• Application and infrastructure bottlenecks were identified.

• Infrastructure recommendations were provided with growth buffer.

• Final recommendations were based on actual test results and observed system behavior.
`
        },

        {
    question: "How do you calculate concurrent users?",

    answer: `
• Concurrent users are users actively using the application at the same time.

• One common approach is:

Concurrent Users = TPS × Average Response Time

• Example:

TPS = 500

Average Response Time = 2 seconds

Concurrent Users = 500 × 2 = 1000

• Actual calculations are refined using production traffic analysis and business usage patterns.

• At Cavisson, production logs and workload models were used rather than relying only on theoretical calculations.
`
},

{
    question: "How do you calculate TPS (Transactions Per Second)?",

    answer: `
• TPS represents the number of transactions processed every second.

• Formula:

TPS = Total Transactions / Test Duration

• Example:

180,000 transactions completed in 1 hour

TPS = 180,000 / 3600

TPS = 50

• TPS is one of the most important metrics used during capacity planning and scalability testing.
`
},

{
    question: "How do you create a realistic workload model?",

    answer: `
• Analyze production traffic patterns.

• Identify top business transactions.

• Calculate transaction mix percentages.

• Determine concurrent users.

• Determine think times.

• Determine peak-hour traffic patterns.

• Build workload distribution based on actual user behavior.

• Validate workload model with business and production data.
`
},

{
    question: "What is transaction mix and why is it important?",

    answer: `
• Transaction mix represents how users interact with the application.

• Example:

40% Search

30% Browse

20% Login

10% Checkout

• Performance testing should reflect actual business usage.

• Unrealistic transaction mixes produce misleading results.

• Transaction mix is a critical input for workload modelling.
`
},

{
    question: "How do you determine application breaking point?",

    answer: `
• Execute step-load testing.

• Gradually increase workload.

• Monitor response times.

• Monitor error rates.

• Monitor infrastructure utilization.

• Identify the point where SLA targets are violated.

• That point becomes the application's practical capacity limit.
`
},

{
    question: "How do you determine whether an application is CPU bound or DB bound?",

    answer: `
• Review infrastructure metrics.

• High CPU with low DB latency usually indicates CPU bottleneck.

• Low CPU with high DB wait times often indicates database bottleneck.

• Use Dynatrace transaction traces.

• Analyze SQL execution times.

• Correlate application and infrastructure metrics.
`
},

{
    question: "How do you validate SLA compliance during testing?",

    answer: `
• Define SLA targets before testing.

• Monitor response times.

• Monitor error rates.

• Monitor throughput.

• Validate P95 and P99 latency targets.

• Compare observed results against SLA requirements.

• Document compliance findings.
`
},

{
    question: "What is the difference between average response time and P95 response time?",

    answer: `
• Average response time represents overall mean response.

• P95 means 95% of requests completed within that value.

• P95 reflects real user experience more accurately.

• Average response time can hide performance outliers.

• Most organizations use percentile metrics for SLA evaluation.
`
},

{
    question: "How do you perform capacity forecasting?",

    answer: `
• Analyze historical traffic growth.

• Review seasonal patterns.

• Analyze utilization trends.

• Forecast future workload.

• Perform scalability testing.

• Estimate infrastructure requirements.

• Include safety margins for unexpected growth.
`
},

{
    question: "How do you handle performance testing for Black Friday or holiday traffic?",

    answer: `
• Collect historical peak traffic data.

• Estimate expected growth.

• Build workload models reflecting peak demand.

• Execute scalability tests.

• Execute stress tests.

• Identify bottlenecks.

• Validate infrastructure readiness.

• Recommend scaling requirements with sufficient buffer.
`
},

{
    question: "How do you calculate server requirements using TPS?",

    answer: `
• Determine maximum TPS handled by one server.

• Example:

1 server handles 250 TPS

Expected traffic = 3000 TPS

Required servers:

3000 / 250 = 12

• Add capacity buffer.

• Example:

12 × 1.2 = 14.4

Recommend 15 servers.

• Final validation should always be performed through load testing.
`
},

{
    question: "How do you calculate capacity buffer?",

    answer: `
• Capacity planning should never target 100% utilization.

• Typical buffer ranges between 15% and 30%.

• Example:

Required servers = 10

20% buffer = 2 servers

Recommended capacity = 12 servers

• Buffer protects against traffic spikes and unexpected events.
`
},

{
    question: "How do you correlate Dynatrace findings with load test results?",

    answer: `
• Mark test execution windows.

• Review business transaction traces.

• Identify slow transactions.

• Analyze database calls.

• Analyze external service calls.

• Correlate with CPU, memory, network and database metrics.

• Use findings to identify bottlenecks accurately.
`
},

{
    question: "Describe a performance issue where infrastructure metrics looked healthy but the application was slow.",

    answer: `
• At Cavisson we occasionally observed response time degradation despite healthy infrastructure metrics.

• Dynatrace analysis showed delays inside application processing layers.

• Investigation revealed database connection pool exhaustion.

• CPU and memory appeared normal.

• Users still experienced delays because requests were waiting for available connections.

• Application tuning resolved the issue.

• This reinforced the importance of end-to-end observability.
`
},

{
    question: "How do you answer the question: Can this application handle 10 million users?",

    answer: `
• I would not answer based on assumptions.

• First I would understand expected usage patterns.

• Determine concurrent users rather than registered users.

• Build workload models.

• Execute scalability testing.

• Identify bottlenecks.

• Validate infrastructure capacity.

• Capacity recommendations should always be supported by test data.
`
}

    ]

};

export default capacityPlanning;