# fnct-news

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

This project scrapes news from the [Fukui National College of Technology](https://www.fukui-nct.ac.jp/) website and publishes it as an open CSV dataset.

## 🌐 Live Demo

A live, searchable, and sortable view of the dataset is available via GitHub Pages:

➡️ **[https://code4fukui.github.io/fnct-news/](https://code4fukui.github.io/fnct-news/)**

## 📊 Dataset

The dataset is a CSV file containing all scraped news articles, updated automatically.

- **File:** [`fnct-news.csv`](fnct-news.csv)
- **Source:** [Fukui National College of Technology News](https://www.fukui-nct.ac.jp/news/)
- **Update Frequency:** Hourly

### Data Fields
- `url`: The URL of the news article.
- `date`: The publication date (YYYY.MM.DD).
- `category`: The news category.
- `title`: The title of the news article.

## ✨ Features

- **Data Scraping**: Fetches news from the Fukui National College of Technology website.
- **Persistent Storage**: Intelligently adds only new articles to the existing CSV, preserving historical data.
- **Automation**: Automatically updates the dataset hourly using GitHub Actions.
- **CI/CD**: Includes linting and testing workflows for code quality.

## 🚀 Development

This project uses [Deno](https://deno.land/) for all scripting.

### Requirements
- [Deno](https://deno.land/) v1.x

### Running the Scraper Locally
To run the full scraping and update process:
```sh
deno run -A fetchNewsAll.js
```

### Running Tests
The repository includes tests for the scraping logic.
```sh
deno test -A --unstable
```

## 🙏 Attribution
- Data processing by [Code for FUKUI](https://code4fukui.github.io/).
- The web application (`index.html`) is CC BY by [Taisuke Fukuno](https://fukuno.jig.jp/3333).

## 📄 License
MIT License — see [LICENSE](LICENSE).