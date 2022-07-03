# How to run this thing

```npm install```
and then
```npm run start```

or you can build a docker image, assuming you are in the root directory run:
```
docker build -t tourist:web .
docker run -dp 3001:3000 -t tourist:web
```
where 3000 is default React port and 3001 exposed docker port