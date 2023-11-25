"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const API_URL = 'https://jsonplaceholder.typicode.com/posts';
function getPosts() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield fetch(API_URL)
            .then((response) => response.json())
            .then((result) => result)
            .catch(() => new Error('Something went wrong'));
    });
}
function generatePosts() {
    return __awaiter(this, void 0, void 0, function* () {
        const postsContainer = document.getElementById('posts__container');
        const posts = yield getPosts();
        if (postsContainer) {
            postsContainer.innerHTML = posts
                .map((post) => `<article class="posts__article">
            <h5>${post.title}</h5>
            <p>${post.body}</p>
           </article>`)
                .join('\n');
        }
    });
}
generatePosts();
