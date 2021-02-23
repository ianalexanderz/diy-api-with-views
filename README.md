# DIY API... now with ejs!

## Overview
Your mission is to add views onto a diy-api. The end product will be a server that serves html files instead of json data, so that we can interact with it via a web browser like chrome rather than postman.

This repo contains the working diy-api that we made as we reviewed the deliverable. This will be our starter code.

## Getting Set Up
1. Fork and clone this repo
1. `npm install`
1. If you're on linux or windows, add your db username and password to `config/config.json`
1. `sequelize db:create`, `sequelize db:migrate`, `sequelize db:seed:all`
1. Start the server and interact with each endpoint via postman to make sure everything works

## Setting up ejs



- get ejs installed, set the view engine
- serve static files to send your css
- set up a layout
- create a views folder, subfolders for each resource

## Checklist

- each existing GET route renders a file
- each non-GET route redirects to a get route

- new routes: GET /resources/new, and GET /resources/:id/edit. each renders a form