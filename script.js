const app = Vue.createApp({
    data() {
        return {
            title: 'Ready Player One',
            author: 'Ernest Cline',
            cover: 'http://books.google.com/books/content?id=rWuODQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
            isbn: '9780307887443'
        }
    },
    methods: {
        async get() {
            const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.isbn}+isbn&maxResults=1`);
            const results = await res.json();
            console.log(results);
            this.title = results.items[0].volumeInfo.title;
            this.author = results.items[0].volumeInfo.authors[0];
            this.cover = results.items[0].volumeInfo.imageLinks.thumbnail;
        },
        update() {
            this.isbn = document.querySelector('#input').value;
            console.log(this.isbn);
            document.querySelector('#input').value = '';
            this.get();

        }
    }
});

app.mount('#app');