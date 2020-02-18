import { $ } from '../module/dom-module.js';

const postsDelete = {
    init: function() {
        const _this = this;

        const btnDelete = $("btn-delete");
        btnDelete.addEventListener("click", () => {
            _this.delete();
        })
    },

    async delete: () => {
        const id = $("id").value;

        try {
            const res = await fetch(`/api/v1/posts/${id}`, {
                method: "DELETE",
            });
            alert("글이 삭제되었습니다.");
            window.location.href = "/";
        } catch (err) {
            alert(err);
        }
    }
}

postsDelete.init();