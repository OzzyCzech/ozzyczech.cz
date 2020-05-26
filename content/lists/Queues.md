---
title: Queues
date: 2020-02-09
tags: [queues, list]
---

# Queues

### Amazon MQ

[Amazon MQ](https://aws.amazon.com/amazon-mq/) is a managed message broker service for Apache ActiveMQ that makes it easy to set up and operate message brokers in the cloud.

### Amazon Simple Queue Service (SQS)

[Amazon Simple Queue Service](https://aws.amazon.com/sqs/) (Amazon SQS) is a messaging queue service that handles message or work flows between other components in a system.

### Gearman

[Gearman](http://gearman.org/) provides a generic application framework to farm out work to other machines or processes that are better suited to do the work. It allows you to do work in parallel, to load balance processing, and to call functions between languages. It can be used in a variety of applications, from high-availability web sites to the transport of database replication events. In other words, it is the nervous system for how distributed processing communicates.

### Resque

[Resque](https://github.com/resque/resque) a rock-solid job queue, written in Ruby, backed by Redis.

- [Build at GitHub as an alternative to existing solutions](https://github.com/blog/542-introducing-resque). Powers GitHub background jobs ever since.
- Heavily relying on Redis as backend
- [fork(2)](http://en.wikipedia.org/wiki/Fork_(operating_system)) is used for spawning workers
- Web UI for managing running jobs, active workers etc.
- Many plugins (like [resque-scheduler](https://github.com/bvandenbos/resque-scheduler), [resque-retry](https://github.com/lantins/resque-retry))
- Big community

### NATS

[NATS](https://nats.io/) is an open-source, high-performance, lightweight cloud messaging system.

- [NATS Documentation](http://nats.io/documentation/) nats.io
- [NATS: High Performance Cloud Native Messaging Written in Go](https://blog.gopheracademy.com/advent-2015/nats-high-performance-cloud-native-messaging-written-in-go/) blog.gopheracademy.com
- [Using NATS instead of HTTP for inter service communication](http://www.diogogmt.com/2016/02/08/benchmarking-nats-and-rest/) diogogmt.com
- [Benchmarking Message Queue Latency](http://bravenewgeek.com/benchmarking-message-queue-latency/) bravenewgeek.com
- [Dissecting Message Queues](http://www.bravenewgeek.com/dissecting-message-queues/) bravenewgeek.com
- [Introducing NATS](https://www.apcera.com/blog/introducing-nats/) apcera.com
- [CloudFoundry Messaging System](http://docs.cloudfoundry.org/concepts/architecture/messaging-nats.html) docs.cloudfoundry.org
- [Why CloudFoundry uses NATS](http://www.quora.com/Why-does-CloudFoundry-use-NATS-a-specially-written-messaging-system-whereas-OpenStack-uses-AMQP/answer/Derek-Collison) quora.com
- [NATS Node.js client on NPM](https://www.npmjs.com/package/nats) npmjs.com
- [Gnatsd Docker Image](https://registry.hub.docker.com/u/apcera/gnatsd/) registry.hub.docker.com

### NSQ

[NSQ](https://github.com/bitly/nsq) realtime distributed message processing at scale writte in GO

### Siberite

[Siberite](http://siberite.org/) is simple, lightweight, leveldb backed message queue

- Darner rewritten in Go with additional features
- Single topic can be consumed multiple times using durable cursors
- Uses Kestrel (memcached) protocol
- Keeps all messages out of process
- Small amount of in-resident memory regardless of queue size
- Two-phase reliable fetch

Simple, efficient background processing for Ruby.

### Sidekiq

[Sidekiq](https://sidekiq.org/) is simple, efficient background processing for Ruby. 

- Based on Redis
- Multithreaded, employs [Celluloid](https://github.com/celluloid/celluloid) under the hood
- Web UI
- Resque Compatibility
- [Sidekiq Pro](http://sidekiq.org/pro/) - paid version ($750) with support and additional features (batches, notifications, reliability, metrics)
- Fast growing community

Resource: http://queues.io/