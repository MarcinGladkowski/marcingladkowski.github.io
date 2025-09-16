---
slug: symfony-where-is-TDD
title: "Symfony where is your TDD?"
date: 2021-12-27
update: 2021-12-27
tags:
  - php
  - symfony
  - tdd
---

Last months I trying to following on rule "Write tests first!". Even if the task is small or trivial I trying to test it. Why I didn't working like this ?
I have a mindset about tests: I have to setup framework for it - it takes time, I have to write a lot of extra code and keep it SOLID as production code - it takes time,
I have to maintain it - it takes time! and so on... But what you receive ? What is a holy grail of having tests ? It's also time! You save it when you have change
business rules, or you fixed a bug. One command and status of application is displaying for you - SUCCES or FAILURE.

but ... Let's start writing tests for new class (service)

```php
class SomeService
{
    public function execute(): boolean
}
```

Oh it's look great!

Now, we will write tests for it. Usually, I writing tests for instantiating class by autowiting from Symfony framework.

ok! Challenge accepted!

```php

use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

class SomeServiceTest extends KernelTestCase
{
    protected function setUp(): void
    {
        self::bootKernel();
    }

    public function testShouldReturnInstanceOfService(): void
    {
        self::assertInstanceOf(
            SomeService::class,
            self::$container->get(SomeService::class)
        );
    }

}
```

And let's try to run this test by

```shell
php bin/console --env=test
```

Then we get:

```shell
Symfony\Component\DependencyInjection\Exception\ServiceNotFoundException :
The "App\Service\SomeService" service or alias has been removed or inlined when the container was compiled.
You should either make it public, or stop using the container directly and use dependency injection instead.
```

First time, when I received this exception I tried to find an error in services configuration but I found nothing, because everyting should be configured automaticaly (autowiring).

How to resolve it fast and efficiently ?

Just add this testing class to some other, where it will be using.

```php
class IndexController extends AbstractController
{
    #[Route('/', name: 'index')]
    public function index(SomeService $service): Response
    {
        return new Response('OK');
    }
}

```

And then tests will start working and autowiring start returning this service!
