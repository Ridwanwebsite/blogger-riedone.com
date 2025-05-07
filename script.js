        // Ketika halaman dimuat
        document.addEventListener('DOMContentLoaded', function () {
            const articlesContainer = document.getElementById('articles-container');

            // Ambil artikel dari localStorage
            let articles = [];
            if (localStorage.getItem('articles')) {
                articles = JSON.parse(localStorage.getItem('articles'));
            }

            // Tampilkan artikel di halaman
            articles.forEach(function (article) {
                displayArticle(article);
            });

            // Fungsi untuk menampilkan artikel
            function displayArticle(article) {
                const articleElement = document.createElement('article');
                articleElement.classList.add('article');
                articleElement.innerHTML = `
                    <h3>${article.title}</h3>
                    <p>${article.content}</p>
                    <a href="https://www.kompas.com/jawa-barat/read/2025/05/06/120723888/program-pendidikan-militer-siswa-sma-di-jabar-selama-14-hari-bukan-6" class="btn">Baca Artikel</a>
                `;
                articlesContainer.appendChild(articleElement);
            }
        });

document.addEventListener('DOMContentLoaded', function () {
    const articleForm = document.getElementById('article-form');
    const articlesSection = document.querySelector('.articles');

    // Menangani submit form untuk menambahkan artikel baru
    articleForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Mengambil data dari form
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;

        // Membuat objek artikel
        const article = {
            title: title,
            content: content
        };
        // Menampilkan alert
        showAlert();

        // Mengosongkan form
        articleForm.reset();

        // Menyimpan artikel ke localStorage
        saveArticle(article);

        displayArticles(); 
    });

    // Fungsi untuk menyimpan artikel ke localStorage
    function saveArticle(article) {
        let articles = [];
        if (localStorage.getItem('articles')) {
            articles = JSON.parse(localStorage.getItem('articles'));
        }
        articles.push(article);
        localStorage.setItem('articles', JSON.stringify(articles));
    }

    // Fungsi untuk menampilkan alert
    function showAlert() {
        alert('Artikel berhasil ditambahkan!');
    }
});


document.addEventListener('DOMContentLoaded', function () {
    // Your existing JavaScript code here

    // Function to display articles in the table
    function displayArticles() {
        const articleList = document.getElementById('article-list');
        articleList.innerHTML = ''; // Clear existing content

        // Retrieve articles from localStorage
        let articles = JSON.parse(localStorage.getItem('articles')) || [];

        // Iterate through articles and append rows to the table
        articles.forEach(function (article, index) {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${article.title}</td>
                <td>${article.content}</td>
                <td><button class="delete-btn" data-index="${index}">Delete</button></td>
            `;
            articleList.appendChild(row);
        });
    }

    // Initial display of articles
    displayArticles();

     // Event listener to handle article deletion
        document.getElementById('article-list').addEventListener('click', function (event) {
        if (event.target.classList.contains('delete-btn')) {
            const index = event.target.dataset.index;
            deleteArticle(index);
        }
    });

    // Function to delete article from localStorage and update table
    function deleteArticle(index) {
        let articles = JSON.parse(localStorage.getItem('articles')) || [];
        articles.splice(index, 1);
        localStorage.setItem('articles', JSON.stringify(articles));
        displayArticles(); // Refresh table
    }
    
});