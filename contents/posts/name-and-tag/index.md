---
slug: give-the-name-and-tag
title: "Give the name and... tag"
date: 2022-01-06
update: 2022-01-06
tags:
  - docker
---

When a child birth one of the first thing is give a name! You should do the same with yours images! Why I writing about this ? 
If you are not becarefule with images names and tags you can do the mess with our local docker images storage. Sometimes you 
have to prepare different images for some features/branches/deploys.

Let's prepare our dockerized website.

_Website:_
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Title</title>

</head>
<body>
<h1>Hello World</h1>
</body>
```

_Image to run container responsible for displaing it:_
```dockerfile
FROM nginx

COPY index.html /usr/share/nginx/html/index.html
```    

OK, It's time to building. Build first version by command `docker build .` Then we want to something change in the our website and build again by `build` command. Which images we have ?


_Console output:_
```sh
root@local:~/project$ docker images
REPOSITORY   TAG       IMAGE ID       CREATED              SIZE
<none>       <none>    c8af32463c20   5 seconds ago        141MB
<none>       <none>    f1663715c693   About a minute ago   141MB
nginx        latest    605c77e624dd   8 days ago           141MB
```
As you see there are a `<none>` words. It's not helpful when you want to pick up specific image.
Why we have images without **REPOSITORY** and **TAG** ? It's caused by build image without `-t` option These images were built by command ```docker build . ``` How we can fix it or how we can build images ? Firstival we can `tag` image after build by command `docker tag`. 

For example `docker tag f1663715c693 website:1.0` and `docker tag f1663715c693 website:1.2`.

_Console output_
```sh
root@local:~/project$ docker images
REPOSITORY   TAG       IMAGE ID       CREATED          SIZE
<none>       <none>    c8af32463c20   16 minutes ago   141MB
website      1.2       c8af32463c20   21 minutes ago   141MB
website      1.0       f1663715c693   22 minutes ago   141MB
nginx        latest    605c77e624dd   8 days ago       141MB
```
But this needs from us additional action. Remember, we can do it while building an new image. 

```sh 
docker build -t website:1.3 .
```
Very interesting option is adding multiple specific tags at once. The case with `latest` is very helpful to tag a version of image and set it at latest. 
```sh
docker build -t website:1.3 -t website:latest .
```

Full documentation about tagging we can find on https://docs.docker.com/engine/reference/commandline/tag.  







