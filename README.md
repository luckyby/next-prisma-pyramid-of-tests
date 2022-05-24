
<img src="public/server-ui.png">
-----

API routes can be accessed on endpoints:

http://localhost:3000/api/hello

http://localhost:3000/api/hello/lastname (for example lastname = Pan)

http://localhost:3000/api/helloPan

http://localhost:3000/api/weather

http://localhost:3000/api/weather/cityname (for example cityname = Lviv)

Server has the next pages:

http://localhost:3000/about

http://localhost:3000/weather

-----



### Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see 
the result.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed 
on http://localhost:3000/api/<end-point>, where <end-point> is any exist end point of API. 
For example for `api/hello.js` API routes is  [http://localhost:3000/api/hello](http://localhost:3000/api/hello).

The `pages/api` directory is mapped to `/api/*`. Files in this directory are 
treated as [API routes](https://nextjs.org/docs/api-routes/introduction) 
instead of React pages.


