var posts=["posts/57392/","posts/51644/","posts/31546/","posts/56854/","posts/20148/","posts/18932/","posts/20384/","posts/45529/","posts/36284/","posts/14809/","posts/19000/","posts/25991/","posts/57751/","posts/51753/","posts/16107/","posts/63534/","posts/42695/","posts/5995/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};