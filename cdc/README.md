How to keep databases in sync?

you could
- watch for change-aware columns like `last-modified`
- triggers
- log-based CDC

Here you will find examples of row/log based replication 



## Cloud-agnostic environment
uses Debezium
using Kafka and it shows

## AWS and RDS




sources:
- https://medium.com/daimler-tss-tech/change-data-capture-lessons-learnt-7976391cf78d 
- https://debezium.io/documentation/faq/
- https://www.hvr-software.com/blog/change-data-capture/#
