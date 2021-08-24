---
published: false
tag: Git
excerpt: Loạt bài về sử dụng Git trong trường Đại học của mình.
coverImage: https://res.cloudinary.com/dcrhhc6qr/image/upload/v1627121052/projection_fmgzuw.png
date: 'Sat 24th Jul, 2021'
author:
  name: Phat Nguyen
  twitter: 'https://www.facebook.com/Senlucifer/'
  picture: ''
ogImage:
  url: https://res.cloudinary.com/dcrhhc6qr/image/upload/v1629769967/blog-4-thumb_dummt0.png
title: Git in University - Giới thiệu
---

Bài viết này nằm trong loạt bài về sử dụng git trong trường Đại học của mình nhằm hướng dẫn cho những bạn mới bước chân vào học IT nhưng chưa có kiến thức nền tảng về Git có thể hiểu và sử dụng Git một cách hiệu quả.

# Lời đầu

Trước khi vào trường đại học, mình không có nhiều kiến thức về IT. Trong năm đầu tiên, sau những môn nền tảng lý thuyết là một vài môn yêu cầu có sản phẩm cuối kỳ (thường là 1 project có các chức năng cụ thể và làm theo nhóm). Chuyện sẽ không có gì đáng kể nếu trong môn đầu tiên mình và nhóm vẫn chưa biết cách dùng Git (hoặc bất cứ một hệ thống quản lý sourcecode nào), ban đầu project còn khá nhỏ và đơn giản nên tụi mình quyết định làm cách "code theo lượt", tức là bạn A code chức năng quản lý Người dùng xong rồi quăng source qua cho bạn B code quản lý Sách, dần dần source code càng bự lên thì nhóm gặp phải 1 loạt các vấn đề:

- Bạn C làm cực kì chậm làm bạn D và E ngồi không chả làm được phần của mình
- Khi bạn D làm nửa chừng cảm thấy chức năng bạn A có vẻ không ổn/ thiếu thứ cần thiết để bạn D làm tiếp
- Bạn B đọc yêu cầu và thấy chetmia chưa làm hết chức năng, thế là mượn ngay source code (mà D đang code nửa vời) về sửa, nhưng run code fail sml vì tính năng của D liên quan đến những bước đầu tiên khi chạy ứng dụng
- Bạn A chỉnh sửa xong chức năng rồi quăng cho D làm tiếp, lúc này D lấy source của A làm 1 2 ngày thì B hú để quăng source mà B chỉnh phần mình qua, thế là 3 đứa A B D nhìn nhau và chả biết nên ghép code vào từ đâu và E thì vẫn ngồi ngó trong khi đã quá 2/3 time (hay nói theo E là deadline dí cmnr tụi bây ơi cho tao code cái coiiii)

Vâng, và khi deadline chỉ còn cách 1 ngày thì cả đám quyết định ngồi chửi nhau thay vì làm tiếp =)) Nói thế chứ bẩm sinh đều là những "thiên tài chắp vá" nên cuối cùng cả đám cũng ráng overnight ghép từng dòng code lại, chạy được là mừng rớt nước mắt 🤣

Đấy nếu bạn có ý định làm như cách trên thì bỏ nhanh đi và cùng xem cách tiêu chuẩn mà nhà nhà đều tin dùng nào!

# Tại sao nên dùng Git

Git là một hệ thống dùng để quản lý source code rất phổ biến (mình chỉ tóm gọn theo cách hiểu chứ đây không phải khái niệm chuẩn nha), và mục tiêu của nó là giúp chúng ta quản lí được source code và cả quá trình phát triển phần mềm một cách tối ưu và hiệu quả. Bật mí thêm là nếu bạn ra trường và apply job là dev thì hầu hết đều sẽ hỏi kiến thức về Git đấy nhá, vậy mà nghịch lý là ở trường không ai dạy về Git hoặc hệ thống nào tương tự, dữ lắm là nói về Git và cho các bạn tự làm rồi 😥 Mình cũng thấy nhiều team dùng Git sai cách và vô tình biến Git thành một phần của đề bài hơn là cách để giải quyết. Vậy phải dùng Git sao? Đừng lo mình đã tổng hợp hết ở series này rồi :smile:

# Tạm kết

Đây là bài mở đầu của series, những bài tiếp theo mình sẽ cố gắng cover những kiến thức cần thiết (thực tế nhất) mà mình từng mắc phải và cách handle tốt hơn mà sau này mình mới nhận ra. See you next post!



