import { $ } from '../module/dom-module.js';

const postsUpdate = {
    init: function(){
        const _this = this;

        const btnUpdate = $("btn-update")
        btnUpdate.addEventListener("click", () => {
            _this.update();
        })
    },
    update : () => {
        const data = {
            title: $("title").value,
            content: $("content").value,
        }

        const id = $("id").value;

        fetch(`/api/v1/posts/${id}`, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
        })
        .then((res) => {
            return res.json();
        })
        .then((json) => {
            alert("글이 수정되었습니다.");
            window.location.href = "/";
        })
        .catch((err) => {
            alert(JSON.stringify(err));
        })
    }
}

postsUpdate.init();