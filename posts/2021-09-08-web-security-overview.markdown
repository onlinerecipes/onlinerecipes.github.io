---
permalink: security/web-security-overview
layout: post
title: 'Web security overview'
excerpt: 'In this article, I am going to share with you the key concepts of web security'
tags:
  - security
  - 'digital signature'
category: security
---

In this article, I'm going to share with you the key concepts of web security

## Encryption decryption overview

<img src="/assets/web-security-overview/encryption-decryption-overview.svg" style="border: none" />

| key            | description                                                                                                                                                             |
| :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Symmetric Key  | Symmetric-key encryption are algorithms which use the same cryptographic keys for both encryption of plaintext and decryption of ciphertext                             |
| Asymmetric Key | Asymmetric encryption uses 2 pairs of key for encryption. Public key is available to anyone while the secret key is only made available to the receiver of the messaget |
| Public Key     | Public key cryptography is an encryption system which is based on two pairs of keys. Public keys are used to encrypt messages for a receiver                            |
| Private Key    | Private key may be part of a public/ private asymmetric key pair. It can be used in asymmetric encryption as you can use the same key to encrypt and decrypt data       |

## Hash functions

> A hash function is any function that can be used to map data of an arbitrary size to fixed-size values. The values returned by these functions cannot be reverse engineered to the original message <br/>[**wikipedia**](https://en.wikipedia.org/wiki/Hash_function)

## Digital Signature

<img src="/assets/web-security-overview/digital-signature.svg" alt="digital-signature" style="border: none" />

> A digital certificate is an electronic document used to prove the ownership of a public key The certificate includes : <br/> - the public key of the web site<br/> - information about the owner of the web site, called the subject<br/> - information about the entity has verified the certificate's contents, called the issuer<br/> - the digital signature of the issuer<br/>[**wikipedia**](https://en.wikipedia.org/wiki/Digital_signature)

## Procedure of obtaining a digital certificate

<img src="/assets/web-security-overview/obtaining-digital-certificate-procedure.svg" style="border: none" />

## SSL connection

<img src="/assets/web-security-overview/ssl-connection.svg" style="border: none" />

I hope it was useful :)
