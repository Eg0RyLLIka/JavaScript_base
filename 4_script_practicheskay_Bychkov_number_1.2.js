'use strict';

// a)

//e5
function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
};

Post.prototype.edit = function () {
    this.text += prompt('Введите текст');
};

let value = new Post(prompt('Введите автора: '), prompt('Введите текст: '),
    (`${parseInt(prompt('Введите год: '))}-${parseInt(prompt('Введите месяц: '))}-${parseInt(prompt('Введите день: '))}`).toDateString());

//e6
class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit() {
        this.text += prompt('Введите текст');
    }

};

let value = new Post(prompt('Введите автора: '), prompt('Введите текст: '),
    (`${parseInt(prompt('Введите год: '))}-${parseInt(prompt('Введите месяц: '))}-${parseInt(prompt('Введите день: '))}`).toDateString());


// b)

//e5
function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
};

AttachedPost.prototype = Object.create(Post.prototype);

AttachedPost.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
};

//e6
class AttachedPost {
    constructor(author, text, date) {
        Post.call(this, author, text, date);
        this.highlighted = false;
    }

    makeTextHighlighted() {
        this.highlighted = true;
    }
};