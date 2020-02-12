let index = {
    init: function(){
        const _this = this;
        const btnSave = document.getElementById("btn-save");
        btnSave.addEventListener("click", () => {
            _this.save();
        })
    },
    save : () => {
        const data = {
            title: document.getElementById("title").value,
            author: document.getElementById("author").value,
            content: document.getElementById("content").value,
        }

        fetch("/api/v1/posts", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
        })
        .then((res) => {
            return res.json();
        })
        .then((json) => {
            alert("글이 등록되었습니다.");
            window.location.href = "/";
        })
        .catch((err) => {
            alert(JSON.stringify(err));
        })
    }
}

index.init();