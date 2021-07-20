---
published: false
tag: Spring Boot
excerpt: Viết unit test cho service layer trong Spring Boot.
coverImage: /assets/post/post.png
date: 'Mon 19th Jul, 2021'
author:
  name: Phat Nguyen
  twitter: 'https://www.facebook.com/Senlucifer/'
  picture: ''
ogImage:
  url: /assets/meta/blogSimple.jpg
title: Unit test service trong Spring Boot
---
Hello friend!

Là dev, đặc biệt là web dev, bạn đã quá quen với một vòng lặp như sau: tạo model, tạo service, tạo controller và liên kết chúng với nhau để cho ra 1 API hoàn chỉnh, đây đúng là quy trình mà mình đã áp dụng trong suốt những năm đại học 😆 nhưng hình như thiếu cái gì đó thì phải, à đúng rồi còn thiếu mấy cái tick xanh thần thánh của unit test nữa, có tick xanh thì mới an tâm code được 🤗 Bài viết này sẽ hướng dẫn các bạn cách viết unit test cho service layer trong Spring Boot để nhanh chóng có tick xanh nhất, nào let's go!

# Chuẩn bị Project
Đầu tiên chúng ta cần có Project để áp dụng unit test, ở đây mình đã tạo sẵn 1 project demo, các bạn có thể áp dụng ngay trên project hiện tại của mình hoặc tải về từ Github của mình nhé.

