---
slug: symfony-fast-track
title: "Symfony Fast Track"
date: 2022-05-21
update: 2022-05-21
tags: 
  - php
  - symfony
---

Continuing learn the Symfony framework I'm always looking for new possibilities and ideas. Learning the Symfony framework we have, as in other 
tools a few ideas how to get main features/good practices. We can read great [documentation](https://symfony.com/doc/current/index.html), register in [SymfonyCasts](https://symfonycasts.com/), 
do own project, watch a lot of videos from Symfony conferences, and of course attend in these conferences but we have also another way to get some knowledge and get main features. 

It's [Symfony Fast Track book](https://symfony.com/book)

![symfony_fast_track_book](symfony_fast_track.png)

I decided to go through everything step by step. What I learned/reminded?

### Xdebug extra option

By adding `xdebug.file_link_format` option you can specify your IDE, and when Symfony displays error stack trace you can go to file and line straight away.

### Recipes additional behavioral

Marks like for ex: `###< doctrine/doctrine-bundle ###` were added by the recipes/packages. Then is easy to remove also when package will be removed.

The recipes also adding `docker-compose` configuration for new containers when we need a database.

```yml
###> symfony/mailer ###
  mailer:
    image: schickling/mailcatcher
    ports: [1025, 1080]
###< symfony/mailer ###
```

### Packages are upgrading

In a lot of projects I'm using older packages. Now I realized the some common packages have some major upgrades. Sometime is good to start new project to know the newest changes. It can be frustrating sometimes.

Execute migrations with newer version on command `php bin/console doctrine:migrations:execute 'DoctrineMigrations\Version20220418170145' --up`

Previously was (version 2): 
`php bin/console doctrine:migrations:execute 20220418170145 --up`

### Dependency Injection Container

Entities are Data Object and its not be right to inject them as services

Previously auto generated event subscriber was instantiated by framework because of the interface which class implements. Interface tells the framework how to create the service.

[Symfony Services Cheat Sheet](https://github.com/andreia/symfony-cheat-sheets/blob/master/Symfony4/services_en_42.pdf)

### Testing

Writing **dataProviders** functions You haven't returned a simple array. It's an iterable type hint. It's mean you can simply write a more readable generator using the yield keyword instead of associative arrays. For ex.

```php
public function someDataProvider(): iterable``
{
  // buid some data
  yield 'key' => 'data1'

  yield 'key' => 'data2'
}
```

In Symfony components like http you can find classes to mock it easily. For ex. ```MockHttpClient```

Creating a separate DB for tests, for development just create new database on db container.
Command: ```php bin/console doctrine:database:create --env=test``` creates test database

```bash
Created database "app_test" for connection named default
```
then you can execute migrations:
```bash
 php bin/console doctrine:migrations:migrate -n --env=test
```

### Caching

Method `setSharedMaxAge()` using for reverse proxy cache

Method `setMaxAge()` is usable for browser cache\

Cache header x-symfony-cache: on statuses: `:miss, :fresh, :store`

Http method `PURGE`. This method doesn't exists in RFC but is implemented caching tools like Varnish

### Explore Symfony components

In this tutorial I had a chance to try the component [Workflow](https://symfony.com/doc/current/components/workflow.html). It's very 
helpful to manage workflow or finite state machine. This example shows me there are a lot of Symfony Components which resolved the most common problems. Don't reinvent the wheel and check if someone implement what you want to achieve. 

### Be lazy and use MakerBundle

Instead of writing classes/services by hand, it's great do generate them. If the class is relatively easily there is no problem. What if you want to create
specialized event listener? It's an elegant solution which really helps you.  

Component with interactive prompts show you all possibilities:

```bash
 Choose a class name for your event subscriber (e.g. ExceptionSubscriber):
 > ExampleSubscriber

 Suggested Events:
 * kernel.controller (Symfony\Component\HttpKernel\Event\ControllerEvent)
 * kernel.controller_arguments (Symfony\Component\HttpKernel\Event\ControllerArgumentsEvent)
 * kernel.exception (Symfony\Component\HttpKernel\Event\ExceptionEvent)
 * kernel.finish_request (Symfony\Component\HttpKernel\Event\FinishRequestEvent)
 * kernel.request (Symfony\Component\HttpKernel\Event\RequestEvent)
 * kernel.response (Symfony\Component\HttpKernel\Event\ResponseEvent)
 * kernel.terminate (Symfony\Component\HttpKernel\Event\TerminateEvent)
 * kernel.view (Symfony\Component\HttpKernel\Event\ViewEvent)

  What event do you want to subscribe to?:

```

### Additional tools like ApiPlatform and EasyAdminBundle

Are you creating API or management panel, which is a common implementation ? Don't write it from a scratch. 
Check the most powerful packages like [API Platform](https://api-platform.com/) or [EasyAdminBundle](https://github.com/EasyCorp/EasyAdminBundle). 

Regards
Marcin