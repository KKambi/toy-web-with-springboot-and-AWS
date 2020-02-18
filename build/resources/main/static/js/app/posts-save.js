import { $ } from '/js/module/dom-module.js';

const postsSave = {
    init: function(){
        const _this = this;

        const btnSave = $("btn-save");
        btnSave.addEventListener("click", () => {
            _this.save();
        })
    },
    save : () => {
        const data = {
            title: $("title").value,
            author: $("author").value,
            content: $("content").value,
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

postsSave.init();