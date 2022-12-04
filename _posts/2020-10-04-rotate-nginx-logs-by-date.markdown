---
layout: post
permalink: nginx/rotate-nginx-logs-by-date
title: 'Rotate Nginx logs by date'
excerpt: 'In this article, I am going to share with you the technique that I have used to rotate Nginx logs by date'
tags: nginx
---

In this article, I'm going to share with you the technique that I have used to rotate Nginx logs by date. First, I defined a new variable from the `$time_iso8601` Nginx variable to be the current date in the Nginx configuration file

```shell
map $time_iso8601 $current_date {
  ~(?<YYYY>\d+)-(?<MM>\d+)-(?<DD>\d+) ${YYYY}${MM}${DD};
}
```

Then, I used it to define the log file path in the Nginx configuration file

```shell
access_log logs/access_log.${current_date}.log;
```

After restarting the server, I obtained a new log file every day

```shell
logs/access_log.20200927.log
logs/access_log.20200928.log
logs/access_log.20200929.log
```

And if we want, we can use this technique to obtain a new log file every hour

```shell
map $time_iso8601 $current_hour {
   ~(?<YYYY>\d+)-(?<MM>\d+)-(?<DD>\d+)T(?<HH>\d+) ${YYYY}${MM}${DD}_${HH}00;
}
```
