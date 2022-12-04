---
layout: post
permalink: java/custom-jackson-deserializer
title: 'Custom Jackson deserializer'
excerpt: 'In this article we are going to analyse a similar use case where I have used custom Jackson Deserializer'
tags: java jackson
---

## Introduction

In this article we are going to analyse a similar use case where I have used custom Jackson Deserializer. Supposing that we want to consume in our Java application the [Placeholder](https://jsonplaceholder.typicode.com/) `/user/{userId}` API which returns this example of response:

```json
{
  "username": "Bret",
  "company": {
    "name": "Romaguera-Crona"
  }
}
```

And in our application, we have defined our `User` model like this and we can not change it:

```java
@Data
public class User {
    private String username;
    private String companyName;
}
```

As we can see, the company name is not at the same level between the API response and the Java Model class. In this case, we can use a custom Jackson Deserializer and we need to define the custom deserializer and then registered when creating the `ObjectMapper` Jackson mapper.

## 1. Define Custom Jackson Deserializer

For that we need to implement a new class that extends the `StdDeserializer` Jackson abstract class

```java
public class UserDeserializer extends StdDeserializer<User> {

    @Override
    public User deserialize(JsonParser parser, DeserializationContext context) {
        try {
            JsonNode userNode = parser.getCodec().readTree(parser);
            String username = userNode.get("username").asText();
            JsonNode companyNode = userNode.get("company");
            String companyName = companyNode.get("name").asText();
            return new User(username, companyName);
        } catch (Exception e) {
            throw new JsonProcessingException("error while deserializing user object", e);
        }
    }
}
```

## 2. ObjectMapper configuration

Once we have implemented our deserializer, we use it when creating the `ObjectMapper` Jackson Mapper object.

```java
public class Main {

    public static ObjectMapper createObjectMapper() {
        ObjectMapper mapper = new ObjectMapper();
        SimpleModule module = new SimpleModule();
        module.addDeserializer(User.class, new UserDeserializer());
        mapper.registerModule(module);
        return mapper;
    }

    public static void main(String[] args) throws IOException {
        HttpClient httpClient = HttpClientBuilder.create().build();
        InputStream httpResponse = httpClient.execute(new HttpGet("https://jsonplaceholder.typicode.com/users/1")).getEntity().getContent();
        ObjectMapper mapper = createObjectMapper();
        User user = mapper.readValue(httpResponse, User.class);
    }
}
```

## Conclusion

With this technique, our Java application is capable to consume the API response without changing its model classes.
