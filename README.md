# DigitalOcean SSH Key Manager

## Overview

DigitalOcean SSH Key Manager is a Node.js script designed to manage SSH keys associated with your DigitalOcean account. This script retrieves a list of all SSH keys from the DigitalOcean API and deletes all keys except the one named "development". This can be particularly useful for maintaining a clean and organized set of SSH keys in your account.

## Features

- **Fetch SSH Keys**: Retrieve all SSH keys from your DigitalOcean account.
- **Conditional Deletion**: Delete all SSH keys except those named "development".
- **Easy to Use**: Simple setup and execution with minimal configuration required.

## Prerequisites

- Node.js (version 12.x or later)
- npm (version 6.x or later)
- A valid DigitalOcean API token

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/jdnielss/digitalocean-ssh-key-manager.git
    cd digitalocean-ssh-key-manager
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

## Configuration

1. Open the `index.js` file.
2. Replace `'your_digitalocean_token_here'` with your actual DigitalOcean API token.

## Usage

Run the script using npm:
```sh
npm start
