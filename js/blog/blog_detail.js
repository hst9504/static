console.log("走到js")
$("body").on("click", ".article-delete-btn", function(event) {
    event.preventDefault();
    event.stopPropagation();
    userId = $("#user_id").text();
    authorId = $(".article_author_2").text();
    blogId = window.location.href.split("/")[window.location.href.split("/").length-1];
    data = {
        "userId": userId,
        "blogId": blogId,
        "option": "delete"
    };
    if (userId != authorId){
        alert("只有作者本人才可删除")
    }else{
        $.ajax({
            url: "/blog/option/",
            method: "post",
            data: data,
            async: false,
            dataType: 'json',
            success: function (data) {
                if (data.status_code==200 & data.msg=="操作成功"){
                    window.location.href = "/"
                }else{
                    alert("删除失败")
                }
            },
            error: function (error) {
                alert("删除失败")
            }
        })
    }
});


