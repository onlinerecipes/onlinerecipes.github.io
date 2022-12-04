---
layout: post
permalink: java/apache-commons-email
title: 'Apache Commons Email'
excerpt: 'In this article, we are going to discover how we can send emails using Apache Commons Email'
tags: java apache email
---

## Introduction

In this article, we are going to discover how we can send emails using [Apache Commons Email](https://mvnrepository.com/artifact/org.apache.commons/commons-email) library built on top of the [JavaMail API](https://javaee.github.io/javamail/docs/api/) and aims to simplify working with this API.

## Prerequisites

To run the following examples, we need to add the Apache Commons Email library to our Java application. If you are using maven, here the dependency that you should add to your pom.xml file

```xml
<dependency>
  <groupId>org.apache.commons</groupId>
  <artifactId>commons-email</artifactId>
  <version>1.5</version>
</dependency>
```

The following examples use the SMTP Server provider by Gmail but you can use any other SMTP server. Once ready, here some types of emails that we can send with Apache Commons Email library:

## Basic Text Emails

Here is a code example for sending basic text email using the Gmail SMTP server

```java
import org.apache.commons.mail.DefaultAuthenticator;
import org.apache.commons.mail.Email;
import org.apache.commons.mail.SimpleEmail;

public class SimpleEmailExample {
    public static void main(String[] args) {
        try {
            Email email = new SimpleEmail();

            email.setHostName("smtp.googlemail.com");
            email.setSmtpPort(465);
            email.setAuthenticator(new DefaultAuthenticator("<my-gmail-address>", "<my-gmail-password>"));
            email.setSSLOnConnect(true); // Required for gmail

            email.setFrom("<my-gmail-address>");
            email.addTo("<destination-email-address>");
            email.setSubject("Email Subject");
            email.setMsg("Email Message");
            email.send();
            System.out.println("Email Sent successfully!");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

<p class="mb-05">When using Gmail SMTP Server, you may get the following error:</p>

<div class="error mb-1">
org.apache.commons.mail.EmailException: Sending the email to the following server failed : smtp.googlemail.com:465
</div>

To solve this issue, you need to [Turn On Access For Less Secure Apps](https://myaccount.google.com/lesssecureapps) from your Gmail account.

## Email With Attachments

To send an email with Attachments, we need to use the `MultiPartEmail` class and here is a code example for sending email with attachment using the Gmail SMTP server:

```java
import org.apache.commons.mail.DefaultAuthenticator;
import org.apache.commons.mail.Email;
import org.apache.commons.mail.SimpleEmail;

public class MultiPartEmailExample {
    public static void main(String[] args) {
        try {
            Email email = new MultiPartEmail();

            email.setHostName("smtp.googlemail.com");
            email.setSmtpPort(465);
            email.setAuthenticator(new DefaultAuthenticator("<my-gmail-address>", "<my-gmail-password>"));
            email.setSSLOnConnect(true); // Required for gmail

            email.setFrom("<my-gmail-address>");
            email.addTo("<destination-email-address>");
            email.setSubject("Email Subject");
            email.setMsg("Email Message");
            email.attach(new File("C:/attachement.txt")); // Email Attachement
            email.send();
            System.out.println("Email Sent successfully!");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

## HTML Emails

To send an email with HTML Body, we need to use the `HtmlEmail` class and here is a code example for sending email with attachment using the Gmail SMTP server:

```java
import org.apache.commons.mail.DefaultAuthenticator;
import org.apache.commons.mail.Email;
import org.apache.commons.mail.SimpleEmail;

public class HtmlEmailExample {
    public static void main(String[] args) {
        try {
            Email email = new HtmlEmail();

            email.setHostName("smtp.googlemail.com");
            email.setSmtpPort(465);
            email.setAuthenticator(new DefaultAuthenticator("<my-gmail-address>", "<my-gmail-password>"));
            email.setSSLOnConnect(true); // Required for gmail

            email.setFrom("<my-gmail-address>");
            email.addTo("<destination-email-address>");
            email.setSubject("Email Subject");
            email.setMsg("Email Message");
            // Set the html message
            email.setHtmlMsg("<html><h1>Hello Apache Commons Email library</h1>></html>");
            // Set the alternative message
            email.setTextMsg("Your email client does not support HTML messages");
            email.send();
            System.out.println("Email Sent successfully!");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

## Conclusion

In this quick tutorial, we have discovered how we can send emails using Apache Commons Email and we hope you find it useful :)
