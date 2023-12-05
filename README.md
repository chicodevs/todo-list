# NodeJS RESTful API with Vanilla JavaScript Front-end

![NodeJS API by Francisco-gui](https://nodejs.org/static/images/logo.svg)

This project is a personal endeavor to build a full application without frameworks or libraries. It consists of a Node.js REST API connected to a MYSQL relational database and a Vanilla JavaScript front-end.

## Features

- **Node.js REST API**: Built from scratch without external frameworks.
- **MYSQL Database**: Utilizing a relational database to manage tasks.
- **Vanilla JavaScript Front-end**: Interface designed using pure JavaScript.

## Setup Instructions

### API Setup

1. **Clone Repository**:

    ```bash
    git clone https://github.com/Francisco-gui/todo-list.git
    cd back-vanilla
    ```

2. **Database Configuration**:

    - Create a new database with the following schema:

    ```sql
    CREATE TABLE todo (
        id MEDIUMINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        task VARCHAR(255),
        done TINYINT(1)
    );
    ```

    - Create a `.env` file for MySQL connection:

    ```env
    DATABASE_USR=your_user
    DATABASE_HOST=your_host
    DATABASE_NAME=table_name
    DATABASE_PWD=your_pwd
    ```

3. **Start the Server on PORT 4000**:

    ```bash
    npm run start
    ```

    Test endpoints using [Insomnia](https://insomnia.rest/) with the following routes:

    ```http
    GET      /
    POST     /
    PUT      /
    DELETE   /
    ```

### Front-end Setup

1. **Navigate to Front-end**:

    ```bash
    cd front-vanilla
    ```

2. **Preview the Interface**:

    - Open `index.html` in your preferred browser.
    - Alternatively, use [Live Server Extension](https://github.com/ritwickdey/vscode-live-server-plus-plus) in [VSCode](https://code.visualstudio.com/).

Feel free to explore the project and contribute!
