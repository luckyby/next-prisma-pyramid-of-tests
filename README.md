## Welcome to server for testing based on next.js



-----

API routes can be accessed on endpoints:

http://localhost:3000/api/hello

http://localhost:3000/api/hello/lastname (for example lastname = Pan)

http://localhost:3000/api/helloPan

http://localhost:3000/api/weather

http://localhost:3000/api/weather/cityname (for example cityname = Lviv)

Server has the next static pages:

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

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js 
- features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out 
[the Next.js GitHub repository](https://github.com/vercel/next.js/) - 
your feedback and contributions are welcome!

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the 
[Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) 
from the creators of Next.js.

Check out our 
[Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
