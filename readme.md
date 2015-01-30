## Ember Twitter Clone using Ember CLI

Getting it going:

```
cd backend
rake db:create
rake db:migrate
rails s

cd ..
cd frontend
ember serve --proxy http://localhost:3000/
```

Go to localhost:4200
