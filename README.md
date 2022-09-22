# Example integration API SWAPI with serverless API

## Usage

### Deployment

1. Install dependencies with:

```
npm install
```

2. Then deploy:

```
serverless deploy
```

### Local development

1. Install dependencies with:

```
npm install
```

2. Install dynamodb local

```
sls dynamodb install
```

3. Run and start to test apis

```
sls offline start
```

## Features

- **DynamoDB**
- **Express**
- **Serverless**


## API Endpoints

List of available routes:

**Vehicle routes**:\
`GET /vehicle/` - Get all vehicles in DynamoDB\
`POST /vehicle/` - Save vehicle in DynamoDB\
`GET /vehicle/:id` - Get specify vehicle\

**SWAPI routes**:\
`GET /swapi/vehicles` - Get vehicles of SWAPI\


### **API POSTMAN DOCUMENTACION / EXAMPLES**

https://documenter.getpostman.com/view/11308127/2s7ZE1PRw9