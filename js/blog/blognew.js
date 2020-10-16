//字数统计
$("#id_title").on("keyup input",function(){
    titleCheck();
});

function titleCheck(){
    var blog_title = $("#id_title").val();
    if(blog_title.length>=128){
        $("#id_title").val(blog_title.substring(0,128));
        $("#titleLen").css("color","red");
        $("#titleLen").text("128");
    }else{
        $("#titleLen").css("color","#000");
        $("#titleLen").text(blog_title.length);
    }
}

function submit() {
    console.log("进到提交函数");
    var author = window.userId;
    var title = $("#id_title").val();
    var content = $("#id_content").val();
    var userId = $("#user_id").text();
    var data = {
        "author": userId,
        "title": title,
        "content": content
    };

    $.ajax({
        url: "/blog/new/",
        method: "POST",
        data: data,
        dataType:"json",
        async: false,
        success:function (result) {
            if(result.status == "200"){
                window.location.href = "/blog/" + result.blog_id;
            }
        },
        error: function (err) {
            console.log("发表失败")
        }
    })
}