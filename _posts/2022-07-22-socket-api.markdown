---
layout: post
permalink: java/socket-api
title: 'Getting Started with Socket API'
excerpt: 'In this article, we are going to discover Socket API and how we can implement it in Java'
tags: java socket
---

## Introduction

The Socket API is an Interprocessing Communication (IPC) programming interface originally provided as part of the Berkeley UNIX operating system. It has been ported to all modern operating systems, including Sun Solaris, Linux, Mac OS and Windows systems. It is a de facto standard for programming IPC, and is the basis of more sophisticated IPC interface such as remote procedure call and remote method invocation.

A process wishing to communicate with another process must instantiate a socket. The two processes then issues operations provided by the API to send and receive data. Exchanging data with the Socket API can be done with the UDP or TCP protocol. Sockets that use UDP for transport are known as Datagram Sockets, while sockets that use TCP are known as Stream Sockets.

## DatagramSocket API

Each packet sent or received on a DatagramSocket is individually addressed and routed. Multiple packets sent from one machine to another may be routed differently, and may arrive in any order. In Java, we can use `DatagramSocket` class that represents a socket for sending and receiving datagram packets which are represented by the `DatagramPacket` class and here an example of a Sender and Receiver using the DatagramSocket API:

<p class="code-tabs"></p>

- Sender

  ```java
  public class DatagramSender {
      public static void main(String[] args) {
          try {
              InetAddress receiverHost = InetAddress.getByName(args[0]);
              int receiverPort = Integer.parseInt(args[1]);
              String message = args[2];
              DatagramSocket socket = new DatagramSocket();
              byte[] buffer = message.getBytes( );
              DatagramPacket datagram = new DatagramPacket(buffer, buffer.length, receiverHost, receiverPort);
              socket.send(datagram);
              socket.close();
          } catch (Exception ex) {
              ex.printStackTrace( );
          }
      }
  }
  ```

- Receiver

  ```java
  public class DatagramReceiver {
      public static void main(String[] args) {
          try {
              int port = Integer.parseInt(args[0]);
              DatagramSocket socket = new DatagramSocket(port);
              byte[] buffer = new byte[MAX_LEN];
              DatagramPacket datagram = new DatagramPacket(buffer, MAX_LEN);
              socket.receive(datagram);
              String message = new String(buffer);
              System.out.println(message);
              socket.close();
          } catch (Exception ex) {
              ex.printStackTrace( );
          }
      }
  }
  ```

## StreamSocket API

The DatagramSocket API supports the exchange of discrete units of data known as datagrams. But the StreamSocket API provides a model of data transfer based on the stream-mode I/O of the Unix operating systems. In Java, we can use the `ServerSocket` class for accepting connections also known connection socket and the `Socket` class for data exchange also known data socket. Here an example of a Sender and Receiver using the StreamSocket API:

<p class="code-tabs"></p>

- Server

  ```java
  public class Server {
      public static void main(String[] args) {
          int port = Integer.parseInt(args[0]);
          try (ServerSocket serverSocket = new ServerSocket(port)) {
              while (true) {
                  Socket socket = serverSocket.accept();
                  System.out.println("New client connected");
                  PrintWriter writer = new PrintWriter(socket.getOutputStream(), true);
                  writer.println(new Date().toString());
              }
          } catch (Exception ex) {
              ex.printStackTrace( );
          }
      }
  }
  ```

- Client

  ```java
  public class Client {
      public static void main(String[] args) {
          String hostname = args[0];
          int port = Integer.parseInt(args[1]);
          try (Socket socket = new Socket(hostname, port)) {
              BufferedReader reader = new BufferedReader(new InputStreamReader(socket.getInputStream()));
              String time = reader.readLine();
              System.out.println(time);
          } catch (Exception ex) {
              ex.printStackTrace( );
          }
      }
  }
  ```

## Conclusion

In this quick tutorial, we have discovered Socket API and we hope you find it useful :)
